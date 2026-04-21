const CONFIG = {
  GAME: {
    TITLE: "All Hands On Deck",
    AUTO_SAVE_KEY: "allHandsOnDeckSave",
    GAME_TICK_MS: 1000,
    STARTING_CREDITS: 0
  },

  PACKS: {
    FREE_PACK_SIZE: 3,
    STANDARD_PACK_COST: 50,
    COMMON_CHANCE: 0.55,
    UNCOMMON_CHANCE: 0.27,
    RARE_CHANCE: 0.14,
    ULTRA_CHANCE: 0.04
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

    HIGH_MODIFIER: 0.20,
    MID_MODIFIER: 0,
    LOW_MODIFIER: -0.15,
    VERY_LOW_MODIFIER: -0.30,

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

  BUSINESSES: {
    MOISTURE_FARM: {
      ID: "moisture_farm",
      NAME: "Moisture Farm",
      SLOT_COUNT: 8,
      BASE_MULTIPLIER: 1.0,
      PRESTIGE_MULTIPLIER: 0.8
    },

    PLANET_EXPRESS: {
      ID: "planet_express",
      NAME: "Planet Express",
      SLOT_COUNT: 4,
      BASE_MULTIPLIER: 1.35,
      PRESTIGE_MULTIPLIER: 1.15
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