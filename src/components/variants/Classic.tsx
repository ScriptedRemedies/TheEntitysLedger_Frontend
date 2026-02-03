import {RosterSelector} from "../RosterSelector.tsx";
import {KILLER_ROSTER} from "../../models/GameData.ts";
import {useState} from "react";

export const Classic = () => {
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));
    return (
        <div>
            <h4>Classic Options</h4>
            <div className="dbdFormGroup">
                <RosterSelector selectedIds={roster} onChange={setRoster} />
            </div>
        </div>
    )
}
