// ==========================================================
// Character Traits
// ----------------------------------------------------------
// Traits define how a character behaves mechanically.
// They are NOT flavor tags — they directly affect gameplay.
//
// Examples:
// - output bonuses
// - morale behavior
// - synergy/conflict with other traits
//
// Keep this list stable. Add new traits sparingly.
// ==========================================================

const TRAITS = {

  // ========================================================
  // Core workforce roles
  // --------------------------------------------------------
  // These define the fundamental "type" of worker.
  // ========================================================

  // Low-skill, mass labor units that perform best in groups
  CANNON_FODDER: "cannon_fodder",

  // High-impact characters with strong bonuses and penalties
  HERO: "hero",

  // Workers who improve morale of others
  SUPPORT: "support",

  // Skilled or specialized workers (future deeper systems)
  SPECIALIST: "specialist",

  // General labor classification (flexible, future use)
  LABORER: "laborer",


  // ========================================================
  // Behavioral / personality traits
  // --------------------------------------------------------
  // These influence morale interactions and conflicts.
  // ========================================================

  // Dislikes unethical, dirty, or shady environments
  MORAL_CODE: "moral_code",

  // Causes tension with structured or moral workers
  ROGUE: "rogue"


  // ========================================================
  // Future expansion ideas (leave commented for now)
  // --------------------------------------------------------
  // Keeping placeholders helps guide future design without
  // committing prematurely.
  // ========================================================

  /*
  LEADER: "leader",            // boosts nearby workers
  TECHNICAL: "technical",      // synergy with certain jobs
  CHARISMATIC: "charismatic",  // affects social systems
  DISCIPLINED: "disciplined",  // works well in military jobs
  CHAOTIC: "chaotic"           // unpredictable output
  */
};