import {type Character, KILLER_ROSTER} from "../models/GameData.ts";
import {useState} from "react";

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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = activeList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(activeList.length / itemsPerPage);

    const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

    const toggleCharacter = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(x => x != id)); // Remove it from list
        } else {
            onChange([...selectedIds, id]);
        }
    };

    return (
        <div className="rosterSelectorContainer">

            {/* Disclaimer */}
            {!limitToCharacters && (
                <p><span className="scribble">WARNING: </span>The characters that are selected when season starts cannot be changed. Deselect any characters you do not have access to in DBD. <br/><span className="italic">Either you haven't bought the character yet, or DBD disabled them.</span></p>
            )}

            <div className="rosterList">
                {currentItems.map((character) => {
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
                        </div>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className="inputButtonsContainer">
                    <button
                        type="button"
                        className="button dbdButton"
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            type="button"
                            className={`button dbdInputButton ${currentPage === i + 1 ? 'selectedButton' : ''}`}
                            style={{ width: '40px' }}
                            onClick={() => changePage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        type="button"
                        className="button dbdButton"
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}
