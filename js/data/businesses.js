// ==========================================================
// Global Business Registry
// ----------------------------------------------------------
// Combines all franchise / category business files into one
// master business pool used by the game.
//
// Also performs validation so mistakes are caught early:
// - duplicate IDs
// - missing required fields
// - malformed tags
// - invalid tiers
// - invalid upgrade definitions
// - image field sanity checks
// ==========================================================


// ==========================================================
// Aggregate all business arrays
// ----------------------------------------------------------
// Add new business arrays here as you create them.
// ==========================================================

const BUSINESSES = [
  ...STAR_WARS_BUSINESSES,
  ...FUTURAMA_BUSINESSES,
  ...GENERIC_BUSINESSES
];


// ==========================================================
// Validation helpers
// ==========================================================

function validateBusinesses(businessList) {
  const errors = [];
  const warnings = [];

  const seenIds = new Set();
  const seenBusinessVariantPairs = new Set();

  businessList.forEach((business, index) => {
    const label = `${business.name || "Unknown Business"} [index ${index}]`;

    // ------------------------------------------------------
    // Required fields
    // ------------------------------------------------------
    const requiredFields = [
      "id",
      "businessKey",
      "variantKey",
      "franchise",
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
    // businessKey + variantKey uniqueness check
    // ------------------------------------------------------
    if (business.businessKey && business.variantKey) {
      const variantSignature = `${business.businessKey}::${business.variantKey}`;

      if (seenBusinessVariantPairs.has(variantSignature)) {
        errors.push(
          `${label} duplicates businessKey + variantKey combination: ${variantSignature}`
        );
      } else {
        seenBusinessVariantPairs.add(variantSignature);
      }
    }

    // ------------------------------------------------------
    // Basic type checks
    // ------------------------------------------------------
    if ("name" in business && typeof business.name !== "string") {
      errors.push(`${label} has non-string name.`);
    }

    if ("franchise" in business && typeof business.franchise !== "string") {
      errors.push(`${label} has non-string franchise.`);
    }

    if ("businessKey" in business && typeof business.businessKey !== "string") {
      errors.push(`${label} has non-string businessKey.`);
    }

    if ("variantKey" in business && typeof business.variantKey !== "string") {
      errors.push(`${label} has non-string variantKey.`);
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
    // Business tag validity
    // ------------------------------------------------------
    if (Array.isArray(business.tags)) {
      business.tags.forEach(tag => {
        if (!CONFIG.BUSINESS_TAG_RULES[tag]) {
          errors.push(`${label} references undefined business tag: ${tag}`);
        }
      });
    }

    // ------------------------------------------------------
    // Image field checks
    // ------------------------------------------------------
    if ("imagePath" in business && typeof business.imagePath !== "string") {
      errors.push(`${label} has non-string imagePath.`);
    }

    if ("imageAlt" in business && typeof business.imageAlt !== "string") {
      errors.push(`${label} has non-string imageAlt.`);
    }

    if (!("imagePath" in business)) {
      warnings.push(`${label} has no imagePath. Fallback image will be used.`);
    }

    if ("imageAlt" in business && !("imagePath" in business)) {
      warnings.push(`${label} has imageAlt but no imagePath.`);
    }

    // ------------------------------------------------------
    // Upgrade validation
    // ------------------------------------------------------
    if ("upgrades" in business) {
      if (typeof business.upgrades !== "object" || business.upgrades === null) {
        errors.push(`${label} has invalid upgrades object.`);
      } else {
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
// Validation execution
// ----------------------------------------------------------
// Run immediately when this file loads.
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