import CraftSelector from "../craft-selector";

export default function CraftItemBox() {
  return (
    <div className="w-[760px] h-[286px] bg-white p-6">
      <div className="flex">
        <span>Craft</span> <CraftSelector />
      </div>
    </div>
  );
}
