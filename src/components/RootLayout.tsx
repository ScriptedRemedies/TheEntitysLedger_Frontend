import type {UserModel} from "../models/UserModel.ts";
import {Outlet, useLoaderData} from "react-router-dom";

export const RootLayout = () => {
    // Grab the user
    const { user } = useLoaderData() as { user: UserModel };

    return (
        <main>
            <h1>The Entity's Ledge</h1>

            <Outlet context={{ user }} />

        </main>
    )
}
