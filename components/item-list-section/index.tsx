import ItemCard from "../item-card";
import Divider from "../ui/divider";

export default function ItemListSection() {
  return (
    <div className="flex w-full px-10 flex-col mb-10">
      <div className="text-2xl font-bold">Your Items</div>
      <div className="text-[16px]">
        Your Items will appear here, get started by crafting them above!
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <ItemCard
          title="CreativeMode"
          version="1.0.0"
          mcVersion="1.21.5"
          language="Java"
          downloads={300}
          createdAt="2025-03-05"
          status="pending"
          badges={["adventure", "vehicles", "gear", "rescue"]}
          image="/creativemode-mobile.webp"
        />
        <Divider />
        <ItemCard
          title="CreativeMode"
          version="1.0.0"
          mcVersion="1.21.5"
          language="Java"
          downloads={300}
          createdAt="2025-03-05"
          status="error"
          badges={["adventure", "vehicles", "gear", "rescue"]}
          image="/creativemode-mobile.webp"
        />
        <Divider />
        <ItemCard
          title="CreativeMode"
          version="1.0.0"
          mcVersion="1.21.5"
          language="Java"
          downloads={300}
          createdAt="2025-03-05"
          status="success"
          badges={["adventure", "vehicles", "gear", "rescue"]}
          image="/creativemode-mobile.webp"
        />
      </div>
    </div>
  );
}
