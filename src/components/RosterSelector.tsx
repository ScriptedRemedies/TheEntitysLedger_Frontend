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
            {/* Disclaimer */}
            <p><span className="oswald">WARNING: </span>The characters that are selected when season starts cannot be changed. Deselect any characters you do not have access to in DBD. <br/><span style={{ fontStyle: 'italic' }}>Either you haven't bought the character yet, or DBD disabled them.</span></p>
            {/* Select and deselect all buttons */}
            <div className="rosterHeader">
                <label>Available Roster (<span className="oswald">{selectedIds.length} Selected</span>)</label>
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
                            <p className="oswald">{character.dlc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
