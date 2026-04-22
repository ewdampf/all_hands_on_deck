// ==========================================================
// Character Tags
// ----------------------------------------------------------
// Tags describe what a character IS, not how they behave
// mechanically at the trait level.
//
// Traits = gameplay role / behavior
// Tags   = category / affiliation / background
//
// These tags are useful for:
// - future synergy systems
// - future business/job matching
// - event generation
// - pack filtering (e.g. Star Wars Pack, Military Pack)
// - tag-based bonuses and penalties
// ==========================================================

const CHARACTER_TAGS = {

  // ========================================================
  // Organizational / combat alignment tags
  // --------------------------------------------------------
  // Good for military jobs, guard jobs, structured work, etc.
  // ========================================================

  MILITARY: "military",
  GUARD: "guard",
  REBEL: "rebel",


  // ========================================================
  // Functional role tags
  // --------------------------------------------------------
  // These describe what kind of role the character is best
  // associated with in-world.
  // ========================================================

  PILOT: "pilot",
  SCAVENGER: "scavenger",


  // ========================================================
  // Species / form / nature tags
  // --------------------------------------------------------
  // Useful for future special interactions or pack themes.
  // ========================================================

  ROBOT: "robot",
  TRIBAL: "tribal",


  // ========================================================
  // Environment / origin tags
  // --------------------------------------------------------
  // Useful for environmental fit and themed jobs later.
  // ========================================================

  DESERT: "desert",


  // ========================================================
  // Future expansion ideas (commented for now)
  // --------------------------------------------------------
  // Keep these visible as design reminders without adding
  // unnecessary complexity yet.
  // ========================================================

  /*
  SOCIAL: "social",
  MEDICAL: "medical",
  SCIENCE: "science",
  CRIMINAL: "criminal",
  AUTHORITY: "authority",
  NOBILITY: "nobility",
  SMUGGLER: "smuggler",
  ENGINEER: "engineer",
  FARMER: "farmer",
  ENTERTAINER: "entertainer",
  LEADERSHIP: "leadership"
  */
};