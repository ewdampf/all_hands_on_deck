// ==========================================================
// Economy System
// ----------------------------------------------------------
// Handles:
// - morale-based output modifiers
// - per-card output calculation
// - same-type cannon fodder bonuses
// - business prestige calculation
// - business income calculation
//
// This file should contain the "math layer" of the game.
// ==========================================================


// ==========================================================
// Morale output modifier
// ----------------------------------------------------------
// Converts morale into an output multiplier adjustment.
// ==========================================================

function getMoraleOutputModifier(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) {
    return CONFIG.MORALE.HIGH_MODIFIER;
  }

  if (morale >= 50) {
    return CONFIG.MORALE.MID_MODIFIER;
  }

  if (morale >= CONFIG.MORALE.LOW_THRESHOLD) {
    return CONFIG.MORALE.LOW_MODIFIER;
  }

  return CONFIG.MORALE.VERY_LOW_MODIFIER;
}


// ==========================================================
// Same-type cannon fodder helpers
// ----------------------------------------------------------
// Cannon fodder bonuses now depend on matching unit type,
// not just any grunt being present.
// ==========================================================

function getMatchingCannonFodderCount(card, businessId) {
  const assignedCards = getAssignedCardsForBusiness(businessId);

  return assignedCards.filter(otherCard =>
    otherCard.traits.includes(TRAITS.CANNON_FODDER) &&
    otherCard.id === card.id
  ).length;
}

function getSameTypeCannonFodderBonus(card, businessId) {
  if (!card.traits.includes(TRAITS.CANNON_FODDER)) {
    return 0;
  }

  const matchingTypeCount = getMatchingCannonFodderCount(card, businessId);

  return Math.min(
    CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS_CAP,
    Math.max(0, matchingTypeCount - 1) * CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS
  );
}


// ==========================================================
// Output helper: off-role penalty
// ----------------------------------------------------------
// Efficiency upgrades can slightly soften bad-fit penalties.
// ==========================================================

function getOffRolePenaltyMultiplier(businessId) {
  const businessState = getBusinessState(businessId);

  let penalty = CONFIG.OUTPUT.OFF_ROLE_OUTPUT_PENALTY;

  if (businessState && businessState.efficiencyLevel >= 2) {
    penalty += CONFIG.MORALE.EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF;
  }

  return penalty;
}


// ==========================================================
// Output helper: business-level multipliers
// ----------------------------------------------------------
// Combines tier, tags, advertising, and upgrades.
// ==========================================================

function getBusinessTierIncomeMultiplier(businessId) {
  const businessDef = getBusinessDef(businessId);
  if (!businessDef) return 1;

  return getTierDef(businessDef.tier).baseIncomeMultiplier;
}

function getBusinessEfficiencyMultiplier(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return 1;

  return 1 + (
    businessState.efficiencyLevel * CONFIG.UPGRADES.EFFICIENCY_OUTPUT_BONUS_PER_LEVEL
  );
}


// ==========================================================
// Per-card output calculation
// ----------------------------------------------------------
// This is the main worker productivity formula.
// ==========================================================

function calculateCardOutput(card, businessId) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  if (!card || !businessDef || !businessState) return 0;

  let output = card.basePower;

  // --------------------------------------------------------
  // Morale impact
  // --------------------------------------------------------
  output *= (1 + getMoraleOutputModifier(card.morale));

  // --------------------------------------------------------
  // Cannon fodder same-type grouping bonus
  // --------------------------------------------------------
  if (card.traits.includes(TRAITS.CANNON_FODDER)) {
    output *= 1 + getSameTypeCannonFodderBonus(card, businessId);

    if (businessId === CONFIG.BUSINESS_IDS.MOISTURE_FARM) {
      output *= 1 + CONFIG.OUTPUT.CANNON_FODDER_FARM_BONUS;
    }
  }

  // --------------------------------------------------------
  // Hero bonus / low-morale hero penalty
  // --------------------------------------------------------
  if (card.traits.includes(TRAITS.HERO)) {
    output *= 1 + CONFIG.OUTPUT.HERO_OUTPUT_MODIFIER;

    if (card.morale < CONFIG.MORALE.LOW_THRESHOLD) {
      output *= CONFIG.OUTPUT.HERO_LOW_MORALE_PENALTY;
    }
  }

  // --------------------------------------------------------
  // Support bonus
  // --------------------------------------------------------
  if (card.traits.includes(TRAITS.SUPPORT)) {
    output *= 1 + CONFIG.OUTPUT.SUPPORT_OUTPUT_MODIFIER;
  }

  // --------------------------------------------------------
  // Wrong-job penalty
  // --------------------------------------------------------
  if (
    card.preferredJob !== businessDef.jobType &&
    card.preferredJob !== JOB_TYPES.HEROIC
  ) {
    output *= getOffRolePenaltyMultiplier(businessId);
  }

  // --------------------------------------------------------
  // Business-level multipliers
  // --------------------------------------------------------
  output *= getBusinessTierIncomeMultiplier(businessId);
  output *= getBusinessRevenueMultiplierFromTags(businessDef);
  output *= getBusinessEfficiencyMultiplier(businessId);
  output *= getAdMultiplier(businessState);

  return output;
}


// ==========================================================
// Prestige calculation
// ----------------------------------------------------------
// Prestige is derived from heroes, ultras, and high morale,
// then modified by tier + business tags.
// ==========================================================

function calculateBusinessPrestige(businessId) {
  const businessDef = getBusinessDef(businessId);
  const cards = getAssignedCardsForBusiness(businessId);

  if (!businessDef) return 0;

  let prestige = 0;

  cards.forEach(card => {
    if (card.traits.includes(TRAITS.HERO)) {
      prestige += CONFIG.PRESTIGE.HERO_BONUS;
    }

    if (card.rarity === "ultra") {
      prestige += CONFIG.PRESTIGE.ULTRA_BONUS;
    }

    if (card.morale >= CONFIG.MORALE.HIGH_THRESHOLD) {
      prestige += CONFIG.PRESTIGE.HIGH_MORALE_BONUS;
    }
  });

  const tierMultiplier = getTierDef(businessDef.tier).basePrestigeMultiplier;
  const tagMultiplier = getBusinessPrestigeMultiplierFromTags(businessDef);

  return Math.floor(prestige * tierMultiplier * tagMultiplier);
}


// ==========================================================
// Business income calculation
// ----------------------------------------------------------
// Sums all assigned card output, then applies prestige and
// global economy pacing.
// ==========================================================

function calculateBusinessIncome(businessId) {
  const cards = getAssignedCardsForBusiness(businessId);
  const prestige = calculateBusinessPrestige(businessId);

  let total = 0;

  cards.forEach(card => {
    total += calculateCardOutput(card, businessId);
  });

  total *= (1 + prestige / 100);
  total *= CONFIG.ECONOMY.GLOBAL_INCOME_MULTIPLIER;

  return Math.floor(total);
}


// ==========================================================
// Total income calculation
// ----------------------------------------------------------
// Used by the main game tick.
// ==========================================================

function calculateTotalIncomePerTick() {
  let totalIncome = 0;

  state.businesses.forEach(businessState => {
    if (!businessState.unlocked) return;

    totalIncome += calculateBusinessIncome(businessState.id);
  });

  return totalIncome;
}