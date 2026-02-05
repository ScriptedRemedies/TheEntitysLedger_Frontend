import {RosterSelector} from "../RosterSelector.tsx";
import {KILLER_ROSTER} from "../../models/GameData.ts";
import {useState} from "react";

export const BaseGame = () => {

    const baseCharacters = KILLER_ROSTER.filter(char => char.dlc === 'Base Game');
    const [roster, setRoster] = useState<string[]>(
        baseCharacters.map(k => k.id));
    return (
        <div className="activeComponent">
            {/* Silently send the roster list */}
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>

            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} limitToCharacters={baseCharacters} />
            </div>
        </div>
    )
}
