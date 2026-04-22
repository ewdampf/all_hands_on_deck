// ==========================================================
// Game State
// ----------------------------------------------------------
// Central source of truth for runtime game state.
//
// Responsibilities:
// - define the initial state shape
// - create a fresh new state
// - provide lightweight state lookup helpers
//
// Non-responsibilities:
// - save/load persistence
// - rendering
// - pack generation
// - economy calculations
// - game loop ticking
// ==========================================================


// ==========================================================
// State factory
// ----------------------------------------------------------
// Always use this when starting a new game or resetting.
// This ensures the shape stays consistent.
// ==========================================================

function createInitialState() {
  return {
    // ------------------------------------------------------
    // Core resources
    // ------------------------------------------------------
    credits: CONFIG.GAME.STARTING_CREDITS,
    tokens: CONFIG.GAME.STARTING_TOKENS,

    // ------------------------------------------------------
    // Daily reward tracking
    // ------------------------------------------------------
    freePackLastClaimedAt: null,

    // ------------------------------------------------------
    // Card / roster tracking
    // ------------------------------------------------------
    nextCardInstanceId: 1,
    cards: [],

    // ------------------------------------------------------
    // Business runtime state
    // ------------------------------------------------------
    businesses: BUSINESSES.map(business => ({
      id: business.id,
      unlocked: business.unlockedByDefault,

      capacityLevel: 0,
      efficiencyLevel: 0,

      adActiveUntil: 0,
      adCooldownUntil: 0,

      assignedCardIds: []
    })),

    // ------------------------------------------------------
    // Headline / flavor feed
    // ------------------------------------------------------
    headline: createDefaultHeadline()
  };
}


// ==========================================================
// Live mutable state
// ----------------------------------------------------------
// This is the actual game state used during play.
// ==========================================================

let state = createInitialState();


// ==========================================================
// Reset helper
// ----------------------------------------------------------
// Resets runtime state to a clean new-game state.
// Save clearing should happen elsewhere.
// ==========================================================

function resetStateToNewGame() {
  state = createInitialState();
  return state;
}


// ==========================================================
// Business state helpers
// ----------------------------------------------------------
// Small helper lookups used throughout the systems layer.
// ==========================================================

function getBusinessState(businessId) {
  return state.businesses.find(business => business.id === businessId);
}

function getBusinessDef(businessId) {
  return BUSINESSES.find(business => business.id === businessId);
}


// ==========================================================
// Card state helpers
// ----------------------------------------------------------
// Lookup helpers for roster and assignment logic.
// ==========================================================

function getCardByInstanceId(instanceId) {
  return state.cards.find(card => card.instanceId === instanceId);
}

function getAssignedCardsForBusiness(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return [];

  return businessState.assignedCardIds
    .filter(Boolean)
    .map(getCardByInstanceId)
    .filter(Boolean);
}


// ==========================================================
// Derived state helpers
// ----------------------------------------------------------
// Useful lightweight summary helpers.
// Keep these simple and side-effect free.
// ==========================================================

function getUnassignedCards() {
  return state.cards.filter(card => !card.assignedBusinessId);
}

function getAssignedCards() {
  return state.cards.filter(card => !!card.assignedBusinessId);
}

function getCardCount() {
  return state.cards.length;
}


// ==========================================================
// ID generation
// ----------------------------------------------------------
// Use this for card instances created from pack pulls.
// ==========================================================

function getNextCardInstanceId() {
  const id = state.nextCardInstanceId;
  state.nextCardInstanceId += 1;
  return id;
}