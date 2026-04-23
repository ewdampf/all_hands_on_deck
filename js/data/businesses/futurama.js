// ==========================================================
// Futurama Businesses
// ----------------------------------------------------------
// Franchise business file for All Hands On Deck.
//
// Schema notes:
// - id: globally unique identifier
// - businessKey: shared identity across variants
// - variantKey: version of the business
// - franchise: source franchise
// - imagePath: square image path for card display
// - imageAlt: fallback alt text
//
// Important:
// - Keep image assets square
// - Use fallback-business.png if a specific image is missing
// - Do not duplicate business IDs in other files
// ==========================================================

const FUTURAMA_BUSINESSES = [

  // ========================================================
  // Core Business
  // ========================================================

  {
    id: CONFIG.BUSINESS_IDS.PLANET_EXPRESS,
    businessKey: "planet_express",
    variantKey: "default",
    franchise: "Futurama",
    name: "Planet Express",

    imagePath: "assets/businesses/futurama/planet-express.png",
    imageAlt: "Planet Express",

    tier: 2,
    jobType: JOB_TYPES.DELIVERY,
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
  },

  // ========================================================
  // Future Expansion / Proof-of-Concept Businesses
  // ========================================================

  {
    id: CONFIG.BUSINESS_IDS.MOMCORP,
    businessKey: "momcorp",
    variantKey: "default",
    franchise: "Futurama",
    name: "MomCorp",

    imagePath: "assets/businesses/futurama/momcorp.png",
    imageAlt: "MomCorp",

    tier: 3,
    jobType: JOB_TYPES.SERVICE,
    tags: ["logistics", "shady"],

    description: "A massive corporate machine. Efficient, profitable, and not especially wholesome.",

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
    id: CONFIG.BUSINESS_IDS.ROBOT_ARMS_APARTMENTS,
    businessKey: "robot_arms_apartments",
    variantKey: "default",
    franchise: "Futurama",
    name: "Robot Arms Apartments",

    imagePath: "assets/businesses/futurama/robot-arms-apartments.png",
    imageAlt: "Robot Arms Apartments",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: ["social"],

    description: "A busy social hub with low standards and constant activity. A decent place for service workers and robots alike.",

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
  }
];