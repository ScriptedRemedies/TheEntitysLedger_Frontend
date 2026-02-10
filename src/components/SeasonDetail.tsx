import {useLoaderData, useSearchParams} from 'react-router-dom';
import {SEASON_VARIANTS, type SeasonModel} from "../models/SeasonModel.ts";
import {StartMatchView} from "./StartMatchView.tsx";
import {PlayerGrades} from "../models/PlayerGrades.ts";

export const SeasonDetail = () => {

    // STATE : hold the season data if we have it, if not starts as null
    const { season } = useLoaderData() as { season: SeasonModel };
    // STATE : holds which view is currently active
    const [searchParams, setSearchParams] = useSearchParams();
    const activeView = searchParams.get('tab') || 'matches';
    const handleTabChange = (tabName: string) => {
        setSearchParams({ tab: tabName });
    }

    const onMatchSaved = () => {
        window.location.reload();
    };

    // Getting the variant info
    const variantInfo = SEASON_VARIANTS.find(v => v.id === season.variantId) || SEASON_VARIANTS[0]
    // Getting the grade image url
    const gradeImageUrl = PlayerGrades.getGradeImageFromPips(season.pip, season.playerRole);
    // Getting the grade name
    const gradeName = PlayerGrades.getGradeNameFromPips(season.pip);
    // Calculate Progress
    const progress = PlayerGrades.getGradeProgress(season.pip);

    // Handling the UI views for loading and errors
    if (!season) return <div className="errorScreen">Season not found.</div>;

    return (
        <div className="seasonDetailContainer">
            {/* Side Menu */}
            <div className="menu">
                <button
                    type="button"
                    className={`menuButton button dbdInputButton ${activeView === 'matches' ? 'selectedButton' : ''}`}
                    onClick={() => handleTabChange('matches')}
                >
                    <img src="/assets/match_icon.png" alt="Start a Match"/>
                </button>
                <button
                    type="button"
                    className={`menuButton button dbdInputButton ${activeView === 'matchHistory' ? 'selectedButton' : ''}`}
                    onClick={() => handleTabChange('matchHistory')}
                >
                    <img src="/assets/match_history_icon.png" alt="Match History"/>
                </button>
                <button
                    type="button"
                    className={`menuButton button dbdInputButton ${activeView === 'details' ? 'selectedButton' : ''}`}
                    onClick={() => handleTabChange('details')}
                >
                    <img src="/assets/details_icon.png" alt="Season Details"/>
                </button>
                <button
                    type="button"
                    className={`menuButton button dbdInputButton ${activeView === 'rules' ? 'selectedButton' : ''}`}
                    onClick={() => handleTabChange('rules')}
                >
                    <img src="/assets/rules_icon.png" alt="Season Rules"/>
                </button>
            </div>

            <div className="activeView">

                {activeView === 'matches' && (
                    <div>
                        <div className="matchHeader">
                            <h2 className="oswald">Record a New Match</h2>

                            <div className="gradeDisplay">
                                {/* Badge */}
                                <div className="grade">
                                    <p className="englishSC">{PlayerGrades.getRomanGradeName(season.pip)}</p>
                                    <img src={gradeImageUrl} alt={gradeName}/>
                                </div>
                                {/* Pips */}
                                <div className="pipContainer">
                                    {Array.from({ length: progress.max }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`pip ${index < progress.current ? 'filled' : ''}`}
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>



                        <StartMatchView season={season} onMatchSaved={onMatchSaved} />
                    </div>
                )}

                {activeView === 'matchHistory' && (
                    <div>
                        <div className="matchHeader">
                            <h2 className="oswald">Match History</h2>

                            <div className="gradeDisplay">
                                {/* Badge */}
                                <div className="grade">
                                    <p className="englishSC">{PlayerGrades.getRomanGradeName(season.pip)}</p>
                                    <img src={gradeImageUrl} alt={gradeName}/>
                                </div>
                                {/* Pips */}
                                <div className="pipContainer">
                                    {Array.from({ length: progress.max }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`pip ${index < progress.current ? 'filled' : ''}`}
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Match preview cards */}
                    </div>

                )}

                {activeView === 'details' && (
                    <div>
                        <div className="matchHeader">
                            <h2 className="oswald">Season Details</h2>

                            <div className="gradeDisplay">
                                {/* Badge */}
                                <div className="grade">
                                    <p className="englishSC">{PlayerGrades.getRomanGradeName(season.pip)}</p>
                                    <img src={gradeImageUrl} alt={gradeName}/>
                                </div>
                                {/* Pips */}
                                <div className="pipContainer">
                                    {Array.from({ length: progress.max }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`pip ${index < progress.current ? 'filled' : ''}`}
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p>season stats here:</p>
                        <p>all characters (handed from the original save not the killers_roster || survivor_roster) with marked status (SOLD || DEAD) over it</p>
                    </div>
                )}

                {activeView === 'rules' && (
                    <div>
                        <div className="matchHeader">
                            <h2 className="oswald">Season Rules</h2>

                            <div className="gradeDisplay">
                                {/* Badge */}
                                <div className="grade">
                                    <p className="englishSC">{PlayerGrades.getRomanGradeName(season.pip)}</p>
                                    <img src={gradeImageUrl} alt={gradeName}/>
                                </div>
                                {/* Pips */}
                                <div className="pipContainer">
                                    {Array.from({ length: progress.max }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`pip ${index < progress.current ? 'filled' : ''}`}
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Season Details */}
                        <div className="dbdCard">
                            <h2>Season</h2>
                            {/* Season Variant */}
                            <h5>{variantInfo.name}</h5>

                            {/* Season Goal */}
                            <p>Objective: {variantInfo.description}</p>

                            {/* Rules */}
                            <ul className="variantRulesList">
                                {variantInfo.rules.map((rule, index) => {
                                    const splitIndex = rule.indexOf(':');

                                    // Handles if a rule is missing the ":"
                                    if (splitIndex === -1) {
                                        return <li key={index}>{rule}</li>;
                                    }

                                    const title = rule.slice(0, splitIndex);
                                    const description = rule.slice(splitIndex + 1);

                                    return (
                                        <li key={index}>
                                            <span className="ruleTitle scribble">{title}:</span><br/><span className="ruleDescription">{description}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
