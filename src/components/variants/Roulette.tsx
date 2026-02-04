import {RosterSelector} from "../RosterSelector.tsx";
import {KILLER_ROSTER} from "../../models/GameData.ts";
import {useState} from "react";

export const Roulette = () => {
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));
    return (
        <div>
            {/* Silently send the roster list */}
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>

            <h3>Roulette Options</h3>
            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} />
            </div>
        </div>
    )
}
