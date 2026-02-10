// src/components/match/StartMatchView.tsx
import {useState} from "react";
import {ClassicMatchForm} from "./variants/ClassicMatchForm.tsx";
import {ClassicResultForm} from "./variants/ClassicResultForm.tsx";
import type {SeasonModel} from "../models/SeasonModel.ts";
import type {CreateMatchRequest, MatchLoadout} from "../models/MatchModel.ts";
import {BackendService} from "../services/backend.ts";
import {Form} from "react-router-dom";

// Map IDs to Components
const VARIANT_FORMS: Record<string, React.FC<any>> = {
    'CLASSIC': ClassicMatchForm,
    'BASE_GAME': ClassicMatchForm, // Reusing Classic logic for Base Game
    // 'BLOOD_MONEY': BloodMoneyMatchForm (Coming soon)
};
const VARIANT_RESULTS_FORM: Record<string, React.FC<any>> = {
    'CLASSIC': ClassicResultForm,
    'BASE_GAME': ClassicResultForm,
    // BLOOD_MONEY
}

interface StartMatchViewProps {
    season: SeasonModel;
    onMatchSaved: () => void;
}

export const StartMatchView = ({ season, onMatchSaved }: StartMatchViewProps) => {

    // Common State
    const [kills, setKills] = useState<number>(0);

    // Child Data State
    const [childLoadout, setChildLoadout] = useState<MatchLoadout>({
        killerId: '', perks: [], isValid: false
    });

    // Handle data coming up from Child
    const handleLoadoutChange = (loadout: MatchLoadout) => {
        setChildLoadout(loadout);
    };

    // Calculate Result based on User Input (Simple logic for now)
    const getResult = (): 'WIN' | 'LOSS' => {
        if (kills >= 3) return 'WIN';
        return 'LOSS';
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!childLoadout.isValid) return;

        const payload: CreateMatchRequest = {
            seasonId: season.id,
            characterId: childLoadout.killerId,
            date: new Date().toISOString().split('T')[0],
            perkIds: childLoadout.perks,
            kills: kills,
            result: getResult()
        };

        try {
            await BackendService.createMatch(payload);
            onMatchSaved();
        } catch {
            alert("Error saving match");
        }
    }

    // Pick the correct form
    const VariantForm = VARIANT_FORMS[season.variantId] || ClassicMatchForm;
    const VariantResultForm = VARIANT_RESULTS_FORM[season.variantId] || ClassicMatchForm;

    return (
        <div className="componentContainer startMatchContainer">
            <Form method="post" className="form" id="match-form" onSubmit={handleSave}>
                {/* --- CHILD COMPONENT (Variant Logic) --- */}
                <div className="dbdCard">
                    <h2>Match Setup</h2>
                    <VariantForm
                        availableRoster={Array.from(season.availableRoster)}
                        currentPips={season.pip}
                        onChange={handleLoadoutChange}
                    />
                </div>

                {/* --- PARENT COMPONENT (Common Logic) --- */}
                <div className="dbdCard">
                    <h2>Match Results</h2>
                    <VariantResultForm
                        kills={kills}
                        setKills={setKills}
                    />
                </div>
            </Form>

        </div>
    );
};
