"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SelectorOption, { Option } from "../selector-option";

interface SelectorProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  size?: "sm" | "lg";
}

export default function Selector({
  options,
  size = "lg",
  value,
  onChange,
  label,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.id === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();

    switch (e.key) {
      case "ArrowDown":
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case "ArrowUp":
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(options.length - 1);
        } else {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      case "Enter":
      case " ":
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0 && !options[focusedIndex].comingSoon) {
          onChange(options[focusedIndex].id);
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const handleOptionClick = (option: Option) => {
    if (!option.comingSoon) {
      onChange(option.id);
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 ml-2 rounded-md bg-white transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label}
      >
        {selectedOption?.icon && (
          <Image
            src={selectedOption.icon}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
            aria-hidden="true"
          />
        )}
        <span
          className={`font-medium ${
            size === "sm"
              ? "text-[16px] text-[#09090980]"
              : "text-[22px] text-[#090909]"
          }`}
        >
          {selectedOption?.name}
        </span>
        <svg
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.57601 0.200195H0.0605469V1.20347H1.3224V2.2002H2.57601V3.19692H3.83787V4.2002H5.09148V3.19692H6.34508V2.2002H7.60694V1.20347H8.86055V0.200195H6.34508L3.14044 0.200182L2.57601 0.200195Z"
            fill={size === "sm" ? "#09090980" : "#090909"}
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border-gray-200 rounded-md shadow-lg z-50 min-w-[140px] max-w-[90vw]"
          role="listbox"
          aria-labelledby={label}
        >
          {options.map((option, index) => (
            <SelectorOption
              key={option.id}
              option={option}
              index={index}
              value={value}
              focusedIndex={focusedIndex}
              handleOptionClick={handleOptionClick}
              setFocusedIndex={setFocusedIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
