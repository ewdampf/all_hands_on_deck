// ==========================================================
// Pack System
// ----------------------------------------------------------
// Handles:
// - rarity rolls
// - guaranteed pack contents
// - card instance creation
// - daily token claim
// - spending tokens to open packs
//
// This file does NOT handle rendering or save/load directly,
// except by calling the shared helpers.
// ==========================================================


// ==========================================================
// Character instance creation
// ----------------------------------------------------------
// Converts a static character template into a runtime card
// owned by the player.
// ==========================================================

function cloneCharacterToCard(template) {
  return {
    // Runtime identity
    instanceId: getNextCardInstanceId(),

    // Static character identity
    id: template.id,
    characterKey: template.characterKey,
    variantKey: template.variantKey,

    // Display info
    displayName: template.displayName,
    subtitle: template.subtitle || "",
    franchise: template.franchise,
    imagePath: template.imagePath || "",
    imageAlt: template.imageAlt || template.displayName,

    // Gameplay info
    rarity: template.rarity,
    basePower: template.basePower,
    preferredJob: template.preferredJob,
    traits: [...template.traits],
    tags: [...template.tags],
    flavor: template.flavor,
    acquiredAt: Date.now(),

    // Runtime card state
    morale: CONFIG.MORALE.STARTING,
    assignedBusinessId: null
  };
}


// ==========================================================
// Character pool filtering
// ----------------------------------------------------------
// These helpers retrieve character templates from the global
// character registry.
// ==========================================================

function getCharactersByRarity(rarity) {
  return CHARACTERS.filter(character => character.rarity === rarity);
}

function getRandomCharacterByRarity(rarity) {
  const pool = getCharactersByRarity(rarity);

  if (!Array.isArray(pool) || pool.length === 0) {
    console.error(`No characters found for rarity: ${rarity}`);
    return null;
  }

  const template = pool[Math.floor(Math.random() * pool.length)];
  return cloneCharacterToCard(template);
}


// ==========================================================
// Rarity rolling
// ----------------------------------------------------------
// Used for non-guaranteed cards in a pack.
// ==========================================================

function rollRandomRarity() {
  const roll = Math.random();
  const odds = CONFIG.PACKS.ODDS;

  if (roll < odds.common) return "common";
  if (roll < odds.common + odds.uncommon) return "uncommon";
  if (roll < odds.common + odds.uncommon + odds.rare) return "rare";
  return "ultra";
}


// ==========================================================
// Pack generation
// ----------------------------------------------------------
// Builds a pack from a pack definition in CONFIG.PACKS.
// Guarantees are added first, then the remaining slots are
// filled with rolled cards.
// ==========================================================

function generatePack(packDef) {
  if (!packDef) {
    console.error("generatePack called without a valid pack definition.");
    return [];
  }

  const results = [];

  // --------------------------------------------------------
  // Add guaranteed cards first
  // --------------------------------------------------------
  if (Array.isArray(packDef.guarantees)) {
    packDef.guarantees.forEach(guaranteedRarity => {
      const card = getRandomCharacterByRarity(guaranteedRarity);
      if (card) {
        results.push(card);
      }
    });
  }

  // --------------------------------------------------------
  // Fill remaining slots with rolled rarities
  // --------------------------------------------------------
  while (results.length < packDef.cardCount) {
    const rolledRarity = rollRandomRarity();
    const card = getRandomCharacterByRarity(rolledRarity);

    if (card) {
      results.push(card);
    } else {
      console.error(`Failed to generate card for rolled rarity: ${rolledRarity}`);
      break;
    }
  }

  return results;
}


// ==========================================================
// Daily token availability
// ----------------------------------------------------------
// Determines whether the player may claim another daily token.
// ==========================================================

function getDailyTokenAvailable() {
  if (!state.freePackLastClaimedAt) return true;

  const elapsedMs = Date.now() - state.freePackLastClaimedAt;
  const resetMs = CONFIG.DAILY.TOKEN_RESET_HOURS * 60 * 60 * 1000;

  return elapsedMs >= resetMs;
}


// ==========================================================
// Daily token claim
// ----------------------------------------------------------
// Grants the daily token reward if available.
// ==========================================================

function claimDailyToken() {
  if (!getDailyTokenAvailable()) {
    setHeadline("Daily token unavailable", "Your next free token is not ready yet.");
    return false;
  }

  if (typeof state.tokens !== "number" || Number.isNaN(state.tokens)) {
    state.tokens = 0;
  }

  state.tokens += CONFIG.DAILY.FREE_TOKEN_AMOUNT;
  state.freePackLastClaimedAt = Date.now();

  setHeadline("Daily token claimed", `You received ${CONFIG.DAILY.FREE_TOKEN_AMOUNT} token.`);
  saveGame();
  return true;
}


// ==========================================================
// Pack opening
// ----------------------------------------------------------
// Main public entry point for buying/opening a pack by key.
// Examples:
// - openPackByType("BASIC")
// - openPackByType("UNCOMMON")
// - openPackByType("RARE")
// ==========================================================

function openPackByType(packKey) {
  const packDef = CONFIG.PACKS[packKey];

  if (!packDef) {
    console.error(`Invalid pack key: ${packKey}`);
    setHeadline("Pack error", "That pack type does not exist.");
    return [];
  }

  if (state.tokens < packDef.tokenCost) {
    setHeadline("Not enough tokens", `You need ${packDef.tokenCost} tokens for ${packDef.name}.`);
    return [];
  }

  state.tokens -= packDef.tokenCost;

  const newCards = generatePack(packDef);

  if (!Array.isArray(newCards) || newCards.length === 0) {
    setHeadline("Pack error", "The pack failed to generate any characters.");
    return [];
  }

  state.cards.push(...newCards);

  setHeadline(
    "Fresh recruits arrive",
    `${newCards.map(card => card.displayName).join(", ")} joined your roster.`
  );

  saveGame();
  return newCards;
}


// ==========================================================
// Free reward packs
// ----------------------------------------------------------
// Used for things like business purchases.
// ==========================================================

function grantFreePack(packKey = "BASIC") {
  const packDef = CONFIG.PACKS[packKey];

  if (!packDef) {
    console.error(`Invalid free pack key: ${packKey}`);
    return [];
  }

  const newCards = generatePack(packDef);

  if (!Array.isArray(newCards) || newCards.length === 0) {
    console.error(`Free pack ${packKey} failed to generate cards.`);
    return [];
  }

  state.cards.push(...newCards);
  saveGame();

  return newCards;
}


// ==========================================================
// Development/debug helper
// ----------------------------------------------------------
// Useful to quickly verify that packs are actually producing
// cards and that the character pool is loaded.
// ==========================================================

function debugGeneratePack(packKey = "BASIC") {
  const packDef = CONFIG.PACKS[packKey];

  if (!packDef) {
    console.error(`debugGeneratePack: invalid pack key ${packKey}`);
    return;
  }

  const pack = generatePack(packDef);

  console.log(`Debug pack generated (${packKey}):`, pack);
}