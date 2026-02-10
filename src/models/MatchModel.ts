// What gets sent to the backend
export interface CreateMatchRequest {
    seasonId: number;
    characterId: string;
    date: string;

    perkIds: string[];

    kills?: number;
    isMerciless?: boolean;
    result?: 'WIN' | 'LOSS';

    economySpent?: number;
    economyEarned?: number;
    economyBalance?: number;
}

export interface MatchLoadout {
    killerId: string;
    perks: string[];
    isValid: boolean;
}

// Only used if variant is "Blood Money"
export interface EconomyStats {
    startingBalance: number;
    loadoutCost: number;
    income: number;
    penalties: number;
    endingBalance: number;
}

interface BaseMatch {
    id: number;
    seasonId: number;
    variantId: number;
    characterId: number;
    date: string;

    perkIds: number[];
    addOnIds: number[];
    offeringId?: number[];

    economy?: EconomyStats;
}

export interface KillerMatch extends BaseMatch {
    role: 'KILLER';
    kills: number;
    survivorsEscape: number;
    isMerciless: boolean;
}

export interface SurvivorMatch extends BaseMatch {
    role: 'SURVIVOR';
    outcome: 'ESCAPED' | 'SACRIFICED' | 'MORI' | 'BLEED_OUT';
    itemSaved: boolean;
}

export type MatchModel = KillerMatch | SurvivorMatch;
