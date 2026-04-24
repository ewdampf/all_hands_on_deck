// ==========================================================
// Character Image Defaults
// ----------------------------------------------------------
// Applies default image paths to character arrays.
// Must load before franchise character files.
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