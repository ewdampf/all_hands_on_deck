// ==========================================================
// Milestone System
// ----------------------------------------------------------
// Awards one-time token bonuses for meaningful firsts.
// ==========================================================

const MILESTONE_TOKEN_REWARD = 1;

function hasMilestone(milestoneId) {
  return !!state.claimedMilestones?.[milestoneId];
}

function awardMilestone(milestoneId, title, body, tokenReward = MILESTONE_TOKEN_REWARD) {
  if (!state.claimedMilestones) {
    state.claimedMilestones = {};
  }

  if (hasMilestone(milestoneId)) return false;

  state.claimedMilestones[milestoneId] = {
    claimedAt: Date.now(),
    title,
    body,
    tokenReward
  };

  addTokens(
    tokenReward,
    title,
    `${body} Reward: +${tokenReward} token${tokenReward === 1 ? "" : "s"}.`,
    "milestone"
  );

  setHeadline(
    title,
    `${body} Reward: +${tokenReward} token${tokenReward === 1 ? "" : "s"}.`,
    "milestone"
  );

  saveGame();
  return true;
}

function isBusinessFullyStaffed(businessId) {
  const assigned = getAssignedCardsForBusiness(businessId);
  const maxSlots = getMaxSlotsForBusiness(businessId);

  return maxSlots > 0 && assigned.length >= maxSlots;
}

function isBusinessFullyStaffedWithFavoriteJobs(businessId) {
  const business = getBusinessDef(businessId);
  const assigned = getAssignedCardsForBusiness(businessId);

  if (!business || !isBusinessFullyStaffed(businessId)) return false;

  return assigned.every(card => card.preferredJob === business.jobType);
}

function isBusinessFullyStaffedWithSameCharacter(businessId) {
  const assigned = getAssignedCardsForBusiness(businessId);

  if (!isBusinessFullyStaffed(businessId) || assigned.length === 0) return false;

  const firstId = assigned[0].id;
  return assigned.every(card => card.id === firstId);
}

function isBusinessFullyStaffedWithZeroMorale(businessId) {
  const assigned = getAssignedCardsForBusiness(businessId);

  if (!isBusinessFullyStaffed(businessId) || assigned.length === 0) return false;

  return assigned.every(card => card.morale <= 0);
}

function businessHasPositiveNetIncome(businessId) {
  return calculateBusinessIncome(businessId) - calculateBusinessMaintenance(businessId) > 0;
}

function businessHasNegativeNetIncome(businessId) {
  return calculateBusinessIncome(businessId) - calculateBusinessMaintenance(businessId) < 0;
}

function isDangerousBusiness(businessId) {
  const business = getBusinessDef(businessId);
  if (!business) return false;

  return business.tags.includes(BUSINESS_TAGS.DANGEROUS);
}

function cardIsChild(card) {
  return Array.isArray(card.tags) && card.tags.includes(CHARACTER_TAGS.CHILD);
}

function checkAssignmentMilestones(card, businessId) {
  const business = getBusinessDef(businessId);
  if (!card || !business) return;

  awardMilestone(
    "first_worker_assigned",
    "First Assignment",
    `${card.displayName} has been assigned to ${business.name}.`
  );

  if (card.preferredJob !== business.jobType) {
    awardMilestone(
      "first_wrong_job_assignment",
      "Bold Management Choice",
      `${card.displayName} has been assigned outside their preferred job type.`
    );
  }

  if (cardIsChild(card) && isDangerousBusiness(businessId)) {
    awardMilestone(
      "first_child_in_dangerous_job",
      "Questionable Labor Practices",
      `${card.displayName} was assigned to a dangerous workplace.`
    );
  }

  checkBusinessMilestones(businessId);
}

function checkBusinessMilestones(businessId) {
  const business = getBusinessDef(businessId);
  if (!business) return;

  if (isBusinessFullyStaffed(businessId)) {
    awardMilestone(
      "first_fully_staffed_business",
      "All Hands Present",
      `${business.name} is fully staffed for the first time.`
    );
  }

  if (isBusinessFullyStaffedWithFavoriteJobs(businessId)) {
    awardMilestone(
      "first_perfect_fit_business",
      "Right People, Right Job",
      `${business.name} is fully staffed with workers who all prefer this job type.`
    );
  }

  if (isBusinessFullyStaffedWithSameCharacter(businessId)) {
    awardMilestone(
      "first_same_character_full_staff",
      "Seeing Double",
      `${business.name} is fully staffed with the same character.`
    );
  }

  if (isBusinessFullyStaffedWithZeroMorale(businessId)) {
    awardMilestone(
      "first_full_zero_morale_business",
      "Maximum Misery",
      `${business.name} is fully staffed with workers at 0 morale.`
    );
  }

  if (businessHasPositiveNetIncome(businessId)) {
    awardMilestone(
      "first_positive_net_business",
      "A Real Business",
      `${business.name} has achieved positive net income.`
    );
  }

  if (businessHasNegativeNetIncome(businessId)) {
    awardMilestone(
      "first_negative_net_business",
      "Bleeding Credits",
      `${business.name} has achieved negative net income.`
    );
  }
}

function checkRosterMilestones() {
  if (state.cards.length >= 10) {
    awardMilestone(
      "first_10_workers",
      "Growing Roster",
      "Your roster has reached 10 workers."
    );
  }

  if (state.cards.length >= 25) {
    awardMilestone(
      "first_25_workers",
      "Human Resources Problem",
      "Your roster has reached 25 workers."
    );
  }

  const zeroMoraleWorker = state.cards.find(card => card.morale <= 0);
  if (zeroMoraleWorker) {
    awardMilestone(
      "first_zero_morale_worker",
      "Rock Bottom",
      `${zeroMoraleWorker.displayName} reached 0 morale.`
    );
  }

  const maxMoraleWorker = state.cards.find(card => card.morale >= CONFIG.MORALE.MAX);
  if (maxMoraleWorker) {
    awardMilestone(
      "first_100_morale_worker",
      "Actually Happy",
      `${maxMoraleWorker.displayName} reached 100 morale.`
    );
  }
}

function checkCreditMilestones() {
  const creditMilestones = [
    { amount: 100, id: "credits_100", title: "First Hundred", body: "Your credits reached 100." },
    { amount: 1000, id: "credits_1000", title: "Four Figures", body: "Your credits reached 1,000." },
    { amount: 10000, id: "credits_10000", title: "Real Money", body: "Your credits reached 10,000." },
    { amount: 100000, id: "credits_100000", title: "Empire Building", body: "Your credits reached 100,000." },
    { amount: 1000000, id: "credits_1000000", title: "Tycoon Territory", body: "Your credits reached 1,000,000." }
  ];

  creditMilestones.forEach(milestone => {
    if (state.credits >= milestone.amount) {
      awardMilestone(milestone.id, milestone.title, milestone.body);
    }
  });

  if (state.credits <= -100) {
    awardMilestone(
      "credits_negative_100",
      "Deep in the Red",
      "Your credits reached -100."
    );
  }
}

function checkPackMilestones(cards) {
  if (!Array.isArray(cards)) return;

  if (cards.some(card => getCardStars(card) >= 3)) {
    awardMilestone(
      "first_rare_or_better_pull",
      "Not Bad",
      "You pulled your first rare-or-better worker."
    );
  }

  if (cards.some(card => getCardStars(card) >= 4)) {
    awardMilestone(
      "first_ultra_pull",
      "Star Power",
      "You pulled your first ultra-rare-or-better worker."
    );
  }

  checkRosterMilestones();
}

function checkBusinessPurchaseMilestones(businessId) {
  const business = getBusinessDef(businessId);
  if (!business) return;

  awardMilestone(
    "first_new_business",
    "Expansion Begins",
    `${business.name} is your first purchased business.`
  );

  if (state.credits < 0) {
    awardMilestone(
      "first_business_bought_in_debt",
      "Expansion at Any Cost",
      `${business.name} was purchased while you were in debt.`
    );
  }
}

function checkUpgradeMilestones(businessId, upgradeType) {
  const business = getBusinessDef(businessId);
  if (!business) return;

  awardMilestone(
    "first_upgrade",
    "Improvement Plan",
    `${business.name} received its first upgrade.`
  );
}

function checkMarketingMilestones(businessId) {
  const business = getBusinessDef(businessId);
  if (!business) return;

  awardMilestone(
    "first_marketing_campaign",
    "Marketing Department Exists",
    `${business.name} launched your first marketing campaign.`
  );
}

function checkReleaseMilestones(card) {
  if (!card) return;

  if (card.morale <= 0) {
    awardMilestone(
      "first_zero_morale_release",
      "Merciful Termination",
      `${card.displayName} was released at 0 morale.`
    );
  }
}

function checkRecurringMilestones() {
  checkCreditMilestones();
  checkRosterMilestones();

  getOwnedBusinesses().forEach(business => {
    checkBusinessMilestones(business.id);
  });
}