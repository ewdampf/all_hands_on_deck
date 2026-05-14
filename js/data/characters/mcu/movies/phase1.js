// ==========================================================
// Marvel Cinematic Universe Phase 1 Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
// Covers:
// - Iron Man
// - Iron Man 2
// - The Incredible Hulk
// - Thor
// - Captain America: The First Avenger
// - The Avengers
// ==========================================================

const MCU_PHASE1_CHARACTERS = applyCharacterImageDefaults([

  // ========================================================
  // Common / Canon Fodder
  // ========================================================

  {
    id: "shield_agent",
    characterKey: "shield_agent",
    variantKey: "default",

    displayName: "SHIELD Agent",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.LAWFUL,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A trained field operative balancing intelligence work, containment duty, and increasingly unreasonable assignments."
  },

  {
    id: "shield_tactical_operative",
    characterKey: "shield_tactical_operative",
    variantKey: "default",

    displayName: "SHIELD Tactical Operative",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 3,

    basePower: 7,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.GUARD
    ],

    flavor: "Elite tactical personnel deployed whenever normal agents stop being remotely sufficient."
  },

  {
    id: "hydra_soldier",
    characterKey: "hydra_soldier",
    variantKey: "default",

    displayName: "HYDRA Soldier",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A heavily armed loyalist working for an organization with catastrophic long-term goals."
  },

  {
    id: "hydra_scientist",
    characterKey: "hydra_scientist",
    variantKey: "default",

    displayName: "HYDRA Scientist",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 2,

    basePower: 6,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.SHADY
    ],

    flavor: "A research specialist helping turn impossible science into deeply unethical applications."
  },

  {
    id: "hammer_drone",
    characterKey: "hammer_drone",
    variantKey: "default",

    displayName: "Hammer Drone",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER
    ],

    tags: [
      CHARACTER_TAGS.ROBOT,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.DANGEROUS,
      CHARACTER_TAGS.ENGINEERED
    ],

    flavor: "Mass-produced combat hardware demonstrating that quantity and reliability are not the same thing."
  },

  {
    id: "chitauri_soldier",
    characterKey: "chitauri_soldier",
    variantKey: "default",

    displayName: "Chitauri Soldier",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 1,

    basePower: 6,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.ALIEN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.DANGEROUS,
      CHARACTER_TAGS.HIVE_MIND
    ],

    flavor: "An alien invasion unit optimized for overwhelming force and very little independent thought."
  },

  {
    id: "frost_giant",
    characterKey: "frost_giant",
    variantKey: "default",

    displayName: "Frost Giant",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.FROST_GIANT,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.DANGEROUS,
      CHARACTER_TAGS.OUTCAST
    ],

    flavor: "A brutal warrior from Jotunheim with little patience for diplomacy or warm climates."
  },

  {
    id: "asgardian_guard",
    characterKey: "asgardian_guard",
    variantKey: "default",

    displayName: "Asgardian Guard",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "common",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.CANNON_FODDER,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.GUARD,
      CHARACTER_TAGS.LAWFUL,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A disciplined royal defender trained to protect Asgard from threats both cosmic and personal."
  },

 
  // ========================================================
  // Rare / Iron Man Major Supporting Characters
  // ========================================================

  {
    id: "james_rhodes",
    characterKey: "james_rhodes",
    variantKey: "iron_man_phase1",
    displayName: "James Rhodes",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A responsible military liaison trying to keep one impossible friend from becoming an international incident."
  },

  {
    id: "pepper_potts",
    characterKey: "pepper_potts",
    variantKey: "iron_man_phase1",
    displayName: "Pepper Potts",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.LOYAL],
    flavor: "The actual operating system behind the company, with better judgment than most executives."
  },

  {
    id: "ivan_vanko",
    characterKey: "ivan_vanko",
    variantKey: "whiplash",
    displayName: "Ivan Vanko / Whiplash",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ENGINEER, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.DANGEROUS],
    flavor: "Brilliant engineering talent with a revenge plan where the safety review was clearly skipped."
  },

  {
    id: "obadiah_stane",
    characterKey: "obadiah_stane",
    variantKey: "iron_monger",
    displayName: "Obadiah Stane",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.VILLAIN],
    flavor: "Old-school corporate leadership with hostile takeover instincts and very literal armor."
  },

  {
    id: "justin_hammer",
    characterKey: "justin_hammer",
    variantKey: "iron_man_phase1",
    displayName: "Justin Hammer",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SALESMAN, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.HUSTLER],
    flavor: "All the confidence of Tony Stark with considerably less quality control."
  },

  {
    id: "howard_stark",
    characterKey: "howard_stark",
    variantKey: "iron_man_phase1",
    displayName: "Howard Stark",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.INVENTOR, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.ARROGANT],
    flavor: "A legacy innovator whose work keeps creating opportunities, problems, and unresolved family paperwork."
  },

  {
    id: "senator_stern",
    characterKey: "senator_stern",
    variantKey: "iron_man_phase1",
    displayName: "Senator Stern",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.POLITICIAN, CHARACTER_TAGS.BUREAUCRAT, CHARACTER_TAGS.ARROGANT],
    flavor: "Turns oversight hearings into theater and still somehow thinks he is controlling the room."
  },

  // ========================================================
  // Uncommon / Iron Man Supporting Characters
  // ========================================================

  {
    id: "happy_hogan",
    characterKey: "happy_hogan",
    variantKey: "iron_man_phase1",
    displayName: "Happy Hogan",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.DRIVER, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LOYAL],
    flavor: "Security, transport, and personal damage control for a boss who generates all three."
  },

  {
    id: "jarvis",
    characterKey: "jarvis",
    variantKey: "iron_man_phase1",
    displayName: "JARVIS",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.AI, CHARACTER_TAGS.HACKER, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.LOYAL],
    flavor: "An artificial intelligence handling diagnostics, scheduling, sarcasm, and most of the actual follow-through."
  },

  {
    id: "ho_yinsen",
    characterKey: "ho_yinsen",
    variantKey: "iron_man_phase1",
    displayName: "Ho Yinsen",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDICAL,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.DOCTOR, CHARACTER_TAGS.WISE, CHARACTER_TAGS.BRAVE],
    flavor: "The quiet mentor who turns a cave, a crisis, and a box of scraps into a life change."
  },

  {
    id: "william_ginter_riva",
    characterKey: "william_ginter_riva",
    variantKey: "iron_man_phase1",
    displayName: "William Ginter Riva",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ENGINEER, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.LOYAL],
    flavor: "A stressed engineer discovering that working for difficult geniuses is a long-term career hazard."
  },

  {
    id: "raza",
    characterKey: "raza",
    variantKey: "iron_man_phase1",
    displayName: "Raza",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DANGEROUS],
    flavor: "A warlord manager with aggressive acquisition methods and terrible vendor relationships."
  },

  {
    id: "anton_vanko",
    characterKey: "anton_vanko",
    variantKey: "iron_man_phase1",
    displayName: "Anton Vanko",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.INVENTOR, CHARACTER_TAGS.BITTER],
    flavor: "A brilliant collaborator whose unresolved grievance became a family business."
  },

  {
    id: "christine_everhart",
    characterKey: "christine_everhart",
    variantKey: "iron_man_phase1",
    displayName: "Christine Everhart",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.CONFIDENT],
    flavor: "A sharp reporter who understands that public image is often the real battleground."
  },

  {
    id: "us_marshal",
    characterKey: "us_marshal",
    variantKey: "iron_man_phase1",
    displayName: "U.S. Marshal",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A sharply competent official with just enough screen time to make the roster interesting."
  },

  {
    id: "abu_bakaar",
    characterKey: "abu_bakaar",
    variantKey: "iron_man_phase1",
    displayName: "Abu Bakaar",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DANGEROUS],
    flavor: "A Ten Rings operator with a short chain of command and a dangerous workplace culture."
  },

  {
    id: "senator_boyko",
    characterKey: "senator_boyko",
    variantKey: "iron_man_phase1",
    displayName: "Senator Boyko",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.POLITICIAN, CHARACTER_TAGS.BUREAUCRAT, CHARACTER_TAGS.LAWFUL],
    flavor: "Another government voice trying to look composed while Stark rewrites the agenda."
  },

  {
    id: "general_gabriel",
    characterKey: "general_gabriel",
    variantKey: "iron_man_phase1",
    displayName: "General Gabriel",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A senior military presence attempting to manage a situation built to ignore normal command channels."
  },

  {
    id: "major_allen",
    characterKey: "major_allen",
    variantKey: "iron_man_phase1",
    displayName: "Major Allen",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.LAWFUL],
    flavor: "Military support staff trying to keep pace with technology that refuses to stay classified."
  },

  {
    id: "lieutenant_colonel_shaffer",
    characterKey: "lieutenant_colonel_shaffer",
    variantKey: "iron_man_phase1",
    displayName: "Lieutenant Colonel Shaffer",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.LAWFUL],
    flavor: "A uniformed stakeholder in a weapons discussion that has already become a superhero problem."
  },

  {
    id: "pratt",
    characterKey: "pratt",
    variantKey: "iron_man_phase1",
    displayName: "Pratt",
    subtitle: "",
    franchise: "Marvel Cinematic Universe",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.LAWFUL],
    flavor: "A minor professional presence caught near decisions much larger than his job description."
  },


  // ========================================================
  // Rare / Thor Major Characters
  // ========================================================

  {
    id: "odin_borson",
    characterKey: "odin",
    variantKey: "thor1",

    displayName: "Odin",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 13,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.KING,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A weary ruler trying to maintain peace while managing two sons headed toward disaster."
  },

  {
    id: "jane_foster",
    characterKey: "jane_foster",
    variantKey: "thor1",

    displayName: "Jane Foster",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "An astrophysicist whose research goals expanded dramatically after meeting actual gods."
  },

  {
    id: "heimdall",
    characterKey: "heimdall",
    variantKey: "thor1",

    displayName: "Heimdall",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 12,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.GUARD,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "The ever-watchful guardian of the Bifrost with unmatched awareness and very little patience for nonsense."
  },


  {
    id: "frigga",
    characterKey: "frigga",
    variantKey: "thor1",

    displayName: "Frigga",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 10,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.ROYALTY,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.KIND
    ],

    flavor: "A compassionate queen quietly holding Asgard together while everyone else creates problems."
  },

  {
    id: "laufey",
    characterKey: "laufey",
    variantKey: "thor1",

    displayName: "Laufey",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 11,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.ROGUE,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.FROST_GIANT,
      CHARACTER_TAGS.KING,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.OUTCAST
    ],

    flavor: "A proud Frost Giant ruler navigating ancient grudges and increasingly unstable diplomacy."
  },

  {
    id: "destroyer",
    characterKey: "destroyer",
    variantKey: "thor1",

    displayName: "Destroyer",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 13,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.CONSTRUCT,
      CHARACTER_TAGS.ENGINEERED,
      CHARACTER_TAGS.ARMORED,
      CHARACTER_TAGS.DANGEROUS
    ],

    flavor: "An enchanted Asgardian war construct built to solve problems through overwhelming force."
  },

  // ========================================================
  // Uncommon / Thor Supporting Characters
  // ========================================================

  {
    id: "darcy_lewis",
    characterKey: "darcy_lewis",
    variantKey: "thor1",

    displayName: "Darcy Lewis",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 7,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.STUDENT,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.CURIOUS
    ],

    flavor: "An enthusiastic assistant contributing morale, commentary, and occasional useful observations."
  },

  {
    id: "sif",
    characterKey: "sif",
    variantKey: "thor1",

    displayName: "Sif",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 10,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A fiercely loyal Asgardian warrior with very little tolerance for reckless leadership."
  },

  {
    id: "volstagg",
    characterKey: "volstagg",
    variantKey: "ray_stevenson",

    displayName: "Volstagg",
    subtitle: "Ray Stevenson",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 9,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.CHEERFUL,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "A boisterous Asgardian fighter bringing strength, loyalty, and loud morale support."
  },

  {
    id: "fandral_josh_dallas",
    characterKey: "fandral",
    variantKey: "josh_dallas",

    displayName: "Fandral",
    subtitle: "Josh Dallas",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.HEROIC,

    traits: [
      TRAITS.HERO,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.SWASHBUCKLER
    ],

    flavor: "A charming swordsman who approaches danger with confidence and entirely too much style."
  },

  {
    id: "hogun",
    characterKey: "hogun",
    variantKey: "thor1",

    displayName: "Hogun",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 9,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.STOIC
    ],

    flavor: "A calm and disciplined warrior who lets actions handle most conversations."
  },

  {
    id: "king_bor",
    characterKey: "bor",
    variantKey: "thor1",

    displayName: "King Bor",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 2,

    basePower: 9,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.KING,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.WARRIOR
    ],

    flavor: "An ancient Asgardian ruler whose victories shaped generations of uneasy peace."
  },

  {
    id: "king_jotun",
    characterKey: "king_jotun",
    variantKey: "thor1",

    displayName: "King Jotun",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.FROST_GIANT,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.OUTCAST
    ],

    flavor: "A Frost Giant commander serving Jotunheim through brute force and absolute loyalty."
  },

  {
    id: "dr_henderson",
    characterKey: "dr_henderson",
    variantKey: "thor1",

    displayName: "Dr. Henderson",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 6,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A research professional discovering his field did not prepare him for alien gods."
  },

  {
    id: "isabela_alvarez",
    characterKey: "isabela_alvarez",
    variantKey: "thor1",

    displayName: "Isabela Alvarez",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.SERVICE,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.KIND,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A small-town resident witnessing events far outside normal New Mexico expectations."
  },

  {
    id: "child_thor",
    characterKey: "thor",
    variantKey: "child_thor",

    displayName: "Child Thor",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 7,

    preferredJob: JOB_TYPES.HEROIC,

    traits: [
      TRAITS.HERO
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.CHILD,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.HOTHEADED
    ],

    flavor: "A young prince already convinced every problem can be solved heroically and immediately."
  },

  {
    id: "child_loki",
    characterKey: "loki",
    variantKey: "child_loki",

    displayName: "Child Loki",
    subtitle: "Thor (2011)",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 7,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.FROST_GIANT,
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.CHILD,
      CHARACTER_TAGS.CURIOUS
    ],

    flavor: "A clever child already learning how much power secrets can hold."
  },

  // ========================================================
  // Ultra-Rare / Captain America Core
  // ========================================================


  {
    id: "johann_schmidt_red_skull",
    characterKey: "red_skull",
    variantKey: "first_avenger",

    displayName: "Johann Schmidt / Red Skull",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 14,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.ROGUE,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.LEADER,
      CHARACTER_TAGS.DANGEROUS
    ],

    flavor: "A power-hungry HYDRA leader proving that ambition and stability are very different qualities."
  },

  // ========================================================
  // Rare / Captain America Major Characters
  // ========================================================

  {
    id: "peggy_carter",
    characterKey: "peggy_carter",
    variantKey: "first_avenger",

    displayName: "Peggy Carter",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 11,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.LEADER,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A brilliant strategic officer with excellent judgment and very little tolerance for incompetence."
  },

  {
    id: "bucky_barnes",
    characterKey: "bucky_barnes",
    variantKey: "first_avenger",

    displayName: "Bucky Barnes",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 11,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.LOYAL,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "A dependable wartime soldier whose loyalty survives far longer than anyone expected."
  },

  {
    id: "colonel_chester_phillips",
    characterKey: "chester_phillips",
    variantKey: "first_avenger",

    displayName: "Colonel Chester Phillips",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.MANAGER,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A practical wartime commander balancing skepticism, leadership, and increasingly strange assignments."
  },

  {
    id: "abraham_erskine",
    characterKey: "abraham_erskine",
    variantKey: "first_avenger",

    displayName: "Dr. Abraham Erskine",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.WISE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.KIND
    ],

    flavor: "The scientist responsible for history’s most successful and least repeatable enhancement program."
  },

  {
    id: "arnim_zola",
    characterKey: "arnim_zola",
    variantKey: "first_avenger",

    displayName: "Arnim Zola",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.ROGUE,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.COWARDLY
    ],

    flavor: "A brilliant HYDRA scientist whose survival instincts consistently outperform his ethics."
  },

  {
    id: "dum_dum_dugan",
    characterKey: "dum_dum_dugan",
    variantKey: "first_avenger",

    displayName: "Dum Dum Dugan",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 10,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.CHEERFUL
    ],

    flavor: "A fearless commando bringing heavy firepower and unusually high morale to every mission."
  },

  {
    id: "howard_stark_first_avenger",
    characterKey: "howard_stark",
    variantKey: "dominic_cooper",

    displayName: "Howard Stark",
    subtitle: "Dominic Cooper",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SPECIALIST,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.INVENTOR,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.ARROGANT
    ],

    flavor: "A wartime inventor enthusiastically funding projects nobody else fully understands yet."
  },

  // ========================================================
  // Uncommon / Captain America Supporting Characters
  // ========================================================

  {
    id: "pre_serum_steve_rogers",
    characterKey: "steve_rogers",
    variantKey: "pre_serum",

    displayName: "Steve Rogers",
    subtitle: "Pre-Serum",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 5,

    preferredJob: JOB_TYPES.SERVICE,

    traits: [
      TRAITS.HERO,
      TRAITS.MORAL_CODE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.OUTCAST,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.DETERMINED
    ],

    flavor: "Physically unimpressive but already impossible to intimidate or discourage."
  },

  {
    id: "gabe_jones",
    characterKey: "gabe_jones",
    variantKey: "first_avenger",

    displayName: "Gabe Jones",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A dependable Howling Commando bringing steady professionalism to chaotic missions."
  },

  {
    id: "jim_morita",
    characterKey: "jim_morita",
    variantKey: "first_avenger",

    displayName: "Jim Morita",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.LOYAL
    ],

    flavor: "A disciplined commando who handles impossible missions with calm efficiency."
  },

  {
    id: "jacques_dernier",
    characterKey: "jacques_dernier",
    variantKey: "first_avenger",

    displayName: "Jacques Dernier",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.HERO,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "A stylish resistance fighter with strong infiltration skills and excellent confidence."
  },

  {
    id: "james_montgomery_falsworth",
    characterKey: "james_montgomery_falsworth",
    variantKey: "first_avenger",

    displayName: "James Montgomery Falsworth",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.WISE,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "An experienced commando bringing sharp instincts and dry confidence to the battlefield."
  },

  {
    id: "senator_brandt",
    characterKey: "senator_brandt",
    variantKey: "first_avenger",

    displayName: "Senator Brandt",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 2,

    basePower: 6,

    preferredJob: JOB_TYPES.CORPORATE,

    traits: [
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.POLITICIAN,
      CHARACTER_TAGS.BUREAUCRAT,
      CHARACTER_TAGS.ARROGANT
    ],

    flavor: "A wartime politician more interested in branding opportunities than battlefield realities."
  },

  {
    id: "private_lorraine",
    characterKey: "private_lorraine",
    variantKey: "first_avenger",

    displayName: "Private Lorraine",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.SERVICE,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.CHEERFUL
    ],

    flavor: "A friendly military recruit unintentionally creating one of Peggy Carter’s worst workdays."
  },

  {
    id: "gilmore_hodge",
    characterKey: "gilmore_hodge",
    variantKey: "first_avenger",

    displayName: "Gilmore Hodge",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 6,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.BULLY,
      CHARACTER_TAGS.ARROGANT
    ],

    flavor: "A physically gifted recruit proving that confidence and character are not interchangeable."
  },

  {
    id: "dr_vasin",
    characterKey: "dr_vasin",
    variantKey: "first_avenger",

    displayName: "Dr. Vasin",
    subtitle: "The First Avenger",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 6,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.LAWFUL,
      CHARACTER_TAGS.CURIOUS
    ],

    flavor: "A supporting scientist helping manage one of history’s least reproducible experiments."
  },

  // ========================================================
  // Ultra-Rare / Incredible Hulk Core
  // ========================================================

  {
    id: "hulk_edward_norton",
    characterKey: "hulk",
    variantKey: "edward_norton",

    displayName: "Hulk",
    subtitle: "Edward Norton Variant",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 16,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.DANGEROUS
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MUTANT,
      CHARACTER_TAGS.DANGEROUS,
      CHARACTER_TAGS.OUTCAST
    ],

    flavor: "An unstoppable gamma-powered force whose workplace compatibility depends heavily on everyone surviving."
  },

  {
    id: "emil_blonsky_abomination",
    characterKey: "abomination",
    variantKey: "incredible_hulk",

    displayName: "Emil Blonsky / Abomination",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 15,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.ROGUE,
      TRAITS.DANGEROUS
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.DANGEROUS
    ],

    flavor: "A decorated soldier who accepted an enhancement program without asking enough follow-up questions."
  },

  // ========================================================
  // Rare / Incredible Hulk Major Characters
  // ========================================================

  {
    id: "betty_ross",
    characterKey: "betty_ross",
    variantKey: "incredible_hulk",

    displayName: "Betty Ross",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.MORAL_CODE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.KIND,
      CHARACTER_TAGS.LOYAL
    ],

    flavor: "A brilliant researcher balancing scientific ethics, military pressure, and a very complicated relationship."
  },

  {
    id: "thaddeus_ross",
    characterKey: "thaddeus_ross",
    variantKey: "incredible_hulk",

    displayName: "General Thaddeus “Thunderbolt” Ross",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 11,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.MANAGER,
      CHARACTER_TAGS.STUBBORN
    ],

    flavor: "A relentless military commander convinced every problem can be solved with enough firepower and persistence."
  },

  {
    id: "samuel_sterns",
    characterKey: "samuel_sterns",
    variantKey: "mr_blue",

    displayName: "Samuel Sterns",
    subtitle: "Mr. Blue",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SPECIALIST,
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.AWKWARD
    ],

    flavor: "A gifted cellular researcher whose enthusiasm for discovery consistently exceeds his caution."
  },

  {
    id: "leonard_samson",
    characterKey: "leonard_samson",
    variantKey: "incredible_hulk",

    displayName: "Leonard Samson",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 9,

    preferredJob: JOB_TYPES.MEDICAL,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.DOCTOR,
      CHARACTER_TAGS.KIND,
      CHARACTER_TAGS.CALM
    ],

    flavor: "A professional psychiatrist discovering that gamma-related patients require unusually flexible expectations."
  },

  // ========================================================
  // Uncommon / Incredible Hulk Supporting Characters
  // ========================================================

  {
    id: "bruce_banner_edward_norton",
    characterKey: "bruce_banner",
    variantKey: "edward_norton",

    displayName: "Bruce Banner",
    subtitle: "Edward Norton Variant",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 8,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.OUTCAST,
      CHARACTER_TAGS.ANXIOUS
    ],

    flavor: "A fugitive scientist attempting to manage stress levels while avoiding catastrophic workplace incidents."
  },

  {
    id: "jack_mcgee",
    characterKey: "jack_mcgee",
    variantKey: "incredible_hulk",

    displayName: "Jack McGee",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 3,

    basePower: 7,

    preferredJob: JOB_TYPES.MEDIA,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.JOURNALIST,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.DETERMINED
    ],

    flavor: "An investigative reporter convinced there is a much bigger story hiding behind the official explanations."
  },

  {
    id: "major_kathleen_sparr",
    characterKey: "kathleen_sparr",
    variantKey: "incredible_hulk",

    displayName: "Major Kathleen Sparr",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 2,

    basePower: 7,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A dependable military officer trying to maintain order during a rapidly escalating operation."
  },

  {
    id: "stan_wilson",
    characterKey: "stan_wilson",
    variantKey: "incredible_hulk",

    displayName: "Stan Wilson",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 6,

    preferredJob: JOB_TYPES.LOGISTICS,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.WORKER,
      CHARACTER_TAGS.KIND,
      CHARACTER_TAGS.LOYAL
    ],

    flavor: "A hardworking civilian caught near events that become significantly more dangerous than expected."
  },

  {
    id: "greta",
    characterKey: "greta",
    variantKey: "incredible_hulk",

    displayName: "Greta",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 5,

    preferredJob: JOB_TYPES.SERVICE,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.KIND,
      CHARACTER_TAGS.CHEERFUL,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A civilian presence helping keep at least one part of Bruce Banner’s life temporarily normal."
  },

  {
    id: "general_greller",
    characterKey: "general_greller",
    variantKey: "incredible_hulk",

    displayName: "General Greller",
    subtitle: "The Incredible Hulk",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 1,

    basePower: 7,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.MILITARY,
      CHARACTER_TAGS.BUREAUCRAT,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A senior military official discovering that gamma incidents do not respect chain-of-command structures."
  },

  // ========================================================
  // Ultra-Rare / Avengers Core
  // ========================================================

  {
    id: "tony_stark",
    characterKey: "tony_stark",
    variantKey: "",

    displayName: "Tony Stark / Iron Man",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 15,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.INVENTOR,
      CHARACTER_TAGS.CHARISMATIC,
      CHARACTER_TAGS.ARROGANT
    ],

    flavor: "A genius in a suit of armor turning team dynamics into a technical problem with expensive solutions."
  },

  {
    id: "steve_rogers",
    characterKey: "steve_rogers",
    variantKey: "",

    displayName: "Steve Rogers / Captain America",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 15,

    preferredJob: JOB_TYPES.HEROIC,

    traits: [
      TRAITS.HERO,
      TRAITS.MORAL_CODE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SOLDIER,
      CHARACTER_TAGS.LEADER,
      CHARACTER_TAGS.BRAVE
    ],

    flavor: "A man out of time who still understands leadership better than almost everyone in the room."
  },

  {
    id: "thor",
    characterKey: "thor",
    variantKey: "",

    displayName: "Thor",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 15,

    preferredJob: JOB_TYPES.HEROIC,

    traits: [
      TRAITS.HERO,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.WARRIOR,
      CHARACTER_TAGS.BRAVE,
      CHARACTER_TAGS.CHARISMATIC
    ],

    flavor: "A prince of Asgard attempting diplomacy, family management, and property damage control at the same time."
  },

  {
    id: "natasha_romanoff",
    characterKey: "natasha_romanoff",
    variantKey: "",

    displayName: "Natasha Romanoff / Black Widow",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 14,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SPY,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A master operative who reads the room, the threat, and the exit strategy before anyone else starts talking."
  },

  {
    id: "bruce_banner_mark_ruffalo",
    characterKey: "bruce_banner",
    variantKey: "mark_ruffalo",

    displayName: "Bruce Banner",
    subtitle: "Mark Ruffalo Variant",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 2,

    basePower: 11,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.ANXIOUS,
      CHARACTER_TAGS.CALM
    ],

    flavor: "A brilliant scientist managing world-class research skills and one extremely complicated anger policy."
  },

  {
    id: "hulk_mark_ruffalo",
    characterKey: "hulk",
    variantKey: "mark_ruffalo",

    displayName: "Hulk",
    subtitle: "Mark Ruffalo Variant",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 16,

    preferredJob: JOB_TYPES.ENFORCEMENT,

    traits: [
      TRAITS.HERO,
      TRAITS.DANGEROUS
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SUPERHUMAN,
      CHARACTER_TAGS.DANGEROUS,
      CHARACTER_TAGS.CHAOTIC
    ],

    flavor: "A massive green solution to problems that have officially outgrown normal escalation procedures."
  },

  {
    id: "loki",
    characterKey: "loki",
    variantKey: "",

    displayName: "Loki",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "ultra",
    prestige: 3,

    basePower: 15,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.ROGUE,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.FROST_GIANT,
      CHARACTER_TAGS.ASGARDIAN,
      CHARACTER_TAGS.TRICKSTER,
      CHARACTER_TAGS.VILLAIN
    ],

    flavor: "A would-be ruler with theatrical instincts, cosmic backing, and a serious misunderstanding of team morale."
  },

  // ========================================================
  // Rare / Avengers Major Supporting Characters
  // ========================================================

  {
    id: "clint_barton",
    characterKey: "hawkeye",
    variantKey: "",

    displayName: "Clint Barton / Hawkeye",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 12,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.HERO,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.MARKSMAN,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "An elite marksman whose performance review includes both impossible shots and one very serious security incident."
  },

  {
    id: "nick_fury",
    characterKey: "nick_fury",
    variantKey: "",

    displayName: "Nick Fury",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 11,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.MANAGER,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A director willing to build the impossible team first and justify the paperwork later."
  },

  {
    id: "maria_hill",
    characterKey: "maria_hill",
    variantKey: "",

    displayName: "Maria Hill",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.DISCIPLINED,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A senior SHIELD officer keeping operations moving while everyone above her makes historically risky decisions."
  },

  {
    id: "phil_coulson",
    characterKey: "phil_coulson",
    variantKey: "",

    displayName: "Phil Coulson",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 3,

    basePower: 10,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.MORAL_CODE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.LOYAL,
      CHARACTER_TAGS.KIND
    ],

    flavor: "A calm professional whose belief in heroes becomes a surprisingly effective management strategy."
  },

  {
    id: "erik_selvig",
    characterKey: "erik_selvig",
    variantKey: "",

    displayName: "Erik Selvig",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 2,

    basePower: 10,

    preferredJob: JOB_TYPES.RESEARCH,

    traits: [
      TRAITS.SUPPORT,
      TRAITS.SPECIALIST
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.SCIENTIST,
      CHARACTER_TAGS.CURIOUS,
      CHARACTER_TAGS.ANXIOUS
    ],

    flavor: "A brilliant scientist whose Tesseract assignment comes with unacceptable levels of cosmic interference."
  },

  {
    id: "the_other",
    characterKey: "the_other",
    variantKey: "avengers",

    displayName: "The Other",
    subtitle: "The Avengers",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 10,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.ROGUE,
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.ALIEN_UNKNOWN,
      CHARACTER_TAGS.VILLAIN,
      CHARACTER_TAGS.SERVANT,
      CHARACTER_TAGS.DANGEROUS
    ],

    flavor: "A cosmic middle manager delivering threats on behalf of someone even worse."
  },

  {
    id: "gideon_malick_avengers",
    characterKey: "gideon_malick",
    variantKey: "avengers",

    displayName: "Gideon Malick",
    subtitle: "The Avengers",

    franchise: "Marvel Cinematic Universe",

    rarity: "rare",
    prestige: 1,

    basePower: 8,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.ROGUE
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.POLITICIAN,
      CHARACTER_TAGS.BUREAUCRAT,
      CHARACTER_TAGS.SHADY
    ],

    flavor: "A World Security Council member with polished oversight instincts and extremely concerning long-term affiliations."
  },

  // ========================================================
  // Uncommon / Avengers Supporting Characters
  // ========================================================

  {
    id: "jasper_sitwell",
    characterKey: "jasper_sitwell",
    variantKey: "",

    displayName: "Jasper Sitwell",
    subtitle: "",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 2,

    basePower: 7,

    preferredJob: JOB_TYPES.COVERT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.AGENT,
      CHARACTER_TAGS.BUREAUCRAT,
      CHARACTER_TAGS.DISCIPLINED
    ],

    flavor: "A SHIELD operative who makes agency procedure look calm even when the situation absolutely is not."
  },

  {
    id: "councilman_hawley",
    characterKey: "councilman_hawley",
    variantKey: "avengers",

    displayName: "Councilman Hawley",
    subtitle: "The Avengers",

    franchise: "Marvel Cinematic Universe",

    rarity: "uncommon",
    prestige: 2,

    basePower: 6,

    preferredJob: JOB_TYPES.GOVERNMENT,

    traits: [
      TRAITS.SUPPORT
    ],

    tags: [
      CHARACTER_TAGS.HUMAN,
      CHARACTER_TAGS.POLITICIAN,
      CHARACTER_TAGS.BUREAUCRAT,
      CHARACTER_TAGS.LAWFUL
    ],

    flavor: "A World Security Council member helping ensure global crises include sufficient committee oversight."
  }

], "assets/characters/mcu/phase1");