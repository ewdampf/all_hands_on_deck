const MYTHIC_RECIPES = [
  {
    id: "carbonite_han_recipe",

    mythicId: "carbonite_han_solo",

    hidden: false,

    hint: "Some destinies are frozen in time...",

    requirements: {
      charactersOwned: [
        "han_solo",
        "darth_vader",
        "boba_fett"
      ],

      businessAssignments: [
        {
          businessId: "bounty_hunters_guild",
          characterId: "boba_fett"
        }
      ]
    }
  }
];