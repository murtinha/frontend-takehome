"use client";

import { useEffect, useState } from "react";
import Spinner from "../spinner";

export default function LoadingRainbowButton() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let currentPercentage = 0;
    const targetPercentage = 99;
    const duration = 5000;
    const interval = 50;
    const incrementPerStep =
      (targetPercentage - currentPercentage) / (duration / interval);

    const animationTimer = setInterval(() => {
      currentPercentage = Math.min(
        currentPercentage + incrementPerStep,
        targetPercentage
      );

      setPercentage(Math.round(currentPercentage));

      if (currentPercentage >= targetPercentage) {
        clearInterval(animationTimer);
      }
    }, interval);

    return () => {
      clearInterval(animationTimer);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative p-[1px] bg-rainbow-gradient">
        <button
          disabled
          className="w-full h-10 px-4 py-2 bg-white flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
        >
          <Spinner size="sm" />

          <span>Generating</span>
          <span className="text-primary font-semibold">{percentage}%</span>
        </button>
      </div>
    </div>
  );
}
