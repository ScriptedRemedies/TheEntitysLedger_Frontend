import {SeasonPreviewCard} from "./smallComponents/SeasonPreviewCard.tsx";
import type {UserModel} from "../models/UserModel.ts";
import {useOutletContext} from "react-router-dom";

export const UserProfile = () => {
    // STATE : hold user data
    const { user } = useOutletContext<{ user: UserModel}>();

    return (
        <div className="componentContainer">
            <h2 className="special-elite">Hello {user.name}, the Entity awaits...</h2>

            {/* TODO: put the killer vs survivor buttons that switches the view */}

            {/* TODO: make it a list of killer seasons and survivor seasons */}
            <div className="seasonPreviewCardContainer">
                <SeasonPreviewCard userId={user.id}/>
            </div>
        </div>
    );
}
