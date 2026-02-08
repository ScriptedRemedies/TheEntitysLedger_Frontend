import {type Character, KILLER_ROSTER} from "../models/GameData.ts";

interface RosterSelectorProps {
    selectedIds: string[];
    onChange: (ids: string[]) => void;
    limitToCharacters?: Character[];

    // Blood Money Logic
    showCosts?: boolean;
    costs?: Record<string, number>;
}

export const RosterSelector = ({ selectedIds, onChange, limitToCharacters, showCosts, costs }: RosterSelectorProps) => {

    const activeList = limitToCharacters || KILLER_ROSTER;

    const toggleCharacter = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(x => x != id)); // Remove it from list
        } else {
            onChange([...selectedIds, id]);
        }
    };

    const selectAll = () => onChange(activeList.map(k => k.id));
    const deselectAll = () => onChange([]);

    return (
        <div className="rosterSelectorContainer">
            {/* Select and deselect all buttons */}
            <div className="dbdFormGroup">
                <h5>Available Roster (<span className="oswald">{selectedIds.length} Selected</span>)</h5>
                <div className="dbdButtonContainer">
                    <button type="button" className="button dbdButton" onClick={selectAll}>Select All</button>
                    <button type="button" className="button dbdButton" onClick={deselectAll}>Clear</button>
                </div>
            </div>

            {/* Disclaimer */}
            {!limitToCharacters && (
                <p><span className="oswald">WARNING: </span>The characters that are selected when season starts cannot be changed. Deselect any characters you do not have access to in DBD. <br/><span className="italic">Either you haven't bought the character yet, or DBD disabled them.</span></p>
            )}

            <div className="rosterList">
                {activeList.map((character) => {
                    const isSelected = selectedIds.includes(character.id);
                    const currentCost = costs?.[character.id] ?? character.cost;

                    return (
                        <div
                            key={character.id}
                            onClick={(e) => {
                                if ((e.target as HTMLElement).tagName !== 'INPUT') {
                                    toggleCharacter(character.id);
                                }
                            }}
                            className={`button dbdInputButton ${isSelected ? 'selectedButton' : ''}`}>
                            {/* Shows the price tag for Blood Money */}
                            {showCosts && (
                                <div className="priceTag">
                                    <span>${currentCost}</span>
                                </div>
                            )}

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
