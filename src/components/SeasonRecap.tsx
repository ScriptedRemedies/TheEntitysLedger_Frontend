import {useLoaderData} from "react-router-dom";
import type {SeasonModel} from "../models/SeasonModel.ts";

export const SeasonRecap = () => {
    const { season } = useLoaderData() as { season: SeasonModel };

    if (!season) return <div className="errorScreen">Season not found.</div>;
    return (
        <div className="seasonRecapContainer">

        </div>
    )
}
