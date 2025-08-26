"use client";

import { useState } from "react";
import Selector from "../ui/selector";
import { Option } from "../ui/selector-option";

const languageOptions: Option[] = [
  {
    id: "java",
    name: "Java",
  },
  {
    id: "kotlin",
    name: "Kotlin",
  },
  {
    id: "python",
    name: "Python",
  },
  {
    id: "javascript",
    name: "JavaScript",
    comingSoon: true,
  },
];

export default function CraftLanguageSelector({
  size = "lg",
}: {
  size?: "sm" | "lg";
}) {
  const [selectedOption, setSelectedOption] = useState("java");

  return (
    <Selector
      options={languageOptions}
      value={selectedOption}
      onChange={setSelectedOption}
      label="craft-language-label"
      size={size}
    />
  );
}
