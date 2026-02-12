import {BLOOD_MONEY_BONUSES, BLOOD_MONEY_PENALTIES, KILLER_PERKS, KILLER_ROSTER} from "../../models/GameData.ts";
import {RosterSelector} from "../smallComponents/RosterSelector.tsx";
import {useState} from "react";
import {PerkSelector} from "../smallComponents/PerkSelector.tsx";

export const BloodMoney = () => {
    // STATE : tracks the selected states of the options
    const [mode, setMode] = useState<'STANDARD' | 'HARDCORE' | 'CUSTOM'>('STANDARD');
    const [customValue, setCustomValue] = useState('');
    const [penalty, setPenalty] = useState<string[]>(BLOOD_MONEY_PENALTIES.map(p => p.id));
    const [bonus, setBonus] = useState<string[]>(BLOOD_MONEY_BONUSES.map(b => b.id));
    const [coolDown, setCoolDown] = useState('ON');
    const [perk, setPerk] = useState<string[]>(KILLER_PERKS.map(p => p.id));
    const [roster, setRoster] = useState<string[]>(KILLER_ROSTER.map(k => k.id));

    const togglePenalty = (id: string) => {
        if (penalty.includes(id)) {
            setPenalty(penalty.filter(p => p !== id));
        } else {
            setPenalty([...penalty, id]);
        }
    }
    const toggleBonus = (id: string) => {
        if (bonus.includes(id)) {
            setBonus(bonus.filter(b => b !== id));
        } else {
            setBonus([...bonus, id]);
        }
    }

    const getFinalAmount = (): number => {
        if (mode === 'STANDARD') return 25;
        if (mode === 'HARDCORE') return 0;
        return Number(customValue);
    }

    const getCoolDown = (): boolean => {
        if (coolDown === 'OFF') return false;
        return true;
    }

    return (
        <div className="activeComponent">
            {/* Silently sends the options */}
            <input type="hidden" name="startingAmount" value={getFinalAmount()}/>
            <input type="hidden" name="penalties" value={penalty.join(',')}/>
            <input type="hidden" name="bonuses" value={bonus.join(',')}/>
            <input type="hidden" name="coolDown" value={String(getCoolDown())}/>
            <input type="hidden" name="startingRoster" value={JSON.stringify(roster)}/>

            {/* Starting Amount */}
            <div className="dbdFormGroup">
                <h5>Starting Amount: <span className="scribble">${getFinalAmount()}</span></h5>
                <p className="italic"> Choose how much money you start the season with.</p>
                <div className="inputButtonsContainer">
                    <button
                        type="button"
                        className={`button startingAmount dbdInputButton ${mode === 'STANDARD' ? 'selectedButton' : ''}`}
                        onClick={() => setMode('STANDARD')}>
                        Standard
                    </button>
                    <button
                        type="button"
                        className={`button startingAmount dbdInputButton ${mode === 'HARDCORE' ? 'selectedButton' : ''}`}
                        onClick={() => setMode('HARDCORE')}>
                        Broke
                    </button>
                    {mode === 'CUSTOM' ? (
                        <input
                            type="text"
                            autoFocus
                            className="button startingAmount dbdInputButton selectedButton"
                            placeholder="$"
                            value={customValue}
                            onChange={(e) => setCustomValue(e.target.value)}/>
                    ) : (
                        <button
                            type="button"
                            className="button startingAmount dbdInputButton"
                            onClick={() => {
                                setMode('CUSTOM');
                                setCustomValue('');
                            }}>
                            Custom
                        </button>
                    )}
                </div>
            </div>

            {/* Penalty Options */}
            <div className="dbdFormGroup">
                <h5>Penalties (<span className="scribble">{penalty.length} Selected</span>)</h5>
                <p className="italic">Money that will be deducted if the condition is met. Deselect any you do not want to apply.</p>
                <div className="inputButtonsContainer">
                    <ul className="economyItemList">
                        {BLOOD_MONEY_PENALTIES.map((p) => {
                            const isSelected = penalty.includes(p.id);
                            return (
                                <li
                                    key={p.id}
                                    className={`button dbdInputButton ${isSelected ? 'selectedButton' : ''}`}
                                    onClick={() => togglePenalty(p.id)}>
                                    <div className="economyItemTitle">
                                        <p className="scribble">{p.name}</p>
                                        <p className="priceTag">${p.cost}</p>
                                    </div>
                                    <p>{p.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Bonus Money Options */}
            <div className="dbdFormGroup">
                <h5>Bonuses (<span className="scribble">{bonus.length} Selected</span>)</h5>
                <p className="italic">Money that will be added if the condition is met. Deselect any you do not want to apply.</p>
                <div className="inputButtonsContainer">
                    <ul className="economyItemList">
                        {BLOOD_MONEY_BONUSES.map((b) => {
                            const isSelected = bonus.includes(b.id);
                            return (
                                <li
                                    key={b.id}
                                    className={`button dbdInputButton ${isSelected ? 'selectedButton' : ''}`}
                                    onClick={() => toggleBonus(b.id)}>
                                    <div className="economyItemTitle">
                                        <p className="scribble">{b.name}</p>
                                        <p className="priceTag">$+{b.cost}</p>
                                    </div>
                                    {b.description}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Killer cooldown option, either Yes on cool down or No, describe what the cooldown is */}
            <div className="dbdFormGroup">
                <h5>Cooldown: <span className="scribble">{coolDown}</span></h5>
                <p className="italic">When cooldown is on, you will not be allowed to use the same killer more then 2 times in a row.</p>
                <div className="inputButtonsContainer">
                    <button
                        type="button"
                        className={`button startingAmount dbdInputButton ${coolDown === 'ON' ? 'selectedButton' : ''}`}
                        onClick={() => setCoolDown('ON')}>
                        ON
                    </button>
                    <button
                        type="button"
                        className={`button startingAmount dbdInputButton ${coolDown === 'OFF' ? 'selectedButton' : ''}`}
                        onClick={() => setCoolDown('OFF')}>
                        OFF
                    </button>
                </div>
            </div>

            {/* Pricing for perks */}
            <div className="dbdFormGroup">
                <h5>Perks</h5>
                <p className="italic">View the pricing for killer perks.</p>
                <PerkSelector
                    selectedIds={perk}
                    onChange={setPerk}
                    showCosts={true}
                    readonly={true}/>
            </div>

            {/* Pricing for Killers */}
            <div className="dbdFormGroup">
                <RosterSelector
                    selectedIds={roster}
                    onChange={setRoster}
                    showCosts={true}/>
            </div>
        </div>
    )
}
