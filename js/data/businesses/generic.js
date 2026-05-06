// ==========================================================
// Generic Businesses
// ----------------------------------------------------------
// Non-franchise / flexible businesses.
// ==========================================================

const GENERIC_BUSINESSES = [

  // ========================================================
  // Tier 1
  // ========================================================

  {
    id: "potato_farm",
    businessKey: "potato_farm",
    variantKey: "default",
    franchise: "Generic",
    name: "Potato Farm",

    imagePath: "assets/businesses/generic/potato-farm.png",
    imageAlt: "Potato Farm",

    tier: 1,
    jobType: JOB_TYPES.PRODUCTION,
    tags: [BUSINESS_TAGS.DIRTY, BUSINESS_TAGS.VOLUME],

    description: "Boil 'em, mash 'em, put 'em in a stew. Reliable, simple labor work with modest returns.",

    unlockCost: 200,
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
  // Tier 2
  // ========================================================

  {
    id: "tech_support_center",
    businessKey: "tech_support_center",
    variantKey: "default",
    franchise: "Generic",
    name: "Tech Support Center",

    imagePath: "assets/businesses/generic/tech-support-center.png",
    imageAlt: "Tech Support Center",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: [BUSINESS_TAGS.SOCIAL, BUSINESS_TAGS.SPECIALIZED],

    description: "Have you tried turning it off and on again? A steady service job with strong demand and questionable morale outcomes.",

    unlockCost: 1100,
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
  // Tier 3
  // ========================================================

  {
    id: "super_secret_spy_org",
    businessKey: "super_secret_spy_org",
    variantKey: "default",
    franchise: "Generic",
    name: "Super Secret Spy Organization",

    imagePath: "assets/businesses/generic/super-secret-spy-org.png",
    imageAlt: "Super Secret Spy Organization",

    tier: 3,
    jobType: JOB_TYPES.COVERT,
    tags: [BUSINESS_TAGS.RISKY, BUSINESS_TAGS.SHADY, BUSINESS_TAGS.SECURE],

    description: "Highly classified operations carried out by highly questionable personnel. Outcomes vary wildly.",

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
  }
];