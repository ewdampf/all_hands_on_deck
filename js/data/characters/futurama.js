// ==========================================================
// Futurama Characters
// ----------------------------------------------------------
// Starter Futurama character file for All Hands On Deck.
//
// Focus:
// - delivery-friendly workers
// - a mix of support, rogue, hero, and labor roles
// - enough variety to test franchise file aggregation
// ==========================================================

const FUTURAMA_CHARACTERS = [

  // ========================================================
  // Core Crew
  // ========================================================

  {
    id: "fry",
    characterKey: "fry",
    variantKey: "default",
    displayName: "Fry",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.LABORER],
    tags: [],
    flavor: "Not brilliant, but surprisingly durable in bad plans."
  },

  {
    id: "leela",
    characterKey: "leela",
    variantKey: "default",
    displayName: "Leela",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 11,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [],
    flavor: "Capable leadership with very little patience for nonsense."
  },

  {
    id: "bender",
    characterKey: "bender",
    variantKey: "default",
    displayName: "Bender",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 12,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT],
    flavor: "Productive, chaotic, and morally available."
  },

  {
    id: "professor_farnsworth",
    characterKey: "professor_farnsworth",
    variantKey: "default",
    displayName: "Professor Farnsworth",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 10,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SPECIALIST],
    tags: [],
    flavor: "Incredibly useful when his inventions do not make things worse."
  },

  {
    id: "amy_wong",
    characterKey: "amy_wong",
    variantKey: "default",
    displayName: "Amy Wong",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [],
    flavor: "Helpful, social, and better than she usually gets credit for."
  },

  {
    id: "hermes_conrad",
    characterKey: "hermes_conrad",
    variantKey: "default",
    displayName: "Hermes Conrad",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 10,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SPECIALIST],
    tags: [],
    flavor: "Extremely competent and deeply invested in proper paperwork."
  },

  {
    id: "dr_zoidberg",
    characterKey: "dr_zoidberg",
    variantKey: "default",
    displayName: "Dr. Zoidberg",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.LABORER],
    tags: [],
    flavor: "Technically a doctor. Results vary."
  },

  {
    id: "scruffy",
    characterKey: "scruffy",
    variantKey: "default",
    displayName: "Scruffy",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.LABORER],
    tags: [],
    flavor: "Steady, quiet, and already over this whole thing."
  },

  {
    id: "nibbler",
    characterKey: "nibbler",
    variantKey: "default",
    displayName: "Nibbler",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 10,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO],
    tags: [],
    flavor: "Much more important than he looks."
  }
];