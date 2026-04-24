// ==========================================================
// Business Logic
// ----------------------------------------------------------
// Handles:
// - business stat derivation from tiers + tags
// - slot calculation
// - card assignment / unassignment
// - business purchasing
// - business upgrades
// - advertising activation
//
// This file does NOT handle rendering directly, though it
// may call shared helpers like setHeadline() and saveGame().
// ==========================================================


// ==========================================================
// Tier / Tag helpers
// ==========================================================

function getTierDef(tier) {
  return CONFIG.BUSINESS_TIERS[tier];
}

function getTagDefs(tags) {
  return tags
    .map(tag => CONFIG.BUSINESS_TAG_RULES[tag])
    .filter(Boolean);
}

function getBaseBusinessSlots(businessDef) {
  return getTierDef(businessDef.tier).baseSlots;
}

function getBusinessSlotMultiplier(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);

  return tagDefs.reduce((mult, tagDef) => {
    return mult * (tagDef.slotMultiplier ?? 1);
  }, 1);
}

function getBusinessRevenueMultiplierFromTags(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);

  return tagDefs.reduce((mult, tagDef) => {
    return mult * (tagDef.revenueMultiplier ?? 1);
  }, 1);
}

function getBusinessPrestigeMultiplierFromTags(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);

  return tagDefs.reduce((mult, tagDef) => {
    return mult * (tagDef.prestigeMultiplier ?? 1);
  }, 1);
}


// ==========================================================
// Slot calculation
// ==========================================================

function getMaxSlotsForBusiness(businessId) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  if (!businessDef || !businessState) return 0;

  const tierSlots = getBaseBusinessSlots(businessDef);
  const tagAdjustedSlots = Math.floor(tierSlots * getBusinessSlotMultiplier(businessDef));

  return tagAdjustedSlots + (
    businessState.capacityLevel * CONFIG.UPGRADES.CAPACITY_SLOT_BONUS_PER_LEVEL
  );
}

function normalizeBusinessSlots(businessId) {
  const businessState = getBusinessState(businessId);
  const maxSlots = getMaxSlotsForBusiness(businessId);

  if (!businessState) return;

  while (businessState.assignedCardIds.length < maxSlots) {
    businessState.assignedCardIds.push(null);
  }

  if (businessState.assignedCardIds.length > maxSlots) {
    businessState.assignedCardIds = businessState.assignedCardIds.slice(0, maxSlots);
  }
}


// ==========================================================
// Assignment helpers
// ==========================================================

function unassignCard(card) {
  if (!card || !card.assignedBusinessId) return;

  const businessState = getBusinessState(card.assignedBusinessId);

  if (!businessState) {
    card.assignedBusinessId = null;
    return;
  }

  const slotIndex = businessState.assignedCardIds.findIndex(id => id === card.instanceId);

  if (slotIndex !== -1) {
    businessState.assignedCardIds[slotIndex] = null;
  }

  card.assignedBusinessId = null;
}

function assignCardToBusiness(cardInstanceId, businessId) {
  const card = getCardByInstanceId(cardInstanceId);
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (!card || !businessState || !businessDef) return false;

  if (!businessState.unlocked) {
    setHeadline("Business locked", `${businessDef.name} has not been unlocked yet.`);
    return false;
  }

  normalizeBusinessSlots(businessId);

  if (card.assignedBusinessId === businessId) {
    unassignCard(card);
    setHeadline("Worker unassigned", `${card.displayName} was removed from ${businessDef.name}.`);
    saveGame();
    return true;
  }

  const emptySlotIndex = businessState.assignedCardIds.findIndex(slot => slot === null);

  if (emptySlotIndex === -1) {
    setHeadline("No room available", `${businessDef.name} has no open worker slots.`);
    return false;
  }

  if (card.assignedBusinessId) {
    unassignCard(card);
  }

  businessState.assignedCardIds[emptySlotIndex] = card.instanceId;
  card.assignedBusinessId = businessId;

  const assignedCards = getAssignedCardsForBusiness(businessId);
  const hero = assignedCards.find(c => c.traits.includes(TRAITS.HERO));
  const rogue = assignedCards.find(c => c.traits.includes(TRAITS.ROGUE));

  if (hero && rogue) {
    setHeadline(
      "Tension at work",
      `${hero.displayName} is uneasy working alongside ${rogue.displayName} at ${businessDef.name}.`
    );
  } else {
    setHeadline("Worker assigned", `${card.displayName} is now working at ${businessDef.name}.`);
  }

  saveGame();
  return true;
}


// ==========================================================
// Business purchasing
// ----------------------------------------------------------
// Unlocks a business and grants a free basic pack.
// ==========================================================

function purchaseBusiness(businessId) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (!businessState || !businessDef) return false;

  if (businessState.unlocked) {
    setHeadline("Already owned", `${businessDef.name} is already open for business.`);
    return false;
  }

  if (state.credits < businessDef.unlockCost) {
    setHeadline(
      "Not enough credits",
      `You need ${businessDef.unlockCost} credits to unlock ${businessDef.name}.`
    );
    return false;
  }

  state.credits -= businessDef.unlockCost;
  businessState.unlocked = true;

  normalizeBusinessSlots(businessId);

  const rewardCards = grantFreePack("BASIC");

  if (rewardCards.length > 0) {
    setHeadline(
      "Business purchased",
      `${businessDef.name} is now open. New recruits arrived: ${rewardCards.map(card => card.displayName).join(", ")}`
    );
  } else {
    setHeadline("Business purchased", `${businessDef.name} is now open for business.`);
  }

  saveGame();
  return true;
}


// ==========================================================
// Upgrade helpers
// ==========================================================

function getUpgradeCost(businessId, upgradeType) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  if (!businessDef || !businessState) return null;

  const tierMultiplier = getTierDef(businessDef.tier).upgradeCostMultiplier;

  if (upgradeType === "capacity") {
    const level = businessState.capacityLevel;

    if (level >= CONFIG.UPGRADES.MAX_CAPACITY_LEVEL) return null;

    return Math.floor(CONFIG.UPGRADES.CAPACITY_COSTS[level] * tierMultiplier);
  }

  if (upgradeType === "efficiency") {
    const level = businessState.efficiencyLevel;

    if (level >= CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL) return null;

    return Math.floor(CONFIG.UPGRADES.EFFICIENCY_COSTS[level] * tierMultiplier);
  }

  return null;
}

function upgradeBusiness(businessId, upgradeType) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (!businessState || !businessDef) return false;

  const cost = getUpgradeCost(businessId, upgradeType);

  if (cost === null) {
    setHeadline("Upgrade maxed", `${businessDef.name} cannot upgrade ${upgradeType} any further.`);
    return false;
  }

  if (state.credits < cost) {
    setHeadline("Not enough credits", `You need ${cost} credits for this upgrade.`);
    return false;
  }

  state.credits -= cost;

  if (upgradeType === "capacity") {
    businessState.capacityLevel += 1;
    normalizeBusinessSlots(businessId);
  }

  if (upgradeType === "efficiency") {
    businessState.efficiencyLevel += 1;
  }

  setHeadline("Business upgraded", `${businessDef.name} received a ${upgradeType} upgrade.`);
  saveGame();
  return true;
}


// ==========================================================
// Advertising
// ==========================================================

function getAdMultiplier(businessState) {
  return Date.now() < businessState.adActiveUntil
    ? CONFIG.ADVERTISING.INCOME_MULTIPLIER
    : 1;
}

function activateAdCampaign(businessId) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (!businessState || !businessDef) return false;

  const now = Date.now();

  if (now < businessState.adCooldownUntil) {
    setHeadline("Advertising unavailable", `${businessDef.name} is still on cooldown.`);
    return false;
  }

  businessState.adActiveUntil = now + CONFIG.ADVERTISING.DURATION_MS;
  businessState.adCooldownUntil = now + CONFIG.ADVERTISING.COOLDOWN_MS;

  setHeadline("Advertising launched", `${businessDef.name} income is temporarily boosted.`);
  saveGame();
  return true;
}

function isAdActive(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return false;

  return Date.now() < businessState.adActiveUntil;
}

function isAdCoolingDown(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return false;

  return Date.now() < businessState.adCooldownUntil;
}

function getAdCooldownRemainingMs(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return 0;

  return Math.max(0, businessState.adCooldownUntil - Date.now());
}

function formatCooldown(msRemaining) {
  const totalSeconds = Math.ceil(msRemaining / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// ==========================================================
// Business list helpers
// ----------------------------------------------------------
// Centralized helpers for dropdowns and business filtering.
// ==========================================================

function getUnlockedBusinesses() {
  return BUSINESSES.filter(business => getBusinessState(business.id)?.unlocked);
}

function getLockedBusinessesForPurchase() {
  return BUSINESSES.filter(business => !getBusinessState(business.id)?.unlocked);
}

function getAffordableLockedBusinessesForPurchase() {
  return getLockedBusinessesForPurchase().filter(
    business => state.credits >= business.unlockCost
  );
}