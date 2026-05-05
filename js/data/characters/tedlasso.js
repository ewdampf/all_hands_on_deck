// ==========================================================
// Ted Lasso Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
// ==========================================================

const TED_LASSO_CHARACTERS = applyCharacterImageDefaults([

  // ========================================================
  // Common / Cannon Fodder
  // ========================================================

  {
    id: "richmond_players",
    characterKey: "richmond_players",
    variantKey: "default",
    displayName: "AFC Richmond Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.TEAM_PLAYER],
    flavor: "Better together than alone, especially when someone believes in them."
  },

  {
    id: "west_ham_players",
    characterKey: "west_ham_players",
    variantKey: "default",
    displayName: "West Ham United Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Structured, sharp, and operating inside a much colder workplace culture."
  },

  {
    id: "man_city_players",
    characterKey: "man_city_players",
    variantKey: "default",
    displayName: "Manchester City Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.ELITE],
    flavor: "Elite talent operating inside an even more elite machine."
  },

  {
    id: "tottenham_players",
    characterKey: "tottenham_players",
    variantKey: "default",
    displayName: "Tottenham Hotspur Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Capable, competitive, and emotionally complicated for everyone involved."
  },

  {
    id: "crystal_palace_players",
    characterKey: "crystal_palace_players",
    variantKey: "default",
    displayName: "Crystal Palace Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Reliable professionals who make every match feel like a real shift."
  },

  {
    id: "everton_players",
    characterKey: "everton_players",
    variantKey: "default",
    displayName: "Everton F.C. Players",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Tradition-heavy, result-variable, and always part of the football noise."
  },

  // ========================================================
  // Ultra / Main Cast
  // ========================================================

  {
    id: "ted_lasso",
    characterKey: "ted_lasso",
    variantKey: "default",
    displayName: "Ted Lasso",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.LEADER, CHARACTER_TAGS.WISE],
    flavor: "Wins without always winning, leads without forcing, and somehow makes belief operational."
  },

  {
    id: "rebecca_welton",
    characterKey: "rebecca_welton",
    variantKey: "default",
    displayName: "Rebecca Welton",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.CONFIDENT, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Built an empire, tried to burn it down, then built something worth keeping."
  },

  {
    id: "coach_beard",
    characterKey: "coach_beard",
    variantKey: "default",
    displayName: "Coach Beard",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.WISE, CHARACTER_TAGS.LOYAL],
    flavor: "Knows everything, explains almost nothing, and may already have solved the problem."
  },

  {
    id: "roy_kent",
    characterKey: "roy_kent",
    variantKey: "default",
    displayName: "Roy Kent",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.LEADER, CHARACTER_TAGS.HOTHEADED],
    flavor: "Intensity, loyalty, and emotional growth delivered at full volume."
  },

  {
    id: "keeley_jones",
    characterKey: "keeley_jones",
    variantKey: "default",
    displayName: "Keeley Jones",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.SOCIAL, CHARACTER_TAGS.PERFORMER],
    flavor: "Builds brands, builds people, and somehow keeps both from collapsing."
  },

  {
    id: "jamie_tartt",
    characterKey: "jamie_tartt",
    variantKey: "default",
    displayName: "Jamie Tartt",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.EGO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.CONFIDENT, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Started as talent with ego, became talent with purpose, kept the hair."
  },

  {
    id: "nate_shelley",
    characterKey: "nate_shelley",
    variantKey: "default",
    displayName: "Nate Shelley",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.SPECIALIST, CHARACTER_TAGS.CURIOUS],
    flavor: "Brilliant, fragile, and dangerously responsive to validation."
  },

  {
    id: "leslie_higgins",
    characterKey: "leslie_higgins",
    variantKey: "default",
    displayName: "Leslie Higgins",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "ultra",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.OFFICE_WORKER],
    flavor: "Quietly essential, painfully decent, and somehow always holding the binder."
  },

  // ========================================================
  // Rare / Supporting Cast
  // ========================================================

  {
    id: "sam_obisanya",
    characterKey: "sam_obisanya",
    variantKey: "default",
    displayName: "Sam Obisanya",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.WISE],
    flavor: "Principles first, performance second—and somehow still excellent at both."
  },

  {
    id: "dani_rojas",
    characterKey: "dani_rojas",
    variantKey: "default",
    displayName: "Dani Rojas",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.GOOFY],
    flavor: "Joy is not a mood. Joy is the entire operating system."
  },

  {
    id: "isaac_mcadoo",
    characterKey: "isaac_mcadoo",
    variantKey: "default",
    displayName: "Isaac McAdoo",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.LEADER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.LEADER],
    flavor: "Leads with presence before saying a word, then says exactly enough."
  },

  {
    id: "colin_hughes",
    characterKey: "colin_hughes",
    variantKey: "default",
    displayName: "Colin Hughes",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.BRAVE],
    flavor: "Finding confidence while everyone else thinks confidence should be easy."
  },

  {
    id: "trent_crimm",
    characterKey: "trent_crimm",
    variantKey: "default",
    displayName: "Trent Crimm",
    subtitle: "The Independent",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SPECIALIST, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.WISE, CHARACTER_TAGS.CURIOUS],
    flavor: "Observes everything, says less than he knows, and writes only what matters."
  },

  {
    id: "rupert_mannion",
    characterKey: "rupert_mannion",
    variantKey: "default",
    displayName: "Rupert Mannion",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.GREEDY],
    flavor: "Winning is the only metric that matters—and even that never seems to be enough."
  },

  {
    id: "dr_sharon_fieldstone",
    characterKey: "sharon_fieldstone",
    variantKey: "default",
    displayName: "Dr. Sharon Fieldstone",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.MEDICAL,
    traits: [TRAITS.SPECIALIST, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.DOCTOR, CHARACTER_TAGS.WISE, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Fixes problems people prefer to rename as personality quirks."
  },

  {
    id: "will_kitman",
    characterKey: "will_kitman",
    variantKey: "default",
    displayName: "Will Kitman",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.SERVICE, CHARACTER_TAGS.ANXIOUS],
    flavor: "Handles everything behind the scenes, including things nobody should have asked for."
  },

  {
    id: "mae_green",
    characterKey: "mae_green",
    variantKey: "default",
    displayName: "Mae Green",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BARTENDER, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.WISE],
    flavor: "Runs the bar like a community, and the community like a bar tab."
  },

  {
    id: "baz_primrose",
    characterKey: "baz_primrose",
    variantKey: "default",
    displayName: "Baz Primrose",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.SOCIAL],
    flavor: "Always invested, rarely calm, and never watching casually."
  },

  {
    id: "jeremy_blumenthal",
    characterKey: "jeremy_blumenthal",
    variantKey: "default",
    displayName: "Jeremy Blumenthal",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.SOCIAL],
    flavor: "Part of the group dynamic, which is more powerful than it should be."
  },

  {
    id: "paul_la_fleur",
    characterKey: "paul_la_fleur",
    variantKey: "default",
    displayName: "Paul La Fleur",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.SOCIAL],
    flavor: "Committed regardless of outcome, which makes him management material or a warning sign."
  },

  {
    id: "henry_lasso",
    characterKey: "henry_lasso",
    variantKey: "default",
    displayName: "Henry Lasso",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.FAMILY],
    flavor: "A reminder that some performance reviews happen very far from work."
  },

  {
    id: "phoebe",
    characterKey: "phoebe",
    variantKey: "default",
    displayName: "Phoebe",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.BRAVE],
    flavor: "Honest, direct, and somehow already better at feedback than most adults."
  },

  {
    id: "nora",
    characterKey: "nora",
    variantKey: "default",
    displayName: "Nora",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.CURIOUS],
    flavor: "Smart, perceptive, and quietly influential in ways adults underestimate."
  },

  {
    id: "deborah_welton",
    characterKey: "deborah_welton",
    variantKey: "default",
    displayName: "Deborah Welton",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.FAMILY],
    flavor: "Confident, unpredictable, and absolutely not waiting for permission."
  },

  {
    id: "sassy_smurf",
    characterKey: "sassy_smurf",
    variantKey: "default",
    displayName: "Sassy Smurf",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.HOTHEADED],
    flavor: "Says what others will not, usually before they have prepared emotionally."
  },

  {
    id: "edwin_akufo",
    characterKey: "edwin_akufo",
    variantKey: "default",
    displayName: "Edwin Akufo",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.MANAGER],
    flavor: "Unlimited resources, limited patience, and no interest in proportionate responses."
  },

  {
    id: "zava",
    characterKey: "zava",
    variantKey: "default",
    displayName: "Zava",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.EGO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.ELITE, CHARACTER_TAGS.ARROGANT],
    flavor: "A force of nature who occasionally cooperates with reality."
  },

  {
    id: "michael",
    characterKey: "michael",
    variantKey: "colins_boyfriend",
    displayName: "Michael",
    subtitle: "Colin’s Boyfriend",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.SOCIAL],
    flavor: "A grounding influence in a complicated life."
  },

  {
    id: "dottie_lasso",
    characterKey: "dottie_lasso",
    variantKey: "default",
    displayName: "Dottie Lasso",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Brings history, warmth, and the kind of emotional paperwork no one filed."
  },

  // ========================================================
  // Uncommon / Extended Cast & One-Offs
  // ========================================================

  {
    id: "barbara",
    characterKey: "barbara",
    variantKey: "default",
    displayName: "Barbara",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Highly structured, highly efficient, and deeply suspicious of chaos."
  },

  {
    id: "jack_danvers",
    characterKey: "jack_danvers",
    variantKey: "default",
    displayName: "Jack Danvers",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CONFIDENT, CHARACTER_TAGS.ARROGANT],
    flavor: "Moves fast, commits faster, and rarely considers long-term consequences."
  },

  {
    id: "shandy",
    characterKey: "shandy",
    variantKey: "default",
    displayName: "Shandy",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.SOCIAL],
    flavor: "High energy, low structure, and completely resistant to planning."
  },

  {
    id: "bex_mannion",
    characterKey: "bex_mannion",
    variantKey: "default",
    displayName: "Bex Mannion",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.CONFIDENT],
    flavor: "Comfortable in high-stakes environments with very little concern."
  },

  {
  id: "francis",
  characterKey: "francis",
  variantKey: "default",
  displayName: "Francis",
  subtitle: "Edwin Akufo’s Assistant",
  franchise: "Ted Lasso",
  rarity: "uncommon",
  prestige: 2,
  basePower: 6,
  preferredJob: JOB_TYPES.CORPORATE,
  traits: [TRAITS.SUPPORT],
  tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.DISCIPLINED],
  flavor: "Executes every task with unsettling precision for a boss who escalates everything."
},

  {
    id: "jade",
    characterKey: "jade",
    variantKey: "default",
    displayName: "Jade",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.RESERVED, CHARACTER_TAGS.LOYAL],
    flavor: "Quietly consistent and far more observant than expected."
  },

  {
    id: "derek",
    characterKey: "derek",
    variantKey: "default",
    displayName: "Derek",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BARTENDER, CHARACTER_TAGS.SOCIAL],
    flavor: "Keeps things flowing, including conversations that go nowhere."
  },

  {
    id: "ollie",
    characterKey: "ollie",
    variantKey: "default",
    displayName: "Ollie",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOCIAL, CHARACTER_TAGS.LOYAL],
    flavor: "Friendly, familiar, and part of the background that keeps things stable."
  },

  {
    id: "annette",
    characterKey: "annette",
    variantKey: "default",
    displayName: "Annette",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOCIAL],
    flavor: "Understands the environment better than most leadership does."
  },

  {
    id: "matthijs",
    characterKey: "matthijs",
    variantKey: "default",
    displayName: "Matthijs",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Part of the system, which is doing most of the work."
  },

  {
    id: "julie_higgins",
    characterKey: "julie_higgins",
    variantKey: "default",
    displayName: "Julie Higgins",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.COMFORT],
    flavor: "Creates stability in ways that rarely show up in metrics."
  },

  {
    id: "lloyd_shelley",
    characterKey: "lloyd_shelley",
    variantKey: "default",
    displayName: "Lloyd Shelley",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "High expectations with limited interest in how they are met."
  },

  {
    id: "george_cartrick",
    characterKey: "george_cartrick",
    variantKey: "default",
    displayName: "George Cartrick",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.ARROGANT],
    flavor: "Represents the old system, including all of its problems."
  },

  {
    id: "thierry_zoreaux",
    characterKey: "zoreaux",
    variantKey: "default",
    displayName: "Thierry Zoreaux",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.CONFIDENT],
    flavor: "Rebrands as needed, performs when required."
  },

  {
    id: "jan_maas",
    characterKey: "jan_maas",
    variantKey: "default",
    displayName: "Jan Maas",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.BLUNT],
    flavor: "Direct feedback with zero cushioning."
  },

  {
    id: "richard_montlaur",
    characterKey: "richard",
    variantKey: "default",
    displayName: "Richard Montlaur",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.INDULGENT],
    flavor: "Enjoys the lifestyle as much as the work."
  },

  {
    id: "moe_bumbercatch",
    characterKey: "moe",
    variantKey: "default",
    displayName: "Moe Bumbercatch",
    subtitle: "",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Dependable presence in a constantly shifting lineup."
  },

  {
    id: "arnie",
    characterKey: "arnie",
    variantKey: "default",
    displayName: "Arnie",
    subtitle: "Commentator",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MEDIA, CHARACTER_TAGS.SOCIAL],
    flavor: "Explains the action while occasionally understanding it."
  },

  {
    id: "chris_powell",
    characterKey: "chris_powell",
    variantKey: "default",
    displayName: "Chris Powell",
    subtitle: "Commentator",
    franchise: "Ted Lasso",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MEDIA, CHARACTER_TAGS.WISE],
    flavor: "Professional analysis delivered with calm authority."
  }

], "assets/characters/tedlasso");