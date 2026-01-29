import {API_BASE_URL} from "../config/api.ts";
import type {KillerModel} from "../models/KillerModel.ts";
import type {SurvivorModel} from "../models/SurvivorModel.ts";

// Handles repetitive "check response.ok" and "parse json"
async function request<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// Backend API - functions the components will call
export const BackendService = {

    // FETCH ALL KILLERS
    getAllKillers: () => request<KillerModel[]>('/killers'),

    // FETCH ALL SURVIVORS
    getAllSurvivors: () => request<SurvivorModel[]>('/survivors'),

    // FETCH USER SEASONS (Example for later)
    getUserSeasons: (userId: number) => request<never[]>(`/users/${userId}/seasons`),

    // CREATE A MATCH (Example of a POST request)
    createMatch: async (matchData: never) => {
        const response = await fetch(`${API_BASE_URL}/matches`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(matchData)
        });
        if (!response.ok) throw new Error('Failed to save match');
        return response.json();
    }
};
