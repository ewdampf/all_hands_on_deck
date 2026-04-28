// ==========================================================
// Global Configuration
// ----------------------------------------------------------
// Central configuration for gameplay systems.
// Keep this file data-only (no logic).
// ==========================================================

const CONFIG = {

  // ========================================================
  // Game Loop
  // ========================================================
  GAME: {
    GAME_TICK_MS: 1000
  },

  // ========================================================
  // Daily Rewards
  // ========================================================
  DAILY: {
    FREE_TOKEN_AMOUNT: 1,
    TOKEN_RESET_HOURS: 24
  },

  // ========================================================
  // Morale System
  // ========================================================
  MORALE: {
    STARTING: 70,
    MIN: 0,
    MAX: 100,

    LOW_THRESHOLD: 30,

    TICK_DECAY: 1,
    GOOD_JOB_GAIN: 2,
    BAD_JOB_LOSS: 2
  },

  // ========================================================
  // Rarity System
  // ========================================================
  RARITIES: {
    common:    { stars: 1, label: "Common" },
    uncommon:  { stars: 2, label: "Uncommon" },
    rare:      { stars: 3, label: "Rare" },
    ultra:     { stars: 4, label: "Ultra-Rare" },
    legendary: { stars: 5, label: "Legendary" },
    mythic:    { stars: 6, label: "Mythic" }
  },

  RARITY_ORDER: ["common", "uncommon", "rare", "ultra", "legendary", "mythic"],

  // ========================================================
  // Packs
  // ========================================================
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
        legendary: 0
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
        legendary: 0
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
        legendary: 0
      },

      guaranteedMinimum: "rare"
    }
  },

  // ========================================================
  // Mythic System
  // ========================================================
  MYTHIC: {
    ROLL_CHANCE: 0.001 // 0.1%
  },

  // ========================================================
  // Business Upgrades
  // ========================================================
  UPGRADES: {
    MAX_CAPACITY_LEVEL: 5,
    MAX_EFFICIENCY_LEVEL: 5
  },

  // ========================================================
  // Maintenance System
  // --------------------------------------------------------
  // Adds cost pressure to:
  // - unused businesses
  // - unhappy (0 morale) workers
  // ========================================================
  MAINTENANCE: {
    ENABLED: true,

    // Business upkeep per tick (by tier)
    BUSINESS_BASE_BY_TIER: {
      1: 5,   // Tier 1 → Common equivalent
      2: 8,   // Tier 2 → Uncommon equivalent
      3: 12   // Tier 3 → Rare equivalent
    },

    // Worker upkeep when morale hits 0
    ZERO_MORALE_WORKER_BASE: 2,

    // Scaling factors
    ZERO_MORALE_RARITY_MULTIPLIER: 1,
    ZERO_MORALE_PRESTIGE_MULTIPLIER: 1,

    // Behavior system (future)
    RELEASE_REQUEST_MIN_RARITY: "rare",
    RELEASE_REQUEST_CHANCE: 0.03
  },

  // ========================================================
  // UI Behavior
  // ========================================================
  UI: {
    ROSTER_REFRESH_MS: 10 * 1000
  },

  // ========================================================
  // Fallback Assets
  // ========================================================
  FALLBACKS: {
    BUSINESS_IMAGE: "assets/businesses/fallback-business.png",
    CHARACTER_IMAGE: "assets/characters/fallback-character.png"
  }

};