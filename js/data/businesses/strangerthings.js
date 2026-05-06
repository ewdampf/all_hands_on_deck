// ==========================================================
// Stranger Things Businesses
// ----------------------------------------------------------
// Franchise business file for All Hands On Deck.
// ==========================================================

const STRANGER_THINGS_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "melvalds_general_store",
    businessKey: "melvalds_general_store",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Melvald’s General Store",

    imagePath: "assets/businesses/strangerthings/melvalds-general-store.png",
    imageAlt: "Melvald’s General Store",

    tier: 1,
    jobType: JOB_TYPES.RETAIL,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.SOCIAL],

    description: "A practical Hawkins retail staple where small-town shopping meets unusually complicated local problems.",

    unlockCost: 0,
    unlockedByDefault: true,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "bennys_burgers",
    businessKey: "bennys_burgers",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Benny’s Burgers",

    imagePath: "assets/businesses/strangerthings/bennys-burgers.png",
    imageAlt: "Benny’s Burgers",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.COMFORT, BUSINESS_TAGS.SOCIAL],

    description: "A warm local diner with real food, real kindness, and the unfortunate habit of attracting dangerous plotlines.",

    unlockCost: 350,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "palace_arcade",
    businessKey: "palace_arcade",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Palace Arcade",

    imagePath: "assets/businesses/strangerthings/palace-arcade.png",
    imageAlt: "Palace Arcade",

    tier: 1,
    jobType: JOB_TYPES.ENTERTAINMENT,
    tags: [BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.VOLUME],

    description: "A neon-lit hangout where high scores, youth drama, and suspiciously relevant teamwork all share floor space.",

    unlockCost: 500,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "family_video",
    businessKey: "family_video",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Family Video",

    imagePath: "assets/businesses/strangerthings/family-video.png",
    imageAlt: "Family Video",

    tier: 1,
    jobType: JOB_TYPES.RETAIL,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.SOCIAL],

    description: "A perfectly normal video store, ideal for recommendations, gossip, and workers who are clearly overqualified.",

    unlockCost: 650,
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
    id: "scoops_ahoy",
    businessKey: "scoops_ahoy",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Scoops Ahoy",

    imagePath: "assets/businesses/strangerthings/scoops-ahoy.png",
    imageAlt: "Scoops Ahoy",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.COMFORT, BUSINESS_TAGS.SYNERGISTIC],

    description: "An ice cream shop with uniforms, banter, and far more espionage exposure than the franchise agreement suggests.",

    unlockCost: 900,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "starcourt_mall",
    businessKey: "starcourt_mall",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Starcourt Mall",

    imagePath: "assets/businesses/strangerthings/starcourt-mall.png",
    imageAlt: "Starcourt Mall",

    tier: 2,
    jobType: JOB_TYPES.RETAIL,
    tags: [BUSINESS_TAGS.VOLUME, BUSINESS_TAGS.PRESTIGE, BUSINESS_TAGS.NETWORKED],

    description: "A bright commercial hub with food courts, crowds, brand energy, and absolutely nothing suspicious underneath.",

    unlockCost: 1400,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "hawkins_high_school",
    businessKey: "hawkins_high_school",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Hawkins High School",

    imagePath: "assets/businesses/strangerthings/hawkins-high-school.png",
    imageAlt: "Hawkins High School",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.SYNERGISTIC, BUSINESS_TAGS.INSTITUTIONAL, BUSINESS_TAGS.SOCIAL],

    description: "A structured social ecosystem where learning happens, rumors spread, and every hallway feels plot-relevant.",

    unlockCost: 1200,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "hawkins_national_laboratory",
    businessKey: "hawkins_national_laboratory",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Hawkins National Laboratory",

    imagePath: "assets/businesses/strangerthings/hawkins-national-laboratory.png",
    imageAlt: "Hawkins National Laboratory",

    tier: 2,
    jobType: JOB_TYPES.RESEARCH,
    tags: [BUSINESS_TAGS.EXPERIMENTAL, BUSINESS_TAGS.SHADY, BUSINESS_TAGS.SECURE],

    description: "A government research site where scientific curiosity, secrecy, and basic safety protocols are not equally prioritized.",

    unlockCost: 1700,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "hawkins_police_department",
    businessKey: "hawkins_police_department",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Hawkins Police Department",

    imagePath: "assets/businesses/strangerthings/hawkins-police-department.png",
    imageAlt: "Hawkins Police Department",

    tier: 2,
    jobType: JOB_TYPES.ENFORCEMENT,
    tags: [BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.REGULATED, BUSINESS_TAGS.INSTITUTIONAL],

    description: "A small-town police department built for local trouble, then repeatedly handed problems several dimensions too large.",

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
    id: "starcourt_underground_facility",
    businessKey: "starcourt_underground_facility",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Starcourt Underground Facility",

    imagePath: "assets/businesses/strangerthings/starcourt-underground-facility.png",
    imageAlt: "Starcourt Underground Facility",

    tier: 3,
    jobType: JOB_TYPES.ENFORCEMENT,
    tags: [BUSINESS_TAGS.SHADY, BUSINESS_TAGS.HIERARCHICAL, BUSINESS_TAGS.DANGEROUS, BUSINESS_TAGS.SECURE],

    description: "A covert underground operation with staff, logistics, uniforms, and no convincing explanation for the mall overhead.",

    unlockCost: 2800,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  },

  {
    id: "hawkins_lab_expanded_operations",
    businessKey: "hawkins_lab_expanded_operations",
    variantKey: "default",
    franchise: "Stranger Things",
    name: "Hawkins Lab — Expanded Operations",

    imagePath: "assets/businesses/strangerthings/hawkins-lab-expanded-operations.png",
    imageAlt: "Hawkins Lab — Expanded Operations",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
    tags: [BUSINESS_TAGS.EXPERIMENTAL, BUSINESS_TAGS.SHADY, BUSINESS_TAGS.DANGEROUS, BUSINESS_TAGS.NETWORKED],

    description: "A deeper, better-funded research program where every breakthrough creates three new things nobody should touch.",

    unlockCost: 3200,
    unlockedByDefault: false,

    upgrades: {
      capacity: { label: "Capacity Upgrade", maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL },
      efficiency: { label: "Efficiency Upgrade", maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL },
      advertising: { label: "Advertising Campaign" }
    }
  }
];