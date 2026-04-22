const BUSINESSES = [
  {
    id: CONFIG.BUSINESSES.MOISTURE_FARM.ID,
    name: CONFIG.BUSINESSES.MOISTURE_FARM.NAME,

    tier: 1,
    jobType: CONFIG.JOB_TYPES.FARM,
    tags: ["dirty", "labor_heavy"],

    description: "Hot, dusty, and not exactly prestigious. A perfect place for bulk labor.",

    unlockCost: 0,
    unlockedByDefault: true,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "central_perk",
    name: "Central Perk",

    tier: 1,
    jobType: CONFIG.JOB_TYPES.SERVICE,
    tags: ["social"],

    description: "A cozy coffee shop. Not the most profitable place, but people actually like working here.",

    unlockCost: 450,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: CONFIG.BUSINESSES.PLANET_EXPRESS.ID,
    name: CONFIG.BUSINESSES.PLANET_EXPRESS.NAME,

    tier: 2,
    jobType: CONFIG.JOB_TYPES.DELIVERY,
    tags: ["risky", "logistics"],

    description: "Fast-paced delivery work. Great for the right crew, disastrous for the wrong one.",

    unlockCost: 900,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  }
];