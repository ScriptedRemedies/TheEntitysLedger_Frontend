import {Form, useNavigate, useOutletContext} from "react-router-dom";
import type {UserModel} from "../models/UserModel.ts";
import {useState} from "react";
import {SEASON_VARIANTS} from "../models/SeasonModel.ts";
import {BloodMoney} from "./variants/BloodMoney.tsx";
import {Classic} from "./variants/Classic.tsx";

const VARIANT_VIEWS: Record<string, React.FC> = {
    'CLASSIC': Classic,
    'BLOOD_MONEY': BloodMoney
}

export const StartSeason = () => {
    // Back button, navigates to previous screen
    const navigate = useNavigate();

    // Gets userId
    const { user } = useOutletContext<{ user: UserModel }>();

    // STATE : tracks the selected state of the platform buttons
    const [selectedPlatform, setSelectedPlatform] = useState("PC");
    // STATE : tracks the selected state of the player role
    const [selectedPR, setSelectedPR] = useState("KILLER");
    // STATE : tracks the selected state of the variant
    const [selectedVariant, setSelectedVariant] = useState(SEASON_VARIANTS[0].id);

    // Used to display the rules for each variant
    const activeVariantInfo = SEASON_VARIANTS.find(v => v.id === selectedVariant) || SEASON_VARIANTS[0];
    const ActiveVariantComponent = VARIANT_VIEWS[selectedVariant] || null;

    return (
        <div className="componentContainer">
            <h1>Start a new Season</h1>
            <button className="button dbdButton" onClick={() => navigate(-1)}>Cancel</button>

            <Form method="post" className="form">
                {/* Silently sends the user id */}
                <input type="hidden" name="userId" value={user.id}/>
                {/* Silently sends the selected state for platform */}
                <input type="hidden" name="platform" value={selectedPlatform} />
                {/* Silently send the player role */}
                <input type="hidden" name="playerRole" value={selectedPR} />
                {/* Silently send the variant id */}
                <input type="hidden" name="variantId" value={selectedVariant} />

                {/* Player Name & Platform */}
                <div className="dbdFormGroup">
                    <label>Player Name</label>
                    <input type="text" name="playerName" className="dbdInput" required/>
                </div>

                <div className="dbdFormGroup">
                    <label>Platform</label>
                    <div className="inputButtonsContainer">
                        {/* PC */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPlatform === 'PC' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPlatform('PC')}>
                            PC
                        </button>
                        {/* PlayStation */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPlatform === 'PlayStation' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPlatform('PlayStation')}>
                            PlayStation
                        </button>
                        {/* XBOX */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPlatform === 'XBOX' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPlatform('XBOX')}>
                            XBOX
                        </button>
                        {/* Switch */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPlatform === 'Switch' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPlatform('Switch')}>
                            Switch
                        </button>
                        {/* Mobile */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPlatform === 'Mobile' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPlatform('Mobile')}>
                            Mobile
                        </button>
                    </div>
                </div>

                {/* Player Role Selection */}
                <div className="dbdFormGroup">
                    <label>Role</label>
                    <div className="inputButtonsContainer">
                        {/* Killer */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPR === 'KILLER' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPR('KILLER')}>
                            <img src="/assets/icons/killerIcon.png" alt="Killer"/>
                        </button>
                        {/* Survivor */}
                        <button
                            type="button"
                            className={`button dbdInputButton ${selectedPR === 'SURVIVOR' ? 'selectedButton' : ''}`}
                            onClick={() => setSelectedPR('SURVIVOR')}>
                            <img src="/assets/icons/survivorIcon.png" alt="Survivor"/>
                        </button>
                    </div>
                </div>
                <p>{selectedPR === 'KILLER' ? 'KILLER' : 'SURVIVOR'}</p>

                {/* Killer view is first, survivor is the else statement */}
                {selectedPR === 'KILLER' ? (
                    <div className="startSeasonViewContainer">
                        {/* Season Variant Selection */}
                        <div className="dbdFormGroup">
                            <label>Season Variant</label>
                            <div className="inputButtonsContainer variantContainer">
                                {SEASON_VARIANTS.map((variant) => (
                                    <button
                                        key={variant.id}
                                        type="button"
                                        className={`button dbdInputButton ${selectedVariant === variant.id ? 'selectedButton' : ''}`}
                                        onClick={() => setSelectedVariant(variant.id)}>
                                        {variant.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Season Variant Rules */}
                        <div className="dbdCard">
                            <div>
                                <h3>{activeVariantInfo.name}</h3>
                                <p>{activeVariantInfo.difficulty}</p>
                                <p>{activeVariantInfo.description}</p>
                                <ul>
                                    {activeVariantInfo.rules.map((rule, index) => (
                                        <li key={index}>{rule}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Season Variant Options */}
                        <div className="variantOptionsContainer" style={{ marginTop: '20px' }}>

                            {/* Render the specific component for the selected variant */}
                            {ActiveVariantComponent && <ActiveVariantComponent />}
                        </div>
                    </div>
                ) : (
                    <div className="startSeasonViewContainer">
                        {/* Survivor options here */}
                    </div>
                )}

                <button type="submit" className="button dbdButton">Start Season</button>
            </Form>

        </div>
    )
}
