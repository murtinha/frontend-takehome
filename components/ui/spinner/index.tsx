import { FaSpinner } from "react-icons/fa";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

export default function Spinner({ size = "md" }: SpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <FaSpinner
      className={`animate-spin ${sizeClasses[size]}`}
      aria-label="Loading"
    />
  );
}
