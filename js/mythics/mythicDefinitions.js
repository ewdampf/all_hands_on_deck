// ==========================================================
// Mythic Definitions
// ----------------------------------------------------------
// Mythics are special unlocks, not normal pack pulls.
// They represent iconic moments, transformations, or states.
// ==========================================================

const MYTHICS = [

  // ========================================================
  // Star Wars / Original Trilogy
  // ========================================================

  {
    id: "carbonite_han_solo",
    mythicKey: "carbonite_han",
    baseCharacterKey: "han_solo",

    displayName: "Carbonite Han Solo",
    subtitle: "Frozen in Carbonite",

    franchise: "Star Wars",
    mythicCategory: "event",

    rarity: "mythic",
    prestige: 5,
    basePower: 0,

    preferredJob: JOB_TYPES.SERVICE,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SMUGGLER,
      CHARACTER_TAGS.FROZEN,
      CHARACTER_TAGS.ICONIC
    ],

    flavor: "A legendary smuggler temporarily converted into expensive wall decor.",

    mythicData: {
      hidden: false,
      cinematic: true,
      assignable: true,
      passiveSupport: true,
      suggestedEffect: "Workers in the same business lose morale more slowly."
    },

    unlockData: {
      recipeId: "carbonite_han_recipe"
    }
  },

  {
    id: "force_ghost_obi_wan",
    mythicKey: "force_ghost_obi_wan",
    baseCharacterKey: "obi_wan_kenobi",

    displayName: "Force Ghost Obi-Wan",
    subtitle: "More Powerful Than You Can Possibly Imagine",

    franchise: "Star Wars",
    mythicCategory: "ascended",

    rarity: "mythic",
    prestige: 5,
    basePower: 0,

    preferredJob: JOB_TYPES.HEROIC,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.JEDI,
      CHARACTER_TAGS.FORCE_GHOST,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.MENTOR
    ],

    flavor: "A fallen Jedi Master whose guidance became stronger after leaving the physical world behind.",

    mythicData: {
      hidden: true,
      cinematic: true,
      assignable: false,
      passiveSupport: true,
      suggestedEffect: "Provides a global morale bonus to heroes and Force-sensitive characters."
    },

    unlockData: {
      recipeId: "force_ghost_obi_wan_recipe"
    }
  },

  {
    id: "leia_slayer_of_jabba",
    mythicKey: "leia_slayer_of_jabba",
    baseCharacterKey: "leia_organa",

    displayName: "Leia, Slayer of Jabba",
    subtitle: "Chainbreaker",

    franchise: "Star Wars",
    mythicCategory: "event",

    rarity: "mythic",
    prestige: 5,
    basePower: 14,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.HERO,
      TRAITS.MORAL_CODE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.PRINCESS,
      CHARACTER_TAGS.LEADER,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.RESILIENT
    ],

    flavor: "A captive princess who turned the symbol of her imprisonment into the end of a crime lord.",

    mythicData: {
      hidden: true,
      cinematic: true,
      assignable: true,
      passiveSupport: false,
      suggestedEffect: "Ignores villain morale penalties and performs well in shady businesses."
    },

    unlockData: {
      recipeId: "leia_slayer_of_jabba_recipe"
    }
  },

  {
    id: "c3po_god_of_the_ewoks",
    mythicKey: "c3po_god_of_the_ewoks",
    baseCharacterKey: "c3po",

    displayName: "C-3PO, God of the Ewoks",
    subtitle: "Golden Deity",

    franchise: "Star Wars",
    mythicCategory: "parody",

    rarity: "mythic",
    prestige: 5,
    basePower: 6,

    preferredJob: JOB_TYPES.HOSPITALITY,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.DROID,
      CHARACTER_TAGS.TRANSLATOR,
      CHARACTER_TAGS.DIPLOMAT,
      CHARACTER_TAGS.ROYALTY,
      CHARACTER_TAGS.CHEERFUL
    ],

    flavor: "A nervous protocol droid briefly promoted by circumstance, misunderstanding, and excellent lighting.",

    mythicData: {
      hidden: false,
      cinematic: true,
      assignable: true,
      passiveSupport: true,
      suggestedEffect: "Boosts morale for Ewoks, droids, support characters, and hospitality businesses."
    },

    unlockData: {
      recipeId: "c3po_god_of_the_ewoks_recipe"
    }
  }

];