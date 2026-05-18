function initializeMythics() {
  if (!Array.isArray(state.unlockedMythics)) {
    state.unlockedMythics = [];
  }
}

function checkMythicRecipes() {
  for (const recipe of MYTHIC_RECIPES) {
    if (state.unlockedMythics.includes(recipe.mythicId)) {
      continue;
    }

    if (doesRecipeMatch(recipe)) {
      unlockMythic(recipe.mythicId);
    }
  }
}

function unlockMythic(mythicId) {
  const mythic = MYTHICS.find(m => m.id === mythicId);

  if (!mythic) return null;

  if (!Array.isArray(state.unlockedMythics)) {
    state.unlockedMythics = [];
  }

  if (state.unlockedMythics.includes(mythicId)) {
    return null;
  }

  const mythicCard = cloneCharacterToCard(mythic);
  mythicCard.morale = 100;
  mythicCard.assignedBusinessId = null;
  mythicCard.acquiredAt = Date.now();

  state.unlockedMythics.push(mythicId);
  state.cards.push(mythicCard);

  setHeadline(
    "Mythic Discovered!",
    `${mythic.displayName} has joined your roster.`,
    "milestone"
  );

  if (typeof triggerMythicUnlockPresentation === "function") {
    triggerMythicUnlockPresentation(mythic);
  }

  saveGame();
  renderAll();

  return mythicCard;
}

function doesRecipeMatch(recipe) {
  if (!recipe || !recipe.requirements) return false;

  const requirements = recipe.requirements;

  if (Array.isArray(requirements.charactersOwned)) {
    const ownedKeys = new Set(state.cards.map(card => card.characterKey));

    const hasAllRequiredCharacters = requirements.charactersOwned.every(characterKey =>
      ownedKeys.has(characterKey)
    );

    if (!hasAllRequiredCharacters) return false;
  }

  if (Array.isArray(requirements.businessAssignments)) {
    const hasAllAssignments = requirements.businessAssignments.every(requirement => {
      const businessState = getBusinessState(requirement.businessId);
      if (!businessState) return false;

      return businessState.assignedCardIds.some(instanceId => {
        const card = getCardByInstanceId(instanceId);
        return card && card.characterKey === requirement.characterId;
      });
    });

    if (!hasAllAssignments) return false;
  }

  return true;
}