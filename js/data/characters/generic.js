// ==========================================================
// Generic / Non-Franchise Characters
// ----------------------------------------------------------
// This file serves as:
// - filler workforce
// - parody / inspired characters
// - legendary one-offs
//
// These are NOT tied to a specific franchise and help:
// - reduce repetition
// - stabilize pack generation
// - provide wildcard fun characters
// ==========================================================

const GENERIC_CHARACTERS = [

  // ========================================================
  // Core Generic Workforce
  // --------------------------------------------------------
  // Bread-and-butter workers for balance and variety
  // ========================================================

  {
    id: "red_shirt",
    characterKey: "red_shirt",
    variantKey: "default",
    displayName: "Red Shirt",
    subtitle: "",
    franchise: "Generic",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Statistically unlikely to make it through the shift."
  },

  {
    id: "space_marine",
    characterKey: "space_marine",
    variantKey: "default",
    displayName: "Space Marine",
    subtitle: "",
    franchise: "Generic",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Well-trained, heavily armored, and probably overqualified."
  },

  {
    id: "security_guard",
    characterKey: "security_guard",
    variantKey: "default",
    displayName: "Security Guard",
    subtitle: "",
    franchise: "Generic",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.LABORER],
    tags: [CHARACTER_TAGS.GUARD],
    flavor: "Keeps things under control. Usually."
  },

  {
    id: "delivery_driver",
    characterKey: "delivery_driver",
    variantKey: "default",
    displayName: "Delivery Driver",
    subtitle: "",
    franchise: "Generic",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.LABORER],
    tags: [],
    flavor: "Gets the job done, eventually."
  },

  {
    id: "janitor",
    characterKey: "janitor",
    variantKey: "default",
    displayName: "Janitor",
    subtitle: "",
    franchise: "Generic",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.SUPPORT],
    tags: [],
    flavor: "Quietly improves everything without being noticed."
  },

  // ========================================================
  // Slightly Specialized Generic Workers
  // ========================================================

  {
    id: "mechanic",
    characterKey: "mechanic",
    variantKey: "default",
    displayName: "Mechanic",
    subtitle: "",
    franchise: "Generic",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SPECIALIST],
    tags: [],
    flavor: "Fixes problems faster than they can be created."
  },

  {
    id: "mercenary",
    characterKey: "mercenary",
    variantKey: "default",
    displayName: "Mercenary",
    subtitle: "",
    franchise: "Generic",
    rarity: "uncommon",
    basePower: 9,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Highly effective, highly questionable."
  },

  {
    id: "field_medic",
    characterKey: "field_medic",
    variantKey: "default",
    displayName: "Field Medic",
    subtitle: "",
    franchise: "Generic",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [],
    flavor: "Keeps everyone functional under pressure."
  },

  // ========================================================
  // Legendary / Wildcard Characters
  // --------------------------------------------------------
  // Rare, fun, and sometimes slightly overpowered
  // ========================================================

  {
    id: "chuck_norris",
    characterKey: "chuck_norris",
    variantKey: "default",
    displayName: "Chuck Norris",
    subtitle: "",
    franchise: "Generic",
    rarity: "ultra",
    basePower: 15,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO],
    tags: [],
    flavor: "The job adapts to him."
  },

  {
    id: "mysterious_stranger",
    characterKey: "mysterious_stranger",
    variantKey: "default",
    displayName: "Mysterious Stranger",
    subtitle: "",
    franchise: "Generic",
    rarity: "rare",
    basePower: 11,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.ROGUE],
    tags: [],
    flavor: "Shows up, solves problems, refuses to explain anything."
  }
];