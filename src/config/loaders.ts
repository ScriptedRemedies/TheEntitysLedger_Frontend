import {BackendService} from "../services/backend.ts";
import type {LoaderFunctionArgs} from "react-router-dom";

// USER LOADER : fetches user, runs on app start
export const rootLoader = async() => {
    // TODO: Need to implement login logic
    const user = await BackendService.getUser(1);
    if (!user) throw new Response("User Not Found", {status: 404});
    return {user};
}

// SEASON DETAIL LOADER : fetches specific season data
export const seasonLoader = async ({params}: LoaderFunctionArgs) => {
    if (!params.id) throw new Error("No Season ID provided");

    const season = await BackendService.getSeasonById(params.id);
    if (!season) throw new Response("Season Not Found", {status: 404});

    return { season };
}
