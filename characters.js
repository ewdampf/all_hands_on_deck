const CHARACTERS = [
  {
    id: "stormtrooper",
    name: "Stormtrooper",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 5,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.CANNON_FODDER],
    flavor: "Works better in formation than alone."
  },
  {
    id: "red_shirt",
    name: "Red Shirt",
    franchise: "Star Trek",
    rarity: "common",
    basePower: 4,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.CANNON_FODDER],
    flavor: "Eager, expendable, and not especially specialized."
  },
  {
    id: "colonial_marine",
    name: "Colonial Marine",
    franchise: "Aliens",
    rarity: "common",
    basePower: 5,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.CANNON_FODDER],
    flavor: "Reliable muscle for rough environments."
  },
  {
    id: "battle_droid",
    name: "Battle Droid",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 4,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.CANNON_FODDER],
    flavor: "Not bright, but there are always more of them."
  },
  {
    id: "ork_grunt",
    name: "Ork Grunt",
    franchise: "Warhammer 40,000",
    rarity: "common",
    basePower: 6,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.CANNON_FODDER],
    flavor: "Thrives in loud, chaotic group labor."
  },
  {
    id: "moisture_farmer",
    name: "Moisture Farmer",
    franchise: "Star Wars",
    rarity: "common",
    basePower: 6,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.LABORER],
    flavor: "Steady, practical, and built for desert work."
  },
  {
    id: "shire_farmer",
    name: "Shire Farmer",
    franchise: "The Lord of the Rings",
    rarity: "common",
    basePower: 6,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.LABORER],
    flavor: "Would rather be gardening, but still gets results."
  },
  {
    id: "jawas",
    name: "Jawas",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.SPECIALIST],
    flavor: "Surprisingly efficient in dusty, improvised conditions."
  },
  {
    id: "samwise_gamgee",
    name: "Samwise Gamgee",
    franchise: "The Lord of the Rings",
    rarity: "rare",
    basePower: 10,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.SUPPORT],
    flavor: "Raises spirits and gets the work done."
  },
  {
    id: "chewbacca",
    name: "Chewbacca",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.SUPPORT],
    flavor: "Strong, loyal, and extremely effective when properly placed."
  },
  {
    id: "han_solo",
    name: "Han Solo",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.ROGUE],
    flavor: "Thrives in fast-moving, lightly supervised work."
  },
  {
    id: "boba_fett",
    name: "Boba Fett",
    franchise: "Star Wars",
    rarity: "rare",
    basePower: 12,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.ROGUE],
    flavor: "Highly effective, not always great for team morale."
  },
  {
    id: "mal_reynolds",
    name: "Mal Reynolds",
    franchise: "Firefly",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.ROGUE],
    flavor: "Works best when rules are treated as optional."
  },
  {
    id: "fry",
    name: "Fry",
    franchise: "Futurama",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.LABORER],
    flavor: "Not brilliant, but surprisingly durable in bad plans."
  },
  {
    id: "leela",
    name: "Leela",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.HERO, CONFIG.TRAITS.SUPPORT],
    flavor: "Capable leadership with low tolerance for nonsense."
  },
  {
    id: "bender",
    name: "Bender",
    franchise: "Futurama",
    rarity: "rare",
    basePower: 12,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.ROGUE],
    flavor: "Productive, chaotic, and deeply unreliable in principle."
  },
  {
    id: "c3po",
    name: "C-3PO",
    franchise: "Star Wars",
    rarity: "uncommon",
    basePower: 7,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.SUPPORT],
    flavor: "Polite, anxious, and organized under pressure."
  },
  {
    id: "alfred",
    name: "Alfred Pennyworth",
    franchise: "Batman",
    rarity: "rare",
    basePower: 10,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.SUPPORT],
    flavor: "Keeps everything dignified and functioning."
  },
  {
    id: "gunther",
    name: "Gunther",
    franchise: "Friends",
    rarity: "uncommon",
    basePower: 8,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.LABORER],
    flavor: "A natural fit for cafe work and quietly suffering through it."
  },
  {
    id: "monica_geller",
    name: "Monica Geller",
    franchise: "Friends",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.SPECIALIST],
    flavor: "Hyper-competent and not interested in sloppy management."
  },
  {
    id: "data",
    name: "Data",
    franchise: "Star Trek",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.SPECIALIST, CONFIG.TRAITS.SUPPORT],
    flavor: "Exceptionally skilled and endlessly adaptable."
  },
  {
    id: "luke_skywalker",
    name: "Luke Skywalker",
    franchise: "Star Wars",
    rarity: "ultra",
    basePower: 14,
    preferredJob: CONFIG.JOB_TYPES.HEROIC,
    traits: [CONFIG.TRAITS.HERO, CONFIG.TRAITS.MORAL_CODE],
    flavor: "Prestige, talent, and a strong sense that some jobs are beneath him."
  },
  {
    id: "obi_wan_kenobi",
    name: "Obi-Wan Kenobi",
    franchise: "Star Wars",
    rarity: "ultra",
    basePower: 13,
    preferredJob: CONFIG.JOB_TYPES.HEROIC,
    traits: [CONFIG.TRAITS.HERO, CONFIG.TRAITS.MORAL_CODE, CONFIG.TRAITS.SUPPORT],
    flavor: "Provides leadership, prestige, and quiet judgment."
  },
  {
    id: "aragorn",
    name: "Aragorn",
    franchise: "The Lord of the Rings",
    rarity: "ultra",
    basePower: 14,
    preferredJob: CONFIG.JOB_TYPES.HEROIC,
    traits: [CONFIG.TRAITS.HERO, CONFIG.TRAITS.MORAL_CODE],
    flavor: "A kingly presence that improves the room just by arriving."
  },
  {
    id: "captain_america",
    name: "Captain America",
    franchise: "Marvel",
    rarity: "ultra",
    basePower: 14,
    preferredJob: CONFIG.JOB_TYPES.HEROIC,
    traits: [CONFIG.TRAITS.HERO, CONFIG.TRAITS.MORAL_CODE, CONFIG.TRAITS.SUPPORT],
    flavor: "Excellent for morale, terrible for shady operations."
  },
  {
    id: "spock",
    name: "Spock",
    franchise: "Star Trek",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.SERVICE,
    traits: [CONFIG.TRAITS.SPECIALIST],
    flavor: "Highly competent, though not especially entertaining."
  },
  {
    id: "ron_swanson",
    name: "Ron Swanson",
    franchise: "Parks and Recreation",
    rarity: "rare",
    basePower: 10,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.SPECIALIST],
    flavor: "Prefers practical work and minimal supervision."
  },
  {
    id: "dwight_schrute",
    name: "Dwight Schrute",
    franchise: "The Office",
    rarity: "rare",
    basePower: 10,
    preferredJob: CONFIG.JOB_TYPES.FARM,
    traits: [CONFIG.TRAITS.SPECIALIST],
    flavor: "Intense, efficient, and a little too enthusiastic."
  },
  {
    id: "wolverine",
    name: "Wolverine",
    franchise: "Marvel",
    rarity: "rare",
    basePower: 12,
    preferredJob: CONFIG.JOB_TYPES.HEROIC,
    traits: [CONFIG.TRAITS.HERO],
    flavor: "Gets results, but may not improve workplace harmony."
  },
  {
    id: "jack_sparrow",
    name: "Jack Sparrow",
    franchise: "Pirates of the Caribbean",
    rarity: "rare",
    basePower: 11,
    preferredJob: CONFIG.JOB_TYPES.DELIVERY,
    traits: [CONFIG.TRAITS.ROGUE],
    flavor: "Unpredictable, slippery, and somehow still profitable."
  }
];