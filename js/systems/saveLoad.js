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

  if (typeof normalized.preferredJob !== "string") {
    normalized.preferredJob = JOB_TYPES.FARM;
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