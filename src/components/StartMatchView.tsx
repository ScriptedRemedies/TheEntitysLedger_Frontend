// src/components/match/StartMatchView.tsx
import {useState} from "react";
import {ClassicMatchForm} from "./variants/ClassicMatchForm.tsx";
import {ClassicResultForm} from "./variants/ClassicResultForm.tsx";
import type {SeasonModel} from "../models/SeasonModel.ts";
import type {CreateMatchRequest, MatchLoadout} from "../models/MatchModel.ts";
import {BackendService} from "../services/backend.ts";
import {Form, useNavigate} from "react-router-dom";
import {PlayerGrades} from "../models/PlayerGrades.ts";

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

    const navigate = useNavigate();

    // STATE
    const [kills, setKills] = useState<number>(0);
    const [lossCondition, setLossCondition] = useState("HATCH");
    const [pips, setPips] = useState<number>(0);

    // Child Data State
    const [childLoadout, setChildLoadout] = useState<MatchLoadout>({
        killerId: '', perks: [], isValid: false
    });

    // Handle data coming up from Child
    const handleLoadoutChange = (loadout: MatchLoadout) => {
        setChildLoadout(loadout);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!childLoadout.isValid) return;

        // Determines the match result
        let matchResult: 'WIN' | 'LOSS';
        if (kills >= 3) {
            matchResult = 'WIN';
        } else {
            matchResult = 'LOSS';
        }

        // Determines if character is dead based on loss condition
        let isCharacterDead = false;
        if (matchResult === 'LOSS' || lossCondition === 'GATE') {
            isCharacterDead = true;
        }

        // Safely updates the player progress and badge based on number of pips
        const newSeasonPips = PlayerGrades.calculateSafePipUpdate(season.pip, pips);

        // Checking if season is completed by pip amount
        const isSeasonWon = newSeasonPips >= 85;

        // Checking if all killers are dead and season failed
        const rosterSize = season.availableRoster.length;
        const isSeasonFailed = isCharacterDead && rosterSize <= 1;

        const isSeasonComplete = isSeasonWon || isSeasonFailed;
        const seasonResult = isSeasonWon ? 'PASSED' : (isSeasonFailed ? 'FAILED' : 'ONGOING');

        const payload: CreateMatchRequest = {
            seasonId: season.id,
            characterId: childLoadout.killerId,
            date: new Date().toISOString().split('T')[0],
            perkIds: childLoadout.perks,
            kills: kills,
            result: matchResult
        };

        try {
            await BackendService.createMatch(payload);
            await BackendService.updateSeasonProgress({
                seasonId: season.id,
                newPipTotal: newSeasonPips,
                deadCharacterId: isCharacterDead ? childLoadout.killerId : null,
                isComplete: isSeasonComplete,
                result: seasonResult
            });

            if (isSeasonComplete) {
                // Redirects to season recap screen if season is complete
                navigate(`/season/${season.id}/recap`);
            } else {
                // Reset screen if season is ongoing
                setKills(0);
                setPips(0);
                setLossCondition('HATCH');
                // TODO: Success alert
                window.scrollTo(0, 0);
                onMatchSaved();
            }

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
                        lossCondition={lossCondition}
                        setLossCondition={setLossCondition}
                        pips={pips}
                        setPips={setPips}
                    />
                </div>
            </Form>

        </div>
    );
};
