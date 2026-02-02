import {useLoaderData, useNavigate, useOutletContext} from 'react-router-dom';
import type {SeasonModel} from "../models/SeasonModel.ts";
import type {UserModel} from "../models/UserModel.ts";

export const SeasonDetail = () => {
    // Initializing the hooks for routing
    const navigate = useNavigate();

    // STATE : hold the season data if we have it, if not starts as null
    const { season } = useLoaderData() as { season: SeasonModel };
    // STATE : holds the user
    const { user } = useOutletContext<{ user: UserModel}>();

    // Handling the UI views for loading and errors
    if (!season) return <div className="errorScreen">Season not found.</div>;

    return (
        <div className="seasonDetailContainer componentContainer">
            <h1>Season Details</h1>
            <p>{user.id}</p>
            <button className="button dbdButton" onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
