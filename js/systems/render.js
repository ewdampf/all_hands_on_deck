// ==========================================================
// Render System
// ----------------------------------------------------------
// Handles all DOM rendering for the game UI.
// ==========================================================


// ==========================================================
// Info Panel Mode
// ==========================================================

let infoPanelMode = "overview";


// ==========================================================
// Top bar / resource display
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


// ==========================================================
// Character image helpers
// ==========================================================

function getCharacterImagePath(card) {
  if (card && typeof card.imagePath === "string" && card.imagePath.trim() !== "") {
    return card.imagePath;
  }

  return CONFIG.FALLBACKS.CHARACTER_IMAGE;
}

function getCharacterImageAlt(card) {
  if (card && typeof card.imageAlt === "string" && card.imageAlt.trim() !== "") {
    return card.imageAlt;
  }

  return card?.displayName || "Character image";
}

function getCharacterImageHtml(card, className = "character-image") {
  const src = getCharacterImagePath(card);
  const alt = getCharacterImageAlt(card);
  const fallback = CONFIG.FALLBACKS.CHARACTER_IMAGE;

  return `
    <img
      src="${src}"
      alt="${alt}"
      class="${className}"
      onerror="this.onerror=null;this.src='${fallback}';"
    />
  `;
}


// ==========================================================
// Business image helpers
// ==========================================================

function getBusinessImagePath(business) {
  if (business && typeof business.imagePath === "string" && business.imagePath.trim() !== "") {
    return business.imagePath;
  }

  return CONFIG.FALLBACKS.BUSINESS_IMAGE;
}

function getBusinessImageAlt(business) {
  if (business && typeof business.imageAlt === "string" && business.imageAlt.trim() !== "") {
    return business.imageAlt;
  }

  return business?.name || "Business image";
}

function getInfoBusinessImageHtml(business) {
  const src = getBusinessImagePath(business);
  const alt = getBusinessImageAlt(business);
  const fallback = CONFIG.FALLBACKS.BUSINESS_IMAGE;

  return `
    <img
      src="${src}"
      alt="${alt}"
      class="info-business-image"
      onerror="this.onerror=null;this.src='${fallback}';"
    />
  `;
}


// ==========================================================
// Pack results
// ----------------------------------------------------------
// Mostly legacy/debug now. Main pack opening uses modal.
// ==========================================================

function renderPackResults(cards) {
  const container = document.getElementById("packResults");
  if (!container) return;

  if (!Array.isArray(cards) || cards.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = cards.map(card => `
    <div class="card ${card.rarity}">
      ${getCharacterImageHtml(card)}
      <div class="name">${card.displayName}</div>
      ${card.subtitle ? `<div class="small muted">${card.subtitle}</div>` : ""}
      <div class="muted">${card.franchise}</div>
      <div class="small">${card.rarity.toUpperCase()}</div>
      <div class="small">Power: ${card.basePower}</div>
      <div class="small muted">${card.flavor}</div>
    </div>
  `).join("");
}


// ==========================================================
// Pack Modal Rendering
// ==========================================================

function openPackModal(cards) {
  const modal = document.getElementById("packModal");
  const container = document.getElementById("packModalCards");

  if (!modal || !container) return;

  renderPackModalCards(cards);

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closePackModal() {
  const modal = document.getElementById("packModal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function renderPackModalCards(cards) {
  const container = document.getElementById("packModalCards");
  if (!container) return;

  if (!Array.isArray(cards) || cards.length === 0) {
    container.innerHTML = `<div class="empty-state">No new cards to show.</div>`;
    return;
  }

  container.innerHTML = cards.map(card => {
    const isAssigned = !!card.assignedBusinessId;

    return `
      <div class="card ${card.rarity}">
        ${getCharacterImageHtml(card, "modal-character-image")}

        <div class="name">${card.displayName}</div>
        ${card.subtitle ? `<div class="small muted">${card.subtitle}</div>` : ""}
        <div class="muted">${card.franchise}</div>
        <div class="small">${card.rarity.toUpperCase()}</div>
        <div class="small">Power: ${card.basePower}</div>
        <div class="small">Traits: ${card.traits.join(", ")}</div>
        <div class="small muted">${card.flavor}</div>

        ${
          isAssigned
            ? `<div class="small good" style="margin-top:10px;">
                Assigned to ${getBusinessDef(card.assignedBusinessId)?.name || "Unknown"}
              </div>`
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
// Assignment dropdown helper
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
// Roster sorting helpers
// ==========================================================

function getRaritySortOrder(rarity) {
  const rarityOrder = {
    ultra: 0,
    rare: 1,
    uncommon: 2,
    common: 3
  };

  return rarityOrder[rarity] ?? 99;
}

function getSortedRosterCards() {
  return [...state.cards].sort((a, b) => {
    const aUnassigned = !a.assignedBusinessId;
    const bUnassigned = !b.assignedBusinessId;

    if (aUnassigned && !bUnassigned) return -1;
    if (!aUnassigned && bUnassigned) return 1;

    if (aUnassigned && bUnassigned) {
      if (a.morale !== b.morale) return a.morale - b.morale;

      const rarityDiff = getRaritySortOrder(a.rarity) - getRaritySortOrder(b.rarity);
      if (rarityDiff !== 0) return rarityDiff;

      return a.displayName.localeCompare(b.displayName);
    }

    if (a.assignedBusinessId !== b.assignedBusinessId) {
      const aBusinessName = getBusinessDef(a.assignedBusinessId)?.name || "";
      const bBusinessName = getBusinessDef(b.assignedBusinessId)?.name || "";
      return aBusinessName.localeCompare(bBusinessName);
    }

    const rarityDiff = getRaritySortOrder(a.rarity) - getRaritySortOrder(b.rarity);
    if (rarityDiff !== 0) return rarityDiff;

    return a.displayName.localeCompare(b.displayName);
  });
}


// ==========================================================
// Roster rendering
// ==========================================================

function renderRoster() {
  const roster = document.getElementById("roster");
  if (!roster) return;

  if (state.cards.length === 0) {
    roster.innerHTML = `<div class="muted">No workers yet. Open a pack.</div>`;
    return;
  }

  const sortedCards = getSortedRosterCards();

  roster.innerHTML = sortedCards.map(card => {
    const isUnassigned = !card.assignedBusinessId;

    const assignedText = isUnassigned
      ? "Unassigned"
      : `Assigned: ${getBusinessDef(card.assignedBusinessId)?.name || "Unknown"}`;

    return `
      <div class="card ${card.rarity} ${isUnassigned ? "unassigned-card" : ""}">
        ${getCharacterImageHtml(card)}

        <div class="status-row">
          ${isUnassigned ? `<div class="status-badge unassigned">UNASSIGNED</div>` : `<div></div>`}
          <div class="small ${getMoraleClass(card.morale)}">Morale: ${card.morale}</div>
        </div>

        <div class="name">${card.displayName}</div>
        ${card.subtitle ? `<div class="small muted">${card.subtitle}</div>` : ""}
        <div class="muted">${card.franchise}</div>
        <div class="small">${card.rarity.toUpperCase()}</div>
        <div class="small">Power: ${card.basePower}</div>
        <div class="small">Traits: ${card.traits.join(", ")}</div>
        <div class="small muted">${assignedText}</div>
        <div class="small muted">${card.flavor}</div>

        <div class="modal-card-actions">
          <select id="assign-select-roster-${card.instanceId}" class="assignment-select">
            <option value="">Choose assignment...</option>
            ${getBusinessAssignmentOptionsHtml(card.assignedBusinessId || "")}
          </select>

          <button class="secondary small-button" onclick="assignCardFromRoster(${card.instanceId})">
            Assign
          </button>
        </div>

        ${
          card.assignedBusinessId
            ? `
              <div class="modal-card-actions">
                <button class="secondary small-button" onclick="unassignCardFromRoster(${card.instanceId})">
                  Unassign
                </button>
              </div>
            `
            : ""
        }
      </div>
    `;
  }).join("");
}

function assignCardFromRoster(cardInstanceId) {
  const select = document.getElementById(`assign-select-roster-${cardInstanceId}`);
  if (!select || !select.value) return;

  const assigned = assignCardToBusiness(cardInstanceId, select.value);

  if (assigned) {
    renderAll();
  }
}

function unassignCardFromRoster(cardInstanceId) {
  const card = getCardByInstanceId(cardInstanceId);
  if (!card) return;

  unassignCard(card);
  setHeadline("Worker unassigned", `${card.displayName} is now unassigned.`);
  saveGame();
  renderAll();
}


// ==========================================================
// Headline rendering
// ==========================================================

function renderHeadline() {
  const titleEl = document.getElementById("headlineTitle");
  const bodyEl = document.getElementById("headlineBody");

  if (titleEl) titleEl.textContent = state.headline?.title || "";
  if (bodyEl) bodyEl.textContent = state.headline?.body || "";
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

  const total = state.cards.reduce((sum, card) => sum + card.morale, 0);
  return Math.round(total / state.cards.length);
}

function getLowMoraleCards() {
  return state.cards.filter(card => card.morale < CONFIG.MORALE.LOW_THRESHOLD);
}

function getAffordableLockedBusinesses() {
  return getLockedBusinesses().filter(business => state.credits >= business.unlockCost);
}

function renderInfoModeTabs() {
  const overviewBtn = document.getElementById("infoModeOverviewBtn");
  const ownedBtn = document.getElementById("infoModeOwnedBtn");
  const buyBtn = document.getElementById("infoModeBuyBtn");

  if (overviewBtn) overviewBtn.classList.toggle("active", infoPanelMode === "overview");
  if (ownedBtn) ownedBtn.classList.toggle("active", infoPanelMode === "owned");
  if (buyBtn) buyBtn.classList.toggle("active", infoPanelMode === "buy");
}


// ==========================================================
// Overview panel
// ==========================================================

function renderOverviewPanel() {
  const totalWorkers = state.cards.length;
  const unassignedWorkers = getUnassignedCards().length;
  const ownedBusinesses = getOwnedBusinesses().length;
  const totalIncome = calculateTotalIncomePerTick();
  const averageMorale = getAverageMorale();
  const lowMoraleWorkers = getLowMoraleCards().length;
  const affordableBusinesses = getAffordableLockedBusinesses().length;

  const attentionItems = [];

  if (unassignedWorkers > 0) {
    attentionItems.push(`${unassignedWorkers} worker${unassignedWorkers === 1 ? "" : "s"} unassigned`);
  }

  if (lowMoraleWorkers > 0) {
    attentionItems.push(`${lowMoraleWorkers} worker${lowMoraleWorkers === 1 ? "" : "s"} below ${CONFIG.MORALE.LOW_THRESHOLD} morale`);
  }

  if (affordableBusinesses > 0) {
    attentionItems.push(`${affordableBusinesses} business${affordableBusinesses === 1 ? "" : "es"} affordable to purchase`);
  }

  return `
    <div class="info-panel-grid">
      <div class="info-stat-card">
        <div class="info-stat-label">Total Workers</div>
        <div class="info-stat-value">${totalWorkers}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Unassigned</div>
        <div class="info-stat-value">${unassignedWorkers}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Owned Businesses</div>
        <div class="info-stat-value">${ownedBusinesses}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Income / Sec</div>
        <div class="info-stat-value">${totalIncome}</div>
      </div>

      <div class="info-stat-card">
        <div class="info-stat-label">Average Morale</div>
        <div class="info-stat-value">${averageMorale}</div>
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
// Owned businesses panel
// ==========================================================

function renderOwnedBusinessesPanel() {
  const ownedBusinesses = getOwnedBusinesses();

  if (ownedBusinesses.length === 0) {
    return `<div class="empty-state">No businesses owned yet.</div>`;
  }

  return `
    <div class="info-business-list">
      ${ownedBusinesses.map(business => {
        const businessState = getBusinessState(business.id);
        const assignedCards = getAssignedCardsForBusiness(business.id);
        const income = calculateBusinessIncome(business.id);
        const prestige = calculateBusinessPrestige(business.id);

        return `
          <div class="info-business-card">
            ${getInfoBusinessImageHtml(business)}

            <div class="info-business-main">
              <div class="info-business-title">${business.name}</div>
              <div class="info-business-meta">${business.franchise} • Tier ${business.tier}</div>
              <div class="info-business-summary">${business.description}</div>

              <div class="info-business-stats">
                <span>Income/sec: ${income}</span>
                <span>Prestige: ${prestige}</span>
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


// ==========================================================
// Buy businesses panel
// ==========================================================

function renderBuyBusinessesPanel() {
  const lockedBusinesses = getLockedBusinesses();

  if (lockedBusinesses.length === 0) {
    return `<div class="empty-state">You already own every currently available business.</div>`;
  }

  return `
    <div class="info-business-list">
      ${lockedBusinesses.map(business => {
        const affordable = state.credits >= business.unlockCost;

        return `
          <div class="info-business-card">
            ${getInfoBusinessImageHtml(business)}

            <div class="info-business-main">
              <div class="info-business-title">${business.name}</div>
              <div class="info-business-meta">${business.franchise} • Tier ${business.tier}</div>
              <div class="info-business-summary">${business.description}</div>

              <div class="info-business-stats">
                <span>Unlock Cost: ${business.unlockCost}</span>
                <span>Job Type: ${business.jobType}</span>
              </div>

              <div class="business-actions" style="margin-top:10px;">
                <button
                  class="secondary small-button"
                  onclick="purchaseBusiness('${business.id}'); renderAll();"
                  ${affordable ? "" : "disabled"}
                >
                  ${affordable ? "Purchase" : "Cannot Afford Yet"}
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}


// ==========================================================
// Main information panel
// ==========================================================

function renderInfoPanel() {
  renderInfoModeTabs();

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
  renderRoster();
  renderHeadline();
  renderInfoPanel();
}