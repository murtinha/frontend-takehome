"use client";

import { useCraftForm } from "../craft-box/craft-form-context";
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
  const { watch, setValue } = useCraftForm();
  const selectedType = watch("type") || "items";

  const handleTypeChange = (type: string) => {
    setValue("type", type as "items" | "blocks");
  };

  return (
    <Selector
      options={craftOptions}
      value={selectedType}
      onChange={handleTypeChange}
      label="craft-type-label"
    />
  );
}
