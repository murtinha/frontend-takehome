import { BadgeColor } from "../../utils/badge";

export interface ItemCardProps {
  title: string;
  version: string;
  mcVersion: string;
  language: string;
  onDownload: () => void;
  onRemix: () => void;
  onEdit: () => void;
  onPlay: () => void;
  downloads: number;
  createdAt: Date | string;
  badges: string[];
  imageSrc: string;
  status: "pending" | "success" | "error";
  onRetry: () => void;
}

export interface ItemCardWithBadgesProps extends ItemCardProps {
  badgesWithColors: Array<{ text: string; color: BadgeColor }>;
}
