import ItemCard from "../item-card";

export default function ItemListSection() {
  return (
    <div className="flex w-full px-10 flex-col mb-10">
      <div className="text-2xl font-bold">Your Items</div>
      <div className="text-sm">
        Your Items will appear here, get started by crafting them above!
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <ItemCard />
      </div>
    </div>
  );
}
