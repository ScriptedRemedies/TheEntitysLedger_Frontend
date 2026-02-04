import {RosterSelector} from "../RosterSelector.tsx";
import {KILLER_ROSTER} from "../../models/GameData.ts";
import {useState} from "react";

export const Adept = () => {
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));
    return (
        <div>
            {/* Silently send the roster list */}
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>

            <h3>Adept Hardcore Options</h3>

            <div className="dbdFormGroup">
                <label>4th Perk Slot Rule</label>
                <select name="fourthPerkOption" className="dbdInput">
                    <option value="BLOCKED">Blocked (Empty Slot)</option>
                    <option value="RANDOM">Randomized (Roulette)</option>
                </select>
            </div>

            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} />
            </div>
        </div>
    )
}
