import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { formatDate } from "../../app/utils/date";
import Badge from "../ui/badge";
import ItemCardActions from "./item-card-actions";
import { ItemCardWithBadgesProps } from "./item-card.types";

export default function ItemCardMobile({
  title,
  version,
  mcVersion,
  language,
  downloads,
  createdAt,
  badgesWithColors,
  imageSrc,
  status,
  onRetry,
  onDownload,
  onRemix,
  onEdit,
  onPlay,
}: ItemCardWithBadgesProps) {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg border border-gray-200 p-4 gap-3">
      {/* Header with image and title */}
      <div className="flex items-start gap-3">
        <Image
          src={imageSrc}
          alt="CreativeMode"
          width={60}
          height={60}
          className="w-15 h-15 rounded-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold truncate">{title}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge variant="outline" size="sm">
              v{version}
            </Badge>
            <Badge variant="outline" size="sm">
              MC {mcVersion}
            </Badge>
            <Badge variant="outline" size="sm">
              {language}
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between text-sm text-surface-secondary">
        <div className="flex items-center gap-1">
          <BsDownload className="w-4 h-4" />
          <span>{downloads} downloads</span>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineSparkles className="w-4 h-4" />
          <span>{formatDate(createdAt)}</span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1 mx-auto">
        {badgesWithColors.map((badge, index) => (
          <Badge key={index} variant={badge.color} size="sm">
            {badge.text}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-center">
        <ItemCardActions
          status={status}
          onRetry={onRetry}
          onDownload={onDownload}
          onRemix={onRemix}
          onEdit={onEdit}
          onPlay={onPlay}
        />
      </div>
    </div>
  );
}
