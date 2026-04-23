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
// Optional startup diagnostics
// ----------------------------------------------------------
// Helpful during development to catch missing file loads or
// bad script order quickly.
// ==========================================================

function runStartupDiagnostics() {
  console.log("CONFIG loaded:", typeof CONFIG !== "undefined");
  console.log("TRAITS loaded:", typeof TRAITS !== "undefined");
  console.log("CHARACTER_TAGS loaded:", typeof CHARACTER_TAGS !== "undefined");
  console.log("JOB_TYPES loaded:", typeof JOB_TYPES !== "undefined");

  console.log(
    "CHARACTERS loaded:",
    typeof CHARACTERS !== "undefined",
    Array.isArray(CHARACTERS) ? CHARACTERS.length : "N/A"
  );

  console.log(
    "BUSINESSES loaded:",
    typeof BUSINESSES !== "undefined",
    Array.isArray(BUSINESSES) ? BUSINESSES.length : "N/A"
  );
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
// Tagline initialization
// ----------------------------------------------------------
// Picks one random tagline on startup.
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


// ==========================================================
// Pack result display initialization
// ----------------------------------------------------------
// Ensures the pack area starts in a valid visual state.
// ==========================================================

function initializePackResults() {
  renderPackResults(recentPackResults);
}


// ==========================================================
// UI button wiring
// ----------------------------------------------------------
// Attaches click handlers to the main controls.
// ==========================================================

function initializeButtons() {
  const freePackBtn = document.getElementById("freePackBtn");
  const basicPackBtn = document.getElementById("basicPackBtn");
  const uncommonPackBtn = document.getElementById("uncommonPackBtn");
  const rarePackBtn = document.getElementById("rarePackBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  const infoModeOverviewBtn = document.getElementById("infoModeOverviewBtn");
  const infoModeOwnedBtn = document.getElementById("infoModeOwnedBtn");
  const infoModeBuyBtn = document.getElementById("infoModeBuyBtn");

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
  // Manual save
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
      const confirmed = window.confirm(
        "Reset your game? This will clear your local save."
      );

      if (!confirmed) return;

      resetGame();
    });
  }

  // --------------------------------------------------------
  // Info panel mode buttons
  // --------------------------------------------------------
  if (infoModeOverviewBtn) {
    infoModeOverviewBtn.addEventListener("click", () => {
      infoPanelMode = "overview";
      renderAll();
    });
  }

  if (infoModeOwnedBtn) {
    infoModeOwnedBtn.addEventListener("click", () => {
      infoPanelMode = "owned";
      renderAll();
    });
  }

  if (infoModeBuyBtn) {
    infoModeBuyBtn.addEventListener("click", () => {
      infoPanelMode = "buy";
      renderAll();
    });
  }
}


// ==========================================================
// Main game tick
// ----------------------------------------------------------
// Runs once per configured tick interval.
// ==========================================================

function gameTick() {
  updateMorale();

  const income = calculateTotalIncomePerTick();
  state.credits += income;

  renderTopbar();
  renderHeadline();
  renderInfoPanel();

  saveGame();
}


// ==========================================================
// Full game initialization
// ----------------------------------------------------------
// Called once after all scripts are loaded.
// ==========================================================

function initializeGame() {
  runStartupDiagnostics();

  loadGame();
  normalizeAllBusinesses();

  initializeButtons();
  initializeTagline();
  initializePackResults();

  infoPanelMode = "overview";

  renderAll();

  setInterval(gameTick, CONFIG.GAME.GAME_TICK_MS);
}


// ==========================================================
// Start the game
// ==========================================================

initializeGame();