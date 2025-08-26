import { BsDownload } from "react-icons/bs";
import { FiEdit, FiPlay } from "react-icons/fi";
import { GrRefresh } from "react-icons/gr";
import { PiGitBranchThin } from "react-icons/pi";
import FailedIcon from "../ui/icons/failed-icon";
import LoadingRainbowButton from "../ui/loading-rainbow-button";

export default function ItemCardActions({
  status,
  pendingPercentage,
  onRetry,
  onDownload,
  onRemix,
  onEdit,
  onPlay,
}: {
  status: "pending" | "error" | "success";
  pendingPercentage: number;
  onRetry: () => void;
  onDownload: () => void;
  onRemix: () => void;
  onEdit: () => void;
  onPlay: () => void;
}) {
  return (
    <>
      {status === "pending" && (
        <div className="flex items-center ml-4 mobile:ml-0 mobile:mt-4 mobile:w-full mobile:justify-center">
          <LoadingRainbowButton percentage={pendingPercentage} />
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center ml-4 mobile:ml-0 mobile:mt-4 mobile:w-full mobile:justify-center">
          <div className="flex items-center gap-2 mobile:flex-wrap mobile:justify-center">
            <button
              disabled
              className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 text-sm font-medium"
            >
              <FailedIcon />
              <span>Failed</span>
            </button>

            <button
              onClick={onRetry}
              className="flex items-center gap-2 px-4 py-3 border text-sm font-medium hover:bg-primary-hover "
            >
              <span>Retry</span>
              <GrRefresh className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-center ml-4 mobile:ml-0 mobile:mt-4 mobile:w-full mobile:justify-center">
          <div className="flex items-center gap-2 mobile:flex-wrap mobile:justify-center">
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-3 bg-primary text-sm font-medium hover:bg-primary-hover"
            >
              <BsDownload className="w-4 h-4" />
            </button>

            <button
              onClick={onRemix}
              className="flex items-center gap-2 px-4 py-3 border text-sm font-medium hover:bg-primary-hover "
            >
              <span>Remix</span>
              <PiGitBranchThin className="w-4 h-4" />
            </button>

            <button
              onClick={onEdit}
              className="flex items-center gap-2 px-4 py-3 border text-sm font-medium hover:bg-primary-hover "
            >
              <FiEdit className="w-4 h-4" />
            </button>

            <button
              onClick={onPlay}
              className="flex items-center gap-2 px-4 py-3 border text-sm font-medium hover:bg-primary-hover "
            >
              <FiPlay className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
