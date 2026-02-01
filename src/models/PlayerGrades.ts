type GradeDefinition = {
    name: string;
    roman: string;
    threshold: number;
    killerImageUrl: string;
    survivorImageUrl: string;
}

const GRADE_THRESHOLDS: GradeDefinition[] = [
    { name: 'Iridescent I', roman: 'I', threshold: 85, killerImageUrl: "/assets/grades/killerIridescent_I.png", survivorImageUrl: "/assets/grades/survivorIridescent_I.png"},
    { name: 'Iridescent II', roman: 'II', threshold: 80, killerImageUrl: "/assets/grades/killerIridescent.png", survivorImageUrl: "/assets/grades/survivorIridescent.png"},
    { name: 'Iridescent III', roman: 'III', threshold: 75, killerImageUrl: "/assets/grades/killerIridescent.png", survivorImageUrl: "/assets/grades/survivorIridescent.png"},
    { name: 'Iridescent IV', roman: 'IV', threshold: 70, killerImageUrl: "/assets/grades/killerIridescent.png", survivorImageUrl: "/assets/grades/survivorIridescent.png"},
    { name: 'Gold I', roman: 'I', threshold: 65, killerImageUrl: "/assets/grades/killerGold.png", survivorImageUrl: "/assets/grades/survivorGold.png"},
    { name: 'Gold II', roman: 'II', threshold: 60, killerImageUrl: "/assets/grades/killerGold.png", survivorImageUrl: "/assets/grades/survivorGold.png"},
    { name: 'Gold III', roman: 'III', threshold: 55, killerImageUrl: "/assets/grades/killerGold.png", survivorImageUrl: "/assets/grades/survivorGold.png"},
    { name: 'Gold IV', roman: 'IV', threshold: 50, killerImageUrl: "/assets/grades/killerGold.png", survivorImageUrl: "/assets/grades/survivorGold.png"},
    { name: 'Silver I', roman: 'I', threshold: 45, killerImageUrl: "/assets/grades/killerSilver.png", survivorImageUrl: "/assets/grades/survivorSilver.png"},
    { name: 'Silver II', roman: 'II', threshold: 40, killerImageUrl: "/assets/grades/killerSilver.png", survivorImageUrl: "/assets/grades/survivorSilver.png"},
    { name: 'Silver III', roman: 'III', threshold: 35, killerImageUrl: "/assets/grades/killerSilver.png", survivorImageUrl: "/assets/grades/survivorSilver.png"},
    { name: 'Silver IV', roman: 'IV', threshold: 30, killerImageUrl: "/assets/grades/killerSilver.png", survivorImageUrl: "/assets/grades/survivorSilver.png"},
    { name: 'Bronze I', roman: 'I', threshold: 26, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorBronze.png"},
    { name: 'Bronze II', roman: 'II', threshold: 22, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorBronze.png"},
    { name: 'Bronze III', roman: 'III', threshold: 18, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorBronze.png"},
    { name: 'Bronze IV', roman: 'IV', threshold: 14, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorBronze.png"},
    { name: 'Ash I', roman: 'I', threshold: 10, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorAsh.png"},
    { name: 'Ash II', roman: 'II', threshold: 6, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorAsh.png"},
    { name: 'Ash III', roman: 'III', threshold: 3, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorAsh.png"},
    { name: 'Ash IV', roman: 'IV', threshold: 0, killerImageUrl: "/assets/grades/killerBronze.png", survivorImageUrl: "/assets/grades/survivorAsh.png"},
];

export const PlayerGrades = {

    // Getting the image url
    getGradeImageFromPips: (totalPips: number, playerRole: string): string => {
        for (const grade of GRADE_THRESHOLDS) {
            if (totalPips >= grade.threshold) {
                if (playerRole === 'KILLER') {
                    return grade.killerImageUrl;
                } else {
                    return grade.survivorImageUrl;
                }
            }
        }
        if (playerRole === 'KILLER') {
            return '/assets/grades/killerAsh.png';
        } else {
            return '/assets/grades/survivorAsh.png';
        }
    },
    // Getting the official grade name for alt in img tag
    getGradeNameFromPips: (totalPips: number): string => {
        for (const grade of GRADE_THRESHOLDS) {
            if (totalPips >= grade.threshold) {
                return grade.name;
            }
        }
        return 'Ash I';
    },
    // Getting the roman grade name
    getRomanGradeName: (totalPips: number): string => {
        for (const grade of GRADE_THRESHOLDS) {
            if (totalPips >= grade.threshold) {
                return grade.roman;
            }
        }
        return 'I';
    },
    // Calculating the pips to make sure user does not go below grades
    calculateSafePipUpdate: (currentTotalPips: number, pipChange: number): number => {
        const currentGrade = GRADE_THRESHOLDS.find(g => currentTotalPips >= g.threshold);
        const floor = currentGrade ? currentGrade.threshold : 0;
        const potentialNewTotal = currentTotalPips + pipChange;

        if (potentialNewTotal < floor) {
            return floor;
        }
        if (potentialNewTotal > 85) {
            return 85;
        }

        return potentialNewTotal;
    },
    // Getting the pip number between grades
    getGradeProgress: (totalPips: number): { current: number; max: number; percent: number } => {
        const currentGradeIndex = GRADE_THRESHOLDS.findIndex(g => totalPips >= g.threshold);

        if (currentGradeIndex === -1) return { current: 0, max: 3, percent: 0 };

        const currentGrade = GRADE_THRESHOLDS[currentGradeIndex];

        if (currentGrade.name === 'Iridescent I') {
            return { current: 5, max: 5, percent: 100 };
        }

        const nextGrade = GRADE_THRESHOLDS[currentGradeIndex - 1];
        const floor = currentGrade.threshold;
        const ceiling = nextGrade.threshold;
        const currentProgress = totalPips - floor; // e.g. 37 - 35 = 2 pips
        const maxPipsForGrade = ceiling - floor;   // e.g. 40 - 35 = 5 pips total width
        const percentage = (currentProgress / maxPipsForGrade) * 100;

        return {
            current: currentProgress,
            max: maxPipsForGrade,
            percent: percentage
        };
    }
}
