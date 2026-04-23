// ==========================================================
// Generic Businesses
// ----------------------------------------------------------
// Non-franchise / flexible businesses.
//
// Purpose:
// - filler content
// - humor-driven entries
// - future experimental mechanics
//
// These are safe, expandable, and not tied to a single IP.
// ==========================================================

const GENERIC_BUSINESSES = [

  // ========================================================
  // Tier 1
  // ========================================================

  {
    id: CONFIG.BUSINESS_IDS.POTATO_FARM,
    businessKey: "potato_farm",
    variantKey: "default",
    franchise: "Generic",
    name: "Potato Farm",

    imagePath: "assets/businesses/generic/potato-farm.png",
    imageAlt: "Potato Farm",

    tier: 1,
    jobType: JOB_TYPES.FARM,
    tags: ["dirty", "labor_heavy"],

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
    id: CONFIG.BUSINESS_IDS.TECH_SUPPORT_CENTER,
    businessKey: "tech_support_center",
    variantKey: "default",
    franchise: "Generic",
    name: "Tech Support Center",

    imagePath: "assets/businesses/generic/tech-support-center.png",
    imageAlt: "Tech Support Center",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: ["social"],

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
    id: CONFIG.BUSINESS_IDS.SUPER_SECRET_SPY_ORG,
    businessKey: "super_secret_spy_org",
    variantKey: "default",
    franchise: "Generic",
    name: "Super Secret Spy Organization",

    imagePath: "assets/businesses/generic/super-secret-spy-org.png",
    imageAlt: "Super Secret Spy Organization",

    tier: 3,
    jobType: JOB_TYPES.DELIVERY,
    tags: ["risky", "shady"],

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