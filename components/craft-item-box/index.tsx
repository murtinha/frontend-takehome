import CraftTypeSelector from "../craft-type-selector";

export default function CraftItemBox() {
  return (
    <div className="w-[760px] h-[286px] bg-white p-6">
      <div className="flex">
        <span>Craft</span> <CraftTypeSelector />
      </div>
    </div>
  );
}
