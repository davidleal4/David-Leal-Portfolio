import React from "react";

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}