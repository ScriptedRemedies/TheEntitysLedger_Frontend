import {SeasonPreviewCard} from "./SeasonPreviewCard.tsx";
import type {UserModel} from "../models/UserModel.ts";
import {useNavigate, useOutletContext} from "react-router-dom";

export const UserProfile = () => {
    const navigate = useNavigate();
    // STATE : hold user data
    const { user } = useOutletContext<{ user: UserModel}>();

    return (
        <div className="userProfile componentContainer">
            <h2 className="special-elite">Hello {user.name}, the Entity awaits...</h2>
            <div className="seasonPreviewCardContainer">
                <button className="button dbdButton" onClick={() => navigate('/season/new')}>Start New Season</button>
                <SeasonPreviewCard userId={user.id}/>
            </div>
        </div>
    );
}
