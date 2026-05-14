// ==========================================================
// Stranger Things Characters
// ----------------------------------------------------------
// Franchise character file for All Hands On Deck.
// ==========================================================

const STRANGER_THINGS_CHARACTERS = applyCharacterImageDefaults([

  // ========================================================
  // Ultra-Rare / Stranger Things Stars
  // ========================================================

  {
    id: "eleven",
    characterKey: "eleven",
    variantKey: "stranger_things",
    displayName: "Eleven",
    subtitle: "Jane Hopper",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 3,
    basePower: 15,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SURVIVOR],
    flavor: "Telekinetic, loyal, and very bad at pretending this is a normal workplace."
  },

  {
    id: "jim_hopper",
    characterKey: "jim_hopper",
    variantKey: "stranger_things",
    displayName: "Jim Hopper",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 3,
    basePower: 14,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.HOTHEADED],
    flavor: "A gruff local chief with protective instincts and very little interest in procedure."
  },

  {
    id: "steve_harrington",
    characterKey: "steve_harrington",
    variantKey: "stranger_things",
    displayName: "Steve Harrington",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.BRAVE],
    flavor: "Former popular kid, current emergency babysitter, and unexpectedly strong team leader."
  },

  {
    id: "dustin_henderson",
    characterKey: "dustin_henderson",
    variantKey: "stranger_things",
    displayName: "Dustin Henderson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 3,
    basePower: 13,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SPECIALIST, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.CHARISMATIC],
    flavor: "A walking research department with better radio discipline than most adults."
  },

  {
    id: "mike_wheeler",
    characterKey: "mike_wheeler",
    variantKey: "stranger_things",
    displayName: "Mike Wheeler",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 12,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.LEADER],
    flavor: "Keeps the party together, even when the campaign has clearly gone off the rails."
  },

  {
    id: "will_byers",
    characterKey: "will_byers",
    variantKey: "stranger_things",
    displayName: "Will Byers",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 11,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.SURVIVOR, CHARACTER_TAGS.ANXIOUS],
    flavor: "Sensitive, resilient, and unfortunately very qualified in Upside Down threat detection."
  },

  {
    id: "lucas_sinclair",
    characterKey: "lucas_sinclair",
    variantKey: "stranger_things",
    displayName: "Lucas Sinclair",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 12,
    preferredJob: JOB_TYPES.HEROIC,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.BRAVE],
    flavor: "Practical, brave, and usually the first person to ask the question everyone else skipped."
  },

  {
    id: "max_mayfield",
    characterKey: "max_mayfield",
    variantKey: "stranger_things",
    displayName: "Max Mayfield",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 12,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.HERO],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.HOTHEADED],
    flavor: "Fast, fearless, sarcastic, and not interested in being managed."
  },

  {
    id: "nancy_wheeler",
    characterKey: "nancy_wheeler",
    variantKey: "stranger_things",
    displayName: "Nancy Wheeler",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 13,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Investigates workplace hazards with a notebook, a shotgun, and zero patience."
  },

  {
    id: "jonathan_byers",
    characterKey: "jonathan_byers",
    variantKey: "stranger_things",
    displayName: "Jonathan Byers",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 11,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.ANXIOUS],
    flavor: "Quiet, observant, and more useful in a crisis than his posture suggests."
  },

  {
    id: "robin_buckley",
    characterKey: "robin_buckley",
    variantKey: "stranger_things",
    displayName: "Robin Buckley",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 12,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.MUSICIAN],
    flavor: "Fast-talking, code-cracking, and somehow both nervous and extremely competent."
  },

  {
    id: "eddie_munson",
    characterKey: "eddie_munson",
    variantKey: "stranger_things",
    displayName: "Eddie Munson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 2,
    basePower: 12,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.HERO, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MUSICIAN, CHARACTER_TAGS.OUTCAST, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Dungeon Master, metalhead, and exactly the kind of employee who makes morale unpredictable."
  },

  {
    id: "vecna_henry_creel",
    characterKey: "vecna_henry_creel",
    variantKey: "stranger_things",
    displayName: "Vecna",
    subtitle: "Henry Creel",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 3,
    basePower: 15,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.VILLAIN, CHARACTER_TAGS.DANGEROUS, CHARACTER_TAGS.SUPERNATURAL],
    flavor: "A toxic workplace presence in the most literal possible sense."
  },

  {
    id: "joyce_byers",
    characterKey: "joyce_byers",
    variantKey: "stranger_things",
    displayName: "Joyce Byers",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "ultra",
    prestige: 1,
    basePower: 11,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.HERO, TRAITS.MORAL_CODE, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.BRAVE, CHARACTER_TAGS.ANXIOUS],
    flavor: "Will follow the evidence through walls, phones, lights, magnets, and management objections."
  },

  // ========================================================
  // Rare / Major Supporting Characters
  // ========================================================

  {
    id: "billy_hargrove",
    characterKey: "billy_hargrove",
    variantKey: "stranger_things",
    displayName: "Billy Hargrove",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.HOTHEADED, CHARACTER_TAGS.DANGEROUS],
    flavor: "High output, high risk, and the reason morale systems need warning labels."
  },

  {
    id: "dr_martin_brenner",
    characterKey: "martin_brenner",
    variantKey: "stranger_things",
    displayName: "Dr. Martin Brenner",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 12,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.VILLAIN],
    flavor: "A brilliant administrator of terrible ideas and worse consent forms."
  },

  {
    id: "murray_bauman",
    characterKey: "murray_bauman",
    variantKey: "stranger_things",
    displayName: "Murray Bauman",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 11,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.HERO, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.DETECTIVE, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.CURIOUS],
    flavor: "Paranoid, prepared, and occasionally the only person in the room making sense."
  },

  {
    id: "erica_sinclair",
    characterKey: "erica_sinclair",
    variantKey: "stranger_things",
    displayName: "Erica Sinclair",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.SUPPORT, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.HOTHEADED],
    flavor: "Aggressively confident and somehow more intimidating than most adults."
  },

  {
    id: "bob_newby",
    characterKey: "bob_newby",
    variantKey: "stranger_things",
    displayName: "Bob Newby",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.HERO, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.NERD, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.BRAVE],
    flavor: "A genuinely good worker with heroic instincts and deeply unlucky timing."
  },

  {
    id: "argyle",
    characterKey: "argyle",
    variantKey: "stranger_things",
    displayName: "Argyle",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.CHARISMATIC, CHARACTER_TAGS.DRIVER],
    flavor: "Surprisingly clutch transportation support powered almost entirely by vibes."
  },

  {
    id: "dr_sam_owens",
    characterKey: "sam_owens",
    variantKey: "stranger_things",
    displayName: "Dr. Sam Owens",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.LAWFUL],
    flavor: "One of the few government scientists actively trying to improve the situation."
  },

  {
    id: "alexei",
    characterKey: "alexei",
    variantKey: "stranger_things",
    displayName: "Alexei",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SCIENTIST, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.OUTCAST],
    flavor: "Scientist, reluctant defector, and morale boost provider via cherry slushies."
  },

  {
    id: "chrissy_cunningham",
    characterKey: "chrissy_cunningham",
    variantKey: "stranger_things",
    displayName: "Chrissy Cunningham",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.POPULAR],
    flavor: "A surprisingly sympathetic popular girl with very unfortunate timing."
  },

  {
    id: "jason_carver",
    characterKey: "jason_carver",
    variantKey: "stranger_things",
    displayName: "Jason Carver",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.LEADER, CHARACTER_TAGS.HOTHEADED],
    flavor: "Natural leadership skills tragically paired with absolute certainty."
  },

  {
    id: "mr_clarke",
    characterKey: "mr_clarke",
    variantKey: "stranger_things",
    displayName: "Mr. Clarke",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.TEACHER, CHARACTER_TAGS.NERD, CHARACTER_TAGS.CURIOUS],
    flavor: "The science teacher every impossible crisis quietly depends on."
  },

  {
    id: "dart",
    characterKey: "dart",
    variantKey: "stranger_things",
    displayName: "Dart",
    subtitle: "D’Artagnan",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MONSTER, CHARACTER_TAGS.CREATURE, CHARACTER_TAGS.DANGEROUS, CHARACTER_TAGS.CHAOTIC],
    flavor: "A deeply questionable pet ownership decision."
  },

  {
    id: "karen_wheeler",
    characterKey: "karen_wheeler",
    variantKey: "stranger_things",
    displayName: "Karen Wheeler",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.COMFORT, CHARACTER_TAGS.CHARISMATIC],
    flavor: "One of the few adults attempting to maintain normal suburban energy."
  },

  {
    id: "benny_hammond",
    characterKey: "benny_hammond",
    variantKey: "stranger_things",
    displayName: "Benny Hammond",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT, TRAITS.MORAL_CODE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHEF, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.KIND],
    flavor: "A genuinely decent person, which is usually dangerous in Hawkins."
  },

  {
    id: "barb_holland",
    characterKey: "barb_holland",
    variantKey: "stranger_things",
    displayName: "Barb Holland",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.NERD, CHARACTER_TAGS.LOYAL],
    flavor: "Careful, loyal, and proof that Hawkins punishes good judgment too."
  },

  {
    id: "enzo_antonov",
    characterKey: "enzo_antonov",
    variantKey: "stranger_things",
    displayName: "Dmitri Antonov",
    subtitle: "Enzo",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.BRAVE],
    flavor: "A prison guard with better morals than his employer."
  },

  {
    id: "yuri_ismaylov",
    characterKey: "yuri_ismaylov",
    variantKey: "stranger_things",
    displayName: "Yuri Ismaylov",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 8,
    preferredJob: JOB_TYPES.LOGISTICS,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.PILOT, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.CHAOTIC],
    flavor: "Smuggler pilot energy with wildly inconsistent loyalty settings."
  },

  {
    id: "kali_eight",
    characterKey: "kali_eight",
    variantKey: "stranger_things",
    displayName: "Kali",
    subtitle: "Eight",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 11,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SURVIVOR, CHARACTER_TAGS.OUTCAST, CHARACTER_TAGS.DANGEROUS],
    flavor: "A psychic runaway with strong anti-authority workplace values."
  },

  {
    id: "victor_creel",
    characterKey: "victor_creel",
    variantKey: "stranger_things",
    displayName: "Victor Creel",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.SURVIVOR, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.OUTCAST],
    flavor: "A traumatized survivor carrying decades of supernatural damage."
  },

  {
    id: "grigori",
    characterKey: "grigori",
    variantKey: "stranger_things",
    displayName: "Grigori",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 10,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.DANGEROUS, CHARACTER_TAGS.DISCIPLINED],
    flavor: "A terrifying Soviet enforcer who treats pursuit like cardio."
  },

  {
    id: "connie_frazier",
    characterKey: "connie_frazier",
    variantKey: "stranger_things",
    displayName: "Connie Frazier",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "rare",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.AGENT, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.VILLAIN],
    flavor: "Government cleaner energy with deeply concerning professionalism."
  },

  // ========================================================
  // Uncommon / Deep Cuts / Supporting Cast
  // ========================================================

  {
    id: "tommy_hagan",
    characterKey: "tommy_hagan",
    variantKey: "stranger_things",
    displayName: "Tommy Hagan",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.BULLY, CHARACTER_TAGS.POPULAR],
    flavor: "A classic high-school antagonist with strong background henchman energy."
  },

  {
    id: "chief_powell",
    characterKey: "chief_powell",
    variantKey: "stranger_things",
    displayName: "Chief Powell",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.MANAGER],
    flavor: "A dependable local officer doing his best in an impossible town."
  },

  {
    id: "mayor_larry_kline",
    characterKey: "mayor_larry_kline",
    variantKey: "stranger_things",
    displayName: "Mayor Larry Kline",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.POLITICIAN, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.COWARDLY],
    flavor: "A politician optimized entirely for self-preservation."
  },

  {
    id: "officer_callahan",
    characterKey: "officer_callahan",
    variantKey: "stranger_things",
    displayName: "Officer Callahan",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.ANXIOUS],
    flavor: "A local deputy discovering that Hawkins is significantly above his pay grade."
  },

  {
    id: "vickie",
    characterKey: "vickie",
    variantKey: "stranger_things",
    displayName: "Vickie",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.MUSICIAN, CHARACTER_TAGS.KIND],
    flavor: "Band geek energy with just enough awkward sincerity to keep things interesting."
  },

  {
    id: "heather_holloway",
    characterKey: "heather_holloway",
    variantKey: "stranger_things",
    displayName: "Heather Holloway",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.POPULAR, CHARACTER_TAGS.SURVIVOR],
    flavor: "A normal summer employee until Hawkins inevitably became horrifying again."
  },

  {
    id: "flo",
    characterKey: "flo",
    variantKey: "stranger_things",
    displayName: "Flo",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.LOYAL, CHARACTER_TAGS.KIND],
    flavor: "The reliable front-desk energy every chaotic police station needs."
  },

  {
    id: "ted_wheeler",
    characterKey: "ted_wheeler",
    variantKey: "stranger_things",
    displayName: "Ted Wheeler",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.LAZY, CHARACTER_TAGS.COMFORT],
    flavor: "A suburban father somehow insulated from nearly every supernatural event."
  },

  {
    id: "claudia_henderson",
    characterKey: "claudia_henderson",
    variantKey: "stranger_things",
    displayName: "Claudia Henderson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.KIND, CHARACTER_TAGS.ANXIOUS],
    flavor: "Supportive parent energy mixed with complete unawareness of the apocalypse."
  },

  {
    id: "sue_sinclair",
    characterKey: "sue_sinclair",
    variantKey: "stranger_things",
    displayName: "Sue Sinclair",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.KIND, CHARACTER_TAGS.LAWFUL],
    flavor: "One of the few Hawkins parents maintaining competent household operations."
  },

  {
    id: "charles_sinclair",
    characterKey: "charles_sinclair",
    variantKey: "stranger_things",
    displayName: "Charles Sinclair",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Quiet parental stability in a town with almost none."
  },

  {
    id: "neil_hargrove",
    characterKey: "neil_hargrove",
    variantKey: "stranger_things",
    displayName: "Neil Hargrove",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.HOTHEADED, CHARACTER_TAGS.VILLAIN],
    flavor: "A deeply unpleasant authority figure with long-term morale penalties."
  },

  {
    id: "susan_hargrove",
    characterKey: "susan_hargrove",
    variantKey: "stranger_things",
    displayName: "Susan Hargrove",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.KIND],
    flavor: "Trying her best in a household built entirely from bad decisions."
  },

  {
    id: "lonnie_byers",
    characterKey: "lonnie_byers",
    variantKey: "stranger_things",
    displayName: "Lonnie Byers",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.GREEDY, CHARACTER_TAGS.COWARDLY],
    flavor: "A father whose greatest survival skill is avoiding responsibility."
  },

  {
    id: "patrick_mckinney",
    characterKey: "patrick_mckinney",
    variantKey: "stranger_things",
    displayName: "Patrick McKinney",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.ATHLETE, CHARACTER_TAGS.SURVIVOR],
    flavor: "Another Hawkins athlete discovering that sports are not the town’s biggest danger."
  },

  {
    id: "fred_benson",
    characterKey: "fred_benson",
    variantKey: "stranger_things",
    displayName: "Fred Benson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.CURIOUS],
    flavor: "A student reporter who accidentally found a much bigger story."
  },

  {
    id: "angela",
    characterKey: "angela",
    variantKey: "stranger_things",
    displayName: "Angela",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.BULLY, CHARACTER_TAGS.POPULAR],
    flavor: "California bully energy with catastrophic target selection."
  },

  {
    id: "troy_walsh",
    characterKey: "troy_walsh",
    variantKey: "stranger_things",
    displayName: "Troy Walsh",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.BULLY, CHARACTER_TAGS.COWARDLY],
    flavor: "Classic small-town bully with dramatically misplaced confidence."
  },

  {
    id: "james_dante",
    characterKey: "james_dante",
    variantKey: "stranger_things",
    displayName: "James Dante",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.BULLY, CHARACTER_TAGS.MISCHIEVOUS],
    flavor: "A supporting bully whose survival instinct activates immediately under pressure."
  },

  {
    id: "bruce_lowe",
    characterKey: "bruce_lowe",
    variantKey: "stranger_things",
    displayName: "Bruce Lowe",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.ARROGANT, CHARACTER_TAGS.COWARDLY],
    flavor: "The exact coworker nobody wants assigned to their project."
  },

  {
    id: "tom_holloway",
    characterKey: "tom_holloway",
    variantKey: "stranger_things",
    displayName: "Tom Holloway",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 6,
    preferredJob: JOB_TYPES.MEDIA,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.JOURNALIST, CHARACTER_TAGS.MANAGER, CHARACTER_TAGS.ARROGANT],
    flavor: "A newspaper editor somehow making local journalism feel even more hostile."
  },

  {
    id: "keith",
    characterKey: "keith",
    variantKey: "stranger_things",
    displayName: "Keith",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.NERD, CHARACTER_TAGS.AWKWARD, CHARACTER_TAGS.GAMER],
    flavor: "The awkward arcade and video store employee every small town somehow has."
  },

  {
    id: "reefer_rick",
    characterKey: "reefer_rick",
    variantKey: "stranger_things",
    displayName: "Reefer Rick",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OUTCAST, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.SHADY],
    flavor: "Legendary local reputation despite barely being around to defend it."
  },

  {
    id: "tammy_thompson",
    characterKey: "tammy_thompson",
    variantKey: "stranger_things",
    displayName: "Tammy Thompson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.MUSICIAN, CHARACTER_TAGS.POPULAR],
    flavor: "Band singer, crush source, and proof that popularity does not guarantee pitch control."
  },

  {
    id: "principal_higgins",
    characterKey: "principal_higgins",
    variantKey: "stranger_things",
    displayName: "Principal Higgins",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.TEACHER, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.MANAGER],
    flavor: "A school administrator completely unequipped for dimensional horror."
  },

  {
    id: "lt_colonel_sullivan",
    characterKey: "lt_colonel_sullivan",
    variantKey: "stranger_things",
    displayName: "Lt. Colonel Sullivan",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 9,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.HOTHEADED],
    flavor: "A military operator whose confidence consistently exceeds his information."
  },

  {
    id: "virginia_creel",
    characterKey: "virginia_creel",
    variantKey: "stranger_things",
    displayName: "Virginia Creel",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.SURVIVOR],
    flavor: "A mother trapped in one of Hawkins’ earliest supernatural tragedies."
  },

  {
    id: "young_henry_creel",
    characterKey: "young_henry_creel",
    variantKey: "stranger_things",
    displayName: "Young Henry Creel",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 3,
    basePower: 10,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.ROGUE, TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.DANGEROUS],
    flavor: "A disturbingly powerful child with catastrophic views on humanity."
  },

  {
    id: "alice_creel",
    characterKey: "alice_creel",
    variantKey: "stranger_things",
    displayName: "Alice Creel",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 4,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.KIND],
    flavor: "One of the earliest innocent victims tied to Hawkins’ dark history."
  },

  {
    id: "holly_wheeler",
    characterKey: "holly_wheeler",
    variantKey: "stranger_things",
    displayName: "Holly Wheeler",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 3,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.FAMILY, CHARACTER_TAGS.KIND],
    flavor: "Still somehow calmer than the rest of the Wheeler household."
  },

  {
    id: "officer_stinson",
    characterKey: "officer_stinson",
    variantKey: "stranger_things",
    displayName: "Officer Stinson",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "One of the few Hawkins officers consistently doing the actual job."
  },

  {
    id: "doris_driscoll",
    characterKey: "doris_driscoll",
    variantKey: "stranger_things",
    displayName: "Doris Driscoll",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 5,
    preferredJob: JOB_TYPES.PRODUCTION,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.RURAL, CHARACTER_TAGS.ANXIOUS, CHARACTER_TAGS.SURVIVOR],
    flavor: "A sweet elderly resident whose fertilizer problem escalated dramatically."
  },

  {
    id: "jen",
    characterKey: "jen",
    variantKey: "stranger_things",
    displayName: "Jen",
    subtitle: "Mr. Clarke's Girlfriend",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 4,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.KIND, CHARACTER_TAGS.COMFORT, CHARACTER_TAGS.CHARISMATIC],
    flavor: "Accidentally interrupted one of the most important science explanations in Hawkins history."
  },

  {
    id: "agent_harmon",
    characterKey: "agent_harmon",
    variantKey: "stranger_things",
    displayName: "Agent Harmon",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.AGENT, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.BRAVE],
    flavor: "Federal agent support operating in a workplace with very low life expectancy."
  },

  {
    id: "agent_wallace",
    characterKey: "agent_wallace",
    variantKey: "stranger_things",
    displayName: "Agent Wallace",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.AGENT, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Another government operative discovering Hawkins assignments are never routine."
  },

  {
    id: "gareth",
    characterKey: "gareth",
    variantKey: "stranger_things",
    displayName: "Gareth",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.MUSICIAN, CHARACTER_TAGS.NERD],
    flavor: "Hellfire Club member and backup provider of chaotic metalhead energy."
  },

  {
    id: "jeff",
    characterKey: "jeff",
    variantKey: "stranger_things",
    displayName: "Jeff",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.MUSICIAN, CHARACTER_TAGS.NERD],
    flavor: "Hellfire Club regular with strong supportive party-member energy."
  },

  {
    id: "two",
    characterKey: "two",
    variantKey: "stranger_things",
    displayName: "Two",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.SURVIVOR],
    flavor: "One of Brenner’s numbered children, remembered mostly through fragments and tragedy."
  },

  {
    id: "three",
    characterKey: "three",
    variantKey: "stranger_things",
    displayName: "Three",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.SURVIVOR],
    flavor: "Another Hawkins Lab child shaped by experiments nobody should have approved."
  },

  {
    id: "six",
    characterKey: "six",
    variantKey: "stranger_things",
    displayName: "Six",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.SURVIVOR],
    flavor: "A numbered Hawkins Lab subject tied to Brenner’s horrifying program."
  },

  {
    id: "ten",
    characterKey: "ten",
    variantKey: "stranger_things",
    displayName: "Ten",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 2,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.SURVIVOR],
    flavor: "One of the final numbered children still present during Hawkins Lab’s collapse."
  },

  {
    id: "thirteen",
    characterKey: "thirteen",
    variantKey: "stranger_things",
    displayName: "Thirteen",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 7,
    preferredJob: JOB_TYPES.RESEARCH,
    traits: [TRAITS.SPECIALIST],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.CHILD, CHARACTER_TAGS.SUPERNATURAL, CHARACTER_TAGS.SURVIVOR],
    flavor: "A barely documented Hawkins Lab subject with a résumé made entirely of red flags."
  },

  {
    id: "doug_teague",
    characterKey: "doug_teague",
    variantKey: "stranger_things",
    displayName: "Doug Teague",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.NERD, CHARACTER_TAGS.GAMER],
    flavor: "A background Hellfire Club member bringing extra dice and low-level party support."
  },

  {
    id: "ronnie_ecker",
    characterKey: "ronnie_ecker",
    variantKey: "stranger_things",
    displayName: "Ronnie Ecker",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENTERTAINMENT,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.NERD, CHARACTER_TAGS.GAMER],
    flavor: "A deep-bench Hellfire Club regular with dependable background support."
  },

  {
    id: "marissa",
    characterKey: "marissa",
    variantKey: "stranger_things",
    displayName: "Marissa",
    subtitle: "Hawkins Post Receptionist",
    franchise: "Stranger Things",
    rarity: "uncommon",
    prestige: 1,
    basePower: 4,
    preferredJob: JOB_TYPES.CORPORATE,
    traits: [TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.OFFICE_WORKER, CHARACTER_TAGS.KIND, CHARACTER_TAGS.LAWFUL],
    flavor: "One of the few Hawkins Post employees not actively making everything worse."
  },

  // ========================================================
  // Common / Cannon Fodder / Generic Units
  // ========================================================

  {
    id: "demogorgon",
    characterKey: "demogorgon",
    variantKey: "stranger_things",
    displayName: "Demogorgon",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 3,
    basePower: 8,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MONSTER, CHARACTER_TAGS.CREATURE, CHARACTER_TAGS.DANGEROUS, CHARACTER_TAGS.SUPERNATURAL],
    flavor: "An interdimensional predator with terrible customer service skills."
  },

  {
    id: "demodog",
    characterKey: "demodog",
    variantKey: "stranger_things",
    displayName: "Demodog",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 3,
    basePower: 7,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MONSTER, CHARACTER_TAGS.CREATURE, CHARACTER_TAGS.CHAOTIC, CHARACTER_TAGS.DANGEROUS],
    flavor: "Smaller, faster, and somehow even worse behaved."
  },

  {
    id: "demobat",
    characterKey: "demobat",
    variantKey: "stranger_things",
    displayName: "Demobat",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 2,
    basePower: 6,
    preferredJob: JOB_TYPES.COVERT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MONSTER, CHARACTER_TAGS.CREATURE, CHARACTER_TAGS.FLYING, CHARACTER_TAGS.CHAOTIC],
    flavor: "Flying nightmare fuel with extremely aggressive swarm behavior."
  },

  {
    id: "meat_flayer_creature",
    characterKey: "meat_flayer_creature",
    variantKey: "stranger_things",
    displayName: "Meat Flayer",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 2,
    basePower: 9,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.MONSTER, CHARACTER_TAGS.CREATURE, CHARACTER_TAGS.GROSS, CHARACTER_TAGS.DANGEROUS],
    flavor: "A horrifying flesh construct proving the Upside Down has no safety committee."
  },

  {
    id: "hawkins_student",
    characterKey: "hawkins_student",
    variantKey: "stranger_things",
    displayName: "Hawkins Student",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 1,
    basePower: 3,
    preferredJob: JOB_TYPES.SERVICE,
    traits: [TRAITS.CANNON_FODDER, TRAITS.SUPPORT],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.STUDENT, CHARACTER_TAGS.CURIOUS, CHARACTER_TAGS.SURVIVOR],
    flavor: "An average Hawkins teenager with statistically alarming survival odds."
  },

  {
    id: "russian_soldier",
    characterKey: "russian_soldier",
    variantKey: "stranger_things",
    displayName: "Russian Soldier",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.MILITARY, CHARACTER_TAGS.DISCIPLINED, CHARACTER_TAGS.LAWFUL],
    flavor: "Highly armed personnel dramatically unprepared for extradimensional biology."
  },

  {
    id: "hawkins_lab_guard",
    characterKey: "hawkins_lab_guard",
    variantKey: "stranger_things",
    displayName: "Hawkins Lab Guard",
    subtitle: "",
    franchise: "Stranger Things",
    rarity: "common",
    prestige: 1,
    basePower: 5,
    preferredJob: JOB_TYPES.ENFORCEMENT,
    traits: [TRAITS.CANNON_FODDER, TRAITS.ROGUE],
    tags: [CHARACTER_TAGS.HUMAN, CHARACTER_TAGS.GUARD, CHARACTER_TAGS.LAWFUL, CHARACTER_TAGS.DISCIPLINED],
    flavor: "Security staff employed at one of the worst workplaces in Hawkins."
  }

], "assets/characters/strangerthings");