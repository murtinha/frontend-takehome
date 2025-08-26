"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface CraftOption {
  id: string;
  name: string;
  icon: string;
  comingSoon?: boolean;
}

const craftOptions: CraftOption[] = [
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

export default function CraftSelector() {
  const [selectedOption, setSelectedOption] = useState("items");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCraft =
    craftOptions.find((option) => option.id === selectedOption) ||
    craftOptions[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 ml-2 rounded-md bg-white hover:border-gray-300 transition-all cursor-pointer min-w-[140px]"
      >
        <Image
          src={selectedCraft.icon}
          alt={selectedCraft.name}
          width={24}
          height={24}
          className="w-4 h-4 object-contain"
        />
        <span className="font-medium">{selectedCraft.name}</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {craftOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setSelectedOption(option.id);
                setIsOpen(false);
              }}
              disabled={option.comingSoon}
              className={`
                w-full flex items-center gap-3 px-4 py-3
                ${
                  selectedOption === option.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-gray-50"
                }
                ${
                  option.comingSoon
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
            >
              {!option.comingSoon && (
                <Image
                  src={option.icon}
                  alt={option.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              )}
              <span className="text-sm">
                {option.name} {option.comingSoon && "(Coming Soon)"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
