export interface Option {
  id: string;
  name: string;
  icon?: string;
  comingSoon?: boolean;
}

interface SelectorOptionProps {
  option: Option;
  index: number;
  value: string;
  focusedIndex: number;
  handleOptionClick: (option: Option) => void;
  setFocusedIndex: (index: number) => void;
}

export default function SelectorOption({
  option,
  index,
  value,
  focusedIndex,
  handleOptionClick,
  setFocusedIndex,
}: SelectorOptionProps) {
  const isFocused = focusedIndex === index;

  return (
    <div
      key={option.id}
      role="option"
      aria-selected={value === option.id}
      className={`flex items-center gap-2 px-4 py-3 cursor-pointer transition-color ${
        isFocused ? "bg-primary text-white" : ""
      } ${
        option.comingSoon
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-primary hover:text-white"
      }`}
      onClick={() => handleOptionClick(option)}
      onMouseEnter={() => setFocusedIndex(index)}
    >
      {option.icon && (
        <img
          src={option.icon}
          alt=""
          className="w-4 h-4 object-contain"
          aria-hidden="true"
        />
      )}
      <span className="font-medium">
        {option.name} {option.comingSoon && "(Coming Soon)"}
      </span>
    </div>
  );
}
