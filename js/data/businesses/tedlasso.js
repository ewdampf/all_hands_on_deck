// ==========================================================
// Ted Lasso Businesses
// ----------------------------------------------------------
// Franchise business file for All Hands On Deck.
// ==========================================================

const TED_LASSO_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "maes_pub",
    businessKey: "maes_pub",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Mae’s Pub",

    imagePath: "assets/businesses/tedlasso/maes-pub.png",
    imageAlt: "Mae’s Pub",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.COMFORT],

    description: "A loyal neighborhood pub where morale rises, opinions fly, and nobody is ever really neutral about Richmond.",

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
    id: "olas",
    businessKey: "olas",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Ola’s",

    imagePath: "assets/businesses/tedlasso/olas.png",
    imageAlt: "Ola’s",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.COMFORT, BUSINESS_TAGS.PRESTIGE],

    description: "A warm restaurant built on family, principle, and the radical idea that good food can also be good business.",

    unlockCost: 350,
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
    id: "taste_of_athens",
    businessKey: "taste_of_athens",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Taste of Athens",

    imagePath: "assets/businesses/tedlasso/taste-of-athens.png",
    imageAlt: "Taste of Athens",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.SOCIAL],

    description: "Busy, local, and just romantic enough to complicate everyone’s plans.",

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
    id: "afc_richmond",
    businessKey: "afc_richmond",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "AFC Richmond",

    imagePath: "assets/businesses/tedlasso/afc-richmond.png",
    imageAlt: "AFC Richmond",

    tier: 2,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [BUSINESS_TAGS.SYNERGISTIC, BUSINESS_TAGS.MORALE, BUSINESS_TAGS.SOCIAL],

    description: "An underdog football club powered by talent, chaos, belief, and occasionally sound strategy.",

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
  },

  {
    id: "west_ham_united",
    businessKey: "west_ham_united",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "West Ham United",

    imagePath: "assets/businesses/tedlasso/west-ham-united.png",
    imageAlt: "West Ham United",

    tier: 2,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.DISCIPLINED, BUSINESS_TAGS.PRESTIGE],

    description: "A polished, powerful football operation with excellent output and a workplace culture that could use a hug.",

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
    id: "nelson_road_stadium",
    businessKey: "nelson_road_stadium",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Nelson Road Stadium",

    imagePath: "assets/businesses/tedlasso/nelson-road-stadium.png",
    imageAlt: "Nelson Road Stadium",

    tier: 2,
    jobType: JOB_TYPES.ENTERTAINMENT,
    tags: [BUSINESS_TAGS.PRESTIGE, BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.VOLUME],

    description: "Matchday energy, crowd noise, and enough pressure to turn routine work into spectacle.",

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

  {
    id: "kbpr",
    businessKey: "kbpr",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "KBPR",

    imagePath: "assets/businesses/tedlasso/kbpr.png",
    imageAlt: "KBPR",

    tier: 2,
    jobType: JOB_TYPES.MEDIA,
    tags: [BUSINESS_TAGS.NETWORKED, BUSINESS_TAGS.PRESTIGE, BUSINESS_TAGS.SOCIAL],

    description: "A growing PR firm where image, confidence, and well-timed damage control all count as deliverables.",

    unlockCost: 1500,
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
    id: "the_independent",
    businessKey: "the_independent",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "The Independent",

    imagePath: "assets/businesses/tedlasso/the-independent.png",
    imageAlt: "The Independent",

    tier: 2,
    jobType: JOB_TYPES.MEDIA,
    tags: [BUSINESS_TAGS.NETWORKED, BUSINESS_TAGS.PRESTIGE],

    description: "Influence, headlines, and the occasional uncomfortable truth, all produced on deadline.",

    unlockCost: 1600,
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
    id: "bantr",
    businessKey: "bantr",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Bantr",

    imagePath: "assets/businesses/tedlasso/bantr.png",
    imageAlt: "Bantr",

    tier: 2,
    jobType: JOB_TYPES.CORPORATE,
    tags: [BUSINESS_TAGS.EXPERIMENTAL, BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.RISKY, BUSINESS_TAGS.NETWORKED],

    description: "A dating app built on connection, anonymity, and the strong possibility that things get weird.",

    unlockCost: 1800,
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
    id: "akufo_league",
    businessKey: "akufo_league",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Akufo League",

    imagePath: "assets/businesses/tedlasso/akufo-league.png",
    imageAlt: "Akufo League",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [BUSINESS_TAGS.NETWORKED, BUSINESS_TAGS.SHADY, BUSINESS_TAGS.PRESTIGE, BUSINESS_TAGS.RISKY],

    description: "A flashy, expensive, deeply questionable football venture with enormous upside and dangerously unpredictable leadership.",

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
    id: "premier_league",
    businessKey: "premier_league",
    variantKey: "default",
    franchise: "Ted Lasso",
    name: "Premier League",

    imagePath: "assets/businesses/tedlasso/premier-league.png",
    imageAlt: "Premier League",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [BUSINESS_TAGS.INSTITUTIONAL, BUSINESS_TAGS.REGULATED, BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.PRESTIGE],

    description: "The big machine behind the beautiful game. Stable, structured, and very aware of its own importance.",

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
  }
];