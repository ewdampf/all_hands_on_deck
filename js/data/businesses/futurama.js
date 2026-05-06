// ==========================================================
// Futurama Businesses
// ==========================================================

const FUTURAMA_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "panuccis_pizza",
    businessKey: "panuccis_pizza",
    variantKey: "default",
    franchise: "Futurama",
    name: "Panucci’s Pizza",

    imagePath: "assets/businesses/futurama/panuccis-pizza.png",
    imageAlt: "Panucci’s Pizza",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.DIRTY],

    description: "Cheap pizza, long hours, and just enough dignity to keep showing up.",

    unlockCost: 400,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "fishy_joes",
    businessKey: "fishy_joes",
    variantKey: "default",
    franchise: "Futurama",
    name: "Fishy Joe’s",

    imagePath: "assets/businesses/futurama/fishy-joes.png",
    imageAlt: "Fishy Joe’s",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.DIRTY, BUSINESS_TAGS.VOLUME],

    description: "Seafood of questionable origin served with absolute confidence.",

    unlockCost: 400,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "robot_asylum",
    businessKey: "robot_asylum",
    variantKey: "default",
    franchise: "Futurama",
    name: "Robot Asylum",

    imagePath: "assets/businesses/futurama/robot-asylum.png",
    imageAlt: "Robot Asylum",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.DANGEROUS, BUSINESS_TAGS.RISKY],

    description: "Unstable environment with unpredictable residents and very few rules that actually work.",

    unlockCost: 500,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  // ========================================================
  // Tier 2 Businesses
  // ========================================================

  {
    id: "planet_express",
    businessKey: "planet_express",
    variantKey: "default",
    franchise: "Futurama",
    name: "Planet Express",

    imagePath: "assets/businesses/futurama/planet-express.png",
    imageAlt: "Planet Express",

    tier: 2,
    jobType: JOB_TYPES.LOGISTICS,
    tags: [BUSINESS_TAGS.RISKY, BUSINESS_TAGS.NETWORKED],

    description: "Fast-paced delivery work. Great for the right crew, disastrous for the wrong one.",

    unlockCost: 900,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "mars_university",
    businessKey: "mars_university",
    variantKey: "default",
    franchise: "Futurama",
    name: "Mars University",

    imagePath: "assets/businesses/futurama/mars-university.png",
    imageAlt: "Mars University",

    tier: 2,
    jobType: JOB_TYPES.RESEARCH,
    tags: [BUSINESS_TAGS.INSTITUTIONAL, BUSINESS_TAGS.SYNERGISTIC],

    description: "A prestigious institution where learning happens, occasionally on purpose.",

    unlockCost: 1100,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "applied_cryogenics",
    businessKey: "applied_cryogenics",
    variantKey: "default",
    franchise: "Futurama",
    name: "Applied Cryogenics",

    imagePath: "assets/businesses/futurama/cryogenics.png",
    imageAlt: "Applied Cryogenics",

    tier: 2,
    jobType: JOB_TYPES.RESEARCH,
    tags: [BUSINESS_TAGS.EXPERIMENTAL, BUSINESS_TAGS.SPECIALIZED],

    description: "Freezes problems for later. Results may vary depending on how much later.",

    unlockCost: 1200,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "nnypd",
    businessKey: "nnypd",
    variantKey: "default",
    franchise: "Futurama",
    name: "New New York Police Department",

    imagePath: "assets/businesses/futurama/nnypd.png",
    imageAlt: "NNYPD",

    tier: 2,
    jobType: JOB_TYPES.ENFORCEMENT,
    tags: [BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.REGULATED],

    description: "Maintains order with varying levels of competence and enthusiasm.",

    unlockCost: 1300,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "channel_6_news",
    businessKey: "channel_6_news",
    variantKey: "default",
    franchise: "Futurama",
    name: "Channel 6 News",

    imagePath: "assets/businesses/futurama/channel-6.png",
    imageAlt: "Channel 6 News",

    tier: 2,
    jobType: JOB_TYPES.MEDIA,
    tags: [BUSINESS_TAGS.NETWORKED, BUSINESS_TAGS.NOTORIOUS],

    description: "Delivers information, entertainment, and occasional truth.",

    unlockCost: 1400,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "head_museum",
    businessKey: "head_museum",
    variantKey: "default",
    franchise: "Futurama",
    name: "Head Museum",

    imagePath: "assets/businesses/futurama/head-museum.png",
    imageAlt: "Head Museum",

    tier: 2,
    jobType: JOB_TYPES.ENTERTAINMENT,
    tags: [BUSINESS_TAGS.PRESTIGE, BUSINESS_TAGS.SOCIAL],

    description: "A cultural landmark where history literally talks back.",

    unlockCost: 1500,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  // ========================================================
  // Tier 3 Businesses
  // ========================================================

  {
    id: "momcorp",
    businessKey: "momcorp",
    variantKey: "default",
    franchise: "Futurama",
    name: "Mom’s Friendly Robot Company",

    imagePath: "assets/businesses/futurama/momcorp.png",
    imageAlt: "MomCorp",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.NETWORKED, BUSINESS_TAGS.SHADY],

    description: "A massive corporate machine. Efficient, profitable, and not especially wholesome.",

    unlockCost: 2600,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "doop_army",
    businessKey: "doop",
    variantKey: "default",
    franchise: "Futurama",
    name: "DOOP Army",

    imagePath: "assets/businesses/futurama/doop.png",
    imageAlt: "DOOP",

    tier: 3,
    jobType: JOB_TYPES.ENFORCEMENT,
    tags: [BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.DANGEROUS],

    description: "A galaxy-spanning military force with questionable discipline and enormous firepower.",

    unlockCost: 2800,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "slurm_factory",
    businessKey: "slurm_factory",
    variantKey: "default",
    franchise: "Futurama",
    name: "Slurm Factory",

    imagePath: "assets/businesses/futurama/slurm-factory.png",
    imageAlt: "Slurm Factory",

    tier: 3,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.SHADY],

    description: "Mass production at its finest, powered by secrets nobody wants to think about.",

    unlockCost: 3000,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  }

];