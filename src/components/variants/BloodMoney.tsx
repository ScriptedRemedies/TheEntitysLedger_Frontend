import {KILLER_ROSTER} from "../../models/GameData.ts";
import {RosterSelector} from "../RosterSelector.tsx";
import {useState} from "react";

export const BloodMoney = () => {
    // STATE : tracks the selected states of killer roster
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));

    return (
        <div>
            {/* Silently send the roster list */}
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>

            <h4>Blood Money Options</h4>
            <div className="dbdFormGroup">
                <label>Starting Difficulty</label>
                <select name="custom_difficulty" className="dbdInput">
                    <option value="standard">Standard ($500 start)</option>
                    <option value="hardcore">Broke ($0 start)</option>
                </select>
            </div>
            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} />
            </div>
        </div>
    )
}
