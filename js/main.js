// ==========================================================
// Main Bootstrap
// ==========================================================

let recentPackResults = [];
let lastRosterRefreshAt = 0;


// ==========================================================
// Startup diagnostics
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
// Initialization helpers
// ==========================================================

function normalizeAllBusinesses() {
  BUSINESSES.forEach(business => {
    normalizeBusinessSlots(business.id);
  });
}

function initializeTagline() {
  const taglineEl = document.getElementById("tagline");
  if (!taglineEl) return;

  if (!Array.isArray(TAGLINES) || TAGLINES.length === 0) {
    taglineEl.textContent = "From every universe... into the wrong jobs.";
    return;
  }

  taglineEl.textContent = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
}

function initializePackResults() {
  renderPackResults(recentPackResults);
}


// ==========================================================
// Button wiring
// ==========================================================

function initializeButtons() {
  const freePackBtn = document.getElementById("freePackBtn");
  const basicPackBtn = document.getElementById("basicPackBtn");
  const uncommonPackBtn = document.getElementById("uncommonPackBtn");
  const rarePackBtn = document.getElementById("rarePackBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const devAddTokenBtn = document.getElementById("devAddTokenBtn");

  const closePackModalBtn = document.getElementById("closePackModalBtn");
  const packModal = document.getElementById("packModal");

  const closeWorkerModalBtn = document.getElementById("closeWorkerModalBtn");
  const workerModal = document.getElementById("workerModal");

  const closeBusinessModalBtn = document.getElementById("closeBusinessModalBtn");
  const businessModal = document.getElementById("businessModal");

  const headlineBox = document.querySelector(".headline-box");
  const closeHeadlineModalBtn = document.getElementById("closeHeadlineModalBtn");
  const headlineModal = document.getElementById("headlineModal");

  const infoModeOverviewBtn = document.getElementById("infoModeOverviewBtn");
  const infoModeOwnedBtn = document.getElementById("infoModeOwnedBtn");
  const infoModeBuyBtn = document.getElementById("infoModeBuyBtn");

  const rosterModeLatestBtn = document.getElementById("rosterModeLatestBtn");
  const rosterModeUnassignedBtn = document.getElementById("rosterModeUnassignedBtn");
  const rosterModeFilteredBtn = document.getElementById("rosterModeFilteredBtn");

  const rosterSortSelect = document.getElementById("rosterSortSelect");
  const rosterSortDirectionBtn = document.getElementById("rosterSortDirectionBtn");

  const rosterFranchiseFilterSelect = document.getElementById("rosterFranchiseFilter");
  const rosterRarityFilterSelect = document.getElementById("rosterRarityFilter");

  const businessSortSelect = document.getElementById("businessSortSelect");
  const businessSortDirectionBtn = document.getElementById("businessSortDirectionBtn");
  const businessTierFilterSelect = document.getElementById("businessTierFilter");
  const businessFranchiseFilterSelect = document.getElementById("businessFranchiseFilter");
  const businessTagFilterSelect = document.getElementById("businessTagFilter");


  // --------------------------------------------------------
  // Daily token claim
  // --------------------------------------------------------

  if (freePackBtn) {
    freePackBtn.addEventListener("click", () => {
      const claimed = claimDailyToken();
      if (claimed) renderAll();
    });
  }


  // --------------------------------------------------------
  // Pack buttons
  // --------------------------------------------------------

  if (basicPackBtn) {
    basicPackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("BASIC");
      openPackModal(recentPackResults);
      renderAll();
    });
  }

  if (uncommonPackBtn) {
    uncommonPackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("UNCOMMON");
      openPackModal(recentPackResults);
      renderAll();
    });
  }

  if (rarePackBtn) {
    rarePackBtn.addEventListener("click", () => {
      recentPackResults = openPackByType("RARE");
      openPackModal(recentPackResults);
      renderAll();
    });
  }


  // --------------------------------------------------------
  // Dev tools
  // --------------------------------------------------------

  if (devAddTokenBtn) {
    devAddTokenBtn.addEventListener("click", () => {
      state.tokens += 1;
      setHeadline("Test token added", "One test token was added for development.", "system");
      saveGame();
      renderAll();
    });
  }


  // --------------------------------------------------------
  // Save / reset
  // --------------------------------------------------------

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveGame();
      setHeadline("Progress saved", "Your local game has been saved in this browser.", "system");
      renderAll();
    });
  }

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
  // Pack modal
  // --------------------------------------------------------

  if (closePackModalBtn) {
    closePackModalBtn.addEventListener("click", closePackModal);
  }

  if (packModal) {
    packModal.addEventListener("click", event => {
      if (event.target === packModal) closePackModal();
    });
  }


  // --------------------------------------------------------
  // Worker modal
  // --------------------------------------------------------

  if (closeWorkerModalBtn) {
    closeWorkerModalBtn.addEventListener("click", closeWorkerModal);
  }

  if (workerModal) {
    workerModal.addEventListener("click", event => {
      if (event.target === workerModal) closeWorkerModal();
    });
  }


  // --------------------------------------------------------
  // Business modal
  // --------------------------------------------------------

  if (closeBusinessModalBtn) {
    closeBusinessModalBtn.addEventListener("click", closeBusinessModal);
  }

  if (businessModal) {
    businessModal.addEventListener("click", event => {
      if (event.target === businessModal) closeBusinessModal();
    });
  }


  // --------------------------------------------------------
  // Headline modal
  // --------------------------------------------------------

  if (headlineBox) {
    headlineBox.addEventListener("click", openHeadlineModal);
  }

  if (closeHeadlineModalBtn) {
    closeHeadlineModalBtn.addEventListener("click", closeHeadlineModal);
  }

  if (headlineModal) {
    headlineModal.addEventListener("click", event => {
      if (event.target === headlineModal) closeHeadlineModal();
    });
  }


  // --------------------------------------------------------
  // Info panel modes
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


  // --------------------------------------------------------
  // Roster modes
  // --------------------------------------------------------

  if (rosterModeLatestBtn) {
    rosterModeLatestBtn.addEventListener("click", () => {
      rosterMode = "latest";
      renderAll();
    });
  }

  if (rosterModeUnassignedBtn) {
    rosterModeUnassignedBtn.addEventListener("click", () => {
      rosterMode = "unassigned";
      renderAll();
    });
  }

  if (rosterModeFilteredBtn) {
    rosterModeFilteredBtn.addEventListener("click", () => {
      rosterMode = "filtered";
      renderAll();
    });
  }


  // --------------------------------------------------------
  // Roster sorting
  // --------------------------------------------------------

  if (rosterSortSelect) {
    rosterSortSelect.addEventListener("change", () => {
      rosterSortMode = rosterSortSelect.value;
      renderRoster();
    });
  }

  if (rosterSortDirectionBtn) {
    rosterSortDirectionBtn.addEventListener("click", () => {
      rosterSortDirection = rosterSortDirection === "asc" ? "desc" : "asc";
      renderRoster();
    });
  }


  // --------------------------------------------------------
  // Roster filters
  // --------------------------------------------------------

  if (rosterFranchiseFilterSelect) {
    rosterFranchiseFilterSelect.addEventListener("change", () => {
      rosterFranchiseFilter = rosterFranchiseFilterSelect.value;
      renderRoster();
    });
  }

  if (rosterRarityFilterSelect) {
    rosterRarityFilterSelect.addEventListener("change", () => {
      rosterRarityFilter = rosterRarityFilterSelect.value;
      renderRoster();
    });
  }


  // --------------------------------------------------------
  // Business sorting
  // --------------------------------------------------------

  if (businessSortSelect) {
    businessSortSelect.addEventListener("change", () => {
      businessSortMode = businessSortSelect.value;
      renderInfoPanel();
    });
  }

  if (businessSortDirectionBtn) {
    businessSortDirectionBtn.addEventListener("click", () => {
      businessSortDirection = businessSortDirection === "asc" ? "desc" : "asc";
      renderInfoPanel();
    });
  }


  // --------------------------------------------------------
  // Business filters
  // --------------------------------------------------------

  if (businessTierFilterSelect) {
    businessTierFilterSelect.addEventListener("change", () => {
      businessTierFilter = businessTierFilterSelect.value;
      renderInfoPanel();
    });
  }

  if (businessFranchiseFilterSelect) {
    businessFranchiseFilterSelect.addEventListener("change", () => {
      businessFranchiseFilter = businessFranchiseFilterSelect.value;
      renderInfoPanel();
    });
  }

  if (businessTagFilterSelect) {
    businessTagFilterSelect.addEventListener("change", () => {
      businessTagFilter = businessTagFilterSelect.value;
      renderInfoPanel();
    });
  }
}


// ==========================================================
// Game tick
// ==========================================================

function gameTick() {
  updateMorale();

  const netIncome = calculateNetIncomePerTick();
  state.credits += netIncome;
  checkRecurringMilestones();

  renderTopbar();
  renderHeadline();

  if (infoPanelMode === "overview") {
    renderInfoPanel();
  }

  const now = Date.now();
  if (now - lastRosterRefreshAt >= CONFIG.UI.ROSTER_REFRESH_MS) {
    renderRoster();
    lastRosterRefreshAt = now;
  }

  saveGame();
}


// ==========================================================
// Full initialization
// ==========================================================

function initializeGame() {
  runStartupDiagnostics();

  loadGame();
  normalizeAllBusinesses();

  initializeButtons();
  initializeTagline();
  initializePackResults();

  infoPanelMode = "overview";

  rosterMode = "latest";
  rosterSortMode = "newest";
  rosterSortDirection = "desc";
  rosterFranchiseFilter = "all";
  rosterRarityFilter = "all";

  businessSortMode = "tier";
  businessSortDirection = "asc";
  businessTierFilter = "all";
  businessFranchiseFilter = "all";
  businessTagFilter = "all";

  renderAll();

  setInterval(gameTick, CONFIG.GAME.GAME_TICK_MS);
}


// ==========================================================
// Start
// ==========================================================

initializeGame();