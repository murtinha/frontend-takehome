"use client";

import { useCraftForm } from "../craft-box/craft-form-context";
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
  const { watch, setValue } = useCraftForm();
  const selectedLanguage = watch("language");

  const handleLanguageChange = (language: string) => {
    setValue("language", language);
  };

  return (
    <Selector
      options={languageOptions}
      value={selectedLanguage}
      onChange={handleLanguageChange}
      label="craft-language-label"
      size={size}
    />
  );
}
