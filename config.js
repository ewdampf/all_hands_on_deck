const CONFIG = {
  GAME: {
    TITLE: "All Hands On Deck",
    AUTO_SAVE_KEY: "allHandsOnDeckSave",
    GAME_TICK_MS: 1000,
    STARTING_CREDITS: 0,
    STARTING_TOKENS: 1
  },

  ECONOMY: {
    GLOBAL_INCOME_MULTIPLIER: 0.20
  },

  DAILY: {
    FREE_TOKEN_AMOUNT: 1,
    TOKEN_RESET_HOURS: 24
  },

  PACKS: {
    BASIC: {
      id: "basic",
      name: "Basic Pack",
      tokenCost: 1,
      cardCount: 3,
      guarantees: []
    },

    UNCOMMON: {
      id: "uncommon",
      name: "Uncommon Pack",
      tokenCost: 2,
      cardCount: 3,
      guarantees: ["uncommon"]
    },

    RARE: {
      id: "rare",
      name: "Rare Pack",
      tokenCost: 5,
      cardCount: 5,
      guarantees: ["uncommon", "rare"]
    },

    ODDS: {
      common: 0.55,
      uncommon: 0.27,
      rare: 0.14,
      ultra: 0.04
    }
  },

  // =========================
  // NEW: TIER SYSTEM
  // =========================
  BUSINESS_TIERS: {
    1: {
      baseUnlockCost: 0,
      baseSlots: 6,
      baseIncomeMultiplier: 1.0,
      basePrestigeMultiplier: 1.0,
      upgradeCostMultiplier: 1.0
    },
    2: {
      baseUnlockCost: 250,
      baseSlots: 5,
      baseIncomeMultiplier: 1.3,
      basePrestigeMultiplier: 1.15,
      upgradeCostMultiplier: 1.4
    },
    3: {
      baseUnlockCost: 800,
      baseSlots: 4,
      baseIncomeMultiplier: 1.7,
      basePrestigeMultiplier: 1.35,
      upgradeCostMultiplier: 1.9
    }
  },

  // =========================
  // NEW: TAG RULE SYSTEM
  // (light implementation now, expandable later)
  // =========================
  BUSINESS_TAG_RULES: {
    dirty: {
      slotMultiplier: 1.15,
      revenueMultiplier: 1.0,
      prestigeMultiplier: 0.85,
      moraleEffects: {
        moralCodePenalty: 1
      },
      globalEffects: {}
    },

    labor_heavy: {
      slotMultiplier: 1.25,
      revenueMultiplier: 1.0,
      prestigeMultiplier: 1.0,
      moraleEffects: {},
      globalEffects: {}
    },

    risky: {
      slotMultiplier: 1.0,
      revenueMultiplier: 1.15,
      prestigeMultiplier: 1.05,
      moraleEffects: {
        moralCodePenalty: 1
      },
      globalEffects: {}
    },

    logistics: {
      slotMultiplier: 1.0,
      revenueMultiplier: 1.1,
      prestigeMultiplier: 1.0,
      moraleEffects: {},
      globalEffects: {}
    },

    social: {
      slotMultiplier: 0.9,
      revenueMultiplier: 0.9,
      prestigeMultiplier: 1.0,
      moraleEffects: {},
      globalEffects: {
        moraleBonusIfWellStaffed: 1
      }
    },

    medical: {
      slotMultiplier: 0.75,
      revenueMultiplier: 0.85,
      prestigeMultiplier: 1.1,
      moraleEffects: {},
      globalEffects: {
        moralePenaltyReduction: 0.05
      }
    },

    military: {
      slotMultiplier: 1.4,
      revenueMultiplier: 1.1,
      prestigeMultiplier: 1.2,
      moraleEffects: {
        lowSkillTolerancePenalty: 1
      },
      globalEffects: {}
    },

    shady: {
      slotMultiplier: 1.0,
      revenueMultiplier: 1.2,
      prestigeMultiplier: 0.95,
      moraleEffects: {
        moralCodePenalty: 2
      },
      globalEffects: {}
    }
  },

  MORALE: {
    STARTING: 60,
    MIN: 0,
    MAX: 100,

    HIGH_THRESHOLD: 80,
    LOW_THRESHOLD: 30,
    EPIC_THRESHOLD: 90,

    PREFERRED_JOB_DELTA: 2,
    WRONG_JOB_DELTA: -2,
    IDLE_DELTA: -1,

    SUPPORT_DELTA: 1,
    CANNON_GROUP_DELTA: 1,
    HERO_WITH_ROGUE_DELTA: -2,
    MORAL_CODE_LOW_STATUS_DELTA: -1,

    HIGH_MODIFIER: 0.20,
    MID_MODIFIER: 0,
    LOW_MODIFIER: -0.15,
    VERY_LOW_MODIFIER: -0.30,

    EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF: 0.05,

    EPIC_ROSTER_BONUS: 3,
    RELEASE_REQUEST_CHANCE: 0.04
  },

  OUTPUT: {
    CANNON_FODDER_GROUP_BONUS: 0.05,
    CANNON_FODDER_GROUP_BONUS_CAP: 0.40,
    CANNON_FODDER_FARM_BONUS: 0.10,

    HERO_OUTPUT_MODIFIER: 0.10,
    HERO_LOW_MORALE_PENALTY: 0.75,

    SUPPORT_OUTPUT_MODIFIER: 0.05,
    OFF_ROLE_OUTPUT_PENALTY: 0.90
  },

  PRESTIGE: {
    HERO_BONUS: 10,
    ULTRA_BONUS: 5,
    HIGH_MORALE_BONUS: 2
  },

  HEADLINES: {
    EPIC_HEADLINE_CHANCE: 0.03,
    WARNING_HEADLINE_CHANCE: 0.03
  },

  UPGRADES: {
    CAPACITY_SLOT_BONUS_PER_LEVEL: 2,
    MAX_CAPACITY_LEVEL: 2,
    MAX_EFFICIENCY_LEVEL: 2,

    CAPACITY_COSTS: [1000, 3000],
    EFFICIENCY_COSTS: [1500, 4500],

    EFFICIENCY_OUTPUT_BONUS_PER_LEVEL: 0.10
  },

  ADVERTISING: {
    INCOME_MULTIPLIER: 1.5,
    DURATION_MS: 60 * 1000,
    COOLDOWN_MS: 5 * 60 * 1000
  },

BUSINESSES: {
  MOISTURE_FARM: {
    ID: "moisture_farm",
    NAME: "Moisture Farm"
  },

  CENTRAL_PERK: {
    ID: "central_perk",
    NAME: "Central Perk"
  },

  PLANET_EXPRESS: {
    ID: "planet_express",
    NAME: "Planet Express"
  }
},

  TRAITS: {
    CANNON_FODDER: "cannon_fodder",
    HERO: "hero",
    MORAL_CODE: "moral_code",
    SUPPORT: "support",
    ROGUE: "rogue",
    SPECIALIST: "specialist",
    LABORER: "laborer"
  },

  JOB_TYPES: {
    FARM: "farm",
    DELIVERY: "delivery",
    SERVICE: "service",
    HEROIC: "heroic"
  },

  THEMES: {
    DEFAULT: "default"
  }
};