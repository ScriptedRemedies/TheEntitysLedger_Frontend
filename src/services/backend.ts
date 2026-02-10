import {API_BASE_URL} from "../config/api.ts";
import type {SeasonModel, CreateSeasonRequest} from "../models/SeasonModel.ts";
import type {UserModel} from "../models/UserModel.ts";
import type {CreateMatchRequest} from "../models/MatchModel.ts";

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

    // FETCH USER INFO
    getUser: (userId: number) => request<UserModel>(`/users/${userId}`),

    // FETCH USER SEASONS
    getUserSeasons: (userId: number) => request<SeasonModel[]>(`/seasons/users/${userId}`),

    // FETCH A SINGLE SEASON BY ID
    getSeasonById: (seasonId: string) => request<SeasonModel>(`/seasons/${seasonId}`),

    // START A SEASON
    startSeason: async (seasonData: CreateSeasonRequest) => {
        const response = await fetch(`${API_BASE_URL}/seasons`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seasonData)
        })
        if (!response.ok) throw new Error('Failed to start season');
        return response.json();
    },

    // CREATE A MATCH
    createMatch: async (matchData: CreateMatchRequest) => {
        const response = await fetch(`${API_BASE_URL}/matches`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(matchData)
        });
        if (!response.ok) throw new Error('Failed to save match');
        return response.json();
    }
};
