// ==========================================================
// Global Character Registry
// ----------------------------------------------------------
// Combines all franchise character files into one master
// character pool used by the game.
//
// Also performs basic validation so mistakes are caught early:
// - duplicate IDs
// - missing required fields
// - malformed traits/tags arrays
// ==========================================================


// ==========================================================
// Aggregate all character arrays
// ----------------------------------------------------------
// Add new franchise arrays here as you create them.
// ==========================================================

const CHARACTERS = [
  ...STAR_WARS_CHARACTERS,
  ...FUTURAMA_CHARACTERS,
  ...GENERIC_CHARACTERS
];


// ==========================================================
// Validation helpers
// ==========================================================

function validateCharacters(characterList) {
  const errors = [];
  const warnings = [];

  const seenIds = new Set();
  const seenCharacterVariantPairs = new Set();

  characterList.forEach((character, index) => {
    const label = `${character.displayName || character.name || "Unknown"} [index ${index}]`;

    // ------------------------------------------------------
    // Required fields
    // ------------------------------------------------------
    const requiredFields = [
      "id",
      "characterKey",
      "variantKey",
      "displayName",
      "franchise",
      "rarity",
      "basePower",
      "preferredJob",
      "traits",
      "tags",
      "flavor"
    ];

    requiredFields.forEach(field => {
      if (!(field in character)) {
        errors.push(`${label} is missing required field: ${field}`);
      }
    });

    // ------------------------------------------------------
    // Unique ID check
    // ------------------------------------------------------
    if (character.id) {
      if (seenIds.has(character.id)) {
        errors.push(`${label} has duplicate id: ${character.id}`);
      } else {
        seenIds.add(character.id);
      }
    }

    // ------------------------------------------------------
    // Variant uniqueness check
    // ------------------------------------------------------
    if (character.characterKey && character.variantKey) {
      const variantSignature = `${character.characterKey}::${character.variantKey}`;
      if (seenCharacterVariantPairs.has(variantSignature)) {
        errors.push(
          `${label} duplicates characterKey + variantKey combination: ${variantSignature}`
        );
      } else {
        seenCharacterVariantPairs.add(variantSignature);
      }
    }

    // ------------------------------------------------------
    // Array checks
    // ------------------------------------------------------
    if (character.traits && !Array.isArray(character.traits)) {
      errors.push(`${label} has non-array traits field.`);
    }

    if (character.tags && !Array.isArray(character.tags)) {
      errors.push(`${label} has non-array tags field.`);
    }

    // ------------------------------------------------------
    // Basic type checks
    // ------------------------------------------------------
    if ("basePower" in character && typeof character.basePower !== "number") {
      errors.push(`${label} has non-numeric basePower.`);
    }

    if ("displayName" in character && typeof character.displayName !== "string") {
      errors.push(`${label} has non-string displayName.`);
    }

    if ("subtitle" in character && typeof character.subtitle !== "string") {
      warnings.push(`${label} has a subtitle field that is not a string.`);
    }

    // ------------------------------------------------------
    // Optional warnings
    // ------------------------------------------------------
    if (!("subtitle" in character)) {
      warnings.push(`${label} has no subtitle field. Use empty string if intentional.`);
    }

    if (character.traits && character.traits.length === 0) {
      warnings.push(`${label} has no traits.`);
    }

    if (character.tags && character.tags.length === 0) {
      warnings.push(`${label} has no tags.`);
    }

    if ("imagePath" in character && typeof character.imagePath !== "string") {
      errors.push(`${label} has non-string imagePath.`);
    }

    if ("imageAlt" in character && typeof character.imageAlt !== "string") {
      errors.push(`${label} has non-string imageAlt.`);
    }
  });

  return { errors, warnings };
}

// ==========================================================
// Add image date to character
// ----------------------------------------------------------
// Applies the character image
// based on character id
// ==========================================================
function applyCharacterImageDefaults(characters, basePath) {
  return characters.map(char => {
    if (!char.imagePath) {
      return {
        ...char,
        imagePath: `${basePath}/${char.id}.png`,
        imageAlt: char.displayName
      };
    }

    return char;
  });
}

// ==========================================================
// Run validation immediately on load
// ----------------------------------------------------------
// Errors should be treated as real problems.
// Warnings are just visibility helpers.
// ==========================================================

const CHARACTER_VALIDATION = validateCharacters(CHARACTERS);

if (CHARACTER_VALIDATION.errors.length > 0) {
  console.error("Character validation failed:");
  CHARACTER_VALIDATION.errors.forEach(error => console.error(" - " + error));
} else {
  console.log(`Character validation passed: ${CHARACTERS.length} characters loaded.`);
}

if (CHARACTER_VALIDATION.warnings.length > 0) {
  console.warn("Character validation warnings:");
  CHARACTER_VALIDATION.warnings.forEach(warning => console.warn(" - " + warning));
}

