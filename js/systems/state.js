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
    claimedMilestones: {},

    dailySpecialPack: {
      franchise: null,
      selectedAt: null
    },

    // ------------------------------------------------------
    // First-run / tutorial tracking
    // ------------------------------------------------------
    firstPackOpened: false,
    firstPackGuidancePending: false,
    economyStarted: false,

    // ------------------------------------------------------
    // Player options / notification queue
    // ------------------------------------------------------
    options: {
      suppressTokenPopups: false
    },

// Focus for special pulls 
packFocus: {
  enabled: false,
  type: null,
  target: null,
  rerolls: 0
},

   pendingTokenNotifications: [],
    // ------------------------------------------------------
    // Card / roster tracking
    // ------------------------------------------------------
    nextCardInstanceId: 1,
    cards: [],
    unlockedMythics: [],

    // ------------------------------------------------------
    // Business runtime state
    // ------------------------------------------------------
    businesses: BUSINESSES.map(business => ({
      id: business.id,

      // Only Moisture Farm is available at the start of a new game.
      unlocked: business.id === CONFIG.BUSINESS_IDS.MOISTURE_FARM,

      capacityLevel: 0,
      efficiencyLevel: 0,

      adActiveUntil: 0,
      adCooldownUntil: 0,

      assignedCardIds: []
    })),

    // ------------------------------------------------------
    // Headline / flavor feed
    // ------------------------------------------------------
    headline: {
      title: "Welcome aboard",
      body: "Open a pack and start making questionable staffing decisions.",
      createdAt: Date.now()
    },

    headlineHistory: [
      {
        title: "Welcome aboard",
        body: "Open a pack and start making questionable staffing decisions.",
        createdAt: Date.now(),
        type: "system"
      }
    ]
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

// ==========================================================
// Token reward helper
// ----------------------------------------------------------
// Centralized helper for all earned-token events.
// This keeps token popups, headlines, and future settings
// consistent across daily rewards, milestones, and purchases.
// ==========================================================

function addTokens(amount, title, body, source = "general") {
  const tokenAmount = Number(amount) || 0;
  if (tokenAmount <= 0) return false;

  if (typeof state.tokens !== "number" || Number.isNaN(state.tokens)) {
    state.tokens = 0;
  }

  state.tokens += tokenAmount;

  if (!state.options || typeof state.options !== "object") {
    state.options = { suppressTokenPopups: false };
  }

  if (!Array.isArray(state.pendingTokenNotifications)) {
    state.pendingTokenNotifications = [];
  }

  if (!state.options.suppressTokenPopups) {
    state.pendingTokenNotifications.push({
      title: typeof title === "string" ? title : "Token Earned",
      body: typeof body === "string" ? body : `You earned ${tokenAmount} token${tokenAmount === 1 ? "" : "s"}.`,
      amount: tokenAmount,
      source,
      createdAt: Date.now()
    });
  }

  if (typeof openNextTokenRewardModal === "function") {
    openNextTokenRewardModal();
  }

  return true;
}

function setSuppressTokenPopups(value) {
  if (!state.options || typeof state.options !== "object") {
    state.options = { suppressTokenPopups: false };
  }

  state.options.suppressTokenPopups = !!value;

  if (state.options.suppressTokenPopups) {
    state.pendingTokenNotifications = [];
  }

  saveGame();
}
