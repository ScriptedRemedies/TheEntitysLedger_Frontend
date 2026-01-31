import {useEffect, useState} from "react";
import {BackendService} from "../services/backend.ts";
import {SeasonPreviewCard} from "./SeasonPreviewCard.tsx";

export const UserProfile = () => {

    // STATE : hold user data
    const [user, setUser] = useState<any>(null);
    // STATE : hold errors
    const [error, setError] = useState('');

    // Auto trigger to grab user info when the page loads
    useEffect(() => {
        BackendService.getUser(1)
            .then(data => {
                setUser(data);
            })
            .catch(() => {
                setError("Failed to load user.");
        });
    }, []);

    // RENDER : show error if error, show loading screen if !user
    if (error) return <div className="errorScreen">Error: {error}</div>;
    if (!user) return <div className="loadingScreen">Loading User Data...</div>

    // RENDER : show data if we have it
    return (
        <div className="userProfile">
            <h2 className="special-elite">Hello {user.name}, the Entity awaits...</h2>
            <div className="seasonPreviewCardContainer">
                <SeasonPreviewCard userId={user.id}/>
            </div>
        </div>
    );
}
