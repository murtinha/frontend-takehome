import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { getBadgeColor, ValidBadge } from "../../app/utils/badge";
import { formatDate } from "../../app/utils/date";
import Badge from "../ui/badge";
import ItemCardActions from "./item-card-actions";

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
}: {
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
  badges: ValidBadge[];
  imageSrc: string;
  status: "pending" | "success" | "error";
  onRetry: () => void;
}) {
  const badgesWithColors = getBadgeColor(badges);

  return (
    <div className="flex w-full min-h-[80px] gap-2 flex-wrap">
      <Image
        src={imageSrc}
        alt="CreativeMode"
        width={80}
        height={80}
        className="w-20 h-20"
      />
      <div className="flex items-center gap-2 flex-1">
        <div className="flex py-2 w-full flex-col flex-1">
          <div className="flex items-baseline flex-wrap gap-y-2">
            <div className="text-2xl font-bold mr-4">{title}</div>
            <div className="flex gap-2">
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

          <div className="flex items-center mt-2 flex-wrap gap-y-2">
            <div className="flex items-center gap-2 mr-4 text-surface-secondary font-medium">
              <BsDownload className="w-4 h-4" />
              <span className="text-sm">{downloads}</span>
              <span className="text-sm">downloads</span>
            </div>
            <div className="flex items-center gap-2 mr-4 text-surface-secondary font-medium">
              <HiOutlineSparkles className="w-4 h-4" />
              <span className="text-sm">
                Created on {formatDate(createdAt)}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              {badgesWithColors.map((badge, index) => (
                <Badge key={index} variant={badge.color} size="sm">
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
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
