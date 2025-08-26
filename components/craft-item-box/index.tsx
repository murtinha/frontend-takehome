import CraftLanguageSelector from "../craft-language-selector";
import CraftTypeSelector from "../craft-type-selector";

export default function CraftItemBox() {
  return (
    <div className="max-w-[760px] max-h-[286px] w-full h-full bg-white p-6">
      <div className="flex">
        <div className="flex flex-1">
          <span>Craft</span> <CraftTypeSelector />
        </div>
        <CraftLanguageSelector />
      </div>
    </div>
  );
}
