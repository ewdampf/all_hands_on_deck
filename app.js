let state = {
  credits: CONFIG.GAME.STARTING_CREDITS,
  freePackUsed: false,
  nextCardInstanceId: 1,

  cards: [],

  businesses: BUSINESSES.map(business => ({
    id: business.id,
    unlocked: business.unlockedByDefault,
    assignedCardIds: Array(business.slotCount).fill(null)
  })),

  headline: {
    title: "Welcome aboard",
    body: "Open a pack and start making questionable staffing decisions."
  }
};

function getBusinessState(businessId) {
  return state.businesses.find(b => b.id === businessId);
}

function getBusinessDef(businessId) {
  return BUSINESSES.find(b => b.id === businessId);
}

function getCardByInstanceId(instanceId) {
  return state.cards.find(card => card.instanceId === instanceId);
}

function cloneCharacter(template) {
  return {
    instanceId: state.nextCardInstanceId++,
    templateId: template.id,
    name: template.name,
    franchise: template.franchise,
    rarity: template.rarity,
    basePower: template.basePower,
    preferredJob: template.preferredJob,
    traits: [...template.traits],
    flavor: template.flavor,
    morale: CONFIG.MORALE.STARTING,
    assignedBusinessId: null
  };
}

function pickRandomCharacter() {
  const roll = Math.random();
  let rarity = "common";

  if (roll < CONFIG.PACKS.COMMON_CHANCE) {
    rarity = "common";
  } else if (roll < CONFIG.PACKS.COMMON_CHANCE + CONFIG.PACKS.UNCOMMON_CHANCE) {
    rarity = "uncommon";
  } else if (roll < CONFIG.PACKS.COMMON_CHANCE + CONFIG.PACKS.UNCOMMON_CHANCE + CONFIG.PACKS.RARE_CHANCE) {
    rarity = "rare";
  } else {
    rarity = "ultra";
  }

  const pool = CHARACTERS.filter(character => character.rarity === rarity);
  const template = pool[Math.floor(Math.random() * pool.length)];
  return cloneCharacter(template);
}

function setHeadline(title, body) {
  state.headline = { title, body };
  renderHeadline();
}

function saveGame() {
  localStorage.setItem(CONFIG.GAME.AUTO_SAVE_KEY, JSON.stringify(state));
}

function loadGame() {
  const raw = localStorage.getItem(CONFIG.GAME.AUTO_SAVE_KEY);
  if (!raw) return;

  try {
    const loaded = JSON.parse(raw);
    state = loaded;
  } catch (error) {
    console.error("Failed to load save:", error);
  }
}

function resetGame() {
  localStorage.removeItem(CONFIG.GAME.AUTO_SAVE_KEY);
  location.reload();
}

function openPack(isFree = false) {
  if (isFree && state.freePackUsed) {
    setHeadline("Free pack already opened", "You already opened your free pack for this save.");
    return;
  }

  if (!isFree && state.credits < CONFIG.PACKS.STANDARD_PACK_COST) {
    setHeadline("Not enough credits", "You need more credits to buy another pack.");
    return;
  }

  if (isFree) {
    state.freePackUsed = true;
  } else {
    state.credits -= CONFIG.PACKS.STANDARD_PACK_COST;
  }

  const results = [];
  for (let i = 0; i < CONFIG.PACKS.FREE_PACK_SIZE; i++) {
    const card = pickRandomCharacter();
    state.cards.push(card);
    results.push(card);
  }

  renderPackResults(results);

  setHeadline(
    "Fresh recruits arrive",
    `${results.map(card => card.name).join(", ")} joined your roster.`
  );

  renderAll();
  saveGame();
}

function unassignCard(card) {
  if (!card.assignedBusinessId) return;

  const businessState = getBusinessState(card.assignedBusinessId);
  const slotIndex = businessState.assignedCardIds.findIndex(id => id === card.instanceId);

  if (slotIndex !== -1) {
    businessState.assignedCardIds[slotIndex] = null;
  }

  card.assignedBusinessId = null;
}

function assignCardToBusiness(cardInstanceId, businessId) {
  const card = getCardByInstanceId(cardInstanceId);
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (!card || !businessState || !businessDef) return;

  if (!businessState.unlocked) {
    setHeadline("Business locked", `${businessDef.name} has not been unlocked yet.`);
    return;
  }

  if (card.assignedBusinessId === businessId) {
    unassignCard(card);
    setHeadline("Worker unassigned", `${card.name} was removed from ${businessDef.name}.`);
    renderAll();
    saveGame();
    return;
  }

  const emptySlotIndex = businessState.assignedCardIds.findIndex(slot => slot === null);
  if (emptySlotIndex === -1) {
    setHeadline("No room available", `${businessDef.name} has no open worker slots.`);
    return;
  }

  if (card.assignedBusinessId) {
    unassignCard(card);
  }

  businessState.assignedCardIds[emptySlotIndex] = card.instanceId;
  card.assignedBusinessId = businessId;

  const assignedCards = getAssignedCardsForBusiness(businessId);
  const hero = assignedCards.find(c => c.traits.includes(CONFIG.TRAITS.HERO));
  const rogue = assignedCards.find(c => c.traits.includes(CONFIG.TRAITS.ROGUE));

  if (hero && rogue) {
    setHeadline(
      "Tension at work",
      `${hero.name} is uneasy working alongside ${rogue.name} at ${businessDef.name}.`
    );
  } else {
    setHeadline("Worker assigned", `${card.name} is now working at ${businessDef.name}.`);
  }

  renderAll();
  saveGame();
}

function getAssignedCardsForBusiness(businessId) {
  const businessState = getBusinessState(businessId);
  if (!businessState) return [];

  return businessState.assignedCardIds
    .filter(Boolean)
    .map(getCardByInstanceId)
    .filter(Boolean);
}

function getMoraleClass(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) return "good";
  if (morale < CONFIG.MORALE.LOW_THRESHOLD) return "bad";
  return "";
}

function renderPackResults(results) {
  const container = document.getElementById("packResults");
  if (!container) return;

  container.innerHTML = results.map(card => `
    <div class="card ${card.rarity}">
      <div class="name">${card.name}</div>
      <div class="muted">${card.franchise}</div>
      <div class="small">${card.rarity.toUpperCase()}</div>
      <div class="small">Power: ${card.basePower}</div>
      <div class="small muted">${card.flavor}</div>
    </div>
  `).join("");
}

function renderRoster() {
  const roster = document.getElementById("roster");
  if (!roster) return;

  if (state.cards.length === 0) {
    roster.innerHTML = `<div class="muted">No workers yet. Open a pack.</div>`;
    return;
  }

  const rarityOrder = {
    ultra: 0,
    rare: 1,
    uncommon: 2,
    common: 3
  };

  const sortedCards = [...state.cards].sort((a, b) => {
    const aUnassigned = !a.assignedBusinessId;
    const bUnassigned = !b.assignedBusinessId;

    if (aUnassigned && !bUnassigned) return -1;
    if (!aUnassigned && bUnassigned) return 1;

    if (aUnassigned && bUnassigned) {
      if (a.morale !== b.morale) return a.morale - b.morale;
      if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) {
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      }
      return a.name.localeCompare(b.name);
    }

    if (a.assignedBusinessId !== b.assignedBusinessId) {
      const aBusiness = getBusinessDef(a.assignedBusinessId)?.name || "";
      const bBusiness = getBusinessDef(b.assignedBusinessId)?.name || "";
      return aBusiness.localeCompare(bBusiness);
    }

    if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) {
      return rarityOrder[a.rarity] - rarityOrder[b.rarity];
    }

    return a.name.localeCompare(b.name);
  });

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
        <div class="name">${card.name}</div>
        <div class="muted">${card.franchise}</div>
        <div class="small">${card.rarity.toUpperCase()}</div>
        <div class="small">Power: ${card.basePower}</div>
        <div class="small">Traits: ${card.traits.join(", ")}</div>
        <div class="small muted">${assignedText}</div>
        <div class="small muted">${card.flavor}</div>
        <div class="buttons" style="margin-top:10px;">${assignmentButtons}</div>
      </div>
    `;
  }).join("");
}

function calculateBusinessPrestige(businessId) {
  const businessDef = getBusinessDef(businessId);
  const cards = getAssignedCardsForBusiness(businessId);

  let prestige = 0;

  cards.forEach(card => {
    if (card.traits.includes(CONFIG.TRAITS.HERO)) {
      prestige += CONFIG.PRESTIGE.HERO_BONUS;
    }
    if (card.rarity === "ultra") {
      prestige += CONFIG.PRESTIGE.ULTRA_BONUS;
    }
    if (card.morale >= CONFIG.MORALE.HIGH_THRESHOLD) {
      prestige += CONFIG.PRESTIGE.HIGH_MORALE_BONUS;
    }
  });

  return Math.floor(prestige * businessDef.prestigeMultiplier);
}

function moraleModifier(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) return CONFIG.MORALE.HIGH_MODIFIER;
  if (morale >= 50) return CONFIG.MORALE.MID_MODIFIER;
  if (morale >= CONFIG.MORALE.LOW_THRESHOLD) return CONFIG.MORALE.LOW_MODIFIER;
  return CONFIG.MORALE.VERY_LOW_MODIFIER;
}

function calculateCardOutput(card, businessId) {
  const businessDef = getBusinessDef(businessId);
  const assignedCards = getAssignedCardsForBusiness(businessId);
  const cannonCount = assignedCards.filter(c => c.traits.includes(CONFIG.TRAITS.CANNON_FODDER)).length;

  let output = card.basePower;

  output *= (1 + moraleModifier(card.morale));

  if (card.traits.includes(CONFIG.TRAITS.CANNON_FODDER)) {
    output *= 1 + Math.min(
      CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS_CAP,
      cannonCount * CONFIG.OUTPUT.CANNON_FODDER_GROUP_BONUS
    );

    if (businessId === CONFIG.BUSINESSES.MOISTURE_FARM.ID) {
      output *= 1 + CONFIG.OUTPUT.CANNON_FODDER_FARM_BONUS;
    }
  }

  if (card.traits.includes(CONFIG.TRAITS.HERO)) {
    output *= 1 + CONFIG.OUTPUT.HERO_OUTPUT_MODIFIER;

    if (card.morale < CONFIG.MORALE.LOW_THRESHOLD) {
      output *= CONFIG.OUTPUT.HERO_LOW_MORALE_PENALTY;
    }
  }

  if (card.traits.includes(CONFIG.TRAITS.SUPPORT)) {
    output *= 1 + CONFIG.OUTPUT.SUPPORT_OUTPUT_MODIFIER;
  }

  if (card.preferredJob !== businessDef.jobType && card.preferredJob !== CONFIG.JOB_TYPES.HEROIC) {
    output *= CONFIG.OUTPUT.OFF_ROLE_OUTPUT_PENALTY;
  }

  output *= businessDef.baseMultiplier;

  return output;
}

function calculateBusinessIncome(businessId) {
  const cards = getAssignedCardsForBusiness(businessId);
  const prestige = calculateBusinessPrestige(businessId);

  let total = 0;
  cards.forEach(card => {
    total += calculateCardOutput(card, businessId);
  });

  total *= (1 + prestige / 100);

  return Math.floor(total);
}

function renderBusinesses() {
  const container = document.getElementById("businessContainer");
  if (!container) return;

  container.innerHTML = BUSINESSES.map(business => {
    const businessState = getBusinessState(business.id);

    if (!businessState.unlocked) {
      return `
        <div class="business">
          <h3>${business.name}</h3>
          <div class="muted">${business.description}</div>
          <div class="small">Unlock cost: ${business.unlockCost}</div>
        </div>
      `;
    }

    const assignedCards = getAssignedCardsForBusiness(business.id);
    const income = calculateBusinessIncome(business.id);
    const prestige = calculateBusinessPrestige(business.id);

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
      return `
        <div class="slot">
          <div><strong>${card.name}</strong></div>
          <div class="small">Power: ${card.basePower}</div>
          <div class="small ${getMoraleClass(card.morale)}">Morale: ${card.morale}</div>
          <div class="small muted">${card.franchise}</div>
        </div>
      `;
    }).join("");

    return `
      <div class="business">
        <h3>${business.name}</h3>
        <div class="muted">${business.description}</div>
        <div class="small">Income/sec: ${income}</div>
        <div class="small">Prestige: ${prestige}</div>
        <div class="small">Workers: ${assignedCards.length}/${business.slotCount}</div>
        <div class="business-slots">${slotsHtml}</div>
      </div>
    `;
  }).join("");
}

function renderTopbar() {
  const moneyDisplay = document.getElementById("moneyDisplay");
  if (moneyDisplay) {
    moneyDisplay.textContent = `Credits: ${state.credits}`;
  }

  const freePackBtn = document.getElementById("freePackBtn");
  if (freePackBtn) {
    freePackBtn.disabled = state.freePackUsed;
  }

  const buyPackBtn = document.getElementById("buyPackBtn");
  if (buyPackBtn) {
    buyPackBtn.disabled = state.credits < CONFIG.PACKS.STANDARD_PACK_COST;
    buyPackBtn.textContent = `Buy Pack (${CONFIG.PACKS.STANDARD_PACK_COST})`;
  }
}

function renderHeadline() {
  const titleEl = document.getElementById("headlineTitle");
  const bodyEl = document.getElementById("headlineBody");

  if (titleEl) titleEl.textContent = state.headline.title;
  if (bodyEl) bodyEl.textContent = state.headline.body;
}

function renderAll() {
  renderTopbar();
  renderRoster();
  renderBusinesses();
  renderHeadline();
}

function updateMorale() {
  BUSINESSES.forEach(business => {
    const assignedCards = getAssignedCardsForBusiness(business.id);
    const cannonCount = assignedCards.filter(card => card.traits.includes(CONFIG.TRAITS.CANNON_FODDER)).length;
    const hasRogue = assignedCards.some(card => card.traits.includes(CONFIG.TRAITS.ROGUE));

    assignedCards.forEach(card => {
      let delta = 0;

      if (card.preferredJob === business.jobType) {
        delta += CONFIG.MORALE.PREFERRED_JOB_DELTA;
      } else {
        delta += CONFIG.MORALE.WRONG_JOB_DELTA;
      }

      if (card.traits.includes(CONFIG.TRAITS.SUPPORT)) {
        delta += CONFIG.MORALE.SUPPORT_DELTA;
      }

      if (card.traits.includes(CONFIG.TRAITS.CANNON_FODDER) && cannonCount >= 2) {
        delta += CONFIG.MORALE.CANNON_GROUP_DELTA;
      }

      if (card.traits.includes(CONFIG.TRAITS.HERO) && hasRogue) {
        delta += CONFIG.MORALE.HERO_WITH_ROGUE_DELTA;
      }

      if (
        card.traits.includes(CONFIG.TRAITS.MORAL_CODE) &&
        business.tags.includes("low_status")
      ) {
        delta -= 1;
      }

      card.morale = Math.max(
        CONFIG.MORALE.MIN,
        Math.min(CONFIG.MORALE.MAX, card.morale + delta)
      );
    });
  });

  state.cards
    .filter(card => !card.assignedBusinessId)
    .forEach(card => {
      card.morale = Math.max(CONFIG.MORALE.MIN, card.morale + CONFIG.MORALE.IDLE_DELTA);

      if (
        card.morale < CONFIG.MORALE.LOW_THRESHOLD &&
        Math.random() < CONFIG.MORALE.RELEASE_REQUEST_CHANCE
      ) {
        setHeadline(
          "Release requested",
          `${card.name} is tired of sitting idle and wants a job or a way out.`
        );
      }
    });
}

function maybeTriggerRandomHeadline() {
  const allAssignedCards = state.businesses.flatMap(business => getAssignedCardsForBusiness(business.id));

  const ecstatic = allAssignedCards.filter(card => card.morale >= CONFIG.MORALE.EPIC_THRESHOLD);
  const unhappy = allAssignedCards.filter(card => card.morale < CONFIG.MORALE.LOW_THRESHOLD);

  if (ecstatic.length > 0 && Math.random() < CONFIG.HEADLINES.EPIC_HEADLINE_CHANCE) {
    const card = ecstatic[Math.floor(Math.random() * ecstatic.length)];
    setHeadline(
      "Epic headline achieved",
      `${card.name} is thriving. The whole roster feels the energy.`
    );

    state.cards.forEach(rosterCard => {
      rosterCard.morale = Math.min(
        CONFIG.MORALE.MAX,
        rosterCard.morale + CONFIG.MORALE.EPIC_ROSTER_BONUS
      );
    });

    return;
  }

  if (unhappy.length > 0 && Math.random() < CONFIG.HEADLINES.WARNING_HEADLINE_CHANCE) {
    const card = unhappy[Math.floor(Math.random() * unhappy.length)];
    setHeadline(
      "Morale warning",
      `${card.name} is visibly unhappy with current management decisions.`
    );
  }
}

function gameTick() {
  updateMorale();

  let totalIncome = 0;
  state.businesses.forEach(business => {
    if (business.unlocked) {
      totalIncome += calculateBusinessIncome(business.id);
    }
  });

  state.credits += totalIncome;

  const planetExpressState = getBusinessState(CONFIG.BUSINESSES.PLANET_EXPRESS.ID);
  if (
    planetExpressState &&
    !planetExpressState.unlocked &&
    state.credits >= getBusinessDef(CONFIG.BUSINESSES.PLANET_EXPRESS.ID).unlockCost
  ) {
    planetExpressState.unlocked = true;
    setHeadline(
      "New business unlocked",
      `${CONFIG.BUSINESSES.PLANET_EXPRESS.NAME} is now open for business.`
    );
  }

  maybeTriggerRandomHeadline();
  renderAll();
  saveGame();
}

function initializeButtons() {
  const freePackBtn = document.getElementById("freePackBtn");
  const buyPackBtn = document.getElementById("buyPackBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (freePackBtn) {
    freePackBtn.addEventListener("click", () => openPack(true));
  }

  if (buyPackBtn) {
    buyPackBtn.addEventListener("click", () => openPack(false));
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveGame();
      setHeadline("Progress saved", "Your local game has been saved in this browser.");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
  }
}

function initializeGame() {
  loadGame();
  initializeButtons();
  renderAll();
  setInterval(gameTick, CONFIG.GAME.GAME_TICK_MS);
}

initializeGame();