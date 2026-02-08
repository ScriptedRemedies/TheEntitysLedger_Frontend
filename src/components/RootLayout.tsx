import type {UserModel} from "../models/UserModel.ts";
import {Outlet, useLoaderData, useLocation, useNavigate} from "react-router-dom";

export const RootLayout = () => {
    // Grab the user
    const { user } = useLoaderData() as { user: UserModel };

    // Hooks for navigation logic
    const location = useLocation();
    const navigate = useNavigate();

    // Helper to determine which buttons to show
    const renderHeaderActions = () => {
        const path = location.pathname;

        // SCENARIO : On the "Start Season" page
        if (path === '/season/new' || path === '/start') {
            return (
                <div style={{ display: 'flex', gap: '20px' }}>
                    <button
                        className="button dbdButton"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>

                    {/* This button lives in the header,
                        but submits the form in the child component using the ID */}
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
