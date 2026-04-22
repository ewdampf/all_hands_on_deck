// ==========================================================
// Headline System
// ----------------------------------------------------------
// Handles:
// - setting the active headline
// - resetting headline text
// - optional helper formatting for future expansion
//
// This file owns the "current message" shown to the player,
// but does NOT render it directly.
// ==========================================================


// ==========================================================
// Default headline
// ----------------------------------------------------------
// Used when initializing or resetting headline state.
// ==========================================================

function createDefaultHeadline() {
  return {
    title: "Welcome aboard",
    body: "Open a pack and start making questionable staffing decisions."
  };
}


// ==========================================================
// Set headline
// ----------------------------------------------------------
// Main helper used throughout the game.
// ==========================================================

function setHeadline(title, body) {
  state.headline = {
    title: typeof title === "string" ? title : "Update",
    body: typeof body === "string" ? body : ""
  };
}


// ==========================================================
// Reset headline
// ----------------------------------------------------------
// Restores the default welcome text.
// ==========================================================

function resetHeadline() {
  state.headline = createDefaultHeadline();
}


// ==========================================================
// Safe formatting helper
// ----------------------------------------------------------
// Small helper for future use when combining arrays of names
// into readable headline text.
// ==========================================================

function joinNamesForHeadline(items) {
  if (!Array.isArray(items) || items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}


// ==========================================================
// Headline helpers for pack results
// ----------------------------------------------------------
// Convenience function for pack-opening flavor.
// ==========================================================

function setRecruitmentHeadline(cards) {
  const names = Array.isArray(cards)
    ? cards.map(card => card.displayName)
    : [];

  setHeadline(
    "Fresh recruits arrive",
    `${joinNamesForHeadline(names)} joined your roster.`
  );
}