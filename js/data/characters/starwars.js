// ==========================================================
// Star Wars Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
//
// Schema notes:
// - id: globally unique identifier
// - characterKey: shared identity across variants
// - variantKey: specific version of that character
// - displayName: card title shown in UI
// - subtitle: optional version label for variants
//
// Important:
// - Do not duplicate IDs across franchise files
// - Distinct variants can share characterKey
// ==========================================================

const STAR_WARS_CHARACTERS = [

  // ========================================================
  // Cannon Fodder / Grunt Units
  // --------------------------------------------------------
  // Designed to be modest individually, but rewarding in
  // matching groups of the same type.
  // ========================================================

  {
    id: "stormtrooper",
    characterKey: "stormtrooper",
    variantKey: "default",
    displayName: "Stormtrooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Works best in large, identical formations."
  },

  {
    id: "clone_trooper",
    characterKey: "clone_trooper",
    variantKey: "default",
    displayName: "Clone Trooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Disciplined and efficient in matching squads."
  },

  {
    id: "scout_trooper",
    characterKey: "scout_trooper",
    variantKey: "default",
    displayName: "Scout Trooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.PILOT],
    flavor: "Better at mobile work than standing in a field."
  },

  {
    id: "snowtrooper",
    characterKey: "snowtrooper",
    variantKey: "default",
    displayName: "Snowtrooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY],
    flavor: "Prepared for harsh conditions, even when no one asked."
  },

  {
    id: "sandtrooper",
    characterKey: "sandtrooper",
    variantKey: "default",
    displayName: "Sandtrooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DESERT],
    flavor: "Actually comfortable in miserable working conditions."
  },

  {
    id: "crimson_guard",
    characterKey: "crimson_guard",
    variantKey: "default",
    displayName: "Crimson Guard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.GUARD, CHARACTER_TAGS.MILITARY],
    flavor: "More suited to elite guard work than ordinary labor."
  },

  {
    id: "tie_pilot",
    characterKey: "tie_pilot",
    variantKey: "default",
    displayName: "TIE Pilot",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.PILOT, CHARACTER_TAGS.MILITARY],
    flavor: "Wants speed, danger, and very poor odds."
  },

  {
    id: "battle_droid",
    characterKey: "battle_droid",
    variantKey: "default",
    displayName: "Battle Droid",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 4,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MILITARY],
    flavor: "Not bright, but there are always more of them."
  },

  {
    id: "super_battle_droid",
    characterKey: "super_battle_droid",
    variantKey: "default",
    displayName: "Super Battle Droid",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MILITARY],
    flavor: "Bulkier, tougher, and slightly less embarrassing."
  },

  {
    id: "droideka",
    characterKey: "droideka",
    variantKey: "default",
    displayName: "Droideka",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MILITARY],
    flavor: "Looks extremely qualified, which helps morale in some circles."
  },

  {
    id: "magnaguard",
    characterKey: "magnaguard",
    variantKey: "default",
    displayName: "MagnaGuard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.GUARD],
    flavor: "Excellent bodyguard material, not famous for charm."
  },

  {
    id: "rebel_trooper",
    characterKey: "rebel_trooper",
    variantKey: "default",
    displayName: "Rebel Trooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY],
    flavor: "Less polished than the Empire, still useful in numbers."
  },

  {
    id: "rebel_pilot",
    characterKey: "rebel_pilot",
    variantKey: "default",
    displayName: "Rebel Pilot",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT],
    flavor: "Much happier when the job involves movement and danger."
  },

  {
    id: "gamorrean_guard",
    characterKey: "gamorrean_guard",
    variantKey: "default",
    displayName: "Gamorrean Guard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.GUARD],
    flavor: "Strong, loud, and not overly concerned with refinement."
  },

  {
    id: "jawas",
    characterKey: "jawas",
    variantKey: "default",
    displayName: "Jawas",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.SCAVENGER, CHARACTER_TAGS.DESERT],
    flavor: "Oddly effective in the right kind of dusty chaos."
  },

  {
    id: "ewoks",
    characterKey: "ewoks",
    variantKey: "default",
    displayName: "Ewoks",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.TRIBAL],
    flavor: "Cute enough to underestimate. That is usually a mistake."
  },

  {
    id: "tusken_raider",
    characterKey: "tusken_raider",
    variantKey: "default",
    displayName: "Tusken Raider",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 6,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.TRIBAL, CHARACTER_TAGS.DESERT],
    flavor: "Handles harsh environments better than most."
  },

  {
    id: "gungan_warrior",
    characterKey: "gungan_warrior",
    variantKey: "default",
    displayName: "Gungan Warrior",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.TRIBAL, CHARACTER_TAGS.MILITARY],
    flavor: "Strange, energetic, and better in groups than you’d expect."
  },

  {
    id: "wookiee_warrior",
    characterKey: "wookiee_warrior",
    variantKey: "default",
    displayName: "Wookiee Warrior",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.FARM,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.TRIBAL, CHARACTER_TAGS.GUARD],
    flavor: "Powerful labor, though not especially delicate."
  },

  {
    id: "mandalorian_warrior",
    characterKey: "mandalorian_warrior",
    variantKey: "default",
    displayName: "Mandalorian Warrior",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.GUARD],
    flavor: "Too competent to waste, but still excellent in a matching unit."
  },

  // ========================================================
  // Named / Higher-Impact Characters
  // --------------------------------------------------------
  // Includes proof-of-concept variant handling.
  // ========================================================

  {
    id: "c3po",
    characterKey: "c3po",
    variantKey: "default",
    displayName: "C-3PO",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ROBOT],
    flavor: "Polite, anxious, and organized under pressure."
  },

  {
    id: "chewbacca",
    characterKey: "chewbacca",
    variantKey: "default",
    displayName: "Chewbacca",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 11,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.GUARD],
    flavor: "Strong, loyal, and much better than this job deserves."
  },

  {
    id: "han_solo",
    characterKey: "han_solo",
    variantKey: "prime",
    displayName: "Han Solo",
    subtitle: "Prime",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 11,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.PILOT],
    flavor: "Thrives in fast-moving, lightly supervised work."
  },

  {
    id: "boba_fett",
    characterKey: "boba_fett",
    variantKey: "default",
    displayName: "Boba Fett",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 12,
    preferredJob: JOB_TYPES.DELIVERY,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.GUARD],
    flavor: "Highly effective, not always great for workplace harmony."
  },

  // ========================================================
  // Variant Example: Obi-Wan Kenobi
  // --------------------------------------------------------
  // Proof of concept for multi-performer character versions.
  // Same characterKey, different variantKey and ID.
  // ========================================================

  {
    id: "obi_wan_kenobi_alec_guinness",
    characterKey: "obi_wan_kenobi",
    variantKey: "alec_guinness",
    displayName: "Obi-Wan Kenobi",
    subtitle: "Alec Guinness",
    franchise: "Star Wars",
    rarity: "ultra",
    basePower: 13,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [],
    flavor: "Older, wiser, and quietly judging your staffing decisions."
  },

  {
    id: "obi_wan_kenobi_ewan_mcgregor",
    characterKey: "obi_wan_kenobi",
    variantKey: "ewan_mcgregor",
    displayName: "Obi-Wan Kenobi",
    subtitle: "Ewan McGregor",
    franchise: "Star Wars",
    rarity: "ultra",
    basePower: 13,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [],
    flavor: "More active, more adaptable, and still above this nonsense."
  },

  {
    id: "luke_skywalker",
    characterKey: "luke_skywalker",
    variantKey: "prime",
    displayName: "Luke Skywalker",
    subtitle: "Prime",
    franchise: "Star Wars",
    rarity: "ultra",
    basePower: 14,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.REBEL],
    flavor: "Prestige, talent, and a strong sense that some jobs are beneath him."
  }
];