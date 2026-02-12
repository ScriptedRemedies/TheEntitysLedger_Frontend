import {KILLER_PERKS} from "../../models/GameData.ts";
import {useMemo, useState} from "react";

interface PerkSelectorProps {
    selectedIds: string[];
    onChange: (ids: string[]) => void;

    // Blood Money
    showCosts?: boolean;
    costs?: Record<string, number>;
    readonly?: boolean; // Disables the clicking that happens with dbd buttons

    // Adept
    // Receives the ownerId from killer_roster to then filter through killer_perks to list perks under that killer
    filterByCharacter?: string;
}

export const PerkSelector = ({selectedIds, onChange, showCosts, costs, filterByCharacter, readonly}: PerkSelectorProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const activeList = useMemo(() => {
        return [...KILLER_PERKS].sort((a, b) => a.name.localeCompare(b.name));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = activeList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(activeList.length / itemsPerPage);

    const changePage = (pageNumber: number) => setCurrentPage(pageNumber);

    const togglePerk = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(x => x != id));
        } else {
            onChange([...selectedIds, id]);
        }
    };

    return (
        <div className="perkSelectorContainer">
            <div className="rosterList">
                {currentItems.map((perk) => {
                    const isSelected = selectedIds.includes(perk.id);
                    const currentCost = costs?.[perk.id] ?? perk.cost;

                    return (
                        <div
                            key={perk.id}
                            onClick={(e) => {
                                if (readonly) return;

                                if ((e.target as HTMLElement).tagName !== 'INPUT') {
                                    togglePerk(perk.id);
                                }
                            }}
                            className={`button dbdInputButton ${isSelected ? 'selectedButton' : ''}`}
                            style={{ cursor: readonly ? 'default' : 'pointer' }}>

                            {showCosts && (
                                <div className="priceTag">
                                    <span>${currentCost}</span>
                                </div>
                            )}

                            {/* Image here */}
                            <img src={`/assets/killerPerks/${perk.id.toLowerCase()}.png`} alt={perk.name}/>
                            <p>{perk.name}</p>
                        </div>
                    )
                })}
            </div>

            {/* PAGINATION CONTROLS */}
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
