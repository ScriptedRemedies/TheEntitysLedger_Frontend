interface ClassicResultFormProps {
    kills: number;
    setKills: (kills: number) => void;
}

export const ClassicResultForm = ({ kills, setKills }: ClassicResultFormProps) => {
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
        </div>
    )
}
