// ==========================================================
// Job Types
// ----------------------------------------------------------
// Job types define the CATEGORY of work a business performs.
//
// They are used for:
// - matching character preferred jobs
// - morale bonuses/penalties
// - output efficiency calculations
//
// Characters typically have ONE preferred job type.
// Businesses define ONE primary job type.
//
// Keep this list small and general.
// ==========================================================

const JOB_TYPES = {

  // ========================================================
  // Basic labor categories
  // --------------------------------------------------------
  // These represent broad types of work environments.
  // ========================================================

  // Physical, repetitive, or resource-based work
  FARM: "farm",

  // Movement-based, logistics, or transport work
  DELIVERY: "delivery",

  // Customer-facing, social, or service-oriented work
  SERVICE: "service",


  // ========================================================
  // Special / flexible categories
  // --------------------------------------------------------
  // These allow exceptions and special handling.
  // ========================================================

  // High-profile / story-driven roles (heroes, leaders, etc.)
  // Often treated as "flexible" in assignment logic
  HEROIC: "heroic"


  // ========================================================
  // Future expansion ideas (commented for now)
  // --------------------------------------------------------
  // Add only when needed to avoid unnecessary complexity.
  // ========================================================

  /*
  INDUSTRIAL: "industrial",    // factories, mining, heavy labor
  MEDICAL: "medical",          // hospitals, care facilities
  MILITARY: "military",        // structured combat/discipline jobs
  SCIENCE: "science",          // labs, research facilities
  ENTERTAINMENT: "entertainment", // media, performance
  GOVERNMENT: "government"     // administrative / political roles
  */
};