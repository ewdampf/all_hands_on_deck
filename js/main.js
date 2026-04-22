// ==========================================================
// Main Bootstrap
// ----------------------------------------------------------
// Wires the full game together.
//
// Responsibilities:
// - initialize game state from save
// - normalize business runtime state
// - wire UI button handlers
// - run the game tick loop
// - kick off the first render
//
// Keep this file thin. Gameplay logic belongs elsewhere.
// ==========================================================


// ==========================================================
// Recent pack results cache
// ----------------------------------------------------------
// Keeps the last opened pack visible in the UI.
// ==========================================================

let recentPackResults = [];


// ==========================================================
// UI button wiring
// ----------------------------------------------------------
// Attaches click handlers to the main interactive controls.
// ==========================================================

function initializeButtons() {
  const freePackBtn = document.getElementById("freePackBtn");
  const basicPackBtn = document.getElementById("basicPackBtn");
  const uncommonPackBtn = document.getElementById("uncommonPackBtn");
  const rarePackBtn = document.getElementById("rarePackBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  // --------------------------------------------------------
  // Daily token claim
  // --------------------------------------------------------
  if (freePackBtn) {
    freePackBtn.addEventListener("click", () => {
      const claimed = claimDailyToken();

      if (claimed) {
        renderAll();
      }
    });
  }

  // --------------------------------------------------------
  // Paid packs
  // --------------------------------------------------------
  if (basicPackBtn) {
    basicPackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("BASIC");
      renderPackResults(recentPackResults);
      renderAll();
    });
  }

  if (uncommonPackBtn) {
    uncommonPackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("UNCOMMON");
      renderPackResults(recentPackResults);
      renderAll();
    });
  }

  if (rarePackBtn) {
    rarePackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("RARE");
      renderPackResults(recentPackResults);
      renderAll();
    });
  }

  // --------------------------------------------------------
  // Save
  // --------------------------------------------------------
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveGame();
      setHeadline("Progress saved", "Your local game has been saved in this browser.");
      renderAll();
    });
  }

  // --------------------------------------------------------
  // Reset
  // --------------------------------------------------------
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetGame();
    });
  }
}


// ==========================================================
// Business runtime normalization
// ----------------------------------------------------------
// Ensures all businesses have slot arrays sized correctly
// after load or reset.
// ==========================================================

function normalizeAllBusinesses() {
  BUSINESSES.forEach(business => {
    normalizeBusinessSlots(business.id);
  });
}


// ==========================================================
// Optional startup diagnostics
// ----------------------------------------------------------
// Useful during development to catch missing file loads.
// Safe to leave in for now.
// ==========================================================

function runStartupDiagnostics() {
  console.log("CONFIG loaded:", typeof CONFIG !== "undefined");
  console.log("TRAITS loaded:", typeof TRAITS !== "undefined");
  console.log("CHARACTER_TAGS loaded:", typeof CHARACTER_TAGS !== "undefined");
  console.log("JOB_TYPES loaded:", typeof JOB_TYPES !== "undefined");
  console.log("CHARACTERS loaded:", typeof CHARACTERS !== "undefined", Array.isArray(CHARACTERS) ? CHARACTERS.length : "N/A");
  console.log("BUSINESSES loaded:", typeof BUSINESSES !== "undefined", Array.isArray(BUSINESSES) ? BUSINESSES.length : "N/A");
}


// ==========================================================
// Main game tick
// ----------------------------------------------------------
// Runs once per configured tick interval.
// ==========================================================

function gameTick() {
  // Morale changes first
  updateMorale();

  // Then economy
  const income = calculateTotalIncomePerTick();
  state.credits += income;

  // Future place for timed effects / cooldown expiry hooks

  renderAll();
  saveGame();
}


// ==========================================================
// Initial render helpers
// ==========================================================

function initializeTagline() {
  const taglineEl = document.getElementById("tagline");
  if (!taglineEl) return;

  if (!Array.isArray(TAGLINES) || TAGLINES.length === 0) {
    taglineEl.textContent = "From every universe... into the wrong jobs.";
    return;
  }

  const tagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
  taglineEl.textContent = tagline;
}

function initializePackResults() {
  renderPackResults(recentPackResults);
}


// ==========================================================
// Full game initialization
// ----------------------------------------------------------
// Called once after scripts finish loading.
// ==========================================================

function initializeGame() {
  runStartupDiagnostics();

  loadGame();
  normalizeAllBusinesses();

  initializeButtons();
  initializeTagline();
  initializePackResults();

  renderAll();

  setInterval(gameTick, CONFIG.GAME.GAME_TICK_MS);
}


// ==========================================================
// Start the game
// ==========================================================

initializeGame();