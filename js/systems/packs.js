// ==========================================================
// Pack System
// ----------------------------------------------------------
// Handles rarity rolls, guarantees, mythic checks, card
// instance creation, daily token claims, and pack opening.
// ==========================================================


// ==========================================================
// Character instance creation
// ==========================================================

function cloneCharacterToCard(template) {
  return {
    instanceId: getNextCardInstanceId(),

    id: template.id,
    characterKey: template.characterKey,
    variantKey: template.variantKey,

    displayName: template.displayName,
    subtitle: template.subtitle || "",
    franchise: template.franchise,
    imagePath: template.imagePath || "",
    imageAlt: template.imageAlt || template.displayName,

    rarity: template.rarity,
    stars: template.stars || CONFIG.RARITIES[template.rarity]?.stars || 1,
    prestige: template.prestige || 1,

    basePower: template.basePower,
    preferredJob: template.preferredJob,
    traits: [...template.traits],
    tags: [...template.tags],
    flavor: template.flavor,

    mythicVariantId: template.mythicVariantId || null,
    alternateOutfits: template.alternateOutfits || [],

    morale: CONFIG.MORALE.STARTING,
    assignedBusinessId: null,
    acquiredAt: Date.now()
  };
}


// ==========================================================
// Rarity helpers
// ==========================================================

function getRarityIndex(rarity) {
  return CONFIG.RARITY_ORDER.indexOf(rarity);
}

function rarityMeetsMinimum(rarity, minimumRarity) {
  if (!minimumRarity) return true;

  return getRarityIndex(rarity) >= getRarityIndex(minimumRarity);
}

function getCharactersByRarity(rarity) {
  return CHARACTERS.filter(character => character.rarity === rarity);
}

function rollRarityFromOdds(odds) {
  const roll = Math.random();
  let cumulative = 0;

  for (const rarity of CONFIG.RARITY_ORDER) {
    const chance = odds[rarity] || 0;
    cumulative += chance;

    if (roll < cumulative) {
      return rarity;
    }
  }

  return "common";
}

function rollRarityWithMinimum(odds, minimumRarity) {
  let rarity = rollRarityFromOdds(odds);
  let safety = 0;

  while (!rarityMeetsMinimum(rarity, minimumRarity) && safety < 100) {
    rarity = rollRarityFromOdds(odds);
    safety += 1;
  }

  if (!rarityMeetsMinimum(rarity, minimumRarity)) {
    return minimumRarity;
  }

  return rarity;
}


// ==========================================================
// Character rolling
// ==========================================================

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
// Mythic hook
// ----------------------------------------------------------
// Placeholder. Later this can convert a rolled card into a
// mythic variant when the base character has mythicVariantId.
// ==========================================================

function maybeApplyMythicUpgrade(card) {
  if (!card) return card;

  if (!card.mythicVariantId) return card;

  if (Math.random() > CONFIG.MYTHIC.ROLL_CHANCE) return card;

  const mythicTemplate = CHARACTERS.find(character => character.id === card.mythicVariantId);

  if (!mythicTemplate) return card;

  return cloneCharacterToCard(mythicTemplate);
}


// ==========================================================
// Pack generation
// ----------------------------------------------------------
// Guarantees are handled by making the final card meet the
// configured guaranteedMinimum rarity.
// ==========================================================

function generatePack(packDef) {
  if (!packDef) {
    console.error("generatePack called without a valid pack definition.");
    return [];
  }

  const results = [];

  for (let i = 0; i < packDef.cardCount; i++) {
    const isFinalCard = i === packDef.cardCount - 1;
    const rarity = isFinalCard && packDef.guaranteedMinimum
      ? rollRarityWithMinimum(packDef.odds, packDef.guaranteedMinimum)
      : rollRarityFromOdds(packDef.odds);

    let card = getRandomCharacterByRarity(rarity);

    if (card) {
      card = maybeApplyMythicUpgrade(card);
      results.push(card);
    }
  }

  return results;
}


// ==========================================================
// Daily token availability
// ==========================================================

function getDailyTokenAvailable() {
  if (!state.freePackLastClaimedAt) return true;

  const elapsedMs = Date.now() - state.freePackLastClaimedAt;
  const resetMs = CONFIG.DAILY.TOKEN_RESET_HOURS * 60 * 60 * 1000;

  return elapsedMs >= resetMs;
}


// ==========================================================
// Daily token claim
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
    saveGame();
    return [];
  }

  state.cards.push(...newCards);

  setRecruitmentHeadline(newCards);

  saveGame();

  return newCards;
}


// ==========================================================
// Free reward packs
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
// Debug helper
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