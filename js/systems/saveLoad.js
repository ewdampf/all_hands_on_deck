// ==========================================================
// Save / Load System
// ----------------------------------------------------------
// Handles persistence of game state in localStorage.
//
// Responsibilities:
// - save current runtime state
// - load saved state safely
// - merge old saves into new state shape
// - normalize missing fields from older versions
// - clear save data on reset
// ==========================================================


// ==========================================================
// Save current game state
// ----------------------------------------------------------
// Writes the live state object to localStorage.
// ==========================================================

function saveGame() {
  try {
    localStorage.setItem(CONFIG.GAME.AUTO_SAVE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save game:", error);
  }
}


// ==========================================================
// Build a normalized business runtime state
// ----------------------------------------------------------
// Used during load/migration to ensure each business has
// the fields required by the current version.
// ==========================================================

function createDefaultBusinessRuntimeState(businessDef) {
  return {
    id: businessDef.id,
    unlocked: businessDef.unlockedByDefault,

    capacityLevel: 0,
    efficiencyLevel: 0,

    adActiveUntil: 0,
    adCooldownUntil: 0,

    assignedCardIds: []
  };
}


// ==========================================================
// Normalize business runtime state
// ----------------------------------------------------------
// Ensures that loaded business entries contain all required
// fields, even if the save came from an older version.
// ==========================================================

function normalizeBusinessState(loadedBusinessState, businessDef) {
  const fallback = createDefaultBusinessRuntimeState(businessDef);

  const merged = {
    ...fallback,
    ...loadedBusinessState
  };

  if (!Array.isArray(merged.assignedCardIds)) {
    merged.assignedCardIds = [];
  }

  if (typeof merged.capacityLevel !== "number" || Number.isNaN(merged.capacityLevel)) {
    merged.capacityLevel = 0;
  }

  if (typeof merged.efficiencyLevel !== "number" || Number.isNaN(merged.efficiencyLevel)) {
    merged.efficiencyLevel = 0;
  }

  if (typeof merged.adActiveUntil !== "number" || Number.isNaN(merged.adActiveUntil)) {
    merged.adActiveUntil = 0;
  }

  if (typeof merged.adCooldownUntil !== "number" || Number.isNaN(merged.adCooldownUntil)) {
    merged.adCooldownUntil = 0;
  }

  if (typeof merged.unlocked !== "boolean") {
    merged.unlocked = businessDef.unlockedByDefault;
  }

  return merged;
}


// ==========================================================
// Normalize card runtime state
// ----------------------------------------------------------
// Ensures loaded cards have the fields required by the
// current version of the game.
// ==========================================================

function normalizeCardState(card) {
  const normalized = { ...card };

  if (typeof normalized.instanceId !== "number" || Number.isNaN(normalized.instanceId)) {
    normalized.instanceId = getNextCardInstanceId();
  }

  if (typeof normalized.characterKey !== "string") {
    normalized.characterKey = normalized.id || normalized.templateId || "unknown_character";
  }

  if (typeof normalized.variantKey !== "string") {
    normalized.variantKey = "default";
  }

  if (typeof normalized.displayName !== "string") {
    normalized.displayName = normalized.name || "Unknown";
  }

  if (typeof normalized.subtitle !== "string") {
    normalized.subtitle = "";
  }

  if (typeof normalized.franchise !== "string") {
    normalized.franchise = "Unknown";
  }

  if (typeof normalized.rarity !== "string") {
    normalized.rarity = "common";
  }

  if (typeof normalized.basePower !== "number" || Number.isNaN(normalized.basePower)) {
    normalized.basePower = 1;
  }

  if (typeof normalized.stars !== "number" || Number.isNaN(normalized.stars)) {
    normalized.stars = CONFIG.RARITIES[normalized.rarity]?.stars || 1;
  }
  
  if (typeof normalized.prestige !== "number" || Number.isNaN(normalized.prestige)) {
    normalized.prestige = 1;
  }

  if (typeof normalized.preferredJob !== "string") {
    normalized.preferredJob = JOB_TYPES.PRODUCTION;
  }

  if (!Array.isArray(normalized.traits)) {
    normalized.traits = [];
  }

  if (!Array.isArray(normalized.tags)) {
    normalized.tags = [];
  }

  if (typeof normalized.flavor !== "string") {
    normalized.flavor = "";
  }

  if (typeof normalized.morale !== "number" || Number.isNaN(normalized.morale)) {
    normalized.morale = CONFIG.MORALE.STARTING;
  }

  if (typeof normalized.assignedBusinessId !== "string" && normalized.assignedBusinessId !== null) {
    normalized.assignedBusinessId = null;
  }

  if (typeof normalized.imagePath !== "string") {
    normalized.imagePath = "";
  }

  if (typeof normalized.imageAlt !== "string") {
    normalized.imageAlt = normalized.displayName || "Character image";
  }

  return normalized;
}


// ==========================================================
// Normalize full loaded state
// ----------------------------------------------------------
// Starts from a fresh state shape, then merges saved data
// into it safely.
// ==========================================================

function normalizeLoadedState(loadedState) {
  const freshState = createInitialState();

  const normalizedState = {
    ...freshState,
    ...loadedState
  };

  // --------------------------------------------------------
  // Core resources
  // --------------------------------------------------------
  if (typeof normalizedState.credits !== "number" || Number.isNaN(normalizedState.credits)) {
    normalizedState.credits = CONFIG.GAME.STARTING_CREDITS;
  }

  if (typeof normalizedState.tokens !== "number" || Number.isNaN(normalizedState.tokens)) {
    normalizedState.tokens = CONFIG.GAME.STARTING_TOKENS;
  }

  // --------------------------------------------------------
  // Daily reward state
  // --------------------------------------------------------
  if (
    typeof normalizedState.freePackLastClaimedAt !== "number" &&
    normalizedState.freePackLastClaimedAt !== null
  ) {
    normalizedState.freePackLastClaimedAt = null;
  }

if (
  typeof normalizedState.dailySpecialPack !== "object" ||
  normalizedState.dailySpecialPack === null
) {
  normalizedState.dailySpecialPack = {
    franchise: null,
    selectedAt: null
  };
}

if (typeof normalizedState.dailySpecialPack.franchise !== "string") {
  normalizedState.dailySpecialPack.franchise = null;
}

if (
  typeof normalizedState.dailySpecialPack.selectedAt !== "number" &&
  normalizedState.dailySpecialPack.selectedAt !== null
) {
  normalizedState.dailySpecialPack.selectedAt = null;
}



  // --------------------------------------------------------
  // First-run / tutorial tracking
  // --------------------------------------------------------
  if (typeof normalizedState.firstPackOpened !== "boolean") {
    normalizedState.firstPackOpened = Array.isArray(normalizedState.cards) && normalizedState.cards.length > 0;
  }

  if (typeof normalizedState.firstPackGuidancePending !== "boolean") {
    normalizedState.firstPackGuidancePending = false;
  }

  if (typeof normalizedState.economyStarted !== "boolean") {
    normalizedState.economyStarted = normalizedState.firstPackOpened && !normalizedState.firstPackGuidancePending;
  }

  // --------------------------------------------------------
  // Options / notification state
  // --------------------------------------------------------
  if (typeof normalizedState.options !== "object" || normalizedState.options === null) {
    normalizedState.options = {};
  }

  normalizedState.options = {
    suppressTokenPopups: !!normalizedState.options.suppressTokenPopups
  };

  if (!Array.isArray(normalizedState.pendingTokenNotifications)) {
    normalizedState.pendingTokenNotifications = [];
  }

  normalizedState.pendingTokenNotifications = normalizedState.pendingTokenNotifications
    .filter(item => item && typeof item.title === "string")
    .map(item => ({
      title: item.title,
      body: typeof item.body === "string" ? item.body : "",
      amount: typeof item.amount === "number" ? item.amount : 1,
      source: typeof item.source === "string" ? item.source : "general",
      createdAt: typeof item.createdAt === "number" ? item.createdAt : Date.now()
    }))
    .slice(0, 5);

  // --------------------------------------------------------
  // Milestone state
  // --------------------------------------------------------
  if (
    !normalizedState.claimedMilestones ||
    typeof normalizedState.claimedMilestones !== "object" ||
    Array.isArray(normalizedState.claimedMilestones)
  ) {
    normalizedState.claimedMilestones = {};
  }

  // --------------------------------------------------------
  // Card state
  // --------------------------------------------------------
  if (!Array.isArray(normalizedState.cards)) {
    normalizedState.cards = [];
  }

  normalizedState.cards = normalizedState.cards.map(normalizeCardState);

  // --------------------------------------------------------
  // Next instance ID
  // --------------------------------------------------------
  if (
    typeof normalizedState.nextCardInstanceId !== "number" ||
    Number.isNaN(normalizedState.nextCardInstanceId)
  ) {
    const maxExistingId = normalizedState.cards.reduce(
      (max, card) => Math.max(max, card.instanceId || 0),
      0
    );

    normalizedState.nextCardInstanceId = maxExistingId + 1;
  }

  // --------------------------------------------------------
  // Headline state
  // --------------------------------------------------------
  if (typeof normalizedState.headline !== "object" || normalizedState.headline === null) {
    normalizedState.headline = { ...freshState.headline };
  }

  if (typeof normalizedState.headline.title !== "string") {
    normalizedState.headline.title = freshState.headline.title;
  }

  if (typeof normalizedState.headline.body !== "string") {
    normalizedState.headline.body = freshState.headline.body;
  }

  if (!Array.isArray(normalizedState.headlineHistory)) {
    normalizedState.headlineHistory = [];
  }

  normalizedState.headlineHistory = normalizedState.headlineHistory
    .filter(item => item && typeof item.title === "string")
    .map(item => ({
      title: item.title,
      body: typeof item.body === "string" ? item.body : "",
      createdAt: typeof item.createdAt === "number" ? item.createdAt : Date.now(),
      type: typeof item.type === "string" ? item.type : "general"
    }))
    .slice(0, 10);

  // --------------------------------------------------------
  // Business runtime state
  // --------------------------------------------------------
  const loadedBusinesses = Array.isArray(loadedState.businesses) ? loadedState.businesses : [];

  normalizedState.businesses = BUSINESSES.map(businessDef => {
    const matchingLoaded = loadedBusinesses.find(b => b.id === businessDef.id);
    return normalizeBusinessState(matchingLoaded || {}, businessDef);
  });

  return normalizedState;
}


// ==========================================================
// Load saved game
// ----------------------------------------------------------
// Reads from localStorage and safely normalizes the result.
// If no save exists, the current fresh state is preserved.
// ==========================================================

function loadGame() {
  const raw = localStorage.getItem(CONFIG.GAME.AUTO_SAVE_KEY);
  if (!raw) return;

  try {
    const loadedState = JSON.parse(raw);
    state = normalizeLoadedState(loadedState);
  } catch (error) {
    console.error("Failed to load save:", error);
  }
}


// ==========================================================
// Clear saved data
// ----------------------------------------------------------
// Removes localStorage save only.
// Does not modify runtime state directly.
// ==========================================================

function clearSaveData() {
  localStorage.removeItem(CONFIG.GAME.AUTO_SAVE_KEY);
}


// ==========================================================
// Full reset
// ----------------------------------------------------------
// Clears save data, resets runtime state, and optionally
// reloads the page.
// ==========================================================

function resetGame({ reloadPage = true } = {}) {
  clearSaveData();
  resetStateToNewGame();

  if (reloadPage) {
    location.reload();
  }
}