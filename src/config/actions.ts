import {BackendService} from "../services/backend.ts";
import {redirect} from "react-router-dom";
import {SEASON_VARIANTS, type VariantFeatures} from "../models/SeasonModel.ts";
import {BLOOD_MONEY_BONUSES, BLOOD_MONEY_PENALTIES} from "../models/GameData.ts";

export const startSeasonAction = async ({ request }: { request: Request }) => {
    // Grabs the form data from the UI
    const formData = await request.formData();

    const variantId = formData.get("variantId") as string;

    const variantDef = SEASON_VARIANTS.find(v => v.id === variantId);
    const defaultFeatures = variantDef ? variantDef.features : {};

    let variantSettings: Partial<VariantFeatures> = {};

    switch (variantId) {
        case 'ADEPT_HARDCORE':
            variantSettings = {
                fourthPerkOption: formData.get("fourthPerkOption") as 'BLOCKED' | 'RANDOM'
            };
            break;

        case 'BLOOD_MONEY':
            {
                const penaltyString = formData.get("penalties") as string;
                const penaltyIds = penaltyString ? penaltyString.split(',') : [];
                const activePenalties = BLOOD_MONEY_PENALTIES.filter(p => penaltyIds.includes(p.id));

                const bonusString = formData.get("bonuses") as string;
                const bonusIds = bonusString ? bonusString.split(',') : [];
                const activeBonuses = BLOOD_MONEY_BONUSES.filter(b => bonusIds.includes(b.id));

                variantSettings = {
                    // We grab the input named "custom_difficulty" from BloodMoney.tsx
                    startingCurrency: Number(formData.get("startingAmount")),
                    activePenalties: activePenalties,
                    activeBonuses: activeBonuses,
                    coolDown: formData.get("coolDown") === 'true'
                };
                break;
            }

        // 'CLASSIC' and 'BASE_GAME' need no extra settings, so they stay empty {}
    }

    const finalVariantSettings = {
        ...defaultFeatures,
        ...variantSettings
    };

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
        variantSettings: finalVariantSettings,
        startingRoster: rosterArray
    };

    // Send it to backend
    const newSeason = await BackendService.startSeason(payload);

    // Navigates to newly created season detail page
    return redirect(`/season/${newSeason.id}`);
}
