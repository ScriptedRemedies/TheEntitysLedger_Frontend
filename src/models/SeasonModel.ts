export interface SeasonModel {
    userId: number;
    id: number;
    playerRole: string; // Either Killer or Survivor
    playerName: string;
    platform: string;
    variantId: string;
    matches: [];
    badge: string;
    pip: number;
    isCurrent: boolean;
    result: string;
}
export interface CreateSeasonRequest {
    userId: number;
    variantId: string;
    playerRole: string;
    platform: string;
    playerName: string;
}

export interface SeasonVariant {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly difficulty: 'NORMAL' | 'HARD' | 'NIGHTMARE';
    readonly rules: readonly string[];
    readonly features: VariantFeatures;
}
export interface VariantFeatures {
    readonly permadeath: boolean;       // Enables the "Dead" toggle
    readonly winCondition: 'STRICT_4K' | 'STANDARD_3K'; // Changes the "Win" button logic

    // OPTIONS FOR ADEPT HARDCORE
    readonly forceAdept?: boolean;        // For Adept (locks 3 perk slots)
    readonly fourthPerkOption?: 'BLOCKED' | 'RANDOM';  // If the user chooses to either randomize the 4th slot or block it

    // OPTIONS FOR BASE GAME
    readonly seasonGoal?: 'GOLD_1';       // Changes progress bar max

    // OPTIONS FOR BLOOD MONEY
    readonly hasShop?: boolean;          // Enables the "Blood Money" shop UI
    readonly startingCurrency?: number;  // Optional: Only needed if hasShop is true

    // OPTIONS FOR ROULETTE
    readonly hasRandomizer?: boolean;    // Enables the "Spin Wheel" UI

    // OPTIONS FOR IRON MAN
    readonly repeatedLoadout?: boolean; // Forces the "no repeated loadouts"
}

export interface CustomSeason {
    id: 'CUSTOM'
}

export const SEASON_VARIANTS: readonly SeasonVariant[] = [
    {
        id: 'CLASSIC',
        name: 'The Classic',
        description: 'Make it from Ash 4 to Iridescent 1 before running out of killers.',
        difficulty: 'HARD',
        rules: [
            'Loss of Perks: Player looses one perk slot per rank (4 available perks for Ash, 3 for Bronze, 2 for Silver, 1 for Gold, 0 for Iridescent).',
            'No Add-ons: Killers are not allowed to use add-ons.',
            'Win Condition: A "Win" is a 3K (three kills) or 4K.',
            'Loss Condition: A 2K or fewer or any exits through an exit gate is a loss.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again for the rest of the challenge.',
            'Hatch Exception: If one survivor escapes through the hatch, it is not considered a loss. However, if two or more escape through the hatch, the killer is eliminated.',
            'Character Selection: Full access to all characters owned.'
        ],
        features: {
            permadeath: true,
            winCondition: 'STANDARD_3K'
        }
    },
    {
        id: 'ADEPT_HARDCORE',
        name: 'Adept Hardcore',
        description: 'Make it from Ash 4 to Iridescent 1 before running out of killers by only playing the characters specific perks.',
        difficulty: 'HARD',
        rules: [
            'Locked Perks: You must use the Killer\'s 3 unique perks. The 4th perk slot is either banned or must be empty.',
            'No Add-ons: You are not allowed to use add-ons (or must use "Brown" rarity only, depending on difficulty preference).',
            'Win Condition: You must achieve a "Merciless Killer" result (which typically requires a 4K).',
            'Loss Condition: Anything less than a 4K is a loss.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again for the rest of the challenge.',
            'Character Selection: Full access to all characters owned.',
        ],
        features: {
            permadeath: true,
            winCondition: 'STRICT_4K',
            forceAdept: true,
            fourthPerkOption: 'BLOCKED' // User can change this option in the UI
        }
    },
    {
        id: 'BASE_GAME',
        name: 'Base Game',
        description: 'Make it from Ash 4 to Gold 1 using only the original 5 Killers.',
        difficulty: 'NORMAL',
        rules: [
            'Perk Limit: You start with 4 perk slots at Ash grade. You lose one perk slot for every grade color you advance (Ash: 4, Bronze: 3, Silver: 2, Gold: 1, Iridescent: 0).',
            'Add-ons: Add-ons are generally permitted unless you wish to play on "Hard Mode" (no add-ons allowed).',
            'Win Condition: A "Win" is a 3K (three kills) or 4K.',
            'Loss Condition: A 2K or fewer or any exits through an exit gate is a loss.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again.',
            'Hatch Exception: If one survivor escapes through the hatch, it is not considered a loss. However, if two or more escape through the hatch, the killer is eliminated.',
            'Roster Limit: You may only use the original 5 Killers.'
        ],
        features: {
            permadeath: true,
            winCondition: 'STANDARD_3K',
            seasonGoal: 'GOLD_1'
        }
    },
    {
        id: 'BLOOD_MONEY',
        name: 'Blood Money',
        description: 'Make it from Ash 4 to Iridescent 1 before running out of killers or before going bankrupt.',
        difficulty: 'HARD',
        rules: [
            'Starting Funds: You begin the season with $50 or a value of your choice.',
            'Pay-to-Play: You must purchase every perk you wish to use for a specific trial.',
            'Income: You earn money based on your performance.',
            'Penalties: You can loose money based on your performance.',
            'Bankruptcy: If your funds are below or equal to $0, you must sell a killer to regain enough funds to start a match.',
            'No Add-ons: You are not allowed to use add-ons.',
            'Win Condition: A "Win" is a 3K or 4K. Wins generate profit.',
            'Loss Condition: A 2K or fewer is a loss. You lose the match fee and generate no profit.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again for the rest of the challenge.',
            'Character Selection: Full access to all characters owned.'
        ],
        features: {
            permadeath: true,
            winCondition: 'STANDARD_3K',
            startingCurrency: 50,
            hasShop: true
        }
    },
    {
        id: 'ROULETTE',
        name: 'The Roulette',
        description: 'Make it from Ash 4 to Iridescent 1 by playing all characters at least once, but not by choosing them yourself.',
        difficulty: 'HARD',
        rules: [
            'Random Selection: Your Killer will be randomized before every match.',
            'No Respinning: You cannot respin the wheel to avoid a weak Killer.',
            'Locked Loadout: You must use the specific perk loadout assigned by the randomizer.',
            'Win Condition: A "Win" is a 3K or 4K.',
            'Loss Condition: A 2K or fewer is a loss.',
            'Hatch Exception: Hatch escapes do not count as a loss.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again for the rest of the challenge.',
            'Character Selection: Full access to all characters owned.'
        ],
        features: {
            permadeath: true,
            winCondition: 'STANDARD_3K',
            hasRandomizer: true
        }
    },
    {
        id: 'IRON_MAN',
        name: 'Iron Man',
        description: 'Make it from Ash 4 to Iridescent 1 before running out of killers with a strict 4K rule.',
        difficulty: 'NIGHTMARE',
        rules: [
            'Strict Win Condition: Only a 4K (four kills) counts as a win. Any survivor escape (Gate or Hatch) is a loss.',
            'No Add-ons: You are not allowed to use add-ons.',
            'No Second Chances: There are no "safety pips" or hatch exceptions. Perfection is required.',
            'Perks: Full access to perks, but you cannot use the same build twice in a row.',
            'Permadeath: If the loss condition is met, the killer used in that trial is eliminated and cannot be used again for the rest of the challenge.',
            'Character Selection: Full access to all characters owned.'
        ],
        features: {
            permadeath: true,
            winCondition: 'STRICT_4K',
            repeatedLoadout: true
        }
    }
] as const;
