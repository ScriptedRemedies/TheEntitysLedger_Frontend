import type {MatchLoadout} from "../../../models/MatchModel.ts";
import {KILLER_ROSTER, KILLER_PERKS} from "../../../models/GameData.ts";
import {useEffect, useState} from "react";
import {RosterSelector} from "../../smallComponents/RosterSelector.tsx";
import {PerkSelector} from "../../smallComponents/PerkSelector.tsx";

interface ClassicMatchFormProps {
    availableRoster: string[];
    currentPips: number;
    onChange: (loadout: MatchLoadout) => void;
}

export const ClassicMatchForm = ({ availableRoster, currentPips, onChange }: ClassicMatchFormProps) => {
    const validKillers = KILLER_ROSTER.filter(k => availableRoster.includes(k.id));

    const [selectedKiller, setSelectedKiller] = useState<string[]>([]);
    const [selectedPerks, setSelectedPerks] = useState<string[]>([]);

    // Sets the perk limits - this will block the perk spot depending on rank
    const getPerkLimit = (): number => {
        if (currentPips < 10) return 4; // Ash
        if (currentPips < 20) return 3; // Bronze
        if (currentPips < 30) return 2; // Silver
        if (currentPips < 40) return 1; // Gold
        return 0; // Iridescent
    }
    const perkLimit = getPerkLimit();

    useEffect(() => {
        const isValid = selectedKiller.length === 1 && selectedPerks.length <= perkLimit;

        onChange({
            killerId: selectedKiller[0] || '',
            perks: selectedPerks,
            isValid: isValid
        });
    }, [selectedKiller, selectedPerks, perkLimit]);

    const handleKillerChange = (ids: string[]) => {
        if (ids.length > 0) setSelectedKiller([ids[ids.length - 1]]);
        else setSelectedKiller([]);
    };

    const handlePerkChange = (ids: string[]) => {
        if (ids.length <= perkLimit) setSelectedPerks(ids);
    };

    return (
        <div className="activeComponent">

            {/* Killer selected */}
            <div className="matchKillerRoster">
                <h5 className="oswald">Available Killers</h5>
                <RosterSelector
                    selectedIds={selectedKiller}
                    onChange={handleKillerChange}
                    limitToCharacters={validKillers}
                />
            </div>


            <div className="dbdFormGroup">
                <h5 className="oswald">Perks</h5>

                <div className="loadoutContainer">
                    {/* We always render 4 slots (0, 1, 2, 3) */}
                    {[0, 1, 2, 3].map((index) => {

                        // LOGIC: Is this slot locked?
                        const isLocked = index >= perkLimit;

                        // LOGIC: Is there a perk in this slot?
                        const perkId = selectedPerks[index];
                        const perkData = perkId ? KILLER_PERKS.find(p => p.id === perkId) : null;

                        return (
                            <div
                                key={index}
                                className={`perkSlot ${isLocked ? 'lockedSlot' : (perkData ? 'activeSlot' : 'emptySlot')}`}
                                onClick={() => {
                                    // Allow deselecting by clicking the slot directly
                                    if (perkId && !isLocked) {
                                        handlePerkChange(selectedPerks.filter(p => p !== perkId));
                                    }
                                }}
                            >
                                {/* SCENARIO 1: Locked Slot (CSS handles the stripped background */}

                                {/* SCENARIO 2: Active Perk */}
                                {perkData && !isLocked && (
                                    <img
                                        src={`/assets/killerPerks/${perkData.id.toLowerCase()}.png`}
                                        alt={perkData.name}
                                        title={perkData.name}
                                    />
                                )}

                                {/* SCENARIO 3: Empty Slot (CSS handles the dashed border) */}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Perk select */}
            {perkLimit > 0 && (
                <div className="dbdFormGroup">
                    <h5 className="oswald">Inventory/perks</h5>
                    <PerkSelector
                        selectedIds={selectedPerks}
                        onChange={handlePerkChange}
                        />
                </div>
            )}
        </div>
    )
}
