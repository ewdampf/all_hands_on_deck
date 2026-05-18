// ==========================================================
// Pack System
// ----------------------------------------------------------
// Handles rarity rolls, guarantees checks, card
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

    alternateOutfits: template.alternateOutfits || [],

    morale: CONFIG.MORALE.STARTING,
    assignedBusinessId: null,
    acquiredAt: Date.now()
  };
}

// Checking if card matches focus
function cardMatchesFocus(card, focus) {
  if (!focus?.enabled) return true;

  switch (focus.type) {
    case "franchise":
      return card.franchise === focus.target;

    case "tag":
      return card.tags.includes(focus.target);

    case "species":
      return card.tags.includes(focus.target);

    case "job":
      return card.preferredJob === focus.target;

    default:
      return true;
  }
}
function applyPackFocusToCard(card, rarity) {
  const focus = state.packFocus;

  if (!focus?.enabled) return card;

  if (CONFIG.PACK_FOCUS.EXCLUDED_RARITIES.includes(rarity)) {
    return card;
  }

  if (cardMatchesFocus(card, focus)) {
    return card;
  }

  let rerollsRemaining = focus.rerolls;

  while (rerollsRemaining > 0) {
    const rerolled = getRandomCharacterByRarity(rarity);

    if (cardMatchesFocus(rerolled, focus)) {
      rerolled.focusMatched = true;
      return rerolled;
    }

    card = rerolled;
    rerollsRemaining--;
  }

  return card;
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
      card = applyPackFocusToCard(card, rarity);
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

  addTokens(
    CONFIG.DAILY.FREE_TOKEN_AMOUNT,
    "Daily Token Earned",
    `You claimed your daily reward and received ${CONFIG.DAILY.FREE_TOKEN_AMOUNT} token${CONFIG.DAILY.FREE_TOKEN_AMOUNT === 1 ? "" : "s"}.`,
    "daily"
  );

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

  const focusCost = getPackFocusCost();

  if (focusCost > 0 && state.credits < focusCost) {
    setHeadline(
      "Not enough credits",
      `Recruitment Focus requires ${focusCost} credits.`,
      "warning"
    );
    return [];
  }
  const isFirstEverPack = !state.firstPackOpened;

  state.tokens -= packDef.tokenCost;
  if (focusCost > 0) {
    state.credits -= focusCost;
  }
  const newCards = generatePack(packDef);

  if (!Array.isArray(newCards) || newCards.length === 0) {
    setHeadline("Pack error", "The pack failed to generate any characters.");
    saveGame();
    return [];
  }

  state.cards.push(...newCards);

  if (isFirstEverPack) {
    state.firstPackOpened = true;
    state.firstPackGuidancePending = true;
    state.economyStarted = false;
  }

  checkPackMilestones(newCards);

  setRecruitmentHeadline(newCards);

  saveGame();

  return newCards;
}

function getPackFocusCost() {
  const focus = state.packFocus;

  if (!CONFIG.PACK_FOCUS?.ENABLED) return 0;
  if (!focus?.enabled) return 0;
  if (!focus.type || !focus.target) return 0;
  if (!focus.rerolls || focus.rerolls <= 0) return 0;

  return CONFIG.PACK_FOCUS.REROLL_COSTS[focus.rerolls] || 0;
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

  const isFirstEverPack = !state.firstPackOpened;

  const wasFocusEnabled = state.packFocus?.enabled;
  if (state.packFocus) state.packFocus.enabled = false;

  const newCards = generatePack(packDef);

  if (state.packFocus) state.packFocus.enabled = wasFocusEnabled;
 
  if (!Array.isArray(newCards) || newCards.length === 0) {
    console.error(`Free pack ${packKey} failed to generate cards.`);
    return [];
  }

  state.cards.push(...newCards);

  if (isFirstEverPack) {
    state.firstPackOpened = true;
    state.firstPackGuidancePending = true;
    state.economyStarted = false;
  }

  checkPackMilestones(newCards);
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

// special packs
// ==========================================================
// Special Franchise Packs
// ==========================================================

function getAvailableFranchisesForSpecialPacks() {
  return [...new Set(CHARACTERS.map(character => character.franchise))]
    .filter(Boolean)
    .sort();
}

function needsNewDailySpecialPack() {
  if (!state.dailySpecialPack?.franchise || !state.dailySpecialPack?.selectedAt) {
    return true;
  }

  const elapsedMs = Date.now() - state.dailySpecialPack.selectedAt;
  const resetMs = 24 * 60 * 60 * 1000;

  return elapsedMs >= resetMs;
}

function chooseDailySpecialPackFranchise() {
  const franchises = getAvailableFranchisesForSpecialPacks();

  if (franchises.length === 0) return null;

  const franchise = franchises[Math.floor(Math.random() * franchises.length)];

  state.dailySpecialPack = {
    franchise,
    selectedAt: Date.now()
  };

  saveGame();

  return franchise;
}

function getDailySpecialPackFranchise() {
  if (needsNewDailySpecialPack()) {
    return chooseDailySpecialPackFranchise();
  }

  return state.dailySpecialPack.franchise;
}

function getCharactersByFranchiseAndRarity(franchise, rarity) {
  return CHARACTERS.filter(character =>
    character.franchise === franchise &&
    character.rarity === rarity
  );
}

function getRandomCharacterByFranchiseAndRarity(franchise, rarity) {
  const pool = getCharactersByFranchiseAndRarity(franchise, rarity);

  if (pool.length === 0) {
    console.warn(`No ${rarity} characters found for franchise: ${franchise}`);
    return getRandomCharacterByRarity(rarity);
  }

  const template = pool[Math.floor(Math.random() * pool.length)];
  return cloneCharacterToCard(template);
}

function rollSpecialFinalRarity() {
  return rollRarityFromOdds(CONFIG.PACKS.SPECIAL_FRANCHISE.finalCardOdds);
}

function generateSpecialFranchisePack(franchise) {
  const packDef = CONFIG.PACKS.SPECIAL_FRANCHISE;
  const results = [];

  packDef.guaranteedCards.forEach(rarity => {
    let card = getRandomCharacterByFranchiseAndRarity(franchise, rarity);
    if (card) {
      results.push(card);
    }
  });

  const finalRarity = rollSpecialFinalRarity();
  let finalCard = getRandomCharacterByFranchiseAndRarity(franchise, finalRarity);

  if (finalCard) {
    results.push(finalCard);
  }

  return results;
}

function openDailySpecialFranchisePack() {
  const franchise = getDailySpecialPackFranchise();
  const packDef = CONFIG.PACKS.SPECIAL_FRANCHISE;

  if (!franchise) {
    setHeadline("Special pack unavailable", "No franchise is available for today’s special pack.", "warning");
    return [];
  }

  if (state.tokens < packDef.tokenCost) {
    setHeadline("Not enough tokens", `You need ${packDef.tokenCost} tokens for today’s ${franchise} pack.`, "warning");
    return [];
  }

  const isFirstEverPack = !state.firstPackOpened;

  state.tokens -= packDef.tokenCost;

  const newCards = generateSpecialFranchisePack(franchise);

  if (!Array.isArray(newCards) || newCards.length === 0) {
    setHeadline("Special pack error", "The special pack failed to generate cards.", "warning");
    saveGame();
    return [];
  }

  state.cards.push(...newCards);

  if (isFirstEverPack) {
    state.firstPackOpened = true;
    state.firstPackGuidancePending = true;
    state.economyStarted = false;
  }

  setHeadline(
    `${franchise} Pack Opened`,
    `You opened today's special ${franchise} pack.`,
    "good"
  );

  checkPackMilestones(newCards);
  saveGame();

  return newCards;
}