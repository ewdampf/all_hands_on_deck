// ==========================================================
// Futurama Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
// ==========================================================

const FUTURAMA_CHARACTERS = applyCharacterImageDefaults([

  // ========================================================
  // Common / Cannon Fodder
  // ========================================================

  {
    id: "new_new_york_human_citizens",
    characterKey: "new_new_york_human_citizens",
    variantKey: "default",
    displayName: "New New York Human Citizens",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 1,
    basePower: 4,
    preferredJob: JOB_TYPES.RETAIL,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.URBAN],
    flavor: "Ordinary people from the future, which mostly means stranger problems and worse rent."
  },

  {
    id: "new_new_york_robot_citizens",
    characterKey: "new_new_york_robot_citizens",
    variantKey: "default",
    displayName: "New New York Robot Citizens",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.URBAN],
    flavor: "Built for efficiency, sarcasm, and questionable workplace compliance."
  },

  {
    id: "doop_soldiers",
    characterKey: "doop_soldiers",
    variantKey: "default",
    displayName: "DOOP Soldiers",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.SPACE],
    flavor: "Uniformed, underbriefed, and ready to be deployed for reasons nobody fully understands."
  },

  {
    id: "new_new_york_police",
    characterKey: "new_new_york_police",
    variantKey: "default",
    displayName: "New New York Police",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.URBAN],
    flavor: "Hovercars, bulky uniforms, and a very flexible understanding of procedure."
  },

  {
    id: "mom_corporation_drones",
    characterKey: "mom_corporation_drones",
    variantKey: "default",
    displayName: "MomCorp Drones",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Identical corporate workers trained to smile through terrifying leadership."
  },

  {
    id: "robot_mafia_goons",
    characterKey: "robot_mafia_goons",
    variantKey: "default",
    displayName: "Robot Mafia Goons",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.URBAN],
    flavor: "Suits, glowing eyes, tommy guns, and a surprisingly formal org chart."
  },

  {
    id: "brain_spawn",
    characterKey: "brain_spawn",
    variantKey: "default",
    displayName: "Brain Spawn",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.SPACE],
    flavor: "Small floating brains with big plans and limited patience for physical labor."
  },

  {
    id: "omnicronian_soldiers",
    characterKey: "omnicronian_soldiers",
    variantKey: "default",
    displayName: "Omicronian Soldiers",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.SPACE],
    flavor: "Large, loud, and deeply committed to solving misunderstandings with invasion."
  },

  {
    id: "nibblonian_acolytes",
    characterKey: "nibblonian_acolytes",
    variantKey: "default",
    displayName: "Nibblonian Acolytes",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.MAGICAL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Mysterious hooded helpers with cosmic purpose and suspiciously adorable logistics."
  },

  {
    id: "amphibiosan_workers",
    characterKey: "amphibiosan_workers",
    variantKey: "default",
    displayName: "Amphibiosan Workers",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.ANXIOUS],
    flavor: "Polite, formal, and already worried about how this will affect their career."
  },

  {
    id: "robot_santa_elves",
    characterKey: "robot_santa_elves",
    variantKey: "default",
    displayName: "Robot Santa Elves",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MISCHIEVOUS, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Holiday production staff with festive uniforms and alarming performance standards."
  },

  {
    id: "decapodian_guards",
    characterKey: "decapodian_guards",
    variantKey: "default",
    displayName: "Decapodian Guards",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.SEA],
    flavor: "Lobster-like guards with claws, pride, and very limited ergonomic options."
  },

  {
    id: "amazonian_warriors",
    characterKey: "amazonian_warriors",
    variantKey: "default",
    displayName: "Amazonian Warriors",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.BRAVE],
    flavor: "Tall, powerful, and unlikely to be impressed by your staffing spreadsheet."
  },

  {
    id: "sewer_mutants",
    characterKey: "sewer_mutants",
    variantKey: "default",
    displayName: "Sewer Mutants",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.MUTANT, CHARACTER_TAGS.URBAN, CHARACTER_TAGS.OUTCAST],
    flavor: "Used to unpleasant environments, which gives them a worrying competitive advantage."
  },

  {
    id: "space_pirates",
    characterKey: "space_pirates",
    variantKey: "default",
    displayName: "Space Pirates",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.SPACE],
    flavor: "Excellent at acquisition, especially when ownership paperwork is optional."
  },

  {
    id: "hypnotoad_followers",
    characterKey: "hypnotoad_followers",
    variantKey: "default",
    displayName: "Hypnotoad Followers",
    subtitle: "",
    franchise: "Futurama",
    rarity: "common",
    prestige: 2,
    basePower: 4,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.CANNON_FODDER],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.ANXIOUS],
    flavor: "They follow instructions perfectly, provided the instructions are mostly buzzing."
  },

  // ========================================================
  // Uncommon / Minor Recurring & Strong One-Offs
  // ========================================================

  {
    id: "alcazar",
    characterKey: "alcazar",
    variantKey: "default",
    displayName: "Alcazar",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.CHARISMATIC],
    flavor: "A shapeshifting red flag with excellent short-term persuasion skills."
  },

  {
    id: "horrible_gelatinous_blob",
    characterKey: "horrible_gelatinous_blob",
    variantKey: "default",
    displayName: "Horrible Gelatinous Blob",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.INDULGENT],
    flavor: "Surprisingly employable for something that absorbs lunch by proximity."
  },

  {
    id: "neutral_ambassador",
    characterKey: "neutral_ambassador",
    variantKey: "default",
    displayName: "Neutral Ambassador",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.DIPLOMAT, CHARACTER_TAGS.LAWFUL],
    flavor: "Brings absolutely no strong feelings to the table."
  },

  {
    id: "grand_midwife",
    characterKey: "grand_midwife",
    variantKey: "default",
    displayName: "The Grand Midwife",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDICAL,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.DOCTOR, CHARACTER_TAGS.LAWFUL],
    flavor: "Ceremonial, professional, and very particular about procedure."
  },

  {
    id: "enos",
    characterKey: "enos",
    variantKey: "default",
    displayName: "Enos",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SOLDIER, CHARACTER_TAGS.GOOFY],
    flavor: "A simple man from a simpler time, creating complicated genealogy problems."
  },

  {
    id: "abner_doubledeal",
    characterKey: "abner_doubledeal",
    variantKey: "default",
    displayName: "Abner Doubledeal",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.HUSTLER],
    flavor: "If it can be promoted, booked, or overcharged, he is interested."
  },

  {
    id: "mayor_poopenmeyer",
    characterKey: "mayor_poopenmeyer",
    variantKey: "default",
    displayName: "Mayor Poopenmeyer",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.POLITICIAN, CHARACTER_TAGS.LAWFUL],
    flavor: "Public office experience, which mostly means explaining disasters after they happen."
  },

  {
    id: "slurm_queen",
    characterKey: "slurm_queen",
    variantKey: "default",
    displayName: "The Slurm Queen",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.INDULGENT],
    flavor: "The production process is efficient, horrifying, and best left unexplained."
  },

  {
    id: "glurmo",
    characterKey: "glurmo",
    variantKey: "default",
    displayName: "Glurmo",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.SALESMAN],
    flavor: "Mascot energy with an uncomfortable proximity to manufacturing secrets."
  },

  {
    id: "giant_bee_queen",
    characterKey: "giant_bee_queen",
    variantKey: "default",
    displayName: "Giant Bee Queen",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ANIMAL, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.DANGEROUS],
    flavor: "High-volume production, assuming everyone survives the workplace."
  },

  {
    id: "bella",
    characterKey: "bella",
    variantKey: "default",
    displayName: "Bella",
    subtitle: "Donbot’s Wife",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.CRIMINAL],
    flavor: "Connected to the organization in ways HR would rather not document."
  },

  {
    id: "yancy_fry_sr",
    characterKey: "yancy_fry_sr",
    variantKey: "default",
    displayName: "Yancy Fry Sr.",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Old-fashioned expectations, delivered with classic dad intensity."
  },

  {
    id: "sherri_fry",
    characterKey: "sherri_fry",
    variantKey: "default",
    displayName: "Sherri Fry",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.COMFORT],
    flavor: "A stabilizing family presence in an otherwise unstable timeline."
  },

  {
    id: "yancy_fry_jr",
    characterKey: "yancy_fry_jr",
    variantKey: "default",
    displayName: "Yancy Fry Jr.",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.LOYAL],
    flavor: "Carries the family name, the family baggage, and a surprisingly emotional résumé."
  },

  {
    id: "grandma_mildred_fry",
    characterKey: "grandma_mildred_fry",
    variantKey: "default",
    displayName: "Grandma Mildred Fry",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.COMFORT],
    flavor: "Important to the timeline in ways management should not examine too closely."
  },

  {
    id: "mr_vogel",
    characterKey: "mr_vogel",
    variantKey: "default",
    displayName: "Mr. Vogel",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.TEACHER, CHARACTER_TAGS.COMFORT],
    flavor: "Caring, patient, and probably underfunded."
  },

  {
    id: "nny",
    characterKey: "nny",
    variantKey: "default",
    displayName: "Nny",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.OUTCAST],
    flavor: "Small, strange, and still somehow better adjusted than half the staff."
  },

  {
    id: "albert",
    characterKey: "albert",
    variantKey: "default",
    displayName: "Albert",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.OUTCAST],
    flavor: "Another orphanarium résumé entry that raises more questions than answers."
  },

  {
    id: "free_waterfall_sr",
    characterKey: "free_waterfall_sr",
    variantKey: "default",
    displayName: "Free Waterfall Sr.",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.REBEL, CHARACTER_TAGS.HOTHEADED],
    flavor: "A protest strategy built mostly around volume and certainty."
  },

  {
    id: "old_man_waterfall",
    characterKey: "old_man_waterfall",
    variantKey: "default",
    displayName: "Old Man Waterfall",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ELDERLY, CHARACTER_TAGS.REBEL],
    flavor: "Legally complicated, politically loud, and very hard to ignore."
  },

  {
    id: "robot_gypsy",
    characterKey: "robot_gypsy",
    variantKey: "default",
    displayName: "Robot Gypsy",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.MAGICAL, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "Offers predictions, curses, and unclear billing terms."
  },

  {
    id: "robot_rabbi",
    characterKey: "robot_rabbi",
    variantKey: "default",
    displayName: "Robot Rabbi",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.WISE, CHARACTER_TAGS.LAWFUL],
    flavor: "Spiritual guidance, but with more circuitry."
  },

  {
    id: "robot_priest",
    characterKey: "robot_priest",
    variantKey: "default",
    displayName: "Robot Priest",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.WISE],
    flavor: "Provides moral instruction in an extremely literal operating system."
  },

  {
    id: "space_pope",
    characterKey: "space_pope",
    variantKey: "default",
    displayName: "The Space Pope",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.WISE, CHARACTER_TAGS.LAWFUL],
    flavor: "High spiritual authority, unclear administrative jurisdiction."
  },

  {
    id: "mr_peppy",
    characterKey: "mr_peppy",
    variantKey: "default",
    displayName: "Mr. Peppy",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ANIMAL, CHARACTER_TAGS.CUTE, CHARACTER_TAGS.CHAOTIC],
    flavor: "Adorable, dangerous, and probably not allowed under the lease."
  },

  {
    id: "pa_clampazzo",
    characterKey: "pa_clampazzo",
    variantKey: "default",
    displayName: "Pa Clampazzo",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.FAMILY],
    flavor: "Family business, unfortunately."
  },

  {
    id: "hyper_chickens_wife",
    characterKey: "hyper_chickens_wife",
    variantKey: "default",
    displayName: "Hyper-Chicken’s Wife",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ANIMAL, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.CHAOTIC],
    flavor: "Less legally active than her husband, but no less concerning."
  },

  {
    id: "queen_of_amazonia",
    characterKey: "queen_of_amazonia",
    variantKey: "default",
    displayName: "Queen of Amazonia",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.WARRIOR],
    flavor: "A commanding presence with very direct performance expectations."
  },

  {
    id: "scary_door_narrator",
    characterKey: "scary_door_narrator",
    variantKey: "default",
    displayName: "The Scary Door Narrator",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.SUPERNATURAL],
    flavor: "Turns routine status updates into existential dread."
  },

  {
    id: "what_if_machine",
    characterKey: "what_if_machine",
    variantKey: "default",
    displayName: "The What-If Machine",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.CURIOUS],
    flavor: "Excellent for projections, terrible for emotional stability."
  },

  {
    id: "brainspawn_leader",
    characterKey: "brainspawn_leader",
    variantKey: "default",
    displayName: "Brainspawn Leader",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.VILLAIN],
    flavor: "A floating executive summary of intellectual arrogance."
  },

  {
    id: "ethan_bubblegum_tate",
    characterKey: "ethan_bubblegum_tate",
    variantKey: "default",
    displayName: "Ethan “Bubblegum” Tate",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Sports leadership with enough confidence to fill an arena."
  },

  {
    id: "curly_joe",
    characterKey: "curly_joe",
    variantKey: "default",
    displayName: "Curly Joe",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Reliable teammate, assuming the job description involves basketball."
  },

  {
    id: "sweet_clyde",
    characterKey: "sweet_clyde",
    variantKey: "default",
    displayName: "Sweet Clyde",
    subtitle: "",
    franchise: "Futurama",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE],
    flavor: "Brings athletic credibility and background chaos."
  },

  // ========================================================
  // Rare / Major Recurring Characters
  // ========================================================

  {
    id: "zapp_brannigan",
    characterKey: "zapp_brannigan",
    variantKey: "default",
    displayName: "Zapp Brannigan",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Leads from the front, assuming the front is somewhere very far behind him."
  },

  {
    id: "kif_kroker",
    characterKey: "kif_kroker",
    variantKey: "default",
    displayName: "Kif Kroker",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.DISCIPLINED],
    flavor: "The actual worker behind someone else’s terrible leadership."
  },

  {
    id: "mom",
    characterKey: "mom",
    variantKey: "default",
    displayName: "Mom",
    subtitle: "Carol Miller",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.ARROGANT],
    flavor: "A corporate titan with grandmother branding and volcanic labor relations."
  },

  {
    id: "calculon",
    characterKey: "calculon",
    variantKey: "default",
    displayName: "Calculon",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.ARROGANT],
    flavor: "All workplace issues are improved by dramatic pauses. Allegedly."
  },

  {
    id: "robot_devil",
    characterKey: "robot_devil",
    variantKey: "default",
    displayName: "Robot Devil",
    subtitle: "Beelzebot",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.PERFORMER, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "Excellent at contracts, loopholes, and musical workplace disputes."
  },

  {
    id: "lrrr",
    characterKey: "lrrr",
    variantKey: "default",
    displayName: "Lrrr",
    subtitle: "Ruler of Omicron Persei 8",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.WARRIOR, CHARACTER_TAGS.HOTHEADED],
    flavor: "A decisive leader, provided the decision is invasion."
  },

  {
    id: "ndnd",
    characterKey: "ndnd",
    variantKey: "default",
    displayName: "Ndnd",
    subtitle: "Queen of Omicron Persei 8",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Diplomacy, command presence, and occasional invasion oversight."
  },

  {
    id: "richard_nixons_head",
    characterKey: "richard_nixons_head",
    variantKey: "default",
    displayName: "Richard Nixon’s Head",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.POLITICIAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.LAWFUL],
    flavor: "A head in a jar with executive experience and deeply unsettling momentum."
  },

  {
    id: "scruffy",
    characterKey: "scruffy",
    variantKey: "default",
    displayName: "Scruffy",
    subtitle: "Scruffy Scruffington",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MECHANIC, CHARACTER_TAGS.LAZY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Scruffy believes in this company. Scruffy also believes in breaks."
  },

  {
    id: "cubert_farnsworth",
    characterKey: "cubert_farnsworth",
    variantKey: "default",
    displayName: "Cubert Farnsworth",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.ARROGANT],
    flavor: "Young, brilliant, and already disappointed by management."
  },

  {
    id: "dwight_conrad",
    characterKey: "dwight_conrad",
    variantKey: "default",
    displayName: "Dwight Conrad",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A responsible child, which makes him dangerously overqualified here."
  },

  {
    id: "labarbara_conrad",
    characterKey: "labarbara_conrad",
    variantKey: "default",
    displayName: "LaBarbara Conrad",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.FAMILY],
    flavor: "Brings charm, stability, and a complicated performance review history."
  },

  {
    id: "barbados_slim",
    characterKey: "barbados_slim",
    variantKey: "default",
    displayName: "Barbados Slim",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Peak athletic charisma, which HR insists is not a business plan."
  },

  {
    id: "leo_wong",
    characterKey: "leo_wong",
    variantKey: "default",
    displayName: "Leo Wong",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.GREEDY],
    flavor: "Thinks scale solves everything, especially when someone else pays."
  },

  {
    id: "inez_wong",
    characterKey: "inez_wong",
    variantKey: "default",
    displayName: "Inez Wong",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ROYALTY, CHARACTER_TAGS.CHARISMATIC],
    flavor: "High society confidence with surprisingly practical management instincts."
  },

  {
    id: "morbo",
    characterKey: "morbo",
    variantKey: "default",
    displayName: "Morbo",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.NEWSCASTER, CHARACTER_TAGS.VILLAIN],
    flavor: "Delivers the news with clarity, volume, and threats of annihilation."
  },

  {
    id: "linda_news_anchor",
    characterKey: "linda",
    variantKey: "default",
    displayName: "Linda",
    subtitle: "News Anchor",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.NEWSCASTER, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Smiles through catastrophe with professional consistency."
  },

  {
    id: "url",
    characterKey: "url",
    variantKey: "default",
    displayName: "URL",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.URBAN],
    flavor: "Law enforcement with hydraulics and catchphrases."
  },

  {
    id: "smitty",
    characterKey: "smitty",
    variantKey: "default",
    displayName: "Smitty",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.URBAN],
    flavor: "Standard police competence, adjusted for New New York."
  },

  {
    id: "judge_whitey",
    characterKey: "judge_whitey",
    variantKey: "default",
    displayName: "Judge Whitey",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JUDGE, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.ARROGANT],
    flavor: "A legal authority with the warmth of a locked filing cabinet."
  },

  {
    id: "hyper_chicken",
    characterKey: "hyper_chicken",
    variantKey: "default",
    displayName: "Hyper-Chicken",
    subtitle: "Attorney at Law",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ANIMAL, CHARACTER_TAGS.LAWYER, CHARACTER_TAGS.CHAOTIC],
    flavor: "May not know fancy big-city law, but somehow keeps getting retained."
  },

  {
    id: "donbot",
    characterKey: "donbot",
    variantKey: "default",
    displayName: "Donbot",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.MANAGER],
    flavor: "Organized crime is still organization."
  },

  {
    id: "clamps",
    characterKey: "clamps",
    variantKey: "default",
    displayName: "Clamps",
    subtitle: "Francis X. Clampazzo",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.HOTHEADED],
    flavor: "Has one tool, one solution, and far too much enthusiasm."
  },

  {
    id: "joey_mousepad",
    characterKey: "joey_mousepad",
    variantKey: "default",
    displayName: "Joey Mousepad",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.LOYAL],
    flavor: "Dependable muscle for very specific kinds of meetings."
  },

  {
    id: "roberto",
    characterKey: "roberto",
    variantKey: "default",
    displayName: "Roberto",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.CHAOTIC],
    flavor: "Unpredictable in ways even risky businesses may find excessive."
  },

  {
    id: "hedonismbot",
    characterKey: "hedonismbot",
    variantKey: "default",
    displayName: "Hedonismbot",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.INDULGENT, CHARACTER_TAGS.ARROGANT],
    flavor: "A luxury consultant with no concept of sustainable spending."
  },

  {
    id: "elzar",
    characterKey: "elzar",
    variantKey: "default",
    displayName: "Elzar",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.CHEF, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Kicks it up a notch, usually onto the expense report."
  },

  {
    id: "hattie_mcdogal",
    characterKey: "hattie_mcdogal",
    variantKey: "default",
    displayName: "Hattie McDoogal",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ELDERLY, CHARACTER_TAGS.CHAOTIC],
    flavor: "Mostly harmless, unless the budget has cats in it."
  },

  {
    id: "mr_panucci",
    characterKey: "mr_panucci",
    variantKey: "default",
    displayName: "Mr. Panucci",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.SALESMAN],
    flavor: "Old-school management: cheap, gruff, and somehow sentimental."
  },

  {
    id: "dr_wernstrom",
    characterKey: "ogden_wernstrom",
    variantKey: "default",
    displayName: "Dr. Ogden Wernstrom",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.ARROGANT],
    flavor: "Brilliant, petty, and always available to make science personal."
  },

  {
    id: "walt",
    characterKey: "walt",
    variantKey: "default",
    displayName: "Walt",
    subtitle: "Mom’s Son",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.OFFICE_WORKER],
    flavor: "Corporate heir energy, diluted through layers of fear."
  },

  {
    id: "larry",
    characterKey: "larry",
    variantKey: "default",
    displayName: "Larry",
    subtitle: "Mom’s Son",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.OFFICE_WORKER],
    flavor: "Management potential exists somewhere in there, probably."
  },

  {
    id: "igner",
    characterKey: "igner",
    variantKey: "default",
    displayName: "Igner",
    subtitle: "Mom’s Son",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.GOOFY],
    flavor: "Not the sharpest tool in the corporate shed, but oddly endearing."
  },

  {
    id: "robot_santa_claus",
    characterKey: "robot_santa_claus",
    variantKey: "default",
    displayName: "Robot Santa Claus",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.HOLIDAY, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Seasonal management by impossible standards and heavy artillery."
  },

  {
    id: "flexo",
    characterKey: "flexo",
    variantKey: "default",
    displayName: "Flexo",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 8,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Like Bender, but with a beard and marginally better first impressions."
  },

  {
    id: "malfunctioning_eddie",
    characterKey: "malfunctioning_eddie",
    variantKey: "default",
    displayName: "Malfunctioning Eddie",
    subtitle: "",
    franchise: "Futurama",
    rarity: "rare",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.RETAIL,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.SALESMAN, CHARACTER_TAGS.CHAOTIC],
    flavor: "Explosive deals. Occasionally literally."
  },

 // ========================================================
  // Ultra-Rare / Main Cast
  // ========================================================

  {
    id: "philip_j_fry",
    characterKey: "fry",
    variantKey: "default",
    displayName: "Philip J. Fry",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 3,
    mythicVariantId: "holophonor_fry",
    basePower: 12,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GOOFY, CHARACTER_TAGS.BRAVE],
    flavor: "Not qualified on paper. Occasionally saves reality anyway."
  },

  {
    id: "turanga_leela",
    characterKey: "leela",
    variantKey: "default",
    displayName: "Turanga Leela",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 3,
    mythicVariantId: "two_eyed_leela",
    basePower: 13,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.MUTANT, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.LEADER],
    flavor: "The only competent adult in most situations, which is exhausting."
  },

  {
    id: "bender",
    characterKey: "bender",
    variantKey: "default",
    displayName: "Bender Bending Rodríguez",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 3,
    mythicVariantId: "coilette",
    basePower: 13,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.ROBOT, CHARACTER_TAGS.CRIMINAL, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.ARROGANT],
    flavor: "Excellent at bending rules, laws, and occasionally metal."
  },

  {
    id: "professor_farnsworth",
    characterKey: "farnsworth",
    variantKey: "default",
    displayName: "Professor Hubert J. Farnsworth",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.ELDERLY, CHARACTER_TAGS.CURIOUS],
    flavor: "Invents solutions faster than he understands the problems."
  },

  {
    id: "amy_wong",
    characterKey: "amy_wong",
    variantKey: "default",
    displayName: "Amy Wong",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 2,
    basePower: 11,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.SOCIAL],
    flavor: "Technically skilled, socially connected, and occasionally distracted."
  },

  {
    id: "hermes_conrad",
    characterKey: "hermes_conrad",
    variantKey: "default",
    displayName: "Hermes Conrad",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 2,
    mythicVariantId: "limbo_hermes",
    basePower: 11,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Keeps everything running through paperwork, stress, and Olympic-level bureaucracy."
  },

  {
    id: "zoidberg",
    characterKey: "zoidberg",
    variantKey: "default",
    displayName: "Dr. John A. Zoidberg",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 2,
    mythicVariantId: "successful_zoidberg",
    basePower: 10,
    preferredJob: JOB_TYPES.MEDICAL,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.DOCTOR, CHARACTER_TAGS.OUTCAST],
    flavor: "A doctor with questionable credentials and undeniable enthusiasm."
  },

  {
    id: "nibbler",
    characterKey: "nibbler",
    variantKey: "default",
    displayName: "Nibbler",
    subtitle: "",
    franchise: "Futurama",
    rarity: "ultra",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.ALIEN_UNKNOWN, CHARACTER_TAGS.MAGICAL, CHARACTER_TAGS.CUTE],
    flavor: "Appears harmless. Is absolutely not harmless."
  }


], "assets/characters/futurama");