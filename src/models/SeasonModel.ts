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
    readonly hasShop: boolean;          // Enables the "Blood Money" shop UI
    readonly hasRandomizer: boolean;    // Enables the "Spin Wheel" UI
    readonly permaDeath: boolean;       // Enables the "Dead" toggle
    readonly winCondition: 'STRICT_4K' | 'STANDARD_3K' | 'POINTS'; // Changes the "Win" button logic
    readonly startingCurrency?: number; // Optional: Only needed if hasShop is true

    readonly levelCap?: number;           // For Scavenger (limits inputs to lvl 10)
    readonly forceAdept?: boolean;        // For Adept (locks 3 perk slots)
    readonly rosterGroup?: 'BASE_GAME';   // For Base Game (filters the selection screen)
    readonly seasonGoal?: 'GOLD_1';       // For Base Game (changes progress bar max)
}

export interface CustomSeason {
    id: 'CUSTOM'
}

export const SEASON_VARIANTS: readonly SeasonVariant[] = [
    {
        id: 'CLASSIC',
        name: 'The Classic',
        description: 'Reach Iridescent 1 rank before running out of killers.',
        difficulty: 'HARD',
        rules: [
            'No perks... No Add-ons... No Offerings.',
            'A win is achieving at least 3 kills in a match.',
            'A loss is if one or more survivors escape.',
            'Full access to all characters owned.',
            'If the match is a loss, the specific killer used is "gone forever" from the challenge and cannot be used again in the season.',
            'Game tactics such as tunneling and slugging are allowed.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STANDARD_3K'
        }
    },
    {
        id: 'BLOOD_MONEY',
        name: 'Blood Money',
        description: 'Capitalism in the Fog. You must buy every perk you use.',
        difficulty: 'HARD',
        rules: [
            'Economy: Start with $500. Everything costs money.',
            'Pay-Per-Match: You must buy your load out for every single trial.',
            'Taxes: Penalties for Generators completed and Survivors escaping.',
            'Bankruptcy: If you hit $0, you play with no perks/items.'
        ],
        features: {
            hasShop: true,    // <--- ACTIVATES THE SHOP COMPONENT
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STANDARD_3K',
            startingCurrency: 500
        }
    },
    {
        id: 'ROULETTE',
        name: 'The Roulette',
        description: 'Fate decides your killer. You cannot choose who you play.',
        difficulty: 'HARD',
        rules: [
            'Random Selection: Use a wheel to pick your character each match.',
            'Permadeath: If the random character loses, they are eliminated from the wheel.',
            'No Saving: You cannot "save" strong killers for high ranks.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: true,   // <--- ACTIVATES THE WHEEL COMPONENT
            permaDeath: true,
            winCondition: 'STANDARD_3K'
        }
    },
    {
        id: 'IRON_MAN',
        name: 'Iron Man',
        description: 'The ultimate test. Perfection or death.',
        difficulty: 'NIGHTMARE',
        rules: [
            'Strict Win: Only a 4K counts as a win. Hatch escape = Loss.',
            'No Add-ons: You are never allowed to bring add-ons.',
            'Permadeath: One mistake and the character is gone.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STRICT_4K' // <--- CHANGES "WIN" BUTTON LOGIC
        }
    },
    {
        id: 'SCAVENGER',
        name: 'The Scavenger',
        description: 'Make do with what you find in the trash.',
        difficulty: 'HARD',
        rules: [
            'Level Cap: You may only level a character to Level 10.',
            'Limited Resources: You can only use the perks/add-ons found in those first 10 levels.',
            'No Shop: You cannot buy more items once you run out.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STANDARD_3K',
            levelCap: 10 // <--- TELLS UI TO BLOCK LEVELS 11-50
        }
    },
    {
        id: 'ADEPT_HARDCORE',
        name: 'Adept Hardcore',
        description: 'Master the unique play styles of each character.',
        difficulty: 'HARD',
        rules: [
            'Locked Loadout: You must use the character\'s 3 unique perks.',
            'Fourth Slot: The 4th perk slot is wildcard (or banned, depending on preference).',
            'Permadeath: Standard permadeath rules apply.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STANDARD_3K',
            forceAdept: true // <--- TELLS UI TO AUTO-FILL PERK SLOTS
        }
    },
    {
        id: 'BASE_GAME',
        name: 'Base Game',
        description: 'A shorter challenge using only the original 5 Killers.',
        difficulty: 'NORMAL',
        rules: [
            'Roster Limit: Trapper, Wraith, Hillbilly, Nurse, Huntress ONLY.',
            'Short Season: Goal is usually to reach Gold Rank, not Iridescent.',
            'Permadeath: Losing a killer is devastating due to small roster size.'
        ],
        features: {
            hasShop: false,
            hasRandomizer: false,
            permaDeath: true,
            winCondition: 'STANDARD_3K',
            rosterGroup: 'BASE_GAME', // <--- TELLS UI TO HIDE DLC CHARACTERS
            seasonGoal: 'GOLD_1'      // <--- TELLS UI TO SHORTEN PROGRESS BAR
        }
    }
] as const;
