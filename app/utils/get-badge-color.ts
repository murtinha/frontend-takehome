const tagColorMap: Record<
  string,
  "green" | "blue" | "orange" | "red" | "pink" | "teal"
> = {
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

const badgeColors = ["green", "blue", "orange", "pink", "teal", "red"] as const;

/**
 * Gets the color of a badge based on the tag
 * @param badges - The badges to get the color of
 * @returns The color of the badge
 */
export function getBadgeColor(
  badges: string[]
): Array<{ text: string; color: (typeof badgeColors)[number] }> {
  return badges.map((badge) => {
    const normalizedBadge = badge.toLowerCase().trim();
    const predefinedColor = tagColorMap[normalizedBadge];

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
