// ==========================================================
// Star Wars Businesses
// ==========================================================

const STAR_WARS_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "moisture_farm",
    businessKey: "moisture_farm",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Moisture Farm",

    imagePath: "assets/businesses/starwars/moisture-farm.png",
    imageAlt: "Moisture Farm",

    tier: 1,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [BUSINESS_TAGS.DIRTY, BUSINESS_TAGS.VOLUME],

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
    id: "spice_mine",
    businessKey: "spice_mine",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Spice Mine",

    imagePath: "assets/businesses/starwars/spice-mine.png",
    imageAlt: "Spice Mine",

    tier: 1,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [
      BUSINESS_TAGS.DIRTY,
      BUSINESS_TAGS.DANGEROUS,
      BUSINESS_TAGS.SHADY
    ],

    description: "Profitable but rough work. Good for expendable labor, not so good for morale.",

    unlockCost: 250,
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
    id: "mos_eisley_cantina",
    businessKey: "mos_eisley_cantina",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Mos Eisley Cantina",

    imagePath: "assets/businesses/starwars/mos-eisley-cantina.png",
    imageAlt: "Mos Eisley Cantina",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.SHADY,
      BUSINESS_TAGS.NOTORIOUS
    ],

    description: "A lively and questionable social hub. Not safe, but people like being here more than a mine.",

    unlockCost: 500,
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

  // ========================================================
  // Tier 2 Businesses
  // ========================================================

  {
    id: "canto_bight_casino",
    businessKey: "canto_bight_casino",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Canto Bight Casino",

    imagePath: "assets/businesses/starwars/canto-bight-casino.png",
    imageAlt: "Canto Bight Casino",

    tier: 2,
    jobType: JOB_TYPES.ENTERTAINMENT,
    tags: [
      BUSINESS_TAGS.RISKY,
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.NOTORIOUS
    ],

    description: "Elegant, high-stakes, and occasionally absurdly profitable. A social job with swingy outcomes.",

    unlockCost: 1200,
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
    id: "bounty_hunters_guild",
    businessKey: "bounty_hunters_guild",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Bounty Hunters' Guild",

    imagePath: "assets/businesses/starwars/bounty-hunters-guild.png",
    imageAlt: "Bounty Hunters' Guild",

    tier: 2,
    jobType: JOB_TYPES.COVERT,
    tags: [
      BUSINESS_TAGS.RISKY,
      BUSINESS_TAGS.SHADY,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A dangerous place for dangerous people. Rogues thrive here. Heroes, less so.",

    unlockCost: 1400,
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

  // ========================================================
  // Tier 3 Businesses
  // ========================================================

  {
    id: "trade_federation",
    businessKey: "trade_federation",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Trade Federation",

    imagePath: "assets/businesses/starwars/trade-federation.png",
    imageAlt: "Trade Federation",

    tier: 3,
    jobType: JOB_TYPES.LOGISTICS,
    tags: [
      BUSINESS_TAGS.NETWORKED,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.REGULATED
    ],

    description: "A top-tier logistics operation. Efficient, scalable, and useful for boosting other delivery businesses later.",

    unlockCost: 2600,
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
    id: "techno_union",
    businessKey: "techno_union",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Techno Union",

    imagePath: "assets/businesses/starwars/techno-union.png",
    imageAlt: "Techno Union",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
    tags: [
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.SPECIALIZED,
      BUSINESS_TAGS.HIERARCHICAL
    ],

    description: "Highly technical and highly structured. Best suited for skilled labor and future robot support systems.",

    unlockCost: 2800,
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
    id: "kaminoan_cloning_facility",
    businessKey: "kaminoan_cloning_facility",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Kaminoan Cloning Facility",

    imagePath: "assets/businesses/starwars/kaminoan-cloning-facility.png",
    imageAlt: "Kaminoan Cloning Facility",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
    tags: [
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.SECURE,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A high-end facility with unusual workforce expansion potential. Fully staff it to enable future cloning effects.",

    unlockCost: 3200,
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
    id: "galactic_senate",
    businessKey: "galactic_senate",
    variantKey: "default",
    franchise: "Star Wars",
    name: "Galactic Senate",

    imagePath: "assets/businesses/starwars/galactic-senate.png",
    imageAlt: "Galactic Senate",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.NETWORKED,
      BUSINESS_TAGS.PRESTIGE
    ],

    description: "A sprawling political institution powered by bureaucracy, influence, procedure, and endless debate.",

    unlockCost: 3400,
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