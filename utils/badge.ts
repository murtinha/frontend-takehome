export type BadgeColor = "green" | "blue" | "orange" | "red" | "pink" | "teal";

export type ValidBadge =
  | "fun"
  | "teamwork"
  | "adventure"
  | "missions"
  | "combat"
  | "strategy"
  | "rescue"
  | "exploration"
  | "puzzles"
  | "explosives"
  | "vehicles"
  | "survival"
  | "utilities"
  | "weapons"
  | "equipment"
  | "tools"
  | "stealth"
  | "tactics"
  | "challenges"
  | "gear"
  | "ammunition"
  | "armor";

export const VALID_BADGES: ValidBadge[] = [
  "fun",
  "teamwork",
  "adventure",
  "missions",
  "combat",
  "strategy",
  "rescue",
  "exploration",
  "puzzles",
  "explosives",
  "vehicles",
  "survival",
  "utilities",
  "weapons",
  "equipment",
  "tools",
  "stealth",
  "tactics",
  "challenges",
  "gear",
  "ammunition",
  "armor",
];

const tagColorMap: Record<ValidBadge, BadgeColor> = {
  // Green colors
  fun: "green",
  teamwork: "green",
  adventure: "green",
  missions: "green",

  // Blue colors
  combat: "blue",
  strategy: "blue",
  rescue: "blue",
  exploration: "blue",
  puzzles: "blue",

  // Orange colors
  explosives: "orange",
  vehicles: "orange",
  survival: "orange",
  utilities: "orange",

  // Red colors
  weapons: "red",
  equipment: "red",
  tools: "red",

  // Pink colors
  stealth: "pink",
  tactics: "pink",
  challenges: "pink",

  // Teal colors
  gear: "teal",
  ammunition: "teal",
  armor: "teal",
};

const badgeColors: BadgeColor[] = [
  "green",
  "blue",
  "orange",
  "pink",
  "teal",
  "red",
];

/**
 * Gets the color of badges based on the badge name
 * @param badges - Array of valid badge strings
 * @returns Array of badge text and color
 */
export function getBadgeColor(
  badges: ValidBadge[]
): Array<{ text: string; color: BadgeColor }> {
  return badges.map((badge) => {
    const predefinedColor = tagColorMap[badge];

    if (predefinedColor) {
      return {
        text: badge,
        color: predefinedColor,
      };
    }

    const randomColor =
      badgeColors[Math.floor(Math.random() * badgeColors.length)];
    return {
      text: badge,
      color: randomColor,
    };
  });
}

/**
 * Serializes an array of badge strings to a JSON string for database storage
 */
export function serializeBadges(badges: ValidBadge[]): string {
  return JSON.stringify(badges);
}

/**
 * Deserializes a JSON string from the database back to an array of badge strings
 */
export function deserializeBadges(badgesJson: string): ValidBadge[] {
  try {
    const parsed = JSON.parse(badgesJson);
    if (
      Array.isArray(parsed) &&
      parsed.every((badge) => VALID_BADGES.includes(badge))
    ) {
      return parsed;
    }
    return [];
  } catch (error) {
    console.error("Error parsing badges JSON:", error);
    return [];
  }
}
