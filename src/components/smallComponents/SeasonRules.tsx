import {SEASON_VARIANTS, type SeasonModel} from "../../models/SeasonModel.ts";

interface SeasonRulesProps {
    season: SeasonModel
}

export const SeasonRules = ({ season }: SeasonRulesProps) => {
    // Getting the variant info
    const variantInfo = SEASON_VARIANTS.find(v => v.id === season.variantId) || SEASON_VARIANTS[0]

    return (
        <div className="dbdCard">
            {/* Rules */}
            <ul className="variantRulesList">
                {variantInfo.rules.map((rule, index) => {
                    const splitIndex = rule.indexOf(':');

                    // Handles if a rule is missing the ":"
                    if (splitIndex === -1) {
                        return <li key={index}>{rule}</li>;
                    }

                    const title = rule.slice(0, splitIndex);
                    const description = rule.slice(splitIndex + 1);

                    return (
                        <li key={index}>
                            <span className="ruleTitle scribble">{title}:</span><br/><span
                            className="ruleDescription">{description}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
