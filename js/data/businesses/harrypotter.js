// ==========================================================
// Harry Potter Businesses
// ==========================================================

const HARRY_POTTER_BUSINESSES = [

  // ========================================================
  // Tier 1 Businesses
  // ========================================================

  {
    id: "ollivanders",
    businessKey: "ollivanders",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Ollivanders",

    imagePath: "assets/businesses/harrypotter/ollivanders.png",
    imageAlt: "Ollivanders",

    tier: 2,
    jobType: JOB_TYPES.RETAIL,
    tags: [
      BUSINESS_TAGS.SPECIALIZED,
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.REGULATED
    ],

    description: "A legendary wand shop where precision matters and the merchandise has opinions.",

    unlockCost: 1000,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "flourish_and_blotts",
    businessKey: "flourish_and_blotts",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Flourish and Blotts",

    imagePath: "assets/businesses/harrypotter/flourish-and-blotts.png",
    imageAlt: "Flourish and Blotts",

    tier: 1,
    jobType: JOB_TYPES.RETAIL,
    tags: [
      BUSINESS_TAGS.VOLUME,
      BUSINESS_TAGS.REGULATED,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A busy magical bookstore. Good for students, scholars, and anyone willing to shelve books that bite.",

    unlockCost: 450,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "the_leaky_cauldron",
    businessKey: "the_leaky_cauldron",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "The Leaky Cauldron",

    imagePath: "assets/businesses/harrypotter/the-leaky-cauldron.png",
    imageAlt: "The Leaky Cauldron",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: [
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.COMFORT,
      BUSINESS_TAGS.NETWORKED
    ],

    description: "A hidden wizarding pub and inn. Humble, useful, and connected to far more than it seems.",

    unlockCost: 300,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  // ========================================================
  // Tier 2 Businesses
  // ========================================================

  {
    id: "weasleys_wizard_wheezes",
    businessKey: "weasleys_wizard_wheezes",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Weasleys' Wizard Wheezes",

    imagePath: "assets/businesses/harrypotter/weasleys-wizard-wheezes.png",
    imageAlt: "Weasleys' Wizard Wheezes",

    tier: 2,
    jobType: JOB_TYPES.ENTERTAINMENT,
    tags: [
      BUSINESS_TAGS.MORALE,
      BUSINESS_TAGS.RISKY,
      BUSINESS_TAGS.SYNERGISTIC
    ],

    description: "A joke shop powered by chaos, creativity, and products that should probably come with warning labels.",

    unlockCost: 1200,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "honeydukes",
    businessKey: "honeydukes",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Honeydukes",

    imagePath: "assets/businesses/harrypotter/honeydukes.png",
    imageAlt: "Honeydukes",

    tier: 2,
    jobType: JOB_TYPES.RETAIL,
    tags: [
      BUSINESS_TAGS.MORALE,
      BUSINESS_TAGS.COMFORT,
      BUSINESS_TAGS.VOLUME
    ],

    description: "A beloved sweet shop with high morale output and dangerous levels of sugar-based productivity.",

    unlockCost: 1400,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "the_three_broomsticks",
    businessKey: "the_three_broomsticks",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "The Three Broomsticks",

    imagePath: "assets/businesses/harrypotter/the-three-broomsticks.png",
    imageAlt: "The Three Broomsticks",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: [
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.COMFORT,
      BUSINESS_TAGS.PRESTIGE
    ],

    description: "A famous Hogsmeade tavern. Social, welcoming, and much more pleasant than most magical workplaces.",

    unlockCost: 1600,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "hogs_head",
    businessKey: "hogs_head",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "The Hog's Head",

    imagePath: "assets/businesses/harrypotter/hogs-head.png",
    imageAlt: "The Hog's Head",

    tier: 2,
    jobType: JOB_TYPES.SERVICE,
    tags: [
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.SHADY,
      BUSINESS_TAGS.NOTORIOUS
    ],

    description: "A rougher Hogsmeade tavern. Good for secret meetings, outcasts, and people who dislike clean glasses.",

    unlockCost: 1800,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "borgin_and_burkes",
    businessKey: "borgin_and_burkes",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Borgin and Burkes",

    imagePath: "assets/businesses/harrypotter/borgin-and-burkes.png",
    imageAlt: "Borgin and Burkes",

    tier: 2,
    jobType: JOB_TYPES.COVERT,
    tags: [
      BUSINESS_TAGS.SHADY,
      BUSINESS_TAGS.DANGEROUS,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A Knockturn Alley shop for cursed objects and worse decisions. Rogues feel right at home.",

    unlockCost: 2000,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "hogwarts_express",
    businessKey: "hogwarts_express",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Hogwarts Express",

    imagePath: "assets/businesses/harrypotter/hogwarts-express.png",
    imageAlt: "Hogwarts Express",

    tier: 2,
    jobType: JOB_TYPES.LOGISTICS,
    tags: [
      BUSINESS_TAGS.NETWORKED,
      BUSINESS_TAGS.SOCIAL,
      BUSINESS_TAGS.PRESTIGE
    ],

    description: "A magical railway with one destination and a surprising amount of emotional importance.",

    unlockCost: 2200,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  // ========================================================
  // Tier 3 Businesses
  // ========================================================

  {
    id: "daily_prophet",
    businessKey: "daily_prophet",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Daily Prophet",

    imagePath: "assets/businesses/harrypotter/daily-prophet.png",
    imageAlt: "Daily Prophet",

    tier: 3,
    jobType: JOB_TYPES.MEDIA,
tags: [
  BUSINESS_TAGS.NETWORKED,
  BUSINESS_TAGS.NOTORIOUS,
  BUSINESS_TAGS.SHADY
],
    description: "A powerful media operation where truth, influence, and public panic are all part of the business model.",

    unlockCost: 2600,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "gringotts_wizarding_bank",
    businessKey: "gringotts_wizarding_bank",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Gringotts Wizarding Bank",

    imagePath: "assets/businesses/harrypotter/gringotts-wizarding-bank.png",
    imageAlt: "Gringotts Wizarding Bank",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [
      BUSINESS_TAGS.SECURE,
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "A heavily guarded financial institution. Extremely profitable, deeply structured, and not known for warmth.",

    unlockCost: 2800,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "st_mungos_hospital",
    businessKey: "st_mungos_hospital",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "St. Mungo's Hospital",

    imagePath: "assets/businesses/harrypotter/st-mungos-hospital.png",
    imageAlt: "St. Mungo's Hospital",

    tier: 3,
    jobType: JOB_TYPES.MEDICAL,
    tags: [
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.SPECIALIZED,
      BUSINESS_TAGS.MORALE
    ],

    description: "A magical hospital for injuries that ordinary medicine would rather not discuss.",

    unlockCost: 3000,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "durmstrang_institute",
    businessKey: "durmstrang_institute",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Durmstrang Institute",

    imagePath: "assets/businesses/harrypotter/durmstrang-institute.png",
    imageAlt: "Durmstrang Institute",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
tags: [
  BUSINESS_TAGS.INSTITUTIONAL,
  BUSINESS_TAGS.DISCIPLINED,
  BUSINESS_TAGS.DANGEROUS,
  BUSINESS_TAGS.SPECIALIZED
],
    description: "A severe magical school with a colder reputation and a higher tolerance for dangerous training.",

    unlockCost: 3200,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "beauxbatons_academy",
    businessKey: "beauxbatons_academy",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Beauxbatons Academy",

    imagePath: "assets/businesses/harrypotter/beauxbatons-academy.png",
    imageAlt: "Beauxbatons Academy",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
 tags: [
  BUSINESS_TAGS.INSTITUTIONAL,
  BUSINESS_TAGS.PRESTIGE,
  BUSINESS_TAGS.COMFORT,
  BUSINESS_TAGS.SPECIALIZED
],

    description: "An elegant magical academy where refinement, prestige, and performance all matter.",

    unlockCost: 3400,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "azkaban",
    businessKey: "azkaban",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Azkaban",

    imagePath: "assets/businesses/harrypotter/azkaban.png",
    imageAlt: "Azkaban",

    tier: 3,
    jobType: JOB_TYPES.ENFORCEMENT,
    tags: [
      BUSINESS_TAGS.SECURE,
      BUSINESS_TAGS.DANGEROUS,
      BUSINESS_TAGS.NOTORIOUS,
      BUSINESS_TAGS.HIERARCHICAL
    ],

    description: "A grim magical prison where security is the product and morale is someone else’s problem."

    unlockCost: 3600,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "hogwarts",
    businessKey: "hogwarts",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Hogwarts School of Witchcraft and Wizardry",

    imagePath: "assets/businesses/harrypotter/hogwarts.png",
    imageAlt: "Hogwarts School of Witchcraft and Wizardry",

    tier: 3,
    jobType: JOB_TYPES.RESEARCH,
    tags: [
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.PRESTIGE,
      BUSINESS_TAGS.SYNERGISTIC,
      BUSINESS_TAGS.SPECIALIZED
    ],

    description: "The center of the wizarding world’s most important education, mysteries, disasters, and staffing problems.",

    unlockCost: 3800,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  },

  {
    id: "ministry_of_magic",
    businessKey: "ministry_of_magic",
    variantKey: "default",
    franchise: "Harry Potter",
    name: "Ministry of Magic",

    imagePath: "assets/businesses/harrypotter/ministry-of-magic.png",
    imageAlt: "Ministry of Magic",

    tier: 3,
    jobType: JOB_TYPES.CORPORATE,
    tags: [
      BUSINESS_TAGS.INSTITUTIONAL,
      BUSINESS_TAGS.HIERARCHICAL,
      BUSINESS_TAGS.REGULATED,
      BUSINESS_TAGS.PRESTIGE
    ],

    description: "A vast magical bureaucracy powered by procedure, secrecy, politics, and paperwork that occasionally bites back.",

    unlockCost: 4000,
    unlockedByDefault: false,

    upgrades: {
      capacity: {
        label: "Capacity Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_CAPACITY_LEVEL
      },
      efficiency: {
        label: "Efficiency Upgrade",
        maxLevel: CONFIG.UPGRADES.MAX_EFFICIENCY_LEVEL
      },
      advertising: {
        label: "Advertising Campaign"
      }
    }
  }
];