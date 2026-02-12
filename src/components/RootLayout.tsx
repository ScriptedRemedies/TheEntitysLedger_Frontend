import type {UserModel} from "../models/UserModel.ts";
import {Outlet, useLoaderData, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const RootLayout = () => {
    // Grab the user
    const { user } = useLoaderData() as { user: UserModel };

    // Hooks for navigation logic
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Helper to determine which buttons to show
    const renderHeaderActions = () => {
        const path = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        const activeTab = searchParams.get('tab') || 'matches';

        // SCENARIO : On the "Season Recap" page
        if (path.startsWith('/season/') && path.endsWith('recap')) {
            return (
                <button
                    className="button dbdButton"
                    // Goes back to the home page
                    onClick={() => navigate('')}
                >
                    Back
                </button>
            )
        }

        // SCENARIO : On the "Season Details" page and on the matches page
        if (path.startsWith('/season/') && path !== '/season/new' && activeTab === 'matches') {
            return (
                <div className="navButtonContainer">
                    <button
                        className="button dbdButton"
                        onClick={() => navigate('')}
                    >
                        Back
                    </button>

                    {/* Submit */}
                    <button
                        type="submit"
                        form="match-form"
                        className="button dbdButton"
                    >
                        Record Match
                    </button>
                </div>
            )
        }

        // SCENARIO : On the "Season Details" page and not on the matches page
        if (path.startsWith('/season/') && path !== '/season/new' && activeTab !== 'matches') {
            return (
                <button
                    className="button dbdButton"
                    onClick={() => navigate('')}
                >
                    Back
                </button>
            )
        }

        // SCENARIO : On the "Match Recap" page
        if (path.startsWith('matches') && path.endsWith('recap')) {
            return (
                <button
                    className="button dbdButton"
                    // Only go back 1 since the recap of a match can only be accessed through a season
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            )
        }

        // SCENARIO : On the "Start Season" page
        if (path === '/season/new' || path === '/start') {
            return (
                <div className="navButtonContainer">
                    <button
                        className="button dbdButton"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>

                    {/* Submits the form in the child component using the ID */}
                    <button
                        type="submit"
                        form="season-form"
                        className="button dbdButton"
                    >
                        Start Season
                    </button>
                </div>
            );
        }

        // SCENARIO : On the Dashboard / Home (Default)
        if (path === '/') {
            return (
                <button
                    className="button dbdButton"
                    onClick={() => navigate('/season/new')}
                >
                    Start New Season
                </button>
            );
        }

        // Default: Show nothing or a "Home" button
        return null;
    };

    return (
        <main>
            <div className="header">
                <h3>The Entity's Ledger</h3>

                {/* Render the dynamic buttons */}
                {renderHeaderActions()}
            </div>

            <Outlet context={{ user }} />
        </main>
    )
}
