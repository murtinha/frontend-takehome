import { FaSpinner } from "react-icons/fa";

interface LoadingRainbowButtonProps {
  percentage: number;
}

export default function LoadingRainbowButton({
  percentage,
}: LoadingRainbowButtonProps) {
  return (
    <div className="relative">
      <div className="relative p-[1px] bg-rainbow-gradient">
        <button
          disabled
          className="w-full h-10 px-4 py-2 bg-white flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
        >
          {/* Spinner icon */}
          <FaSpinner className="w-4 h-4 animate-spin text-gray-600" />

          <span>Generating</span>
          <span className="text-primary font-semibold">{percentage}%</span>
        </button>
      </div>
    </div>
  );
}
