// ==========================================================
// Character Tags
// ----------------------------------------------------------
// Tags describe what a character IS, DOES, or tends to prefer.
// Used for filtering, compatibility, bonuses, conflicts,
// and future favorite/disliked systems.
// ==========================================================

const CHARACTER_TAGS = {
  // ========================================================
  // Species / Being Types
  // ========================================================

  HUMAN: "human",
  ROBOT: "robot",
  ANDROID: "android",
  CYBORG: "cyborg",
  AI: "ai",
  ALIEN_UNKNOWN: "alien_unknown",
  ANIMAL: "animal",

  // Star Wars / Sci-Fi Species
  WOOKIEE: "wookiee",
  EWOK: "ewok",
  TWILEK: "twilek",
  ZABRAK: "zabrak",
  KAMINOAN: "kaminoan",

  // MCU / Avatar
  KREE: "kree",
  SKRULL: "skrull",
  NA_VI: "na_vi",

  // Star Trek
  KLINGON: "klingon",
  ROMULAN: "romulan",
  VULCAN: "vulcan",
  BORG: "borg",

  // Fantasy
  ELF: "elf",
  DWARF: "dwarf",
  HOBBIT: "hobbit",
  ORC: "orc",
  GOBLIN: "goblin",
  TROLL: "troll",
  ENT: "ent",
  DRAGON: "dragon",

  // Supernatural
  VAMPIRE: "vampire",
  WEREWOLF: "werewolf",
  DEMON: "demon",
  ANGEL: "angel",
  GHOST: "ghost",
  SPIRIT: "spirit",
  ZOMBIE: "zombie",

  // Comic / Enhanced
  MUTANT: "mutant",
  SUPERHUMAN: "superhuman",
  KRYPTONIAN: "kryptonian",
  INHUMAN: "inhuman",
  ASGARDIAN: "asgardian",

  // ========================================================
  // Skills / Professions
  // ========================================================

  SCIENTIST: "scientist",
  ENGINEER: "engineer",
  DOCTOR: "doctor",
  TEACHER: "teacher",
  STUDENT: "student",
  MANAGER: "manager",
  SALESPERSON: "salesperson",
  OFFICE_WORKER: "office_worker",
  PILOT: "pilot",
  DRIVER: "driver",
  CHEF: "chef",
  BARTENDER: "bartender",
  PERFORMER: "performer",
  JOURNALIST: "journalist",
  DETECTIVE: "detective",
  SPY: "spy",
  SOLDIER: "soldier",
  GUARD: "guard",
  WARRIOR: "warrior",
  HACKER: "hacker",
  MECHANIC: "mechanic",
  SCAVENGER: "scavenger",
  ROYALTY: "royalty",
  MUSICIAN: "musician",
  SERVANT: "servant",
  POLITICIAN: "politician",

  // ========================================================
  // Personality / Behavior
  // ========================================================

  BRAVE: "brave",
  LOYAL: "loyal",
  CHAOTIC: "chaotic",
  LAZY: "lazy",
  ANXIOUS: "anxious",
  GREEDY: "greedy",
  ARROGANT: "arrogant",
  CHARISMATIC: "charismatic",
  CURIOUS: "curious",
  DISCIPLINED: "disciplined",
  MISCHIEVOUS: "mischievous",
  HOTHEADED: "hotheaded",
  CHILD: "child",
  WISE: "wise",

  // ========================================================
  // Alignment / Social Role
  // ========================================================

  REBEL: "rebel",
  VILLAIN: "villain",
  LAWFUL: "lawful",
  CRIMINAL: "criminal",
  MILITARY: "military",
  NOBLE: "noble",
  OUTCAST: "outcast",

  // ========================================================
  // Environment / Comfort
  // ========================================================

  DESERT: "desert",
  COLD: "cold",
  SPACE: "space",
  SEA: "sea",
  MAGICAL: "magical",
  SUPERNATURAL: "supernatural",
  URBAN: "urban",
  RURAL: "rural"
};


const CHARACTER_TAG_DEFS = {
  // Species / Being Types
  human: { label: "#human", description: "Ordinary human being" },
  robot: { label: "#robot", description: "Mechanical artificial being" },
  android: { label: "#android", description: "Humanlike artificial being" },
  cyborg: { label: "#cyborg", description: "Part organic machine" },
  ai: { label: "#ai", description: "Artificial intelligence" },
  alien_unknown: { label: "#alien", description: "Unknown alien species" },
  animal: { label: "#animal", description: "Non-human creature" },

  wookiee: { label: "#wookiee", description: "Strong loyal species" },
  ewok: { label: "#ewok", description: "Small tribal species" },
  twilek: { label: "#twilek", description: "Charismatic alien species" },
  zabrak: { label: "#zabrak", description: "Hardy horned species" },
  kaminoan: { label: "#kaminoan", description: "Elegant cloning experts" },

  kree: { label: "#kree", description: "Militaristic alien empire" },
  skrull: { label: "#skrull", description: "Shapeshifting alien species" },
  na_vi: { label: "#na'vi", description: "Nature-connected species" },

  klingon: { label: "#klingon", description: "Warrior honor culture" },
  romulan: { label: "#romulan", description: "Strategic secretive species" },
  vulcan: { label: "#vulcan", description: "Logical disciplined beings" },
  borg: { label: "#borg", description: "Assimilating collective species" },

  elf: { label: "#elf", description: "Graceful long-lived being" },
  dwarf: { label: "#dwarf", description: "Stout underground folk" },
  hobbit: { label: "#hobbit", description: "Small comfort-loving folk" },
  orc: { label: "#orc", description: "Rough aggressive species" },
  goblin: { label: "#goblin", description: "Cunning troublesome species" },
  troll: { label: "#troll", description: "Large brutal creature" },
  ent: { label: "#ent", description: "Ancient tree shepherd" },
  dragon: { label: "#dragon", description: "Powerful legendary creature" },

  vampire: { label: "#vampire", description: "Undead night creature" },
  werewolf: { label: "#werewolf", description: "Moon-cursed shapeshifter" },
  demon: { label: "#demon", description: "Supernatural hostile being" },
  angel: { label: "#angel", description: "Celestial supernatural being" },
  ghost: { label: "#ghost", description: "Lingering dead spirit" },
  spirit: { label: "#spirit", description: "Nonphysical supernatural being" },
  zombie: { label: "#zombie", description: "Reanimated dead being" },

  mutant: { label: "#mutant", description: "Genetically altered human" },
  superhuman: { label: "#superhuman", description: "Beyond normal human" },
  kryptonian: { label: "#kryptonian", description: "Superpowered alien" },
  inhuman: { label: "#inhuman", description: "Terrigen-altered lineage" },
  asgardian: { label: "#asgardian", description: "Mythic alien godlike being" },

  // Skills / Professions
  scientist: { label: "#scientist", description: "Science-focused worker" },
  engineer: { label: "#engineer", description: "Builds and fixes systems" },
  doctor: { label: "#doctor", description: "Medical care provider" },
  teacher: { label: "#teacher", description: "Educates and guides others" },
  student: { label: "#student", description: "Learns and develops skills" },
  manager: { label: "#manager", description: "Coordinates other workers" },
  salesperson: { label: "#salesperson", description: "Sells to customers" },
  office_worker: { label: "#office_worker", description: "Handles office tasks" },
  pilot: { label: "#pilot", description: "Operates flying vehicles" },
  driver: { label: "#driver", description: "Operates ground vehicles" },
  chef: { label: "#chef", description: "Prepares food professionally" },
  bartender: { label: "#bartender", description: "Serves drinks socially" },
  performer: { label: "#performer", description: "Entertains an audience" },
  journalist: { label: "#journalist", description: "Reports public information" },
  detective: { label: "#detective", description: "Investigates hidden facts" },
  spy: { label: "#spy", description: "Handles secret missions" },
  soldier: { label: "#soldier", description: "Trained military combatant" },
  guard: { label: "#guard", description: "Protects people or places" },
  warrior: { label: "#warrior", description: "Combat-focused fighter" },
  hacker: { label: "#hacker", description: "Exploits digital systems" },
  mechanic: { label: "#mechanic", description: "Repairs machines and vehicles" },
  scavenger: { label: "#scavenger", description: "Finds value in junk" },
  royalty: { label: "#royalty", description: "Born to status" },
  musician: { label: "#musician", description: "Performs music professionally" },
  servant: { label: "#servant", description: "Serves powerful people" },
  politician: { label: "#politician", description: "Navigates political systems" },

  // Personality / Behavior
  brave: { label: "#brave", description: "Faces danger willingly" },
  loyal: { label: "#loyal", description: "Sticks with allies" },
  chaotic: { label: "#chaotic", description: "Creates unpredictable outcomes" },
  lazy: { label: "#lazy", description: "Avoids unnecessary work" },
  anxious: { label: "#anxious", description: "Stresses under pressure" },
  greedy: { label: "#greedy", description: "Motivated by rewards" },
  arrogant: { label: "#arrogant", description: "Overestimates own importance" },
  charismatic: { label: "#charismatic", description: "Influences people easily" },
  curious: { label: "#curious", description: "Seeks new discoveries" },
  disciplined: { label: "#disciplined", description: "Follows structure well" },
  mischievous: { label: "#mischievous", description: "Causes playful trouble" },
  hotheaded: { label: "#hotheaded", description: "Acts before thinking" },
  child: { label: "#child", description: "Not fully matured" },
  wise: { label: "#wise", description: "Has good judgement" },

  // Alignment / Social Role
  rebel: { label: "#rebel", description: "Opposes authority" },
  villain: { label: "#villain", description: "Morally questionable actor" },
  lawful: { label: "#lawful", description: "Respects rules and order" },
  criminal: { label: "#criminal", description: "Comfortable breaking laws" },
  military: { label: "#military", description: "Military-affiliated character" },
  noble: { label: "#noble", description: "High-status background" },
  outcast: { label: "#outcast", description: "Does not fit society" },

  // Environment / Comfort
  desert: { label: "#desert", description: "Handles arid environments" },
  cold: { label: "#cold", description: "Handles cold environments" },
  space: { label: "#space", description: "Comfortable beyond planets" },
  sea: { label: "#sea", description: "Comfortable around water" },
  magical: { label: "#magical", description: "Connected to magic" },
  supernatural: { label: "#supernatural", description: "Beyond natural explanation" },
  urban: { label: "#urban", description: "Comfortable in cities" },
  rural: { label: "#rural", description: "Comfortable in countryside" }
};