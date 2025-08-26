"use client";

import { useState } from "react";
import Selector from "../ui/selector";
import { Option } from "../ui/selector-option";

const craftOptions: Option[] = [
  {
    id: "items",
    name: "Item",
    icon: "/items.webp",
  },
  {
    id: "blocks",
    name: "Blocks",
    icon: "",
    comingSoon: true,
  },
];

export default function CraftTypeSelector() {
  const [selectedOption, setSelectedOption] = useState("items");

  return (
    <Selector
      options={craftOptions}
      value={selectedOption}
      onChange={setSelectedOption}
      label="craft-type-label"
    />
  );
}
