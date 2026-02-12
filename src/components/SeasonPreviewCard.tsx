import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {BackendService} from '../services/backend.ts';
import {SEASON_VARIANTS, type SeasonModel} from "../models/SeasonModel.ts";
import {PlayerGrades} from '../models/PlayerGrades.ts';

// Defining what props will be accepted
interface SeasonProps {
    userId: number;
}

export const SeasonPreviewCard = ({ userId }: SeasonProps) => {

    // STATE : hold season data
    const [seasons, setSeasons] = useState<SeasonModel[]>([]);
    // STATE : hold any errors
    const [error, setError] = useState('');

    // Initialize the router hook
    const navigate = useNavigate();

    // Grab seasons with user info on page load
    useEffect(() => {
        BackendService.getUserSeasons(userId)
            .then(data => {
                // Sorting seasons by isCurrent first then by newest creation date
                const sortedSeasons = data.sort((a, b) => {
                    // If a isCurrent then it should be first
                    if (a.isCurrent) return -1;
                    if (b.isCurrent) return 1;

                    return b.id - a.id;
                });

                setSeasons(sortedSeasons);
            })
            .catch(() => {
                setError("Failed to load seasons.");
            });
    }, [userId]);

    // RENDER : show error or loading screen if !seasons or !user
    if (error) return <div className="errorScreen">Error: {error}</div>
    if (!userId) return <div className="loadingScreen">Loading User Data...</div>
    if (!seasons) return <div className="loadingScreen">Loading Seasons...</div>

    // RENDER
    return (
        <div>
            {seasons.map(season => {
                // Game variant display name so typescript can stop freaking out
                const variantInfo = SEASON_VARIANTS.find(v => v.id === season.variantId);
                const variantDisplayName = variantInfo ? variantInfo.name : season.variantId;

                // Getting the grade image url
                const gradeImageUrl = PlayerGrades.getGradeImageFromPips(season.pip, season.playerRole);
                // Getting the grade name
                const gradeName = PlayerGrades.getGradeNameFromPips(season.pip);

                const progress = PlayerGrades.getGradeProgress(season.pip);

                return (
                    <div
                        key={season.id}
                        className="seasonPreviewCard dbdCard cardHover"
                        onClick={() => {
                            if (season.isCurrent) {
                                navigate(`/season/${season.id}`);
                            } else {
                                navigate(`/season/${season.id}/recap`);
                            }
                        }}>

                        {/* Variant type, role, matches played */}
                        <div>
                            <h4>{variantDisplayName}</h4>
                            <p>{season.playerRole}</p>
                            <p>Matches Played: {season.matches?.length || 0}</p>
                        </div>

                        {/* Platform, player name, season status */}
                        <div>
                            <p>{season.platform}</p>
                            <p>{season.playerName}</p>
                            {season.isCurrent ? (
                                <p>Current Season</p>
                            ) : (
                                season.result === "PASSED" ? (
                                    <p className="scribble">PASSED</p>
                                ) : (
                                    <p className="scribble">FAILED</p>
                                )
                            )}
                        </div>

                        {/* Grade display */}
                        <div>
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
                            <p>{gradeName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
