import {useLoaderData, useSearchParams} from 'react-router-dom';
import {type SeasonModel} from "../../../models/SeasonModel.ts";
import {StartMatchView} from "../../secondaryViews/StartMatchView.tsx";
import {TitleAndGrade} from "../../smallComponents/TitleAndGrade.tsx";
import {SeasonRules} from "../../smallComponents/SeasonRules.tsx";

export const Season = () => {

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
                        <TitleAndGrade season={season} title="Record a New Match" />
                        <StartMatchView season={season} onMatchSaved={onMatchSaved} />
                    </div>
                )}

                {activeView === 'matchHistory' && (
                    <div>
                        <TitleAndGrade season={season} title="Match History" />
                        {/* Match preview cards */}
                    </div>

                )}

                {activeView === 'details' && (
                    <div>
                        <TitleAndGrade season={season} title="Season Details" />
                        {/* Season stats */}
                        {/* All characters with status visual */}
                    </div>
                )}

                {activeView === 'rules' && (
                    <div>
                        <TitleAndGrade season={season} title="Season Rules" />
                        {/* Season Rules */}
                        <SeasonRules season={season} />
                    </div>
                )}
            </div>
        </div>
    )
}
