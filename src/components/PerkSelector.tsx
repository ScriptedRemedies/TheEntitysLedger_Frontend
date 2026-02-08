import {KILLER_PERKS} from "../models/GameData.ts";

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

    const togglePerk = (id: string) => {
        if (selectedIds.includes(id)) {
            onChange(selectedIds.filter(x => x != id));
        } else {
            onChange([...selectedIds, id]);
        }
    };

    return (
        <div className="perkSelectorContainer">
            <div className="perkList">
                {KILLER_PERKS.map((perk) => {
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
        </div>
    )
}
