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
    displayName: "Ewok Warrior",
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

  {
    id: "crimson_guard",
    characterKey: "crimson_guard",
    variantKey: "default",
    displayName: "Crimson Guard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "common",
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
    rarity: "common",
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
    rarity: "common",
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
    rarity: "common",
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
    rarity: "common",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.SCAVENGER, CHARACTER_TAGS.DESERT, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "Oddly effective in the right kind of dusty chaos."
  },

  // ========================================================
  // Uncommon / Minor / Guest Characters
  // ========================================================

  {
    id: "lobot",
    characterKey: "lobot",
    variantKey: "original_trilogy",
    displayName: "Lobot",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CYBORG, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Quietly handles operations while flashier people take credit."
  },

  {
    id: "bib_fortuna",
    characterKey: "bib_fortuna",
    variantKey: "original_trilogy",
    displayName: "Bib Fortuna",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.TWILEK, CHARACTER_TAGS.SERVANT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.SHADY],
    flavor: "Middle management, but with more whispering and worse lighting."
  },

  {
    id: "greedo",
    characterKey: "greedo",
    variantKey: "original_trilogy",
    displayName: "Greedo",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.HOTHEADED],
    flavor: "Ambitious, overconfident, and historically bad at negotiations."
  },

  {
    id: "bossk",
    characterKey: "bossk",
    variantKey: "original_trilogy",
    displayName: "Bossk",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.GREEDY],
    flavor: "Management appreciates his focus. HR does not."
  },

  {
    id: "ig88",
    characterKey: "ig88",
    variantKey: "original_trilogy",
    displayName: "IG-88",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A murder droid with excellent task focus."
  },

  {
    id: "dengar",
    characterKey: "dengar",
    variantKey: "original_trilogy",
    displayName: "Dengar",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.WARRIOR],
    flavor: "Reliable enough, though the workplace injury history is concerning."
  },

  {
    id: "zuckuss",
    characterKey: "zuckuss",
    variantKey: "original_trilogy",
    displayName: "Zuckuss",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.CURIOUS],
    flavor: "Finds things. Occasionally finds problems nobody requested."
  },

  {
    id: "4lom",
    characterKey: "4lom",
    variantKey: "original_trilogy",
    displayName: "4-LOM",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.DETECTIVE],
    flavor: "A protocol droid who chose crime. Career development is complicated."
  },

  {
    id: "nien_nunb",
    characterKey: "nien_nunb",
    variantKey: "original_trilogy",
    displayName: "Nien Nunb",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.SPACE],
    flavor: "A dependable co-pilot, which is more valuable than management admits."
  },

  {
    id: "owen_lars",
    characterKey: "owen_lars",
    variantKey: "original_trilogy",
    displayName: "Owen Lars",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.RURAL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Knows the business, distrusts adventure, and wants everything done properly."
  },

  {
    id: "beru_lars",
    characterKey: "beru_lars",
    variantKey: "original_trilogy",
    displayName: "Beru Lars",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.RURAL, CHARACTER_TAGS.COMFORT, CHARACTER_TAGS.LOYAL],
    flavor: "The kind of steady presence every chaotic operation desperately needs."
  },

  {
    id: "biggs_darklighter",
    characterKey: "biggs_darklighter",
    variantKey: "original_trilogy",
    displayName: "Biggs Darklighter",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.BRAVE],
    flavor: "A loyal friend, capable pilot, and doomed middle manager energy."
  },

  {
    id: "general_rieekan",
    characterKey: "carlist_rieekan",
    variantKey: "original_trilogy",
    displayName: "General Carlist Rieekan",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER],
    flavor: "Calm leadership under pressure, especially when the base is freezing."
  },

  {
    id: "admiral_ozzel",
    characterKey: "kendal_ozzel",
    variantKey: "original_trilogy",
    displayName: "Admiral Kendal Ozzel",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.SPACE],
    flavor: "Technically qualified. Strategically disappointing."
  },

  {
    id: "general_veers",
    characterKey: "maximilian_veers",
    variantKey: "original_trilogy",
    displayName: "General Maximilian Veers",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.MANAGER],
    flavor: "Efficient, direct, and unusually successful by Imperial standards."
  },

  {
    id: "captain_needa",
    characterKey: "lorth_needa",
    variantKey: "original_trilogy",
    displayName: "Captain Lorth Needa",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.SPACE],
    flavor: "Takes responsibility. This is not always rewarded."
  },

  {
    id: "general_madine",
    characterKey: "crix_madine",
    variantKey: "original_trilogy",
    displayName: "General Crix Madine",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER],
    flavor: "Plans complex operations with the quiet hope nobody improvises."
  },

  {
    id: "moff_jerjerrod",
    characterKey: "moff_jerjerrod",
    variantKey: "original_trilogy",
    displayName: "Moff Jerjerrod",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.ANXIOUS],
    flavor: "Middle management with impossible deadlines and a very dangerous boss."
  },

  {
    id: "wedge_antilles",
    characterKey: "wedge_antilles",
    variantKey: "original_trilogy",
    displayName: "Wedge Antilles",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.SPACE],
    flavor: "One of the few pilots with both talent and survival instincts."
  },

  {
    id: "general_dodonna",
    characterKey: "jan_dodonna",
    variantKey: "original_trilogy",
    displayName: "General Jan Dodonna",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER],
    flavor: "Explains impossible missions with complete professional calm."
  },

  {
    id: "commander_willard",
    characterKey: "vanden_willard",
    variantKey: "original_trilogy",
    displayName: "Commander Vanden Willard",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY],
    flavor: "Dependable rebel command staff: less glamorous, still necessary."
  },

  {
    id: "jek_porkins",
    characterKey: "jek_tono_porkins",
    variantKey: "original_trilogy",
    displayName: "Jek Tono Porkins",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.BRAVE],
    flavor: "Stays on target. Sometimes longer than advisable."
  },

  {
    id: "pops_krail",
    characterKey: "davish_pops_krail",
    variantKey: "original_trilogy",
    displayName: "Davish “Pops” Krail",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.SPACE],
    flavor: "Veteran pilot energy, delivered with a worrying survival rate."
  },

  {
    id: "garven_dreis",
    characterKey: "garven_dreis",
    variantKey: "original_trilogy",
    displayName: "Garven Dreis",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.MANAGER],
    flavor: "Good squad leader, though not great at staying alive through Q4."
  },

  {
    id: "dutch_vander",
    characterKey: "jon_dutch_vander",
    variantKey: "original_trilogy",
    displayName: "Jon “Dutch” Vander",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.MANAGER],
    flavor: "Gold Leader brings command experience and tragic radio discipline."
  },

  {
    id: "tiree",
    characterKey: "tiree",
    variantKey: "original_trilogy",
    displayName: "Tiree",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.SPACE],
    flavor: "Another brave pilot. The roster is getting nervous."
  },

  {
    id: "chief_bast",
    characterKey: "chief_bast",
    variantKey: "original_trilogy",
    displayName: "Chief Bast",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER],
    flavor: "Understands risk better than most Imperial executives."
  },

  {
    id: "general_tagge",
    characterKey: "cassio_tagge",
    variantKey: "original_trilogy",
    displayName: "General Cassio Tagge",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Correctly worries about operational vulnerabilities. Gets ignored anyway."
  },

  {
    id: "admiral_motti",
    characterKey: "conan_antonio_motti",
    variantKey: "original_trilogy",
    displayName: "Admiral Conan Antonio Motti",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.ARROGANT],
    flavor: "Confident in technology. Less confident after meetings with Vader."
  },

  {
    id: "captain_khurgee",
    characterKey: "captain_khurgee",
    variantKey: "original_trilogy",
    displayName: "Captain Khurgee",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.GUARD],
    flavor: "A security officer who somehow makes docking bays feel even less welcoming."
  },

  {
    id: "major_derlin",
    characterKey: "bren_derlin",
    variantKey: "original_trilogy",
    displayName: "Major Bren Derlin",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Keeps the base running while everyone else handles destiny."
  },

  {
    id: "zev_senesca",
    characterKey: "zev_senesca",
    variantKey: "original_trilogy",
    displayName: "Zev Senesca",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.COLD],
    flavor: "Good at search and rescue, which is useful in any workplace disaster."
  },

  {
    id: "wes_janson",
    characterKey: "wes_janson",
    variantKey: "original_trilogy",
    displayName: "Wes Janson",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "Competent pilot, professional troublemaker."
  },

  {
    id: "dak_ralter",
    characterKey: "dak_ralter",
    variantKey: "original_trilogy",
    displayName: "Dak Ralter",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.BRAVE],
    flavor: "Feels like he can take on anything. This is not always predictive."
  },

  {
    id: "toryn_farr",
    characterKey: "toryn_farr",
    variantKey: "original_trilogy",
    displayName: "Toryn Farr",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Communications staff: invisible until everything depends on them."
  },

  {
    id: "hobbie_klivian",
    characterKey: "hobbie_klivian",
    variantKey: "original_trilogy",
    displayName: "Hobbie Klivian",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.ANXIOUS],
    flavor: "A good pilot with the correct amount of concern."
  },

  {
    id: "oola",
    characterKey: "oola",
    variantKey: "original_trilogy",
    displayName: "Oola",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.TWILEK, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.OUTCAST],
    flavor: "Talented performer trapped in the worst possible venue contract."
  },

  {
    id: "sy_snootles",
    characterKey: "sy_snootles",
    variantKey: "original_trilogy",
    displayName: "Sy Snootles",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.MUSICIAN],
    flavor: "Brings stage presence, questionable venues, and surprising staying power."
  },

  {
    id: "max_rebo",
    characterKey: "max_rebo",
    variantKey: "original_trilogy",
    displayName: "Max Rebo",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.MUSICIAN],
    flavor: "A professional musician with excellent resilience and terrible employers."
  },

  {
    id: "droopy_mccool",
    characterKey: "droopy_mccool",
    variantKey: "original_trilogy",
    displayName: "Droopy McCool",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.MUSICIAN],
    flavor: "The name is unfortunate. The musicianship is real."
  },

  {
    id: "ev_9d9",
    characterKey: "ev_9d9",
    variantKey: "original_trilogy",
    displayName: "EV-9D9",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.SERVANT],
    flavor: "Strong disciplinary instincts. Absolutely no empathy settings."
  },

  {
    id: "barada",
    characterKey: "barada",
    variantKey: "original_trilogy",
    displayName: "Barada",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.GUARD],
    flavor: "Useful muscle in organizations with questionable onboarding practices."
  },

  {
    id: "chief_chirpa",
    characterKey: "chief_chirpa",
    variantKey: "original_trilogy",
    displayName: "Chief Chirpa",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.EWOK, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.RURAL],
    flavor: "Small village leadership, surprisingly transferable."
  },

  {
    id: "logray",
    characterKey: "logray",
    variantKey: "original_trilogy",
    displayName: "Logray",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.EWOK, CHARACTER_TAGS.MAGICAL, CHARACTER_TAGS.RURAL],
    flavor: "Mystic consultant with a deeply unusual approval process."
  },

  {
    id: "paploo",
    characterKey: "paploo",
    variantKey: "original_trilogy",
    displayName: "Paploo",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.EWOK, CHARACTER_TAGS.MISCHIEVOUS, CHARACTER_TAGS.RURAL],
    flavor: "Can steal a vehicle, create a distraction, and call it teamwork."
  },

  {
    id: "wicket_warrick",
    characterKey: "wicket_warrick",
    variantKey: "original_trilogy",
    displayName: "Wicket W. Warrick",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.EWOK, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.RURAL],
    flavor: "Proof that small workers can cause large strategic reversals."
  },

  // ========================================================
  // Rare / Supporting Characters
  // ========================================================

  {
    id: "yoda",
    characterKey: "yoda",
    variantKey: "original_trilogy",
    displayName: "Yoda",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.WISE, CHARACTER_TAGS.MAGICAL],
    flavor: "Small, cryptic, and somehow still the most qualified person in the room."
  },

  {
    id: "emperor_palpatine",
    characterKey: "emperor_palpatine",
    variantKey: "original_trilogy",
    displayName: "Emperor Palpatine",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.MAGICAL],
    flavor: "Excellent long-term planner. Terrible for morale reviews."
  },

  {
    id: "jabba_the_hutt",
    characterKey: "jabba_the_hutt",
    variantKey: "original_trilogy",
    displayName: "Jabba the Hutt",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.ARROGANT],
    flavor: "A management style built entirely around leverage, snacks, and trapdoors."
  },

  {
    id: "boba_fett",
    characterKey: "boba_fett",
    variantKey: "original_trilogy",
    displayName: "Boba Fett",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Highly effective, not always great for workplace harmony."
  },

  {
    id: "lando_calrissian",
    characterKey: "lando_calrissian",
    variantKey: "original_trilogy",
    displayName: "Lando Calrissian",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.PILOT],
    flavor: "Can run a city, make a deal, and still look better than everyone else."
  },

  {
    id: "chewbacca",
    characterKey: "chewbacca",
    variantKey: "original_trilogy",
    displayName: "Chewbacca",
    subtitle: "Original Trilogy",
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
    id: "r2d2",
    characterKey: "r2d2",
    variantKey: "original_trilogy",
    displayName: "R2-D2",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MECHANIC, CHARACTER_TAGS.HACKER, CHARACTER_TAGS.BRAVE],
    flavor: "Beeping, rolling, and quietly saving the entire operation."
  },

  {
    id: "c3po",
    characterKey: "c3po",
    variantKey: "original_trilogy",
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
    id: "grand_moff_tarkin",
    characterKey: "grand_moff_tarkin",
    variantKey: "original_trilogy",
    displayName: "Grand Moff Tarkin",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 2,
    basePower: 10,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.ARROGANT],
    flavor: "Believes every workplace issue can be solved with overwhelming force."
  },

  {
    id: "admiral_ackbar",
    characterKey: "admiral_ackbar",
    variantKey: "original_trilogy",
    displayName: "Admiral Gial Ackbar",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.SPACE],
    flavor: "Excellent at spotting problems slightly after everyone is already committed."
  },

  {
    id: "mon_mothma",
    characterKey: "mon_mothma",
    variantKey: "original_trilogy",
    displayName: "Mon Mothma",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 1,
    basePower: 8,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.MANAGER],
    flavor: "Quiet authority, careful planning, and absolutely no patience for chaos."
  },

  {
    id: "captain_piett",
    characterKey: "captain_piett",
    variantKey: "original_trilogy",
    displayName: "Captain Firmus Piett",
    subtitle: "",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 1,
    basePower: 8,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.SPACE],
    flavor: "Promoted mostly by surviving meetings that others did not."
  },

  {
    id: "obi_wan_ben_kenobi",
    characterKey: "obi_wan_kenobi",
    variantKey: "ben_kenobi",
    displayName: "Obi-Wan “Ben” Kenobi",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "rare",
    prestige: 3,
    mythicVariantId: "obi_wan_kenobi_force_ghost",
    basePower: 12,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Older, wiser, and quietly judging your staffing decisions."
  },

  // ========================================================
  // Ultra-Rare / Original Trilogy Stars
  // ========================================================

  {
    id: "luke_skywalker",
    characterKey: "luke_skywalker",
    variantKey: "original_trilogy",
    displayName: "Luke Skywalker",
    subtitle: "Original Trilogy",
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
    id: "darth_vader",
    characterKey: "darth_vader",
    variantKey: "original_trilogy",
    displayName: "Darth Vader",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "ultra",
    prestige: 3,
    basePower: 15,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.CYBORG, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Fantastic at enforcing standards. Less fantastic at employee retention."
  },

  {
    id: "han_solo",
    characterKey: "han_solo",
    variantKey: "original_trilogy",
    displayName: "Han Solo",
    subtitle: "Original Trilogy",
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
    id: "princess_leia_organa",
    characterKey: "leia_organa",
    variantKey: "princess_original_trilogy",
    displayName: "Princess Leia Organa",
    subtitle: "Original Trilogy",
    franchise: "Star Wars",
    rarity: "ultra",
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.CHARISMATIC],
    flavor: "A leader, diplomat, strategist, and somehow still under budget pressure."
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