interface ClassicResultFormProps {
    kills: number;
    setKills: (kills: number) => void;
    lossCondition: string;
    setLossCondition: (condition: string) => void;
    pips: number
    setPips: (pips: number) => void;
}

export const ClassicResultForm = ({ kills, setKills, lossCondition, setLossCondition, pips, setPips }: ClassicResultFormProps) => {
    return (
        <div>
            {/* Kills Input */}
            <div className="dbdFormGroup">
                <h5>Kills: <span className="scribble">{kills}</span></h5>
                <div className="inputButtonsContainer">
                    {[0, 1, 2, 3, 4].map(num => (
                        <button key={num} type="button"
                                className={`button dbdInputButton ${kills === num ? 'selectedButton' : ''}`}
                                onClick={() => setKills(num)}>
                            <span className="scribble">{num}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Loss Condition - only shows if kills is 3 */}
            {kills === 3 && (
                <div className="dbdFormGroup">
                    <h5>Loss Condition</h5>
                    <div className="inputButtonsContainer">
                        <button
                            type="button"
                            className={`button dbdInputButton ${lossCondition === 'HATCH' ? 'selectedButton' : ''}`}
                            onClick={() => setLossCondition('HATCH')}
                        >
                            Hatch Escape
                        </button>
                        <button
                            type="button"
                            className={`button dbdInputButton ${lossCondition === 'GATE' ? 'selectedButton' : ''}`}
                            onClick={() => setLossCondition('GATE')}
                        >
                            Exit Gate Escape
                        </button>
                    </div>
                </div>
            )}

            {/* Pips */}
            <h5>Pips Earned: <span className="scribble">{pips}</span></h5>
            <div className="inputButtonsContainer">
                {[-2, -1, 0, 1, 2].map(num => (
                    <button key={num} type="button"
                            className={`button dbdInputButton ${pips === num ? 'selectedButton' : ''}`}
                            onClick={() => setPips(num)}>
                        <span className="scribble">{num}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
