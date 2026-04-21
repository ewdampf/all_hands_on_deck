const BUSINESSES = [
  {
    id: CONFIG.BUSINESSES.MOISTURE_FARM.ID,
    name: CONFIG.BUSINESSES.MOISTURE_FARM.NAME,
    jobType: CONFIG.JOB_TYPES.FARM,

    slotCount: CONFIG.BUSINESSES.MOISTURE_FARM.SLOT_COUNT,

    baseMultiplier: CONFIG.BUSINESSES.MOISTURE_FARM.BASE_MULTIPLIER,
    prestigeMultiplier: CONFIG.BUSINESSES.MOISTURE_FARM.PRESTIGE_MULTIPLIER,

    tags: ["labor", "harsh", "low_status"],

    description: "Hot, dusty, and not exactly prestigious. A perfect place for bulk labor.",
    
    // Future hooks
    unlockCost: 0,
    unlockedByDefault: true
  },

  {
    id: CONFIG.BUSINESSES.PLANET_EXPRESS.ID,
    name: CONFIG.BUSINESSES.PLANET_EXPRESS.NAME,
    jobType: CONFIG.JOB_TYPES.DELIVERY,

    slotCount: CONFIG.BUSINESSES.PLANET_EXPRESS.SLOT_COUNT,

    baseMultiplier: CONFIG.BUSINESSES.PLANET_EXPRESS.BASE_MULTIPLIER,
    prestigeMultiplier: CONFIG.BUSINESSES.PLANET_EXPRESS.PRESTIGE_MULTIPLIER,

    tags: ["logistics", "risk", "mid_status"],

    description: "Fast-paced delivery work. Great for the right crew, disastrous for the wrong one.",
    
    unlockCost: 200,
    unlockedByDefault: false
  }
];