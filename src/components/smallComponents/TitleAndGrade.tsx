import {PlayerGrades} from "../../models/PlayerGrades.ts";
import type {SeasonModel} from "../../models/SeasonModel.ts";

interface TitleAndGradeProps {
    season: SeasonModel
    title: string;
}

export const TitleAndGrade = ({ season, title }: TitleAndGradeProps) => {
    // Getting the grade image url
    const gradeImageUrl = PlayerGrades.getGradeImageFromPips(season.pip, season.playerRole);
    // Getting the grade name
    const gradeName = PlayerGrades.getGradeNameFromPips(season.pip);
    // Calculate Progress
    const progress = PlayerGrades.getGradeProgress(season.pip);

    return (
        <div className="matchHeader">
            <h2 className="oswald">{title}</h2>

            <div className="gradeDisplay">
                {/* Badge */}
                <div className="grade">
                    <p className="englishSC">{PlayerGrades.getRomanGradeName(season.pip)}</p>
                    <img src={gradeImageUrl} alt={gradeName}/>
                </div>
                {/* Pips */}
                <div className="pipContainer">
                    {Array.from({ length: progress.max }).map((_, index) => (
                        <div
                            key={index}
                            className={`pip ${index < progress.current ? 'filled' : ''}`}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
