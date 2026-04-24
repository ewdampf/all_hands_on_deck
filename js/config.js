// ==========================================================
// All Hands On Deck - Global Configuration
// ----------------------------------------------------------
// Central place for pacing, economy, morale, packs, upgrades,
// business tier rules, business tag rules, fallbacks, and
// stable IDs used across the project.
// ==========================================================

const CONFIG = {
  // ========================================================
  // Core game settings
  // ========================================================
  GAME: {
    TITLE: "All Hands On Deck",
    AUTO_SAVE_KEY: "allHandsOnDeckSave",
    GAME_TICK_MS: 1000,

    // Starting resources for a brand-new save
    STARTING_CREDITS: 0,
    STARTING_TOKENS: 1
  },

  // ========================================================
  // Global economy pacing
  // --------------------------------------------------------
  // Use this to slow down or speed up the entire economy
  // without rebalancing every individual business.
  // ========================================================
  ECONOMY: {
    GLOBAL_INCOME_MULTIPLIER: 0.20
  },

  // ========================================================
  // Daily rewards
  // --------------------------------------------------------
  // Currently used for the free daily token claim.
  // ========================================================
  DAILY: {
    FREE_TOKEN_AMOUNT: 1,
    TOKEN_RESET_HOURS: 24
  },

  // ========================================================
  // Pack definitions
  // --------------------------------------------------------
  // Packs cost tokens, not credits.
  // Guarantees specify minimum included rarities.
  // ========================================================
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

    // Base rarity odds used when rolling non-guaranteed cards
    ODDS: {
      common: 0.55,
      uncommon: 0.27,
      rare: 0.14,
      ultra: 0.04
    }
  },

  // ========================================================
  // Stable business IDs
  // --------------------------------------------------------
  // Use these everywhere instead of hardcoded strings.
  // Add to this list as new businesses are introduced.
  // ========================================================
  BUSINESS_IDS: {
    // ------------------------------------------------------
    // Star Wars
    // ------------------------------------------------------
    MOISTURE_FARM: "moisture_farm",
    SPICE_MINE: "spice_mine",
    MOS_EISLEY_CANTINA: "mos_eisley_cantina",
    CANTO_BIGHT_CASINO: "canto_bight_casino",
    BOUNTY_HUNTERS_GUILD: "bounty_hunters_guild",
    TRADE_FEDERATION: "trade_federation",
    TECHNO_UNION: "techno_union",
    KAMINOAN_CLONING_FACILITY: "kaminoan_cloning_facility",

    // ------------------------------------------------------
    // Futurama
    // ------------------------------------------------------
    PLANET_EXPRESS: "planet_express",
    MOMCORP: "momcorp",
    ROBOT_ARMS_APARTMENTS: "robot_arms_apartments",

    // ------------------------------------------------------
    // Generic
    // ------------------------------------------------------
    POTATO_FARM: "potato_farm",
    TECH_SUPPORT_CENTER: "tech_support_center",
    SUPER_SECRET_SPY_ORG: "super_secret_spy_org",

    // ------------------------------------------------------
    // Legacy / transitional
    // ------------------------------------------------------
    CENTRAL_PERK: "central_perk"
  },

  // ========================================================
  // Asset fallbacks
  // --------------------------------------------------------
  // Used when images are missing or paths are invalid.
  // ========================================================
  FALLBACKS: {
    BUSINESS_IMAGE: "assets/businesses/fallback-business.png",
    CHARACTER_IMAGE: "assets/characters/fallback-character.png"
  },

  // ========================================================
  // Business tier rules
  // --------------------------------------------------------
  // Tiers define baseline business shape:
  // - base cost
  // - base slots
  // - base income
  // - base prestige
  // - upgrade scaling
  // ========================================================
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

  // ========================================================
  // Business tag rules
  // --------------------------------------------------------
  // Tags shape a business beyond its tier:
  // - slot multipliers
  // - revenue multipliers
  // - prestige multipliers
  // - morale effects
  // - future global effects
  // ========================================================
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

  // ========================================================
  // Morale system
  // --------------------------------------------------------
  // Governs happiness / dissatisfaction and how morale
  // affects output and release-pressure behavior.
  // ========================================================
  MORALE: {
    STARTING: 60,
    MIN: 0,
    MAX: 100,

    HIGH_THRESHOLD: 80,
    LOW_THRESHOLD: 30,
    EPIC_THRESHOLD: 90,

    // Per-tick morale movement
    PREFERRED_JOB_DELTA: 2,
    WRONG_JOB_DELTA: -2,
    IDLE_DELTA: -1,

    SUPPORT_DELTA: 1,
    CANNON_GROUP_DELTA: 1,
    HERO_WITH_ROGUE_DELTA: -2,

    // Output modifiers based on morale bands
    HIGH_MODIFIER: 0.20,
    MID_MODIFIER: 0,
    LOW_MODIFIER: -0.15,
    VERY_LOW_MODIFIER: -0.30,

    // Efficiency level 2 can soften off-role penalties a bit
    EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF: 0.05,

    // Misc morale events
    EPIC_ROSTER_BONUS: 3,
    RELEASE_REQUEST_CHANCE: 0.04
  },

  // ========================================================
  // Output modifiers
  // --------------------------------------------------------
  // Core production multipliers for worker types.
  // ========================================================
  OUTPUT: {
    // Same-type cannon fodder bonus
    CANNON_FODDER_GROUP_BONUS: 0.06,
    CANNON_FODDER_GROUP_BONUS_CAP: 0.50,

    // Extra bonus for cannon fodder at the Moisture Farm
    CANNON_FODDER_FARM_BONUS: 0.10,

    // Hero tuning
    HERO_OUTPUT_MODIFIER: 0.10,
    HERO_LOW_MORALE_PENALTY: 0.75,

    // Support tuning
    SUPPORT_OUTPUT_MODIFIER: 0.05,

    // Penalty when a worker is in the wrong kind of job
    OFF_ROLE_OUTPUT_PENALTY: 0.90
  },

  // ========================================================
  // Prestige system
  // --------------------------------------------------------
  // Prestige currently boosts income and reflects quality /
  // status of the assigned workforce.
  // ========================================================
  PRESTIGE: {
    HERO_BONUS: 10,
    ULTRA_BONUS: 5,
    HIGH_MORALE_BONUS: 2
  },

  // ========================================================
  // Headline system
  // --------------------------------------------------------
  // Random flavor / event headline frequency.
  // ========================================================
  HEADLINES: {
    EPIC_HEADLINE_CHANCE: 0.03,
    WARNING_HEADLINE_CHANCE: 0.03
  },

  // ========================================================
  // Business upgrades
  // --------------------------------------------------------
  // Capacity and efficiency progression.
  // ========================================================
  UPGRADES: {
    CAPACITY_SLOT_BONUS_PER_LEVEL: 2,
    MAX_CAPACITY_LEVEL: 2,
    MAX_EFFICIENCY_LEVEL: 2,

    CAPACITY_COSTS: [1000, 3000],
    EFFICIENCY_COSTS: [1500, 4500],

    EFFICIENCY_OUTPUT_BONUS_PER_LEVEL: 0.10
  },

  // ========================================================
  // Advertising system
  // --------------------------------------------------------
  // Temporary income boost with cooldown.
  // ========================================================
  ADVERTISING: {
    INCOME_MULTIPLIER: 1.5,
    DURATION_MS: 60 * 1000,
    COOLDOWN_MS: 5 * 60 * 1000
  },

  UI: {
    ROSTER_REFRESH_MS: 10 * 1000
  },

  // ========================================================
  // Theme placeholders
  // --------------------------------------------------------
  // Future theme switching can use this section or expand
  // into a separate theme file system later.
  // ========================================================
  THEMES: {
    DEFAULT: "default"
  }
};