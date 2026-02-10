import {Form, useOutletContext} from "react-router-dom";
import type {UserModel} from "../models/UserModel.ts";
import {useState} from "react";
import {SEASON_VARIANTS} from "../models/SeasonModel.ts";
import {BloodMoney} from "./variants/BloodMoney.tsx";
import {Classic} from "./variants/Classic.tsx";
import {Roulette} from "./variants/Roulette.tsx";
import {IronMan} from "./variants/IronMan.tsx";
import {Adept} from "./variants/Adept.tsx";
import {BaseGame} from "./variants/BaseGame.tsx";

const VARIANT_VIEWS: Record<string, React.FC> = {
    'CLASSIC': Classic,
    'ADEPT_HARDCORE': Adept,
    'BASE_GAME': BaseGame,
    'BLOOD_MONEY': BloodMoney,
    'ROULETTE': Roulette,
    'IRON_MAN': IronMan
}

export const StartSeason = () => {

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
            <h2 className="special-elite">Start a new Season</h2>

            <Form method="post" className="form" id="season-form">
                {/* Silently sends the user id */}
                <input type="hidden" name="userId" value={user.id}/>
                {/* Silently sends the selected state for platform */}
                <input type="hidden" name="platform" value={selectedPlatform} />
                {/* Silently send the player role */}
                <input type="hidden" name="playerRole" value={selectedPR} />
                {/* Silently send the variant id */}
                <input type="hidden" name="variantId" value={selectedVariant} />

                {/* The entire set up section before selecting the variant */}
                <div className="seasonSetup dbdCard">
                    <h2>Step <span className="englishSC">I</span>: Basic Details</h2>
                    {/* Player name */}
                    <div className="dbdFormGroup">
                        <h4>Enter Your Account Name</h4>
                        <input type="text" name="playerName" className="dbdInput" placeholder="playerUserName" required/>
                    </div>

                    {/* Platform */}
                    <div className="dbdFormGroup">
                        <h4>Choose Your Platform</h4>
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
                        <h4>Pick Your Role: <span className="scribble">{selectedPR === 'KILLER' ? 'KILLER' : 'SURVIVOR'}</span></h4>
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
                </div>

                {/* Killer view is first, survivor is the else statement */}
                {selectedPR === 'KILLER' ? (
                    <div className="startSeasonViewContainer">
                        {/* Season Variant Selection */}
                        <div className="dbdCard dbdFormGroup">
                            <h2>Step <span className="englishSC">II</span>: Select Your Season</h2>
                            <div className="inputButtonsContainer">
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

                            {/* Season Variant Rules */}
                            <h5>Difficulty Level</h5>
                            <p className="scribble">{activeVariantInfo.difficulty}</p>
                            <h5>Objective</h5>
                            <p>{activeVariantInfo.description}</p>
                            <h4>{activeVariantInfo.name} Rules</h4>
                            <ul className="variantRulesList">
                                {activeVariantInfo.rules.map((rule, index) => {
                                    const splitIndex = rule.indexOf(':');

                                    // Handles if a rule is missing the ":"
                                    if (splitIndex === -1) {
                                        return <li key={index}>{rule}</li>;
                                    }

                                    const title = rule.slice(0, splitIndex);
                                    const description = rule.slice(splitIndex + 1);

                                    return (
                                        <li key={index}>
                                            <span className="ruleTitle scribble">{title}:</span><br/><span className="ruleDescription">{description}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Season Variant Options & Character List */}
                        <div className="dbdCard">
                            <h2>Step <span className="englishSC">III</span>: Choose Your Options & Killers</h2>
                            {/* Render the specific component for the selected variant and the relevant character list */}
                            {ActiveVariantComponent && <ActiveVariantComponent />}
                        </div>
                    </div>
                ) : (
                    <div className="startSeasonViewContainer">
                        {/* Survivor options here */}
                    </div>
                )}

            </Form>

        </div>
    )
}
