// ==========================================================
// Economy System
// ----------------------------------------------------------
// Handles:
// - worker output
// - business income
// - prestige
// - maintenance
// - gross / net income
// ==========================================================


// ==========================================================
// Morale output modifier
// ==========================================================

function getMoraleOutputModifier(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) return CONFIG.MORALE.HIGH_MODIFIER;
  if (morale >= 50) return CONFIG.MORALE.MID_MODIFIER;
  if (morale >= CONFIG.MORALE.LOW_THRESHOLD) return CONFIG.MORALE.LOW_MODIFIER;
  return CONFIG.MORALE.VERY_LOW_MODIFIER;
}


// ==========================================================
// Rarity helpers
// ==========================================================

function getCardStars(card) {
  return card.stars || CONFIG.RARITIES[card.rarity]?.stars || 1;
}


// ==========================================================
// Same-type cannon fodder helpers
// ==========================================================

function getMatchingCannonFodderCount(card, businessId) {
  const assignedCards = getAssignedCardsForBusiness(businessId);

  return assignedCards.filter(otherCard =>
    otherCard.traits.includes(TRAITS.CANNON_FODDER) &&
    otherCard.id === card.id
  ).length;
}

function getSameTypeCannonFodderBonus(card, businessId) {
  if (!card.traits.includes(TRAITS.CANNON_FODDER)) return 0;

  const matchingTypeCount = getMatchingCannonFodderCount(card, businessId);

  return Math.min(
    CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS_CAP,
    Math.max(0, matchingTypeCount - 1) * CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS
  );
}


// ==========================================================
// Output helpers
// ==========================================================

function getOffRolePenaltyMultiplier(businessId) {
  const businessState = getBusinessState(businessId);

  let penalty = CONFIG.OUTPUT.OFF_ROLE_OUTPUT_PENALTY;

  if (businessState && businessState.efficiencyLevel >= 2) {
    penalty += CONFIG.MORALE.EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF;
  }

  return penalty;
}

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

function getBusinessSpecificCardOutputMultiplier(card, businessId) {
  switch (businessId) {
    case CONFIG.BUSINESS_IDS.BOUNTY_HUNTERS_GUILD:
      if (card.traits.includes(TRAITS.ROGUE)) return 1.30;
      if (card.traits.includes(TRAITS.HERO)) return 0.60;
      return 1;

    default:
      return 1;
  }
}

function getBusinessSpecificIncomeMultiplier(businessId) {
  switch (businessId) {
    default:
      return 1;
  }
}


// ==========================================================
// Per-card output calculation
// ==========================================================

function calculateCardOutput(card, businessId) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  if (!card || !businessDef || !businessState) return 0;

  let output = card.basePower;

  output *= (1 + getMoraleOutputModifier(card.morale));

  if (card.traits.includes(TRAITS.CANNON_FODDER)) {
    output *= 1 + getSameTypeCannonFodderBonus(card, businessId);

    if (businessId === CONFIG.BUSINESS_IDS.MOISTURE_FARM) {
      output *= 1 + CONFIG.OUTPUT.CANNON_FODDER_FARM_BONUS;
    }
  }

  if (card.traits.includes(TRAITS.HERO)) {
    output *= 1 + CONFIG.OUTPUT.HERO_OUTPUT_MODIFIER;

    if (card.morale < CONFIG.MORALE.LOW_THRESHOLD) {
      output *= CONFIG.OUTPUT.HERO_LOW_MORALE_PENALTY;
    }
  }

  if (card.traits.includes(TRAITS.SUPPORT)) {
    output *= 1 + CONFIG.OUTPUT.SUPPORT_OUTPUT_MODIFIER;
  }

  if (
    card.preferredJob !== businessDef.jobType &&
    card.preferredJob !== JOB_TYPES.HEROIC
  ) {
    output *= getOffRolePenaltyMultiplier(businessId);
  }

  output *= getBusinessTierIncomeMultiplier(businessId);
  output *= getBusinessRevenueMultiplierFromTags(businessDef);
  output *= getBusinessEfficiencyMultiplier(businessId);
  output *= getAdMultiplier(businessState);
  output *= getBusinessSpecificCardOutputMultiplier(card, businessId);

  return output;
}


// ==========================================================
// Prestige calculation
// ==========================================================

function calculateBusinessPrestige(businessId) {
  const businessDef = getBusinessDef(businessId);
  const cards = getAssignedCardsForBusiness(businessId);

  if (!businessDef) return 0;

  let prestige = 0;

  cards.forEach(card => {
    const rarityStars = getCardStars(card);
    const cardPrestige = card.prestige || 1;

    prestige += rarityStars * cardPrestige;

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
// ==========================================================

function calculateBusinessIncome(businessId) {
  const businessDef = getBusinessDef(businessId);
  const cards = getAssignedCardsForBusiness(businessId);

  if (!businessDef) return 0;

  let total = 0;

  cards.forEach(card => {
    total += calculateCardOutput(card, businessId);
  });

  const prestige = calculateBusinessPrestige(businessId);

  total *= (1 + prestige / 100);
  total *= getBusinessSpecificIncomeMultiplier(businessId);
  total *= CONFIG.ECONOMY.GLOBAL_INCOME_MULTIPLIER;

  return Math.floor(total);
}


// ==========================================================
// Maintenance calculations
// ==========================================================

function calculateBusinessMaintenance(businessId) {
  if (!CONFIG.MAINTENANCE?.ENABLED) return 0;

  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  if (!businessDef || !businessState || !businessState.unlocked) return 0;

  return CONFIG.MAINTENANCE.BUSINESS_BASE_BY_TIER[businessDef.tier] || 0;
}

function calculateWorkerMaintenance(card) {
  if (!CONFIG.MAINTENANCE?.ENABLED) return 0;
  if (!card || card.morale > 0) return 0;

  const stars = getCardStars(card);
  const prestige = card.prestige || 1;

  return Math.floor(
    CONFIG.MAINTENANCE.ZERO_MORALE_WORKER_BASE +
    stars * CONFIG.MAINTENANCE.ZERO_MORALE_RARITY_MULTIPLIER +
    prestige * CONFIG.MAINTENANCE.ZERO_MORALE_PRESTIGE_MULTIPLIER
  );
}

function calculateTotalBusinessMaintenancePerTick() {
  return state.businesses.reduce((total, businessState) => {
    return total + calculateBusinessMaintenance(businessState.id);
  }, 0);
}

function calculateTotalWorkerMaintenancePerTick() {
  return state.cards.reduce((total, card) => {
    return total + calculateWorkerMaintenance(card);
  }, 0);
}

function calculateTotalMaintenancePerTick() {
  return (
    calculateTotalBusinessMaintenancePerTick() +
    calculateTotalWorkerMaintenancePerTick()
  );
}


// ==========================================================
// Gross / Net income
// ==========================================================

function calculateGrossIncomePerTick() {
  let totalIncome = 0;

  state.businesses.forEach(businessState => {
    if (!businessState.unlocked) return;
    totalIncome += calculateBusinessIncome(businessState.id);
  });

  return totalIncome;
}

function calculateNetIncomePerTick() {
  return calculateGrossIncomePerTick() - calculateTotalMaintenancePerTick();
}


// ==========================================================
// Backward-compatible total income function
// ----------------------------------------------------------
// Existing UI can continue calling this.
// It now returns NET income.
// ==========================================================

function calculateTotalIncomePerTick() {
  return calculateNetIncomePerTick();
}