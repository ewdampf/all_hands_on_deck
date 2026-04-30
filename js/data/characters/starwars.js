// ==========================================================
// Star Wars Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
//
// Rarity guide:
// common     = 1 star
// uncommon   = 2 stars
// rare       = 3 stars
// ultra      = 4 stars
// legendary  = 5 stars
// mythic     = 6 stars
//
// Prestige is 1-3 within that rarity.
// ==========================================================

const STAR_WARS_CHARACTERS = applyCharacterImageDefaults([

  // ========================================================
  // Common / Cannon Fodder
  // ========================================================

  {
    id: "stormtrooper",
    characterKey: "stormtrooper",
    variantKey: "default",
    displayName: "Stormtrooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED],
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
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED],
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
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.PILOT],
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
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.COLD],
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
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DESERT],
    flavor: "Actually comfortable in miserable working conditions."
  },

  {
    id: "tie_pilot",
    characterKey: "tie_pilot",
    variantKey: "default",
    displayName: "TIE Pilot",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.SPACE],
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
    prestige: 1,
    basePower: 4,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY],
    flavor: "Not bright, but there are always more of them."
  },

  {
    id: "rebel_trooper",
    characterKey: "rebel_trooper",
    variantKey: "default",
    displayName: "Rebel Trooper",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.SOLDIER],
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
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.SPACE],
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
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.WARRIOR],
    flavor: "Strong, loud, and not overly concerned with refinement."
  },

  {
    id: "ewoks",
    characterKey: "ewoks",
    variantKey: "default",
    displayName: "Ewoks",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.EWOK, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.RURAL],
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
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.DESERT, CHARACTER_TAGS.OUTCAST],
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
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.MILITARY],
    flavor: "Strange, energetic, and better in groups than you’d expect."
  },

  {
    id: "wookiee_warrior",
    characterKey: "wookiee_warrior",
    variantKey: "default",
    displayName: "Wookiee Warrior",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.WOOKIEE, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.LOYAL],
    flavor: "Powerful labor, though not especially delicate."
  },

  {
    id: "mandalorian_warrior",
    characterKey: "mandalorian_warrior",
    variantKey: "default",
    displayName: "Mandalorian Warrior",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.GUARD],
    flavor: "Nameless, but still carries more prestige than most grunts."
  },

  // ========================================================
  // Uncommon / Notable Units
  // ========================================================

  {
    id: "crimson_guard",
    characterKey: "crimson_guard",
    variantKey: "default",
    displayName: "Crimson Guard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "More suited to elite guard work than ordinary labor."
  },

  {
    id: "super_battle_droid",
    characterKey: "super_battle_droid",
    variantKey: "default",
    displayName: "Super Battle Droid",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY],
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
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY],
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
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.WARRIOR],
    flavor: "Excellent bodyguard material, not famous for charm."
  },

  {
    id: "jawas",
    characterKey: "jawas",
    variantKey: "default",
    displayName: "Jawas",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.SCAVENGER, CHARACTER_TAGS.DESERT, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "Oddly effective in the right kind of dusty chaos."
  },

  // ========================================================
  // Rare / Supporting Characters
  // ========================================================

  {
    id: "c3po",
    characterKey: "c3po",
    variantKey: "default",
    displayName: "C-3PO",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ANDROID, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.LAWFUL],
    flavor: "Polite, anxious, and far more important than his job title suggests."
  },

  {
    id: "chewbacca",
    characterKey: "chewbacca",
    variantKey: "default",
    displayName: "Chewbacca",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.WOOKIEE, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.MECHANIC, CHARACTER_TAGS.WARRIOR],
    flavor: "Strong, loyal, and much better than this job deserves."
  },

  {
    id: "boba_fett",
    characterKey: "boba_fett",
    variantKey: "default",
    displayName: "Boba Fett",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Highly effective, not always great for workplace harmony."
  },

  // ========================================================
  // Ultra-Rare / Stars
  // ========================================================

  {
    id: "han_solo",
    characterKey: "han_solo",
    variantKey: "prime",
    displayName: "Han Solo",
    subtitle: "Prime",
    franchise: "Star Wars",
    rarity: "ultra",
    prestige: 3,
    mythicVariantId: "han_solo_carbonite",
    alternateOutfits: [
      {
        id: "han_solo_stormtrooper_disguise",
        label: "Stormtrooper Disguise",
        imagePath: "assets/characters/starwars/han_solo_stormtrooper_disguise.png"
      }
    ],
    basePower: 12,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Thrives in fast-moving, lightly supervised work."
  },

  {
    id: "luke_skywalker",
    characterKey: "luke_skywalker",
    variantKey: "prime",
    displayName: "Luke Skywalker",
    subtitle: "Prime",
    franchise: "Star Wars",
    rarity: "ultra",
    prestige: 3,
    alternateOutfits: [
      {
        id: "luke_skywalker_xwing_pilot",
        label: "X-Wing Pilot Gear",
        imagePath: "assets/characters/starwars/luke_skywalker_xwing_pilot.png"
      },
      {
        id: "luke_skywalker_stormtrooper_disguise",
        label: "Stormtrooper Disguise",
        imagePath: "assets/characters/starwars/luke_skywalker_stormtrooper_disguise.png"
      }
    ],
    basePower: 14,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.PILOT],
    flavor: "Prestige, talent, and a strong sense that some jobs are beneath him."
  },

  {
    id: "obi_wan_kenobi_alec_guinness",
    characterKey: "obi_wan_kenobi",
    variantKey: "alec_guinness",
    displayName: "Obi-Wan Kenobi",
    subtitle: "Alec Guinness",
    franchise: "Star Wars",
    rarity: "ultra",
    prestige: 3,
    mythicVariantId: "obi_wan_kenobi_force_ghost",
    basePower: 13,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
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
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "More active, more adaptable, and still above this nonsense."
  },

  // ========================================================
  // Mythic / Shiny Alternate Versions
  // ========================================================

  {
    id: "han_solo_carbonite",
    characterKey: "han_solo",
    variantKey: "carbonite",
    displayName: "Han Solo",
    subtitle: "Frozen in Carbonite",
    franchise: "Star Wars",
    rarity: "mythic",
    prestige: 3,
    basePower: 1,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.CRIMINAL],
    flavor: "Extremely prestigious. Extremely immobile. A collector’s nightmare and a manager’s problem."
  },

  {
    id: "obi_wan_kenobi_force_ghost",
    characterKey: "obi_wan_kenobi",
    variantKey: "force_ghost",
    displayName: "Obi-Wan Kenobi",
    subtitle: "Force Ghost",
    franchise: "Star Wars",
    rarity: "mythic",
    prestige: 3,
    basePower: 4,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.SPIRIT, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Cannot lift boxes. Can absolutely judge everyone lifting boxes."
  }

], "assets/characters/starwars");