import {RosterSelector} from "../RosterSelector.tsx";
import {KILLER_ROSTER} from "../../models/GameData.ts";
import {useState} from "react";

export const Adept = () => {
    // Grabs the roster
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));
    // STATE : Tracks the selected state of the 4th perk option
    const [selectedOption, setSelectedOption] = useState("BLOCKED");

    return (
        <div className="activeComponent">
            {/* Silently send the roster list */}
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>
            {/* Silently sends the selected perk option */}
            <input type="hidden" name="fourthPerkOption" value={selectedOption}/>

            <div className="dbdFormGroup">
                <h5>4th Perk Setting: <span className="oswald">{selectedOption}</span></h5>
                {selectedOption === 'BLOCKED' ? (
                    <p className="italic">You will not have access to a 4th perk.</p>
                ) : (
                    <p className="italic">The 4th perk will be randomized at the start of each match.</p>
                )}
                <p className="italic"></p>
                <div className="inputButtonsContainer">
                    {/* Blocked - Empty Slot, Not Playable */}
                    <button
                        type="button"
                        className={`button dbdInputButton ${selectedOption === 'BLOCKED' ? 'selectedButton' : ''}`}
                        onClick={() => setSelectedOption('BLOCKED')}>
                        Blocked
                    </button>
                    {/* Randomized */}
                    <button
                        type="button"
                        className={`button dbdInputButton ${selectedOption === 'RANDOM' ? 'selectedButton' : ''}`}
                        onClick={() => setSelectedOption('RANDOM')}>
                        Randomized
                    </button>
                </div>
            </div>

            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} />
            </div>
        </div>
    )
}
