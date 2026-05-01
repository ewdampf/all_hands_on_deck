// ==========================================================
// Global Configuration
// ----------------------------------------------------------
// Central configuration for gameplay systems.
// Keep this file data-only.
// ==========================================================

const CONFIG = {
  GAME: {
    GAME_TICK_MS: 1000,
    STARTING_CREDITS: 0,
    STARTING_TOKENS: 1,
    AUTO_SAVE_KEY: "allHandsOnDeckSave"
  },

  ECONOMY: {
    GLOBAL_INCOME_MULTIPLIER: 0.50
  },

  DAILY: {
    FREE_TOKEN_AMOUNT: 1,
    TOKEN_RESET_HOURS: 24
  },

  RARITIES: {
    common: { stars: 1, label: "Common" },
    uncommon: { stars: 2, label: "Uncommon" },
    rare: { stars: 3, label: "Rare" },
    ultra: { stars: 4, label: "Ultra-Rare" },
    legendary: { stars: 5, label: "Legendary" },
    mythic: { stars: 6, label: "Mythic" }
  },

  RARITY_ORDER: ["common", "uncommon", "rare", "ultra", "legendary", "mythic"],

  PACKS: {
    BASIC: {
      id: "basic",
      name: "Basic Pack",
      tokenCost: 1,
      cardCount: 3,
      odds: {
        common: 0.90,
        uncommon: 0.085,
        rare: 0.015,
        ultra: 0,
        legendary: 0,
        mythic: 0
      },
      guaranteedMinimum: null
    },

    UNCOMMON: {
      id: "uncommon",
      name: "Uncommon Pack",
      tokenCost: 2,
      cardCount: 5,
      odds: {
        common: 0.72,
        uncommon: 0.23,
        rare: 0.045,
        ultra: 0.005,
        legendary: 0,
        mythic: 0
      },
      guaranteedMinimum: "uncommon"
    },

    RARE: {
      id: "rare",
      name: "Rare Pack",
      tokenCost: 5,
      cardCount: 5,
      odds: {
        common: 0.10,
        uncommon: 0.70,
        rare: 0.17,
        ultra: 0.03,
        legendary: 0,
        mythic: 0
      },
      guaranteedMinimum: "rare"
    },

    SPECIAL_FRANCHISE: {
      id: "special_franchise",
      name: "Franchise Pack",
      tokenCost: 10,
      cardCount: 5,

      guaranteedCards: [
        "uncommon",
        "uncommon",
        "rare",
        "ultra"
      ],

      finalCardOdds: {
        common: 0.50,
        uncommon: 0.30,
        rare: 0.15,
        ultra: 0.05,
        legendary: 0,
        mythic: 0
      }
    }
  },

  MYTHIC: {
    ROLL_CHANCE: 0.001
  },

  BUSINESS_IDS: {
    MOISTURE_FARM: "moisture_farm",
    SPICE_MINE: "spice_mine",
    MOS_EISLEY_CANTINA: "mos_eisley_cantina",
    CANTO_BIGHT_CASINO: "canto_bight_casino",
    BOUNTY_HUNTERS_GUILD: "bounty_hunters_guild",
    TRADE_FEDERATION: "trade_federation",
    TECHNO_UNION: "techno_union",
    KAMINOAN_CLONING_FACILITY: "kaminoan_cloning_facility",

    PLANET_EXPRESS: "planet_express",
    MOMCORP: "momcorp",
    ROBOT_ARMS_APARTMENTS: "robot_arms_apartments",

    POTATO_FARM: "potato_farm",
    TECH_SUPPORT_CENTER: "tech_support_center",
    SUPER_SECRET_SPY_ORG: "super_secret_spy_org",

    CENTRAL_PERK: "central_perk"
  },

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

BUSINESS_TAG_RULES: {
  dirty: {
    slotMultiplier: 1.10,
    revenueMultiplier: 1.00,
    prestigeMultiplier: 0.90,
    moraleEffects: {},
    globalEffects: {}
  },

  dangerous: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.15,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  risky: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.10,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  shady: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.15,
    prestigeMultiplier: 0.95,
    moraleEffects: {},
    globalEffects: {}
  },

  secure: {
    slotMultiplier: 0.95,
    revenueMultiplier: 0.95,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  },

  social: {
    slotMultiplier: 1.00,
    revenueMultiplier: 0.95,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  },

  comfort: {
    slotMultiplier: 0.95,
    revenueMultiplier: 0.95,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  },

  institutional: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.00,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  },

  hierarchical: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.05,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  networked: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.05,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  synergistic: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.05,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  prestige: {
    slotMultiplier: 0.95,
    revenueMultiplier: 1.00,
    prestigeMultiplier: 1.15,
    moraleEffects: {},
    globalEffects: {}
  },

  notorious: {
    slotMultiplier: 1.00,
    revenueMultiplier: 1.10,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  volume: {
    slotMultiplier: 1.20,
    revenueMultiplier: 0.95,
    prestigeMultiplier: 0.95,
    moraleEffects: {},
    globalEffects: {}
  },

  specialized: {
    slotMultiplier: 0.90,
    revenueMultiplier: 1.10,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  },

  experimental: {
    slotMultiplier: 0.95,
    revenueMultiplier: 1.10,
    prestigeMultiplier: 1.00,
    moraleEffects: {},
    globalEffects: {}
  },

  regulated: {
    slotMultiplier: 0.95,
    revenueMultiplier: 0.95,
    prestigeMultiplier: 1.05,
    moraleEffects: {},
    globalEffects: {}
  }
},

  MORALE: {
    STARTING: 70,
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

    HIGH_MODIFIER: 0.20,
    MID_MODIFIER: 0,
    LOW_MODIFIER: -0.15,
    VERY_LOW_MODIFIER: -0.30,

    EFFICIENCY_LEVEL_2_WRONG_JOB_RELIEF: 0.05,

    EPIC_ROSTER_BONUS: 3,
    RELEASE_REQUEST_CHANCE: 0.04
  },

  OUTPUT: {
    CANNON_FODDER_GROUP_BONUS: 0.06,
    CANNON_FODDER_GROUP_BONUS_CAP: 0.50,
    CANNON_FODDER_FARM_BONUS: 0.10,

    HERO_OUTPUT_MODIFIER: 0.10,
    HERO_LOW_MORALE_PENALTY: 0.75,

    SUPPORT_OUTPUT_MODIFIER: 0.05,

    OFF_ROLE_OUTPUT_PENALTY: 0.90
  },

  PRESTIGE: {
    HIGH_MORALE_BONUS: 2
  },

  HEADLINES: {
    EPIC_HEADLINE_CHANCE: 0.03,
    WARNING_HEADLINE_CHANCE: 0.03
  },

  UPGRADES: {
    CAPACITY_SLOT_BONUS_PER_LEVEL: 2,
    MAX_CAPACITY_LEVEL: 5,
    MAX_EFFICIENCY_LEVEL: 5,

    CAPACITY_COSTS: [1000, 3000, 7000, 14000, 25000],
    EFFICIENCY_COSTS: [1500, 4500, 9000, 18000, 32000],

    EFFICIENCY_OUTPUT_BONUS_PER_LEVEL: 0.10
  },

  ADVERTISING: {
    INCOME_MULTIPLIER: 1.5,
    DURATION_MS: 60 * 1000,
    COOLDOWN_MS: 5 * 60 * 1000
  },

  MAINTENANCE: {
    ENABLED: true,

    BUSINESS_BASE_BY_TIER: {
      1: 5,
      2: 8,
      3: 12
    },

    ZERO_MORALE_WORKER_BASE: 2,
    ZERO_MORALE_RARITY_MULTIPLIER: 1,
    ZERO_MORALE_PRESTIGE_MULTIPLIER: 1,

    RELEASE_REQUEST_MIN_RARITY: "rare",
    RELEASE_REQUEST_CHANCE: 0.03
  },

  UI: {
    ROSTER_REFRESH_MS: 10 * 1000
  },

  FALLBACKS: {
    BUSINESS_IMAGE: "assets/businesses/fallback-business.png",
    CHARACTER_IMAGE: "assets/characters/fallback-character.png"
  },

  THEMES: {
    DEFAULT: "default"
  }
};