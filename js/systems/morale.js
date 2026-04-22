// ==========================================================
// Morale System
// ----------------------------------------------------------
// Handles:
// - per-tick morale changes
// - assigned worker morale updates
// - idle worker morale decay
// - same-type cannon fodder morale bonuses
// - moral-code penalties from business tags
// - random morale-related headlines
//
// This file is responsible for changing how workers feel,
// not how much money they make.
// ==========================================================


// ==========================================================
// Morale helper: clamp
// ----------------------------------------------------------
// Keeps morale values inside allowed bounds.
// ==========================================================

function clampMorale(value) {
  return Math.max(CONFIG.MORALE.MIN, Math.min(CONFIG.MORALE.MAX, value));
}


// ==========================================================
// Morale helper: CSS class
// ----------------------------------------------------------
// Used by rendering to color morale values.
// ==========================================================

function getMoraleClass(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) return "good";
  if (morale < CONFIG.MORALE.LOW_THRESHOLD) return "bad";
  return "";
}


// ==========================================================
// Same-type cannon fodder morale support
// ----------------------------------------------------------
// Matching squads should feel better working together.
// ==========================================================

function getMatchingCannonFodderMoraleCount(card, businessId) {
  const assignedCards = getAssignedCardsForBusiness(businessId);

  return assignedCards.filter(otherCard =>
    otherCard.traits.includes(TRAITS.CANNON_FODDER) &&
    otherCard.id === card.id
  ).length;
}


// ==========================================================
// Business tag morale penalties
// ----------------------------------------------------------
// Applies morale effects from business tags.
// For now this is intentionally simple.
// ==========================================================

function getBusinessTagMoralePenalty(card, businessDef) {
  let penalty = 0;

  const tagDefs = getTagDefs(businessDef.tags);

  tagDefs.forEach(tagDef => {
    if (
      card.traits.includes(TRAITS.MORAL_CODE) &&
      tagDef.moraleEffects?.moralCodePenalty
    ) {
      penalty -= tagDef.moraleEffects.moralCodePenalty;
    }
  });

  return penalty;
}


// ==========================================================
// Assigned worker morale delta
// ----------------------------------------------------------
// Computes morale change for a worker currently assigned to
// a business.
// ==========================================================

function getAssignedWorkerMoraleDelta(card, businessId) {
  const businessDef = getBusinessDef(businessId);
  const assignedCards = getAssignedCardsForBusiness(businessId);

  if (!businessDef) return 0;

  let delta = 0;

  // --------------------------------------------------------
  // Preferred job vs wrong job
  // --------------------------------------------------------
  if (card.preferredJob === businessDef.jobType) {
    delta += CONFIG.MORALE.PREFERRED_JOB_DELTA;
  } else {
    delta += CONFIG.MORALE.WRONG_JOB_DELTA;
  }

  // --------------------------------------------------------
  // Support types slightly improve morale naturally
  // --------------------------------------------------------
  if (card.traits.includes(TRAITS.SUPPORT)) {
    delta += CONFIG.MORALE.SUPPORT_DELTA;
  }

  // --------------------------------------------------------
  // Same-type cannon fodder likes being with matching units
  // --------------------------------------------------------
  const sameTypeCount = getMatchingCannonFodderMoraleCount(card, businessId);

  if (
    card.traits.includes(TRAITS.CANNON_FODDER) &&
    sameTypeCount >= 2
  ) {
    delta += CONFIG.MORALE.CANNON_GROUP_DELTA;
  }

  // --------------------------------------------------------
  // Heroes dislike rogues in the same workplace
  // --------------------------------------------------------
  const hasRogue = assignedCards.some(otherCard =>
    otherCard.traits.includes(TRAITS.ROGUE)
  );

  if (card.traits.includes(TRAITS.HERO) && hasRogue) {
    delta += CONFIG.MORALE.HERO_WITH_ROGUE_DELTA;
  }

  // --------------------------------------------------------
  // Business-tag-based morale penalties
  // --------------------------------------------------------
  delta += getBusinessTagMoralePenalty(card, businessDef);

  return delta;
}


// ==========================================================
// Assigned workers morale update
// ----------------------------------------------------------
// Runs once per game tick for all assigned workers.
// ==========================================================

function updateAssignedWorkerMorale() {
  state.businesses.forEach(businessState => {
    if (!businessState.unlocked) return;

    const businessId = businessState.id;
    const assignedCards = getAssignedCardsForBusiness(businessId);

    assignedCards.forEach(card => {
      const delta = getAssignedWorkerMoraleDelta(card, businessId);
      card.morale = clampMorale(card.morale + delta);
    });
  });
}


// ==========================================================
// Idle workers morale update
// ----------------------------------------------------------
// Idle workers lose morale over time and may request release.
// ==========================================================

function updateIdleWorkerMorale() {
  getUnassignedCards().forEach(card => {
    card.morale = clampMorale(card.morale + CONFIG.MORALE.IDLE_DELTA);

    if (
      card.morale < CONFIG.MORALE.LOW_THRESHOLD &&
      Math.random() < CONFIG.MORALE.RELEASE_REQUEST_CHANCE
    ) {
      setHeadline(
        "Release requested",
        `${card.displayName} is tired of sitting idle and wants a job or a way out.`
      );
    }
  });
}


// ==========================================================
// Random morale-based headlines
// ----------------------------------------------------------
// Adds occasional flavor / event feedback.
// ==========================================================

function maybeTriggerMoraleHeadline() {
  const allAssignedCards = state.businesses.flatMap(businessState =>
    getAssignedCardsForBusiness(businessState.id)
  );

  const ecstaticCards = allAssignedCards.filter(
    card => card.morale >= CONFIG.MORALE.EPIC_THRESHOLD
  );

  const unhappyCards = allAssignedCards.filter(
    card => card.morale < CONFIG.MORALE.LOW_THRESHOLD
  );

  // --------------------------------------------------------
  // Epic morale event
  // --------------------------------------------------------
  if (
    ecstaticCards.length > 0 &&
    Math.random() < CONFIG.HEADLINES.EPIC_HEADLINE_CHANCE
  ) {
    const card = ecstaticCards[Math.floor(Math.random() * ecstaticCards.length)];

    setHeadline(
      "Epic headline achieved",
      `${card.displayName} is thriving. The whole roster feels the energy.`
    );

    state.cards.forEach(rosterCard => {
      rosterCard.morale = clampMorale(
        rosterCard.morale + CONFIG.MORALE.EPIC_ROSTER_BONUS
      );
    });

    return;
  }

  // --------------------------------------------------------
  // Warning morale event
  // --------------------------------------------------------
  if (
    unhappyCards.length > 0 &&
    Math.random() < CONFIG.HEADLINES.WARNING_HEADLINE_CHANCE
  ) {
    const card = unhappyCards[Math.floor(Math.random() * unhappyCards.length)];

    setHeadline(
      "Morale warning",
      `${card.displayName} is visibly unhappy with current management decisions.`
    );
  }
}


// ==========================================================
// Main morale tick
// ----------------------------------------------------------
// Runs the full morale update cycle.
// ==========================================================

function updateMorale() {
  updateAssignedWorkerMorale();
  updateIdleWorkerMorale();
  maybeTriggerMoraleHeadline();
}