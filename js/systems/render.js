// ==========================================================
// Render System
// ==========================================================


// ==========================================================
// UI State
// ==========================================================

let infoPanelMode = "overview";

let rosterMode = "latest";
let rosterSortMode = "newest";
let rosterSortDirection = "desc";
let rosterFranchiseFilter = "all";
let rosterRarityFilter = "all";

let businessSortMode = "tier";
let businessSortDirection = "asc";
let businessTierFilter = "all";
let businessFranchiseFilter = "all";
let businessTagFilter = "all";


// ==========================================================
// Top bar
// ==========================================================

function renderTopbar() {
  const moneyDisplay = document.getElementById("moneyDisplay");
  if (moneyDisplay) moneyDisplay.textContent = `Credits: ${state.credits}`;

  const tokenDisplay = document.getElementById("tokenDisplay");
  if (tokenDisplay) tokenDisplay.textContent = `Tokens: ${state.tokens}`;

  const freePackBtn = document.getElementById("freePackBtn");
  if (freePackBtn) {
    const dailyAvailable = getDailyTokenAvailable();
    freePackBtn.disabled = !dailyAvailable;
    freePackBtn.textContent = dailyAvailable ? "Claim Daily Token" : "Daily Token Claimed";
  }

  const basicPackBtn = document.getElementById("basicPackBtn");
  if (basicPackBtn) {
    basicPackBtn.disabled = state.tokens < CONFIG.PACKS.BASIC.tokenCost;
    basicPackBtn.textContent = `Basic Pack (${CONFIG.PACKS.BASIC.tokenCost} Token${CONFIG.PACKS.BASIC.tokenCost === 1 ? "" : "s"})`;
  }

  const uncommonPackBtn = document.getElementById("uncommonPackBtn");
  if (uncommonPackBtn) {
    uncommonPackBtn.disabled = state.tokens < CONFIG.PACKS.UNCOMMON.tokenCost;
    uncommonPackBtn.textContent = `Uncommon Pack (${CONFIG.PACKS.UNCOMMON.tokenCost} Tokens)`;
  }

  const rarePackBtn = document.getElementById("rarePackBtn");
  if (rarePackBtn) {
    rarePackBtn.disabled = state.tokens < CONFIG.PACKS.RARE.tokenCost;
    rarePackBtn.textContent = `Rare Pack (${CONFIG.PACKS.RARE.tokenCost} Tokens)`;
  }
}

function renderSpecialPacks() {
  const section = document.getElementById("specialPacksSection");
  const container = document.getElementById("specialPacksContainer");

  if (!section || !container) return;

  const franchise = getDailySpecialPackFranchise();

  if (!franchise) {
    section.style.display = "none";
    container.innerHTML = "";
    return;
  }

  section.style.display = "block";

  const cost = CONFIG.PACKS.SPECIAL_FRANCHISE.tokenCost;

  container.innerHTML = `
    <button
      id="dailySpecialPackBtn"
      class="secondary"
      ${state.tokens < cost ? "disabled" : ""}
    >
      ${franchise} Pack (${cost} Tokens)
    </button>
  `;

  const button = document.getElementById("dailySpecialPackBtn");

  if (button) {
    button.addEventListener("click", () => {
      recentPackResults = openDailySpecialFranchisePack();
      openPackModal(recentPackResults);
      renderAll();
    });
  }
}


// ==========================================================
// Image helpers
// ==========================================================

function getCharacterImagePath(card) {
  return card?.imagePath?.trim() || CONFIG.FALLBACKS.CHARACTER_IMAGE;
}

function getCharacterImageAlt(card) {
  return card?.imageAlt?.trim() || card?.displayName || "Character image";
}

function getCharacterImageHtml(card, className = "character-image") {
  return `
    <img
      src="${getCharacterImagePath(card)}"
      alt="${getCharacterImageAlt(card)}"
      class="${className}"
      onerror="this.onerror=null;this.src='${CONFIG.FALLBACKS.CHARACTER_IMAGE}';"
    />
  `;
}

function getBusinessImagePath(business) {
  return business?.imagePath?.trim() || CONFIG.FALLBACKS.BUSINESS_IMAGE;
}

function getBusinessImageAlt(business) {
  return business?.imageAlt?.trim() || business?.name || "Business image";
}

function getBusinessImageHtml(business, className = "info-business-image") {
  return `
    <img
      src="${getBusinessImagePath(business)}"
      alt="${getBusinessImageAlt(business)}"
      class="${className}"
      onerror="this.onerror=null;this.src='${CONFIG.FALLBACKS.BUSINESS_IMAGE}';"
    />
  `;
}

function getBusinessModalImageHtml(business) {
  return `
    <div class="business-modal-image-frame">
      <img
        src="${getBusinessImagePath(business)}"
        alt="${getBusinessImageAlt(business)}"
        class="business-modal-image"
        onerror="this.onerror=null;this.src='${CONFIG.FALLBACKS.BUSINESS_IMAGE}';"
      />
    </div>
  `;
}

function getRarityStarsHtml(card) {
  const stars = card.stars || CONFIG.RARITIES[card.rarity]?.stars || 1;
  return "★".repeat(stars);
}

function getRarityLabel(card) {
  return CONFIG.RARITIES[card.rarity]?.label || card.rarity;
}

function getRarityDisplay(card) {
  return `${getRarityStarsHtml(card)} ${getRarityLabel(card)}`;
}

// ==========================================================
// Pack modal
// ==========================================================

function renderPackResults(cards) {
  const container = document.getElementById("packResults");
  if (container) container.innerHTML = "";
}

function openPackModal(cards) {
  const modal = document.getElementById("packModal");
  if (!modal) return;

  renderPackModalCards(cards);
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closePackModal() {
  const modal = document.getElementById("packModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");

  if (state.firstPackGuidancePending) {
    state.firstPackGuidancePending = false;
    state.economyStarted = true;
    setHeadline(
      "Business is underway",
      "The clock is running. Assigned workers will now generate credits, and maintenance costs can now apply.",
      "system"
    );
    saveGame();
    renderAll();
  }

  openNextTokenRewardModal();
}

function renderPackModalCards(cards) {
  const container = document.getElementById("packModalCards");
  if (!container) return;

  if (!Array.isArray(cards) || cards.length === 0) {
    container.innerHTML = `<div class="empty-state">No new cards to show.</div>`;
    return;
  }

  const firstPackGuidanceHtml = state.firstPackGuidancePending
    ? `
      <div class="first-pack-guidance">
        <div class="first-pack-guidance-title">Congratulations — your first crew is aboard!</div>
        <div>
          You just opened your first pack and received a new set of workers.
          You currently own a <strong>Moisture Farm</strong>. Assign your workers there to start earning credits.
        </div>
      </div>
    `
    : "";

  container.innerHTML = firstPackGuidanceHtml + cards.map(card => {
    const isAssigned = !!card.assignedBusinessId;

    return `
      <div class="card ${card.rarity}">
        ${getCharacterImageHtml(card, "modal-character-image")}

        <div class="name">${card.displayName}</div>
        ${card.subtitle ? `<div class="small muted">${card.subtitle}</div>` : ""}
        <div class="muted">${card.franchise}</div>
        <div class="small">${CONFIG.RARITIES[card.rarity]?.label || card.rarity} • ${card.stars || CONFIG.RARITIES[card.rarity]?.stars || 1}★</div>
        <div class="small">Prestige: ${card.prestige || 1}</div>
        <div class="small">Power: ${card.basePower}</div>
        <div class="small">Traits: ${card.traits.join(", ")}</div>
        <div class="small muted">${card.flavor}</div>

        ${
          isAssigned
            ? `<div class="small good" style="margin-top:10px;">Assigned to ${getBusinessDef(card.assignedBusinessId)?.name || "Unknown"}</div>`
            : `
              <div class="modal-card-actions">
                <select id="assign-select-${card.instanceId}" class="assignment-select">
                  <option value="">Choose assignment...</option>
                  ${getBusinessAssignmentOptionsHtml(card.assignedBusinessId || "")}
                </select>

                <button class="secondary small-button" onclick="assignCardFromModal(${card.instanceId})">
                  Assign
                </button>
              </div>
            `
        }
      </div>
    `;
  }).join("");
}

function assignCardFromModal(cardInstanceId) {
  const select = document.getElementById(`assign-select-${cardInstanceId}`);
  if (!select || !select.value) return;

  const assigned = assignCardToBusiness(cardInstanceId, select.value);

  if (assigned) {
    renderRoster();
    renderInfoPanel();
    renderPackModalCards(recentPackResults);
  }
}


// ==========================================================
// Assignment options
// ==========================================================

function getBusinessAssignmentOptionsHtml(selectedBusinessId = "") {
  return getUnlockedBusinesses()
    .map(business => `
      <option value="${business.id}" ${business.id === selectedBusinessId ? "selected" : ""}>
        ${business.name}
      </option>
    `)
    .join("");
}


// ==========================================================
// Roster helpers
// ==========================================================

function getRaritySortOrder(rarity) {
  return CONFIG.RARITY_ORDER.indexOf(rarity);
}

function getCardCurrentIncome(card) {
  if (!card.assignedBusinessId) return 0;
  return Math.floor(calculateCardOutput(card, card.assignedBusinessId));
}

function renderRosterModeTabs() {
  document.getElementById("rosterModeLatestBtn")?.classList.toggle("active", rosterMode === "latest");
  document.getElementById("rosterModeUnassignedBtn")?.classList.toggle("active", rosterMode === "unassigned");
  document.getElementById("rosterModeFilteredBtn")?.classList.toggle("active", rosterMode === "filtered");

  const sortSelect = document.getElementById("rosterSortSelect");
  if (sortSelect) sortSelect.value = rosterSortMode;

  const dirBtn = document.getElementById("rosterSortDirectionBtn");
  if (dirBtn) dirBtn.textContent = rosterSortDirection === "asc" ? "↑" : "↓";
}

function getRosterCardsForCurrentMode() {
  if (rosterMode === "latest") {
    return [...state.cards]
      .sort((a, b) => (b.acquiredAt || 0) - (a.acquiredAt || 0))
      .slice(0, 20);
  }

  if (rosterMode === "unassigned") {
    return state.cards.filter(card => !card.assignedBusinessId);
  }

  return [...state.cards];
}

function getUniqueFranchises() {
  return [...new Set(state.cards.map(card => card.franchise))]
    .filter(Boolean)
    .sort();
}

function renderRosterFilterControls() {
  const filterControls = document.getElementById("rosterFilterControls");
  const franchiseSelect = document.getElementById("rosterFranchiseFilter");
  const raritySelect = document.getElementById("rosterRarityFilter");

  if (filterControls) {
    filterControls.style.display = rosterMode === "filtered" ? "flex" : "none";
  }

  if (franchiseSelect) {
    const franchises = getUniqueFranchises();

    franchiseSelect.innerHTML = `
      <option value="all">All Franchises</option>
      ${franchises.map(franchise => `
        <option value="${franchise}" ${franchise === rosterFranchiseFilter ? "selected" : ""}>
          ${franchise}
        </option>
      `).join("")}
    `;
  }

  if (raritySelect) raritySelect.value = rosterRarityFilter;
}

function applyRosterFilters(cards) {
  if (rosterMode !== "filtered") return cards;

  return cards.filter(card => {
    const franchiseMatches = rosterFranchiseFilter === "all" || card.franchise === rosterFranchiseFilter;
    const rarityMatches = rosterRarityFilter === "all" || card.rarity === rosterRarityFilter;

    return franchiseMatches && rarityMatches;
  });
}

function applySortDirection(value) {
  return rosterSortDirection === "asc" ? value : -value;
}

function sortRosterCards(cards) {
  return [...cards].sort((a, b) => {
    switch (rosterSortMode) {
      case "name":
        return rosterSortDirection === "asc"
          ? a.displayName.localeCompare(b.displayName)
          : b.displayName.localeCompare(a.displayName);

      case "assignment": {
        const aAssignment = a.assignedBusinessId ? getBusinessDef(a.assignedBusinessId)?.name || "" : "Unassigned";
        const bAssignment = b.assignedBusinessId ? getBusinessDef(b.assignedBusinessId)?.name || "" : "Unassigned";

        return rosterSortDirection === "asc"
          ? aAssignment.localeCompare(bAssignment)
          : bAssignment.localeCompare(aAssignment);
      }

      case "morale":
        return applySortDirection(a.morale - b.morale);

      case "income":
        return applySortDirection(getCardCurrentIncome(a) - getCardCurrentIncome(b));

      case "rarity":
        return applySortDirection(getRaritySortOrder(a.rarity) - getRaritySortOrder(b.rarity));

      case "franchise": {
        const diff = a.franchise.localeCompare(b.franchise);
        return rosterSortDirection === "asc" ? diff : -diff;
      }

      case "newest":
      default:
        return applySortDirection((a.acquiredAt || 0) - (b.acquiredAt || 0));
    }
  });
}


// ==========================================================
// Roster rendering
// ==========================================================

function renderRoster() {
  const roster = document.getElementById("roster");
  if (!roster) return;

  renderRosterModeTabs();
  renderRosterFilterControls();

  if (state.cards.length === 0) {
    roster.innerHTML = `<div class="muted">No workers yet. Open a pack.</div>`;
    return;
  }

  const filteredCards = applyRosterFilters(getRosterCardsForCurrentMode());
  const sortedCards = sortRosterCards(filteredCards);

  if (sortedCards.length === 0) {
    roster.innerHTML = `<div class="empty-state">No workers match this view.</div>`;
    return;
  }

  roster.innerHTML = `
    <div class="worker-list">
      ${sortedCards.map(card => {
        const isUnassigned = !card.assignedBusinessId;
        const assignmentName = isUnassigned
          ? "Unassigned"
          : getBusinessDef(card.assignedBusinessId)?.name || "Unknown";

        const income = getCardCurrentIncome(card);

        return `
          <div
            class="worker-row ${card.rarity} ${isUnassigned ? "worker-unassigned" : ""}"
            onclick="openWorkerModal(${card.instanceId})"
          >
            ${getCharacterImageHtml(card, "worker-thumb")}

            <div class="worker-main">
              <div class="worker-identity">
                <div class="worker-name">${card.displayName}</div>
                ${card.subtitle ? `<div class="worker-subtitle">${card.subtitle}</div>` : ""}
                <div class="worker-meta">${card.franchise} • ${getRarityStarsHtml(card)}</div>
              </div>

              <div class="worker-stats-row">
                <div class="worker-stat">
                  <span class="worker-stat-label">Assignment:</span>
                  <span class="worker-stat-value">${assignmentName}</span>
                </div>

                <div class="worker-stat">
                  <span class="worker-stat-label">Morale:</span>
                  <span class="worker-stat-value ${getMoraleClass(card.morale)}">${card.morale}</span>
                </div>

                <div class="worker-stat">
                  <span class="worker-stat-label">Income:</span>
                  <span class="worker-stat-value">${income}/sec</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}


// ==========================================================
// Worker modal
// ==========================================================

function openWorkerModal(cardInstanceId) {
  const card = getCardByInstanceId(cardInstanceId);
  if (!card) return;

  const modal = document.getElementById("workerModal");
  const title = document.getElementById("workerModalTitle");
  const subtitle = document.getElementById("workerModalSubtitle");
  const content = document.getElementById("workerModalContent");

  if (!modal || !title || !subtitle || !content) return;

  title.textContent = card.displayName;
  subtitle.textContent = card.subtitle || card.franchise;

  const assignmentName = card.assignedBusinessId
    ? getBusinessDef(card.assignedBusinessId)?.name || "Unknown"
    : "Unassigned";

  const income = getCardCurrentIncome(card);
  const maintenance = calculateWorkerMaintenance(card);

  content.innerHTML = `
    <div class="worker-modal-grid">
      ${getCharacterImageHtml(card, "worker-modal-image")}

      <div>
        <div><strong>Franchise:</strong> ${card.franchise}</div>
        <div><strong>Rarity:</strong> ${getRarityDisplay(card)}</div>
        <div><strong>Prestige:</strong> ${card.prestige || 1}</div>
        <div><strong>Power:</strong> ${card.basePower}</div>
        <div><strong>Morale:</strong> ${card.morale}</div>
        <div><strong>Assignment:</strong> ${assignmentName}</div>
        <div><strong>Income:</strong> ${income}/sec</div>
        <div><strong>Maintenance:</strong> ${maintenance}/sec</div>

        <div style="margin-top:8px;">
          <strong>Traits:</strong><br>
          ${renderTraitBadges(card.traits)}
        </div>

        <div style="margin-top:8px;">
          <strong>Tags:</strong><br>
          ${renderCharacterTagBadges(card.tags)}
        </div>

        <div class="muted" style="margin-top:8px;">${card.flavor}</div>      </div>
    </div>

    <div class="worker-modal-section">
      <label class="small muted">Assign to business</label>

      <div class="worker-modal-actions">
        <select id="worker-modal-assign-select" class="assignment-select">
          <option value="">Choose assignment...</option>
          ${getBusinessAssignmentOptionsHtml(card.assignedBusinessId || "")}
        </select>

        <button class="secondary small-button" onclick="assignCardFromWorkerModal(${card.instanceId})">
          Assign
        </button>

        ${
          card.assignedBusinessId
            ? `<button class="secondary small-button" onclick="unassignCardFromWorkerModal(${card.instanceId})">Unassign</button>`
            : ""
        }

        <button class="secondary small-button" onclick="releaseCardFromWorkerModal(${card.instanceId})">
          Release
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeWorkerModal() {
  const modal = document.getElementById("workerModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function assignCardFromWorkerModal(cardInstanceId) {
  const select = document.getElementById("worker-modal-assign-select");
  if (!select || !select.value) return;

  const assigned = assignCardToBusiness(cardInstanceId, select.value);

  if (assigned) {
    renderAll();
    openWorkerModal(cardInstanceId);
  }
}

function unassignCardFromWorkerModal(cardInstanceId) {
  const card = getCardByInstanceId(cardInstanceId);
  if (!card) return;

  unassignCard(card);
  setHeadline("Worker unassigned", `${card.displayName} is now unassigned.`);
  saveGame();
  renderAll();
  openWorkerModal(cardInstanceId);
}

function releaseCardFromWorkerModal(cardInstanceId) {
  const card = getCardByInstanceId(cardInstanceId);
  if (!card) return;

  const confirmed = window.confirm(`Release ${card.displayName}? This cannot be undone.`);
  if (!confirmed) return;

  checkReleaseMilestones(card);
  if (card.assignedBusinessId) {
    unassignCard(card);
  }

  state.cards = state.cards.filter(c => c.instanceId !== cardInstanceId);

  setHeadline("Worker released", `${card.displayName} has left your roster.`);
  saveGame();

  closeWorkerModal();
  renderAll();
}


// ==========================================================
// Headline rendering
// ==========================================================

function renderHeadline() {
  const titleEl = document.getElementById("headlineTitle");
  const bodyEl = document.getElementById("headlineBody");

  if (titleEl) titleEl.textContent = state.headline?.title || "";

  if (bodyEl) {
    const headlines = getRecentHeadlines(3);

    bodyEl.innerHTML = headlines.map((headline, index) => `
      <div class="headline-history-preview headline-${headline.type || "general"} ${index === 0 ? "current" : ""}">
        <strong>${headline.title}</strong>
        <div>${headline.body}</div>
      </div>
    `).join("");
  }
}

function openHeadlineModal() {
  const modal = document.getElementById("headlineModal");
  const content = document.getElementById("headlineModalContent");

  if (!modal || !content) return;

  const headlines = getRecentHeadlines(10);

  content.innerHTML = headlines.length
    ? headlines.map(headline => `
        <div class="headline-history-item headline-${headline.type || "general"}">
          <div class="headline-history-title">${headline.title}</div>
          <div class="muted">${headline.body}</div>
        </div>
      `).join("")
    : `<div class="empty-state">No headlines yet.</div>`;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeHeadlineModal() {
  const modal = document.getElementById("headlineModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}


// ==========================================================
// Info panel helpers
// ==========================================================

function getOwnedBusinesses() {
  return BUSINESSES.filter(business => getBusinessState(business.id)?.unlocked);
}

function getLockedBusinesses() {
  return BUSINESSES.filter(business => !getBusinessState(business.id)?.unlocked);
}

function getAverageMorale() {
  if (state.cards.length === 0) return 0;
  return Math.round(state.cards.reduce((sum, card) => sum + card.morale, 0) / state.cards.length);
}

function getLowMoraleCards() {
  return state.cards.filter(card => card.morale < CONFIG.MORALE.LOW_THRESHOLD);
}

function getAffordableLockedBusinesses() {
  return getLockedBusinesses().filter(business => state.credits >= business.unlockCost);
}

function renderInfoModeTabs() {
  document.getElementById("infoModeOverviewBtn")?.classList.toggle("active", infoPanelMode === "overview");
  document.getElementById("infoModeOwnedBtn")?.classList.toggle("active", infoPanelMode === "owned");
  document.getElementById("infoModeBuyBtn")?.classList.toggle("active", infoPanelMode === "buy");
}


// ==========================================================
// Business sorting/filtering
// ==========================================================

function getUniqueBusinessFranchises() {
  return [...new Set(BUSINESSES.map(business => business.franchise))]
    .filter(Boolean)
    .sort();
}

function getUniqueBusinessTags() {
  return [...new Set(BUSINESSES.flatMap(business => business.tags || []))]
    .filter(Boolean)
    .sort();
}

function renderBusinessControls() {
  const controls = document.querySelector(".business-controls");
  if (controls) {
    controls.style.display = infoPanelMode === "owned" || infoPanelMode === "buy" ? "block" : "none";
  }

  const sortSelect = document.getElementById("businessSortSelect");
  if (sortSelect) sortSelect.value = businessSortMode;

  const dirBtn = document.getElementById("businessSortDirectionBtn");
  if (dirBtn) dirBtn.textContent = businessSortDirection === "asc" ? "↑" : "↓";

  const tierSelect = document.getElementById("businessTierFilter");
  if (tierSelect) tierSelect.value = businessTierFilter;

  const franchiseSelect = document.getElementById("businessFranchiseFilter");
  if (franchiseSelect) {
    franchiseSelect.innerHTML = `
      <option value="all">All Franchises</option>
      ${getUniqueBusinessFranchises().map(franchise => `
        <option value="${franchise}" ${businessFranchiseFilter === franchise ? "selected" : ""}>
          ${franchise}
        </option>
      `).join("")}
    `;
  }

  const tagSelect = document.getElementById("businessTagFilter");
  if (tagSelect) {
    tagSelect.innerHTML = `
      <option value="all">All Tags</option>
      ${getUniqueBusinessTags().map(tag => `
        <option value="${tag}" ${businessTagFilter === tag ? "selected" : ""}>
          ${tag}
        </option>
      `).join("")}
    `;
  }
}

function applyBusinessFilters(businesses) {
  return businesses.filter(business => {
    const tierMatches = businessTierFilter === "all" || String(business.tier) === businessTierFilter;
    const franchiseMatches = businessFranchiseFilter === "all" || business.franchise === businessFranchiseFilter;
    const tagMatches = businessTagFilter === "all" || business.tags.includes(businessTagFilter);

    return tierMatches && franchiseMatches && tagMatches;
  });
}

function sortBusinesses(businesses) {
  return [...businesses].sort((a, b) => {
    let valueA;
    let valueB;

    switch (businessSortMode) {
      case "name":
        valueA = a.name;
        valueB = b.name;
        break;

      case "income":
        valueA = calculateBusinessIncome(a.id);
        valueB = calculateBusinessIncome(b.id);
        break;

      case "maintenance":
        valueA = calculateBusinessMaintenance(a.id);
        valueB = calculateBusinessMaintenance(b.id);
        break;

      case "net":
        valueA = calculateBusinessIncome(a.id) - calculateBusinessMaintenance(a.id);
        valueB = calculateBusinessIncome(b.id) - calculateBusinessMaintenance(b.id);
        break;

      case "tier":
      default:
        valueA = a.tier;
        valueB = b.tier;
        break;
    }

    if (typeof valueA === "string") {
      const diff = valueA.localeCompare(valueB);
      return businessSortDirection === "asc" ? diff : -diff;
    }

    return businessSortDirection === "asc" ? valueA - valueB : valueB - valueA;
  });
}

function getBusinessesForInfoPanel() {
  const baseList = infoPanelMode === "owned" ? getOwnedBusinesses() : getLockedBusinesses();
  return sortBusinesses(applyBusinessFilters(baseList));
}


// ==========================================================
// Overview panel
// ==========================================================

function renderOverviewPanel() {
  const grossIncome = calculateGrossIncomePerTick();
  const maintenance = calculateTotalMaintenancePerTick();
  const netIncome = calculateNetIncomePerTick();

  const unassignedWorkers = getUnassignedCards().length;
  const lowMoraleWorkers = getLowMoraleCards().length;
  const affordableBusinesses = getAffordableLockedBusinesses().length;

  const attentionItems = [];

  if (unassignedWorkers > 0) attentionItems.push(`${unassignedWorkers} worker${unassignedWorkers === 1 ? "" : "s"} unassigned`);
  if (lowMoraleWorkers > 0) attentionItems.push(`${lowMoraleWorkers} worker${lowMoraleWorkers === 1 ? "" : "s"} below ${CONFIG.MORALE.LOW_THRESHOLD} morale`);
  if (affordableBusinesses > 0) attentionItems.push(`${affordableBusinesses} business${affordableBusinesses === 1 ? "" : "es"} affordable to purchase`);
  if (netIncome < 0) attentionItems.push(`You are losing ${Math.abs(netIncome)} credits per second`);

  return `
    <div class="info-panel-grid">
      <div class="info-stat-card">
        <div class="info-stat-label">Total Workers</div>
        <div class="info-stat-value">${state.cards.length}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Unassigned</div>
        <div class="info-stat-value">${unassignedWorkers}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Owned Businesses</div>
        <div class="info-stat-value">${getOwnedBusinesses().length}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Gross Income/sec</div>
        <div class="info-stat-value">${grossIncome}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Maintenance/sec</div>
        <div class="info-stat-value">${maintenance}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Net Income/sec</div>
        <div class="info-stat-value ${netIncome < 0 ? "bad" : "good"}">${netIncome}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Average Morale</div>
        <div class="info-stat-value">${getAverageMorale()}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Low Morale</div>
        <div class="info-stat-value">${lowMoraleWorkers}</div>
      </div>
    </div>

    <div class="attention-block">
      <div class="attention-title">Attention Needed</div>
      ${
        attentionItems.length > 0
          ? `<ul class="attention-list">${attentionItems.map(item => `<li>${item}</li>`).join("")}</ul>`
          : `<div class="muted">Nothing urgent right now. Management may proceed with confidence.</div>`
      }
    </div>
  `;
}


// ==========================================================
// Business list panels
// ==========================================================

function renderOwnedBusinessesPanel() {
  const businesses = getBusinessesForInfoPanel();

  if (businesses.length === 0) {
    return `<div class="empty-state">No owned businesses match this view.</div>`;
  }

  return `
    <div class="info-business-list">
      ${businesses.map(business => {
        const businessState = getBusinessState(business.id);
        const assignedCards = getAssignedCardsForBusiness(business.id);
        const income = calculateBusinessIncome(business.id);
        const maintenance = calculateBusinessMaintenance(business.id);
        const net = income - maintenance;

        return `
          <div class="info-business-card" onclick="openBusinessModal('${business.id}')">
            ${getBusinessImageHtml(business)}

            <div class="info-business-main">
              <div class="info-business-title">${business.name}</div>
              <div class="info-business-meta">${business.franchise} • Tier ${business.tier}</div>
              <div class="info-business-summary">${business.description}</div>

              <div class="info-business-stats">
                <span>Income/sec: ${income}</span>
                <span>Maintenance/sec: ${maintenance}</span>
                <span>Net/sec: ${net}</span>
                <span>Workers: ${assignedCards.length}/${getMaxSlotsForBusiness(business.id)}</span>
                <span>Capacity: ${businessState.capacityLevel}/${CONFIG.UPGRADES.MAX_CAPACITY_LEVEL}</span>
                <span>Efficiency: ${businessState.efficiencyLevel}/${CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL}</span>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderBuyBusinessesPanel() {
  const businesses = getBusinessesForInfoPanel();

  if (businesses.length === 0) {
    return `<div class="empty-state">No available businesses match this view.</div>`;
  }

  return `
    <div class="info-business-list">
      ${businesses.map(business => {
        const affordable = state.credits >= business.unlockCost;

        return `
          <div class="info-business-card" onclick="openBusinessModal('${business.id}')">
            ${getBusinessImageHtml(business)}

            <div class="info-business-main">
              <div class="info-business-title">${business.name}</div>
              <div class="info-business-meta">${business.franchise} • Tier ${business.tier}</div>
              <div class="info-business-summary">${business.description}</div>

              <div class="info-business-stats">
                <span>Unlock Cost: ${business.unlockCost}</span>
                <span>Job Type: ${business.jobType}</span>
                <span>${affordable ? "Affordable" : "Cannot afford yet"}</span>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}


// ==========================================================
// Business modal
// ==========================================================

function openBusinessModal(businessId) {
  const business = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  const modal = document.getElementById("businessModal");
  const title = document.getElementById("businessModalTitle");
  const subtitle = document.getElementById("businessModalSubtitle");
  const content = document.getElementById("businessModalContent");

  if (!business || !modal || !title || !subtitle || !content) return;

  const isOwned = !!businessState?.unlocked;
  const assignedCards = isOwned ? getAssignedCardsForBusiness(businessId) : [];
  const income = isOwned ? calculateBusinessIncome(businessId) : 0;
  const maintenance = isOwned ? calculateBusinessMaintenance(businessId) : 0;
  const net = income - maintenance;

  title.textContent = business.name;
  subtitle.textContent = `${business.franchise} • Tier ${business.tier}`;

  content.innerHTML = `
    <div class="worker-modal-grid">
      ${getBusinessModalImageHtml(business)}

      <div class="business-modal-main">
        <div><strong>Job Type:</strong> ${renderJobTypeBadge(business.jobType)}</div>
        <div><strong>Tags:</strong> ${renderBusinessTagBadges(business.tags)}</div>
        <div><strong>Description:</strong> ${business.description}</div>

        ${
          isOwned
            ? `
              <div style="margin-top:10px;"><strong>Income:</strong> ${income}/sec</div>
              <div><strong>Maintenance:</strong> ${maintenance}/sec</div>
              <div><strong>Net:</strong> ${net}/sec</div>
              <div><strong>Workers:</strong> ${assignedCards.length}/${getMaxSlotsForBusiness(businessId)}</div>
              <div><strong>Capacity Level:</strong> ${businessState.capacityLevel}/${CONFIG.UPGRADES.MAX_CAPACITY_LEVEL}</div>
              <div><strong>Efficiency Level:</strong> ${businessState.efficiencyLevel}/${CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL}</div>
            `
            : `
              <div style="margin-top:10px;"><strong>Unlock Cost:</strong> ${business.unlockCost}</div>
            `
        }
      </div>
    </div>

    ${
      isOwned
        ? renderBusinessModalOwnedActions(businessId)
        : renderBusinessModalPurchaseActions(businessId)
    }

    ${
      isOwned
        ? `
          <div class="business-modal-section">
            <div class="attention-title">Assigned Workers</div>
            ${
              assignedCards.length > 0
                ? assignedCards.map(card => `
                    <div class="headline-history-item">
                      <strong>${card.displayName}</strong>
                      ${card.subtitle ? `<div class="muted">${card.subtitle}</div>` : ""}
                      <div class="small">Morale: ${card.morale} • Income: ${getCardCurrentIncome(card)}/sec</div>
                    </div>
                  `).join("")
                : `<div class="empty-state">No workers assigned.</div>`
            }
          </div>
        `
        : ""
    }
  `;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function renderCharacterTagBadge(tag) {
  const def = CHARACTER_TAG_DEFS[tag];

  if (!def) {
    return `<span class="tag-badge" title="Unknown character tag">#${tag}</span>`;
  }

  return `
    <span class="tag-badge" title="${def.description}">
      ${def.label}
    </span>
  `;
}

function renderCharacterTagBadges(tags = []) {
  return tags.map(tag => renderCharacterTagBadge(tag)).join(" ");
}

function renderTraitBadge(trait) {
  return `<span class="tag-badge" title="Character trait">#${trait}</span>`;
}

function renderTraitBadges(traits = []) {
  return traits.map(trait => renderTraitBadge(trait)).join(" ");
}

function renderBusinessModalOwnedActions(businessId) {
  const capacityCost = getUpgradeCost(businessId, "capacity");
  const efficiencyCost = getUpgradeCost(businessId, "efficiency");

  return `
    <div class="business-modal-section">
      <div class="worker-modal-actions">
        <button
          class="secondary small-button"
          onclick="upgradeBusinessFromModal('${businessId}', 'capacity')"
          ${capacityCost === null ? "disabled" : ""}
        >
          ${capacityCost === null ? "Capacity Maxed" : `Upgrade Capacity (${capacityCost})`}
        </button>

        <button
          class="secondary small-button"
          onclick="upgradeBusinessFromModal('${businessId}', 'efficiency')"
          ${efficiencyCost === null ? "disabled" : ""}
        >
          ${efficiencyCost === null ? "Efficiency Maxed" : `Upgrade Efficiency (${efficiencyCost})`}
        </button>

        <button class="secondary small-button" onclick="activateAdCampaignFromModal('${businessId}')">
          Advertising
        </button>
      </div>
    </div>
  `;
}

function renderBusinessModalPurchaseActions(businessId) {
  const business = getBusinessDef(businessId);
  const affordable = state.credits >= business.unlockCost;

  return `
    <div class="business-modal-section">
      <div class="business-modal-actions">
        <button
          class="secondary small-button"
          onclick="purchaseBusinessFromModal('${businessId}')"
          ${affordable ? "" : "disabled"}
        >
          ${affordable ? "Purchase Business" : "Cannot Afford Yet"}
        </button>
      </div>
    </div>
  `;
}

function closeBusinessModal() {
  const modal = document.getElementById("businessModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function purchaseBusinessFromModal(businessId) {
  const purchased = purchaseBusiness(businessId);

  if (purchased) {
    renderAll();
    openBusinessModal(businessId);
  }
}

function upgradeBusinessFromModal(businessId, upgradeType) {
  const upgraded = upgradeBusiness(businessId, upgradeType);

  if (upgraded) {
    renderAll();
    openBusinessModal(businessId);
  }
}

function activateAdCampaignFromModal(businessId) {
  const activated = activateAdCampaign(businessId);

  if (activated) {
    renderAll();
    openBusinessModal(businessId);
  }
}


// ==========================================================
// Main info panel
// ==========================================================

function renderInfoPanel() {
  renderInfoModeTabs();
  renderBusinessControls();

  const container = document.getElementById("infoPanelContent");
  if (!container) return;

  switch (infoPanelMode) {
    case "owned":
      container.innerHTML = renderOwnedBusinessesPanel();
      break;

    case "buy":
      container.innerHTML = renderBuyBusinessesPanel();
      break;

    case "overview":
    default:
      container.innerHTML = renderOverviewPanel();
      break;
  }
}


// ==========================================================
// Business type functions
// ==========================================================

function renderJobTypeBadge(jobType) {
  const def = JOB_TYPE_DEFS[jobType];

  if (!def) {
    return `<span class="tag-badge" title="Unknown job type">${jobType}</span>`;
  }

  return `
    <span class="tag-badge job-type-badge" title="${def.description}">
      ${def.label}
    </span>
  `;
}

function renderBusinessTagBadge(tag) {
  const def = BUSINESS_TAG_DEFS[tag];

  if (!def) {
    return `<span class="tag-badge" title="Unknown tag">#${tag}</span>`;
  }

  return `
    <span class="tag-badge" title="${def.description}">
      ${def.label}
    </span>
  `;
}

function renderBusinessTagBadges(tags = []) {
  return tags.map(tag => renderBusinessTagBadge(tag)).join(" ");
}




// ==========================================================
// Token reward modal
// ==========================================================

let activeTokenNotification = null;

function anyBlockingModalOpen() {
  const blockingModalIds = [
    "packModal",
    "workerModal",
    "businessModal",
    "headlineModal",
    "optionsModal"
  ];

  return blockingModalIds.some(id => {
    const modal = document.getElementById(id);
    return modal && !modal.classList.contains("hidden");
  });
}

function openNextTokenRewardModal() {
  if (state.options?.suppressTokenPopups) return;
  if (activeTokenNotification) return;
  if (anyBlockingModalOpen()) return;
  if (!Array.isArray(state.pendingTokenNotifications) || state.pendingTokenNotifications.length === 0) return;

  const modal = document.getElementById("tokenRewardModal");
  const titleEl = document.getElementById("tokenRewardModalTitle");
  const bodyEl = document.getElementById("tokenRewardModalBody");
  const suppressCheckbox = document.getElementById("suppressTokenPopupsCheckbox");

  if (!modal || !titleEl || !bodyEl) return;

  activeTokenNotification = state.pendingTokenNotifications[0];

  const amount = activeTokenNotification.amount || 1;
  titleEl.textContent = activeTokenNotification.title || "Token Earned";
  bodyEl.innerHTML = `
    <div class="token-reward-amount">+${amount} Token${amount === 1 ? "" : "s"}</div>
    <div>${activeTokenNotification.body || "You earned a token."}</div>
  `;

  if (suppressCheckbox) {
    suppressCheckbox.checked = !!state.options?.suppressTokenPopups;
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeTokenRewardModal() {
  const modal = document.getElementById("tokenRewardModal");
  const suppressCheckbox = document.getElementById("suppressTokenPopupsCheckbox");

  if (suppressCheckbox && suppressCheckbox.checked) {
    setSuppressTokenPopups(true);
  }

  if (Array.isArray(state.pendingTokenNotifications) && activeTokenNotification) {
    state.pendingTokenNotifications.shift();
  }

  activeTokenNotification = null;

  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }

  saveGame();
  renderTopbar();

  setTimeout(openNextTokenRewardModal, 0);
}

function syncOptionsControls() {
  const optionsSuppressCheckbox = document.getElementById("optionsSuppressTokenPopupsCheckbox");
  if (optionsSuppressCheckbox) {
    optionsSuppressCheckbox.checked = !!state.options?.suppressTokenPopups;
  }
}

// ==========================================================
// Lightweight refresh
// ==========================================================

function renderBusinessStatsOnly() {
  if (infoPanelMode === "overview") {
    renderInfoPanel();
  }
}


// ==========================================================
// Full render pass
// ==========================================================

function renderAll() {
  renderTopbar();
  renderSpecialPacks();
  renderRoster();
  renderHeadline();
  renderInfoPanel();
  syncOptionsControls();
  openNextTokenRewardModal();
}