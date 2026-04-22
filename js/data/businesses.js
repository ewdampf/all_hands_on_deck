// ==========================================================
// Global Business Registry
// ----------------------------------------------------------
// Defines all businesses currently available in the game.
//
// Each business should specify:
// - stable ID
// - name
// - tier
// - primary job type
// - business tags
// - unlock behavior
// - upgrade labels
//
// This file also performs validation so bad business data
// is caught immediately during load.
// ==========================================================


// ==========================================================
// Business definitions
// ==========================================================

const BUSINESSES = [
  {
    id: CONFIG.BUSINESS_IDS.MOISTURE_FARM,
    name: "Moisture Farm",

    tier: 1,
    jobType: JOB_TYPES.FARM,
    tags: ["dirty", "labor_heavy"],

    description: "Hot, dusty, and not exactly prestigious. A perfect place for bulk labor.",

    unlockCost: 0,
    unlockedByDefault: true,

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
    id: CONFIG.BUSINESS_IDS.CENTRAL_PERK,
    name: "Central Perk",

    tier: 1,
    jobType: JOB_TYPES.SERVICE,
    tags: ["social"],

    description: "A cozy coffee shop. Not the most profitable place, but people actually like working here.",

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
    id: CONFIG.BUSINESS_IDS.PLANET_EXPRESS,
    name: "Planet Express",

    tier: 2,
    jobType: JOB_TYPES.DELIVERY,
    tags: ["risky", "logistics"],

    description: "Fast-paced delivery work. Great for the right crew, disastrous for the wrong one.",

    unlockCost: 900,
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


// ==========================================================
// Validation helpers
// ==========================================================

function validateBusinesses(businessList) {
  const errors = [];
  const warnings = [];

  const seenIds = new Set();

  businessList.forEach((business, index) => {
    const label = `${business.name || "Unknown Business"} [index ${index}]`;

    // ------------------------------------------------------
    // Required fields
    // ------------------------------------------------------
    const requiredFields = [
      "id",
      "name",
      "tier",
      "jobType",
      "tags",
      "description",
      "unlockCost",
      "unlockedByDefault",
      "upgrades"
    ];

    requiredFields.forEach(field => {
      if (!(field in business)) {
        errors.push(`${label} is missing required field: ${field}`);
      }
    });

    // ------------------------------------------------------
    // Unique ID check
    // ------------------------------------------------------
    if (business.id) {
      if (seenIds.has(business.id)) {
        errors.push(`${label} has duplicate id: ${business.id}`);
      } else {
        seenIds.add(business.id);
      }
    }

    // ------------------------------------------------------
    // Basic type checks
    // ------------------------------------------------------
    if ("name" in business && typeof business.name !== "string") {
      errors.push(`${label} has non-string name.`);
    }

    if ("tier" in business && typeof business.tier !== "number") {
      errors.push(`${label} has non-numeric tier.`);
    }

    if ("jobType" in business && typeof business.jobType !== "string") {
      errors.push(`${label} has non-string jobType.`);
    }

    if ("tags" in business && !Array.isArray(business.tags)) {
      errors.push(`${label} has non-array tags field.`);
    }

    if ("description" in business && typeof business.description !== "string") {
      errors.push(`${label} has non-string description.`);
    }

    if ("unlockCost" in business && typeof business.unlockCost !== "number") {
      errors.push(`${label} has non-numeric unlockCost.`);
    }

    if ("unlockedByDefault" in business && typeof business.unlockedByDefault !== "boolean") {
      errors.push(`${label} has non-boolean unlockedByDefault.`);
    }

    // ------------------------------------------------------
    // Tier validity
    // ------------------------------------------------------
    if ("tier" in business && !CONFIG.BUSINESS_TIERS[business.tier]) {
      errors.push(`${label} references undefined tier: ${business.tier}`);
    }

    // ------------------------------------------------------
    // Tag validity
    // ------------------------------------------------------
    if (Array.isArray(business.tags)) {
      business.tags.forEach(tag => {
        if (!CONFIG.BUSINESS_TAG_RULES[tag]) {
          errors.push(`${label} references undefined business tag: ${tag}`);
        }
      });
    }

    // ------------------------------------------------------
    // Upgrade validation
    // ------------------------------------------------------
    if ("upgrades" in business) {
      const requiredUpgradeKeys = ["capacity", "efficiency", "advertising"];

      requiredUpgradeKeys.forEach(upgradeKey => {
        if (!(upgradeKey in business.upgrades)) {
          errors.push(`${label} is missing upgrade definition: ${upgradeKey}`);
        }
      });

      if (business.upgrades.capacity) {
        if (typeof business.upgrades.capacity.label !== "string") {
          errors.push(`${label} has invalid capacity upgrade label.`);
        }

        if (typeof business.upgrades.capacity.maxLevel !== "number") {
          errors.push(`${label} has invalid capacity maxLevel.`);
        }
      }

      if (business.upgrades.efficiency) {
        if (typeof business.upgrades.efficiency.label !== "string") {
          errors.push(`${label} has invalid efficiency upgrade label.`);
        }

        if (typeof business.upgrades.efficiency.maxLevel !== "number") {
          errors.push(`${label} has invalid efficiency maxLevel.`);
        }
      }

      if (business.upgrades.advertising) {
        if (typeof business.upgrades.advertising.label !== "string") {
          errors.push(`${label} has invalid advertising upgrade label.`);
        }
      }
    }

    // ------------------------------------------------------
    // Optional warnings
    // ------------------------------------------------------
    if (Array.isArray(business.tags) && business.tags.length === 0) {
      warnings.push(`${label} has no tags.`);
    }

    if ("unlockCost" in business && business.unlockCost < 0) {
      warnings.push(`${label} has negative unlockCost.`);
    }
  });

  return { errors, warnings };
}


// ==========================================================
// Run validation immediately on load
// ==========================================================

const BUSINESS_VALIDATION = validateBusinesses(BUSINESSES);

if (BUSINESS_VALIDATION.errors.length > 0) {
  console.error("Business validation failed:");
  BUSINESS_VALIDATION.errors.forEach(error => console.error(" - " + error));
} else {
  console.log(`Business validation passed: ${BUSINESSES.length} businesses loaded.`);
}

if (BUSINESS_VALIDATION.warnings.length > 0) {
  console.warn("Business validation warnings:");
  BUSINESS_VALIDATION.warnings.forEach(warning => console.warn(" - " + warning));
}