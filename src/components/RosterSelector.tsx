import {KILLER_ROSTER} from "../models/GameData.ts";

interface RosterSelectorProps {
    selectedIds: string[];
    onChange: (ids: string[]) => void;
}

export const RosterSelector = ({ selectedIds, onChange }: RosterSelectorProps) => {
    const toggleCharacter = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(x => x != id)); // Remove it from list
        } else {
            onChange([...selectedIds, id]);
        }
    };

    const selectAll = () => onChange(KILLER_ROSTER.map(k => k.id));
    const deselectAll = () => onChange([]);

    return (
        <div className="rosterSelectorContainer">
            <p>Deselect any characters you do not have access to.</p>
            {/* Select and deselect all buttons */}
            <div className="rosterHeader">
                <label>Available Roster ({selectedIds.length} Selected)</label>
                <div className="dbdButtonContainer">
                    <button type="button" className="button dbdButton" onClick={selectAll}>Select All</button>
                    <button type="button" className="button dbdButton" onClick={deselectAll}>Clear</button>
                </div>
            </div>

            <div className="rosterList">
                {KILLER_ROSTER.map((character) => {
                    const isSelected = selectedIds.includes(character.id);
                    return (
                        <div
                            key={character.id}
                            onClick={() => toggleCharacter(character.id)}
                            className={`button dbdInputButton ${isSelected ? 'selectedButton' : ''}`}>
                            <img src={`/assets/killerPortraits/${character.id.toLowerCase()}.png`} alt={character.name}/>
                            <p>{character.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
