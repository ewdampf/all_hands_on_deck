// ==========================================================
// Marvel Cinematic Universe Phase 1 Businesses
// ----------------------------------------------------------
// Franchise business file for All Hands On Deck.
// Covers:
// - Iron Man
// - Iron Man 2
// - The Incredible Hulk
// - Thor
// - Captain America: The First Avenger
// - The Avengers
// ==========================================================

const MCU_PHASE1_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "isabelas_diner",
    businessKey: "isabelas_diner",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Isabela’s Diner",

    imagePath: "assets/businesses/mcu/isabelas-diner.png",
    imageAlt: "Isabela’s Diner",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,

    tags: [
      BUSINESS_TAGS.COMFORT,
      BUSINESS_TAGS.SOCIAL
    ],

    description: "A quiet New Mexico diner where coffee, conversation, and extremely unusual visitors all arrive with regularity.",

    unlockCost: 300,
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
    id: "puente_antiguo_research_site",
    businessKey: "puente_antiguo_research_site",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Puente Antiguo Research Site",

    imagePath: "assets/businesses/mcu/puente-antiguo-research-site.png",
    imageAlt: "Puente Antiguo Research Site",

    tier: 1,
    jobType: JOB_TYPES.RESEARCH,

    tags: [
      BUSINESS_TAGS.SECURE,
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A rapidly assembled government research operation built around a hammer nobody can move and several questions nobody can answer.",

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

  // ========================================================
  // Tier 2 Businesses
  // ========================================================

  {
    id: "stark_industries",
    businessKey: "stark_industries",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Stark Industries",

    imagePath: "assets/businesses/mcu/stark-industries.png",
    imageAlt: "Stark Industries",

    tier: 2,
    jobType: JOB_TYPES.CORPORATE,

    tags: [
      BUSINESS_TAGS.NETWORKED,
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A cutting-edge technology empire driven by innovation, ego, and enough funding to create breakthroughs and international incidents in equal measure.",

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
    id: "hammer_industries",
    businessKey: "hammer_industries",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Hammer Industries",

    imagePath: "assets/businesses/mcu/hammer-industries.png",
    imageAlt: "Hammer Industries",

    tier: 2,
    jobType: JOB_TYPES.CORPORATE,

    tags: [
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.RISKY,
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.NOTORIOUS
    ],

    description: "An ambitious weapons contractor where confidence consistently outperforms product reliability.",

    unlockCost: 1300,
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
    id: "strategic_scientific_reserve",
    businessKey: "strategic_scientific_reserve",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Strategic Scientific Reserve",

    imagePath: "assets/businesses/mcu/strategic-scientific-reserve.png",
    imageAlt: "Strategic Scientific Reserve",

    tier: 2,
    jobType: JOB_TYPES.ENFORCEMENT,

    tags: [
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A wartime intelligence and research organization built on secrecy, discipline, and unusually ambitious science projects.",

    unlockCost: 1450,
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
    id: "culver_university",
    businessKey: "culver_university",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Culver University",

    imagePath: "assets/businesses/mcu/culver-university.png",
    imageAlt: "Culver University",

    tier: 2,
    jobType: JOB_TYPES.RESEARCH,

    tags: [
      BUSINESS_TAGS.EXPERIMENTAL,
      BUSINESS_TAGS.SPECIALIZED,
      BUSINESS_TAGS.INSTITUTIONAL
    ],

    description: "A respected research institution where advanced science and catastrophic accidents occasionally share the same lab space.",

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
    id: "stark_expo",
    businessKey: "stark_expo",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "Stark Expo",

    imagePath: "assets/businesses/mcu/stark-expo.png",
    imageAlt: "Stark Expo",

    tier: 2,
    jobType: JOB_TYPES.ENTERTAINMENT,

    tags: [
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.NETWORKED
    ],

    description: "A massive technology showcase where spectacle, branding, and scientific ambition all compete for attention.",

    unlockCost: 1700,
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
    id: "shield",
    businessKey: "shield",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "SHIELD",

    imagePath: "assets/businesses/mcu/shield.png",
    imageAlt: "SHIELD",

    tier: 3,
    jobType: JOB_TYPES.COVERT,

    tags: [
      BUSINESS_TAGS.NETWORKED,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.SECURE,
      BUSINESS_TAGS.REGULATED
    ],

    description: "A global intelligence and defense organization coordinating advanced technology, covert operations, and increasingly frequent world-ending situations.",

    unlockCost: 3000,
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
    id: "hydra",
    businessKey: "hydra",
    variantKey: "default",
    franchise: "Marvel Cinematic Universe",

    name: "HYDRA",

    imagePath: "assets/businesses/mcu/hydra.png",
    imageAlt: "HYDRA",

    tier: 3,
    jobType: JOB_TYPES.COVERT,

    tags: [
      BUSINESS_TAGS.SHADY,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.DANGEROUS,
      BUSINESS_TAGS.NETWORKED
    ],

    description: "A deeply embedded covert organization where loyalty, secrecy, and morally catastrophic science projects are all considered workplace strengths.",

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