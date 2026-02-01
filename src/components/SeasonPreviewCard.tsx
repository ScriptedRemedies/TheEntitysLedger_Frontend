import {useEffect, useState} from "react";
import {BackendService} from '../services/backend.ts';
import {SEASON_VARIANTS, type SeasonModel} from "../models/SeasonModel.ts";

// Defining what props will be accepted
interface SeasonProps {
    userId: number;
}

export const SeasonPreviewCard = ({ userId }: SeasonProps) => {

    // STATE : hold season data
    const [seasons, setSeasons] = useState<SeasonModel[]>([]);
    // STATE : hold any errors
    const [error, setError] = useState('');

    // Grab seasons with user info on page load
    useEffect(() => {
        BackendService.getUserSeasons(userId)
            .then(data => {
                // Sorting seasons by isCurrent first then by newest creation date
                const sortedSeasons = data.sort((a, b) => {
                    // If a isCurrent then it should be first
                    if (a.isCurrent === true) return -1;
                    if (b.isCurrent === true) return 1;

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

                return (
                    <div key={season.id} className="seasonPreviewCard dbdCard cardHover">
                        <h4>{variantDisplayName}</h4>
                        <p>{season.playerRole}</p>
                        <p>{season.playerName}</p>
                        <p>{season.platform}</p>
                        <p>{season.badge}</p>
                        <p>{season.pip}</p>
                        {season.isCurrent ? (
                            <p>Current Season</p>
                        ) : (
                            season.result === "PASSED" ? (
                                <p className="oswald">PASSED</p>
                            ) : (
                                <p className="oswald">FAILED</p>
                            )
                        )}
                    </div>
                )
            })}
        </div>
    )
}
