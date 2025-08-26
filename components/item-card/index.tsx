import { getBadgeColor, ValidBadge } from "../../app/utils/badge";
import { useMediaQuery } from "../../lib/hooks/use-media-query";
import ItemCardDesktop from "./item-card-desktop";
import ItemCardMobile from "./item-card-mobile";
import { ItemCardProps } from "./item-card.types";

export default function ItemCard({
  title,
  version,
  mcVersion,
  language,
  downloads,
  createdAt,
  badges,
  imageSrc,
  status,
  onRetry,
  onDownload,
  onRemix,
  onEdit,
  onPlay,
}: ItemCardProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const badgesWithColors = getBadgeColor(badges as ValidBadge[]);

  const props = {
    title,
    version,
    mcVersion,
    language,
    downloads,
    createdAt,
    badges,
    badgesWithColors,
    imageSrc,
    status,
    onRetry,
    onDownload,
    onRemix,
    onEdit,
    onPlay,
  };

  return isDesktop ? (
    <ItemCardDesktop {...props} />
  ) : (
    <ItemCardMobile {...props} />
  );
}
