let state = {
  credits: CONFIG.GAME.STARTING_CREDITS,
  tokens: CONFIG.GAME.STARTING_TOKENS,
  freePackLastClaimedAt: null,

  nextCardInstanceId: 1,
  cards: [],

  businesses: BUSINESSES.map(business => ({
    id: business.id,
    unlocked: business.unlockedByDefault,

    capacityLevel: 0,
    efficiencyLevel: 0,

    adActiveUntil: 0,
    adCooldownUntil: 0,

    assignedCardIds: []
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

function getTierDef(tier) {
  return CONFIG.BUSINESS_TIERS[tier];
}

function getTagDefs(tags) {
  return tags
    .map(tag => CONFIG.BUSINESS_TAG_RULES[tag])
    .filter(Boolean);
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

function getRandomCharacterByRarity(rarity) {
  const pool = CHARACTERS.filter(character => character.rarity === rarity);
  const template = pool[Math.floor(Math.random() * pool.length)];
  return cloneCharacter(template);
}

function rollRandomRarity() {
  const roll = Math.random();
  const odds = CONFIG.PACKS.ODDS;

  if (roll < odds.common) return "common";
  if (roll < odds.common + odds.uncommon) return "uncommon";
  if (roll < odds.common + odds.uncommon + odds.rare) return "rare";
  return "ultra";
}

function generatePack(packDef) {
  const results = [];

  packDef.guarantees.forEach(guaranteedRarity => {
    results.push(getRandomCharacterByRarity(guaranteedRarity));
  });

  while (results.length < packDef.cardCount) {
    results.push(getRandomCharacterByRarity(rollRandomRarity()));
  }

  return results;
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

    state = {
      ...state,
      ...loaded
    };

    if (typeof state.tokens !== "number" || Number.isNaN(state.tokens)) {
      state.tokens = CONFIG.GAME.STARTING_TOKENS;
    }

    if (typeof state.credits !== "number" || Number.isNaN(state.credits)) {
      state.credits = CONFIG.GAME.STARTING_CREDITS;
    }

    if (typeof state.nextCardInstanceId !== "number" || Number.isNaN(state.nextCardInstanceId)) {
      state.nextCardInstanceId = 1;
    }

    if (!Array.isArray(state.cards)) {
      state.cards = [];
    }

    if (!Array.isArray(state.businesses)) {
      state.businesses = BUSINESSES.map(business => ({
        id: business.id,
        unlocked: business.unlockedByDefault,
        capacityLevel: 0,
        efficiencyLevel: 0,
        adActiveUntil: 0,
        adCooldownUntil: 0,
        assignedCardIds: []
      }));
    }

    if (typeof state.freePackLastClaimedAt !== "number") {
      state.freePackLastClaimedAt = null;
    }

    state.businesses.forEach(businessState => {
      if (!Array.isArray(businessState.assignedCardIds)) {
        businessState.assignedCardIds = [];
      }
      if (typeof businessState.capacityLevel !== "number") {
        businessState.capacityLevel = 0;
      }
      if (typeof businessState.efficiencyLevel !== "number") {
        businessState.efficiencyLevel = 0;
      }
      if (typeof businessState.adActiveUntil !== "number") {
        businessState.adActiveUntil = 0;
      }
      if (typeof businessState.adCooldownUntil !== "number") {
        businessState.adCooldownUntil = 0;
      }
    });
  } catch (error) {
    console.error("Failed to load save:", error);
  }
}
function resetGame() {
  localStorage.removeItem(CONFIG.GAME.AUTO_SAVE_KEY);
  location.reload();
}

function getDailyPackAvailable() {
  if (!state.freePackLastClaimedAt) return true;

  const elapsed = Date.now() - state.freePackLastClaimedAt;
  return elapsed >= CONFIG.DAILY.TOKEN_RESET_HOURS * 60 * 60 * 1000;
}

function claimDailyToken() {
  if (!getDailyPackAvailable()) {
    setHeadline("Daily token unavailable", "Your next free token is not ready yet.");
    return;
  }

  if (typeof state.tokens !== "number" || Number.isNaN(state.tokens)) {
    state.tokens = 0;
  }

  state.tokens += CONFIG.DAILY.FREE_TOKEN_AMOUNT;
  state.freePackLastClaimedAt = Date.now();

  setHeadline("Daily token claimed", `You received ${CONFIG.DAILY.FREE_TOKEN_AMOUNT} token.`);
  renderAll();
  saveGame();
}

function openPackByType(packKey, isFreeDaily = false) {
  const packDef = CONFIG.PACKS[packKey];
  if (!packDef) return;

  if (isFreeDaily) {
    if (!getDailyPackAvailable()) {
      setHeadline("Free daily pack unavailable", "You already claimed your daily token recently.");
      return;
    }

    state.freePackLastClaimedAt = Date.now();
  } else {
    if (state.tokens < packDef.tokenCost) {
      setHeadline("Not enough tokens", `You need ${packDef.tokenCost} tokens for ${packDef.name}.`);
      return;
    }

    state.tokens -= packDef.tokenCost;
  }

  const results = generatePack(packDef);
  state.cards.push(...results);

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

function getBaseBusinessSlots(businessDef) {
  return getTierDef(businessDef.tier).baseSlots;
}

function getBusinessSlotMultiplier(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);
  return tagDefs.reduce((mult, tagDef) => mult * (tagDef.slotMultiplier ?? 1), 1);
}

function getBusinessRevenueMultiplierFromTags(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);
  return tagDefs.reduce((mult, tagDef) => mult * (tagDef.revenueMultiplier ?? 1), 1);
}

function getBusinessPrestigeMultiplierFromTags(businessDef) {
  const tagDefs = getTagDefs(businessDef.tags);
  return tagDefs.reduce((mult, tagDef) => mult * (tagDef.prestigeMultiplier ?? 1), 1);
}

function getMaxSlotsForBusiness(businessId) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);

  const tierSlots = getBaseBusinessSlots(businessDef);
  const tagAdjustedSlots = Math.floor(tierSlots * getBusinessSlotMultiplier(businessDef));
  return tagAdjustedSlots + (businessState.capacityLevel * CONFIG.UPGRADES.CAPACITY_SLOT_BONUS_PER_LEVEL);
}

function normalizeBusinessSlots(businessId) {
  const businessState = getBusinessState(businessId);
  const maxSlots = getMaxSlotsForBusiness(businessId);

  while (businessState.assignedCardIds.length < maxSlots) {
    businessState.assignedCardIds.push(null);
  }

  if (businessState.assignedCardIds.length > maxSlots) {
    businessState.assignedCardIds = businessState.assignedCardIds.slice(0, maxSlots);
  }
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

  normalizeBusinessSlots(businessId);

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

  const rarityOrder = { ultra: 0, rare: 1, uncommon: 2, common: 3 };

  const sortedCards = [...state.cards].sort((a, b) => {
    const aUnassigned = !a.assignedBusinessId;
    const bUnassigned = !b.assignedBusinessId;

    if (aUnassigned && !bUnassigned) return -1;
    if (!aUnassigned && bUnassigned) return 1;

    if (aUnassigned && bUnassigned) {
      if (a.morale !== b.morale) return a.morale - b.morale;
      if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      return a.name.localeCompare(b.name);
    }

    if (a.assignedBusinessId !== b.assignedBusinessId) {
      const aBusiness = getBusinessDef(a.assignedBusinessId)?.name || "";
      const bBusiness = getBusinessDef(b.assignedBusinessId)?.name || "";
      return aBusiness.localeCompare(bBusiness);
    }

    if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) return rarityOrder[a.rarity] - rarityOrder[b.rarity];
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
    if (card.traits.includes(CONFIG.TRAITS.HERO)) prestige += CONFIG.PRESTIGE.HERO_BONUS;
    if (card.rarity === "ultra") prestige += CONFIG.PRESTIGE.ULTRA_BONUS;
    if (card.morale >= CONFIG.MORALE.HIGH_THRESHOLD) prestige += CONFIG.PRESTIGE.HIGH_MORALE_BONUS;
  });

  const tierMultiplier = getTierDef(businessDef.tier).basePrestigeMultiplier;
  const tagMultiplier = getBusinessPrestigeMultiplierFromTags(businessDef);

  return Math.floor(prestige * tierMultiplier * tagMultiplier);
}

function moraleModifier(morale) {
  if (morale >= CONFIG.MORALE.HIGH_THRESHOLD) return CONFIG.MORALE.HIGH_MODIFIER;
  if (morale >= 50) return CONFIG.MORALE.MID_MODIFIER;
  if (morale >= CONFIG.MORALE.LOW_THRESHOLD) return CONFIG.MORALE.LOW_MODIFIER;
  return CONFIG.MORALE.VERY_LOW_MODIFIER;
}

function getAdMultiplier(businessState) {
  return Date.now() < businessState.adActiveUntil ? CONFIG.ADVERTISING.INCOME_MULTIPLIER : 1;
}

function calculateCardOutput(card, businessId) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);
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

  let offRolePenalty = CONFIG.OUTPUT.OFF_ROLE_OUTPUT_PENALTY;
  if (businessState.efficiencyLevel >= 2) {
    offRolePenalty += CONFIG.MORALE.EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF;
  }

  if (card.preferredJob !== businessDef.jobType && card.preferredJob !== CONFIG.JOB_TYPES.HEROIC) {
    output *= offRolePenalty;
  }

  output *= getTierDef(businessDef.tier).baseIncomeMultiplier;
  output *= getBusinessRevenueMultiplierFromTags(businessDef);
  output *= 1 + (businessState.efficiencyLevel * CONFIG.UPGRADES.EFFICIENCY_OUTPUT_BONUS_PER_LEVEL);
  output *= getAdMultiplier(businessState);

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
  total *= CONFIG.ECONOMY.GLOBAL_INCOME_MULTIPLIER;

  return Math.floor(total);
}

function getUpgradeCost(businessId, upgradeType) {
  const businessDef = getBusinessDef(businessId);
  const businessState = getBusinessState(businessId);
  const tierMultiplier = getTierDef(businessDef.tier).upgradeCostMultiplier;

  if (upgradeType === "capacity") {
    const level = businessState.capacityLevel;
    if (level >= CONFIG.UPGRADES.MAX_CAPACITY_LEVEL) return null;
    return Math.floor(CONFIG.UPGRADES.CAPACITY_COSTS[level] * tierMultiplier);
  }

  if (upgradeType === "efficiency") {
    const level = businessState.efficiencyLevel;
    if (level >= CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL) return null;
    return Math.floor(CONFIG.UPGRADES.EFFICIENCY_COSTS[level] * tierMultiplier);
  }

  return null;
}

function upgradeBusiness(businessId, upgradeType) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);
  const cost = getUpgradeCost(businessId, upgradeType);

  if (cost === null) {
    setHeadline("Upgrade maxed", `${businessDef.name} cannot upgrade ${upgradeType} any further.`);
    return;
  }

  if (state.credits < cost) {
    setHeadline("Not enough credits", `You need ${cost} credits for this upgrade.`);
    return;
  }

  state.credits -= cost;

  if (upgradeType === "capacity") {
    businessState.capacityLevel += 1;
    normalizeBusinessSlots(businessId);
  }

  if (upgradeType === "efficiency") {
    businessState.efficiencyLevel += 1;
  }

  setHeadline("Business upgraded", `${businessDef.name} received a ${upgradeType} upgrade.`);
  renderAll();
  saveGame();
}

function activateAdCampaign(businessId) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);
  const now = Date.now();

  if (now < businessState.adCooldownUntil) {
    setHeadline("Advertising unavailable", `${businessDef.name} is still on cooldown.`);
    return;
  }

  businessState.adActiveUntil = now + CONFIG.ADVERTISING.DURATION_MS;
  businessState.adCooldownUntil = now + CONFIG.ADVERTISING.COOLDOWN_MS;

  setHeadline("Advertising launched", `${businessDef.name} income is temporarily boosted.`);
  renderAll();
  saveGame();
}

function formatCooldown(msRemaining) {
  const totalSeconds = Math.ceil(msRemaining / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function renderBusinesses() {
  const container = document.getElementById("businessContainer");
  if (!container) return;

  container.innerHTML = BUSINESSES.map(business => {
    const businessState = getBusinessState(business.id);
    normalizeBusinessSlots(business.id);

    if (!businessState.unlocked) {
      return `
        <div class="business">
          <div class="business-header">
            <div>
              <h3>${business.name}</h3>
              <div class="muted">${business.description}</div>
            </div>
          </div>
          <div class="small">Tier: ${business.tier}</div>
          <div class="small">Unlock cost: ${business.unlockCost}</div>
             <button class="secondary small-button"
               onclick="purchaseBusiness('${business.id}')"
               ${state.credits < business.unlockCost ? "disabled" : ""}>
               Purchase
             </button>
          <div class="small muted">Tags: ${business.tags.join(", ")}</div>
        </div>
      `;
    }

    const assignedCards = getAssignedCardsForBusiness(business.id);
    const income = calculateBusinessIncome(business.id);
    const prestige = calculateBusinessPrestige(business.id);

    const capacityCost = getUpgradeCost(business.id, "capacity");
    const efficiencyCost = getUpgradeCost(business.id, "efficiency");

    const now = Date.now();
    const adActive = now < businessState.adActiveUntil;
    const adCoolingDown = now < businessState.adCooldownUntil;

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
        <div class="business-header">
          <div>
            <h3>${business.name}</h3>
            <div class="muted">${business.description}</div>
          </div>
          <div>
            <span class="upgrade-badge">Tier ${business.tier}</span>
            ${business.tags.map(tag => `<span class="upgrade-badge">${tag}</span>`).join("")}
          </div>
        </div>

        <div class="small">Income/sec: ${income}</div>
        <div class="small">Prestige: ${prestige}</div>
        <div class="small">Workers: ${assignedCards.length}/${getMaxSlotsForBusiness(business.id)}</div>
        <div class="small">Capacity Level: ${businessState.capacityLevel}/${CONFIG.UPGRADES.MAX_CAPACITY_LEVEL}</div>
        <div class="small">Efficiency Level: ${businessState.efficiencyLevel}/${CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL}</div>

        <div class="upgrade-row">
          <button class="secondary small-button" onclick="upgradeBusiness('${business.id}', 'capacity')" ${capacityCost === null ? "disabled" : ""}>
            ${capacityCost === null ? "Capacity Maxed" : `Capacity (${capacityCost})`}
          </button>

          <button class="secondary small-button" onclick="upgradeBusiness('${business.id}', 'efficiency')" ${efficiencyCost === null ? "disabled" : ""}>
            ${efficiencyCost === null ? "Efficiency Maxed" : `Efficiency (${efficiencyCost})`}
          </button>
        </div>

        <div class="business-actions">
          <button class="secondary small-button" onclick="activateAdCampaign('${business.id}')" ${adCoolingDown ? "disabled" : ""}>
            ${adActive ? "Ad Active" : "Advertising"}
          </button>
        </div>

        ${adActive ? `<div class="cooldown-text">Advertising boost active</div>` : ""}
        ${(!adActive && adCoolingDown) ? `<div class="cooldown-text">Cooldown: ${formatCooldown(businessState.adCooldownUntil - now)}</div>` : ""}

        <div class="business-slots">${slotsHtml}</div>
      </div>
    `;
  }).join("");
}

function purchaseBusiness(businessId) {
  const businessState = getBusinessState(businessId);
  const businessDef = getBusinessDef(businessId);

  if (businessState.unlocked) return;

  if (state.credits < businessDef.unlockCost) {
    setHeadline("Not enough credits", "You need more credits to unlock this business.");
    return;
  }

  state.credits -= businessDef.unlockCost;
  businessState.unlocked = true;

  normalizeBusinessSlots(businessId);

  // 🎁 FREE PACK REWARD
  const rewardPack = generatePack(CONFIG.PACKS.BASIC);
  state.cards.push(...rewardPack);

  setHeadline(
    "Business purchased",
    `${businessDef.name} is now open. You received new recruits: ${rewardPack.map(c => c.name).join(", ")}`
  );

  renderPackResults(rewardPack);
  renderAll();
  saveGame();
}

function renderTopbar() {
  const moneyDisplay = document.getElementById("moneyDisplay");
  if (moneyDisplay) moneyDisplay.textContent = `Credits: ${state.credits}`;

  const tokenDisplay = document.getElementById("tokenDisplay");
  if (tokenDisplay) tokenDisplay.textContent = `Tokens: ${state.tokens}`;

  const freePackBtn = document.getElementById("freePackBtn");
  if (freePackBtn) {
    freePackBtn.disabled = !getDailyPackAvailable();
  }

  const basicPackBtn = document.getElementById("basicPackBtn");
  if (basicPackBtn) {
    basicPackBtn.disabled = state.tokens < CONFIG.PACKS.BASIC.tokenCost;
    basicPackBtn.textContent = `Basic Pack (${CONFIG.PACKS.BASIC.tokenCost} Token)`;
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

      if (card.traits.includes(CONFIG.TRAITS.SUPPORT)) delta += CONFIG.MORALE.SUPPORT_DELTA;
      if (card.traits.includes(CONFIG.TRAITS.CANNON_FODDER) && cannonCount >= 2) delta += CONFIG.MORALE.CANNON_GROUP_DELTA;
      if (card.traits.includes(CONFIG.TRAITS.HERO) && hasRogue) delta += CONFIG.MORALE.HERO_WITH_ROGUE_DELTA;

      const tagDefs = getTagDefs(business.tags);
      tagDefs.forEach(tagDef => {
        if (card.traits.includes(CONFIG.TRAITS.MORAL_CODE) && tagDef.moraleEffects?.moralCodePenalty) {
          delta -= tagDef.moraleEffects.moralCodePenalty;
        }
      });

      card.morale = Math.max(CONFIG.MORALE.MIN, Math.min(CONFIG.MORALE.MAX, card.morale + delta));
    });
  });

  state.cards
    .filter(card => !card.assignedBusinessId)
    .forEach(card => {
      card.morale = Math.max(CONFIG.MORALE.MIN, card.morale + CONFIG.MORALE.IDLE_DELTA);

      if (card.morale < CONFIG.MORALE.LOW_THRESHOLD && Math.random() < CONFIG.MORALE.RELEASE_REQUEST_CHANCE) {
        setHeadline("Release requested", `${card.name} is tired of sitting idle and wants a job or a way out.`);
      }
    });
}

function maybeTriggerRandomHeadline() {
  const allAssignedCards = state.businesses.flatMap(business => getAssignedCardsForBusiness(business.id));
  const ecstatic = allAssignedCards.filter(card => card.morale >= CONFIG.MORALE.EPIC_THRESHOLD);
  const unhappy = allAssignedCards.filter(card => card.morale < CONFIG.MORALE.LOW_THRESHOLD);

  if (ecstatic.length > 0 && Math.random() < CONFIG.HEADLINES.EPIC_HEADLINE_CHANCE) {
    const card = ecstatic[Math.floor(Math.random() * ecstatic.length)];
    setHeadline("Epic headline achieved", `${card.name} is thriving. The whole roster feels the energy.`);

    state.cards.forEach(rosterCard => {
      rosterCard.morale = Math.min(CONFIG.MORALE.MAX, rosterCard.morale + CONFIG.MORALE.EPIC_ROSTER_BONUS);
    });
    return;
  }

  if (unhappy.length > 0 && Math.random() < CONFIG.HEADLINES.WARNING_HEADLINE_CHANCE) {
    const card = unhappy[Math.floor(Math.random() * unhappy.length)];
    setHeadline("Morale warning", `${card.name} is visibly unhappy with current management decisions.`);
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
  const planetExpressDef = getBusinessDef(CONFIG.BUSINESSES.PLANET_EXPRESS.ID);

  maybeTriggerRandomHeadline();
  renderAll();
  saveGame();
}

function initializeButtons() {
  const freePackBtn = document.getElementById("freePackBtn");
  const basicPackBtn = document.getElementById("basicPackBtn");
  const uncommonPackBtn = document.getElementById("uncommonPackBtn");
  const rarePackBtn = document.getElementById("rarePackBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (freePackBtn) freePackBtn.addEventListener("click", () => claimDailyToken());
  if (basicPackBtn) basicPackBtn.addEventListener("click", () => openPackByType("BASIC"));
  if (uncommonPackBtn) uncommonPackBtn.addEventListener("click", () => openPackByType("UNCOMMON"));
  if (rarePackBtn) rarePackBtn.addEventListener("click", () => openPackByType("RARE"));

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveGame();
      setHeadline("Progress saved", "Your local game has been saved in this browser.");
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", resetGame);
}

function initializeGame() {
  loadGame();

  state.businesses.forEach(businessState => {
    normalizeBusinessSlots(businessState.id);
  });

  initializeButtons();
  renderAll();
  setInterval(gameTick, CONFIG.GAME.GAME_TICK_MS);
}

initializeGame();