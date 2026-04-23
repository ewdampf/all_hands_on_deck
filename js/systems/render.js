// ==========================================================
// Render System
// ----------------------------------------------------------
// Handles all DOM rendering for the game UI.
//
// Responsibilities:
// - top bar resources / pack button states
// - pack results
// - roster
// - businesses
// - headline panel
// - full-screen refresh via renderAll()
//
// Non-responsibilities:
// - game logic
// - economy calculations
// - morale calculations
// - save/load
// ==========================================================


// ==========================================================
// Top bar / resource display
// ==========================================================

function renderTopbar() {
  const moneyDisplay = document.getElementById("moneyDisplay");
  if (moneyDisplay) {
    moneyDisplay.textContent = `Credits: ${state.credits}`;
  }

  const tokenDisplay = document.getElementById("tokenDisplay");
  if (tokenDisplay) {
    tokenDisplay.textContent = `Tokens: ${state.tokens}`;
  }

  const freePackBtn = document.getElementById("freePackBtn");
  if (freePackBtn) {
    const dailyAvailable = getDailyTokenAvailable();
    freePackBtn.disabled = !dailyAvailable;
    freePackBtn.textContent = dailyAvailable
      ? "Claim Daily Token"
      : "Daily Token Claimed";
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
// Pack results
// ==========================================================

function renderPackResults(cards) {
  const container = document.getElementById("packResults");
  if (!container) return;

  if (!Array.isArray(cards) || cards.length === 0) {
    container.innerHTML = `<div class="muted">No recent pack results.</div>`;
    return;
  }

  container.innerHTML = cards.map(card => `
    <div class="card ${card.rarity}">
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

    const assignmentButtons = BUSINESSES
      .filter(business => getBusinessState(business.id)?.unlocked)
      .map(business => `
        <button class="secondary small-button" onclick="assignCardToBusiness(${card.instanceId}, '${business.id}')">
          ${card.assignedBusinessId === business.id ? "Unassign" : business.name}
        </button>
      `)
      .join("");

    return `
      <div class="card ${card.rarity} ${isUnassigned ? "unassigned-card" : ""}">
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

        <div class="buttons" style="margin-top:10px;">
          ${assignmentButtons}
        </div>
      </div>
    `;
  }).join("");
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

function getBusinessImageHtml(business) {
  const src = getBusinessImagePath(business);
  const alt = getBusinessImageAlt(business);
  const fallback = CONFIG.FALLBACKS.BUSINESS_IMAGE;

  return `
    <img
      src="${src}"
      alt="${alt}"
      class="business-image"
      onerror="this.onerror=null;this.src='${fallback}';"
    />
  `;
}


// ==========================================================
// Business rendering
// ==========================================================

function renderBusinesses() {
  const container = document.getElementById("businessContainer");
  if (!container) return;

  container.innerHTML = BUSINESSES.map(business => {
    const businessState = getBusinessState(business.id);
    if (!businessState) return "";

    normalizeBusinessSlots(business.id);

    if (!businessState.unlocked) {
      return `
        <div class="business">
          <div class="business-header">
            <div class="business-header-main">
              ${getBusinessImageHtml(business)}

              <div class="business-header-text">
                <h3>${business.name}</h3>
                <div class="small muted">${business.franchise}</div>
                <div class="muted">${business.description}</div>
              </div>
            </div>
          </div>

          <div class="small">Tier: ${business.tier}</div>
          <div class="small">Unlock cost: ${business.unlockCost}</div>
          <div class="small muted">Tags: ${business.tags.join(", ")}</div>

          <div class="business-actions">
            <button
              class="secondary small-button"
              onclick="purchaseBusiness('${business.id}')"
              ${state.credits < business.unlockCost ? "disabled" : ""}
            >
              Purchase
            </button>
          </div>
        </div>
      `;
    }

    const assignedCards = getAssignedCardsForBusiness(business.id);
    const income = calculateBusinessIncome(business.id);
    const prestige = calculateBusinessPrestige(business.id);

    const capacityCost = getUpgradeCost(business.id, "capacity");
    const efficiencyCost = getUpgradeCost(business.id, "efficiency");

    const adActive = isAdActive(business.id);
    const adCoolingDown = isAdCoolingDown(business.id);
    const adCooldownRemaining = getAdCooldownRemainingMs(business.id);

    const slotsHtml = businessState.assignedCardIds.map((slotId, index) => {
      if (!slotId) {
        return `
          <div class="slot">
            <div class="muted">Slot ${index + 1}</div>
            <div class="small">Empty</div>
          </div>
        `;
      }

      const card = getCardByInstanceId(slotId);
      if (!card) {
        return `
          <div class="slot">
            <div class="muted">Slot ${index + 1}</div>
            <div class="small bad">Missing card</div>
          </div>
        `;
      }

      return `
        <div class="slot">
          <div><strong>${card.displayName}</strong></div>
          ${card.subtitle ? `<div class="small muted">${card.subtitle}</div>` : ""}
          <div class="small">Power: ${card.basePower}</div>
          <div class="small ${getMoraleClass(card.morale)}">Morale: ${card.morale}</div>
          <div class="small muted">${card.franchise}</div>
        </div>
      `;
    }).join("");

    return `
      <div class="business">
        <div class="business-header">
          <div class="business-header-main">
            ${getBusinessImageHtml(business)}

            <div class="business-header-text">
              <h3>${business.name}</h3>
              <div class="small muted">${business.franchise}</div>
              <div class="muted">${business.description}</div>
            </div>
          </div>

          <div>
            <span class="upgrade-badge">Tier ${business.tier}</span>
            ${business.tags.map(tag => `<span class="upgrade-badge">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="small" id="business-income-${business.id}">Income/sec: ${income}</div>
        <div class="small" id="business-prestige-${business.id}">Prestige: ${prestige}</div>
        <div class="small" id="business-workers-${business.id}">Workers: ${assignedCards.length}/${getMaxSlotsForBusiness(business.id)}</div>
        <div class="small" id="business-capacity-${business.id}">Capacity Level: ${businessState.capacityLevel}/${CONFIG.UPGRADES.MAX_CAPACITY_LEVEL}</div>
        <div class="small" id="business-efficiency-${business.id}">Efficiency Level: ${businessState.efficiencyLevel}/${CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL}</div>

        <div class="upgrade-row">
          <button
            class="secondary small-button"
            onclick="upgradeBusiness('${business.id}', 'capacity')"
            ${capacityCost === null ? "disabled" : ""}
          >
            ${capacityCost === null ? "Capacity Maxed" : `Capacity (${capacityCost})`}
          </button>

          <button
            class="secondary small-button"
            onclick="upgradeBusiness('${business.id}', 'efficiency')"
            ${efficiencyCost === null ? "disabled" : ""}
          >
            ${efficiencyCost === null ? "Efficiency Maxed" : `Efficiency (${efficiencyCost})`}
          </button>
        </div>

        <div class="business-actions">
          <button
            class="secondary small-button"
            onclick="activateAdCampaign('${business.id}')"
            ${adCoolingDown ? "disabled" : ""}
          >
            ${adActive ? "Ad Active" : "Advertising"}
          </button>
        </div>

        <div class="cooldown-text" id="business-cooldown-${business.id}">
          ${adActive ? "Advertising boost active" : ""}
          ${(!adActive && adCoolingDown) ? `Cooldown: ${formatCooldown(adCooldownRemaining)}` : ""}
        </div>

        <div class="business-slots">${slotsHtml}</div>
      </div>
    `;
  }).join("");
}


// ==========================================================
// Headline rendering
// ==========================================================

function renderHeadline() {
  const titleEl = document.getElementById("headlineTitle");
  const bodyEl = document.getElementById("headlineBody");

  if (titleEl) {
    titleEl.textContent = state.headline?.title || "";
  }

  if (bodyEl) {
    bodyEl.textContent = state.headline?.body || "";
  }
}


// ==========================================================
// Full render pass
// ==========================================================

function renderAll() {
  renderTopbar();
  renderRoster();
  renderBusinesses();
  renderHeadline();
}

// ==========================================================
// Lightweight business stat refresh
// ----------------------------------------------------------
// Updates dynamic business values without rebuilding the full
// business card HTML and reloading images every tick.
// ==========================================================

function renderBusinessStatsOnly() {
  BUSINESSES.forEach(business => {
    const businessState = getBusinessState(business.id);
    if (!businessState || !businessState.unlocked) return;

    const incomeEl = document.getElementById(`business-income-${business.id}`);
    const prestigeEl = document.getElementById(`business-prestige-${business.id}`);
    const workersEl = document.getElementById(`business-workers-${business.id}`);
    const capacityEl = document.getElementById(`business-capacity-${business.id}`);
    const efficiencyEl = document.getElementById(`business-efficiency-${business.id}`);
    const cooldownEl = document.getElementById(`business-cooldown-${business.id}`);

    const assignedCards = getAssignedCardsForBusiness(business.id);
    const income = calculateBusinessIncome(business.id);
    const prestige = calculateBusinessPrestige(business.id);

    if (incomeEl) {
      incomeEl.textContent = `Income/sec: ${income}`;
    }

    if (prestigeEl) {
      prestigeEl.textContent = `Prestige: ${prestige}`;
    }

    if (workersEl) {
      workersEl.textContent = `Workers: ${assignedCards.length}/${getMaxSlotsForBusiness(business.id)}`;
    }

    if (capacityEl) {
      capacityEl.textContent = `Capacity Level: ${businessState.capacityLevel}/${CONFIG.UPGRADES.MAX_CAPACITY_LEVEL}`;
    }

    if (efficiencyEl) {
      efficiencyEl.textContent = `Efficiency Level: ${businessState.efficiencyLevel}/${CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL}`;
    }

    if (cooldownEl) {
      const adActive = isAdActive(business.id);
      const adCoolingDown = isAdCoolingDown(business.id);
      const adCooldownRemaining = getAdCooldownRemainingMs(business.id);

      if (adActive) {
        cooldownEl.textContent = "Advertising boost active";
      } else if (adCoolingDown) {
        cooldownEl.textContent = `Cooldown: ${formatCooldown(adCooldownRemaining)}`;
      } else {
        cooldownEl.textContent = "";
      }
    }
  });
}