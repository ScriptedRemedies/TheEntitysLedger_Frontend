import {useLoaderData} from "react-router-dom";
import type {SeasonModel} from "../models/SeasonModel.ts";
import {SeasonRules} from "./smallComponents/SeasonRules.tsx";

export const SeasonRecap = () => {
    const { season } = useLoaderData() as { season: SeasonModel };

    if (!season) return <div className="errorScreen">Season not found.</div>;
    return (
        <div className="seasonRecapContainer componentContainer">

            {/* Season Details and Stats */}
            <h2></h2>

            {/* Season Rules */}
            <h2 className="oswald">Season Rules</h2>
            <SeasonRules season={season} />

        </div>
    )
}
