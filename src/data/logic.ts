import laptops from './laptops.json';

export interface UserPreferences {
    course: string;
    budgetMin: number;
    budgetMax: number;
    programming: boolean;
    gaming: boolean;
    type: 'new' | 'second-hand' | 'both';
}

export const filterLaptops = (prefs: UserPreferences) => {
    // If only second-hand is requested, we handle that elsewhere (SecondHand.tsx)
    // but for 'both' or 'new', we filter our main list.
    if (prefs.type === 'second-hand') return [];

    return laptops.filter(laptop => {
        // 1. Budget Filter
        if (laptop.price > prefs.budgetMax) return false;

        // 2. Course Suitability
        // If the laptop is tagged suitable for the course, it matches.
        // Or if it's a "general" course like Arts, most laptops work.
        const isSuitableForCourse = laptop.courseSuitability.includes(prefs.course) || laptop.courseSuitability.includes("All");
        if (!isSuitableForCourse) return false;

        // 3. Usage Constraints
        // If gaming is required, exclude basic usage level
        if (prefs.gaming && laptop.usageLevel === 'basic') return false;

        // If programming is heavy (e.g. Engineering), exclude basic if possible, but budget rules supreme.

        return true;
    }).sort((a, b) => {
        // Rank by price (closest to max budget might be better spec-wise, or lower is better? 
        // Let's sort by descending price (proxy for specs) to give best performance within budget)
        return b.price - a.price;
    }).slice(0, 3);
};
