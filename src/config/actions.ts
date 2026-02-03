import {BackendService} from "../services/backend.ts";
import {redirect} from "react-router-dom";

export const startSeasonAction = async ({ request }: { request: Request }) => {
    // Grabs the form data from the UI
    const formData = await request.formData();

    // Parse the roster string back into an array
    const rosterString = formData.get("startingRoster") as string;
    const rosterArray = rosterString ? JSON.parse(rosterString) : [];

    // Formats it for the API
    const payload = {
        userId: Number(formData.get("userId")),
        variantId: formData.get("variantId") as string,
        playerRole: formData.get("playerRole") as string,
        platform: formData.get("platform") as string,
        playerName: formData.get("playerName") as string,
        startingRoster: rosterArray
    };

    // Send it to backend
    const newSeason = await BackendService.startSeason(payload);

    // Navigates to newly created season detail page
    return redirect(`season/${newSeason.id}`);
}
