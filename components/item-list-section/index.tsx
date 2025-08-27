"use client";

import { useEffect } from "react";
import { useItemGeneration } from "../../lib/hooks/use-item-generation";
import { useItemsStore } from "../../lib/stores/items-store";
import ItemCard from "../item-card";
import Divider from "../ui/divider";
import Pagination from "../ui/pagination";
import Spinner from "../ui/spinner";

export default function ItemListSection() {
  const { items, loading, error, fetchItems, updateItem } = useItemsStore();
  const { generateItemWithStatus } = useItemGeneration();

  useEffect(() => {
    fetchItems(5, 0);
  }, [fetchItems]);

  const handleRetry = async (itemId: string) => {
    updateItem(itemId, { status: "PENDING" });
    await generateItemWithStatus(itemId);
  };

  const handleDownload = (itemId: string) => {
    console.log("Download clicked for item:", itemId);
  };

  const handleRemix = (itemId: string) => {
    console.log("Remix clicked for item:", itemId);
  };

  const handleEdit = (itemId: string) => {
    console.log("Edit clicked for item:", itemId);
  };

  const handlePlay = (itemId: string) => {
    console.log("Play clicked for item:", itemId);
  };

  const mapStatus = (status: string): "pending" | "success" | "error" => {
    switch (status) {
      case "PENDING":
        return "pending";
      case "SUCCESS":
        return "success";
      case "ERROR":
        return "error";
      default:
        return "pending";
    }
  };

  if (loading) {
    return (
      <div className="flex w-full px-6 desktop:px-10 flex-col">
        <div className="text-2xl font-bold">Your Items</div>
        <div className="text-[16px]">
          Your Items will appear here, get started by crafting them above!
        </div>
        <div className="flex justify-center items-center mt-10">
          <Spinner size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full px-6 desktop:px-10 flex-col">
        <div className="text-2xl font-bold">Your Items</div>
        <div className="text-[16px] text-red-500">{error}</div>
      </div>
    );
  }

  const hasItems = items.length > 0;

  return (
    <div className="flex w-full px-4 desktop:px-10 flex-col mt-10">
      <div className="text-2xl font-bold">Your Items</div>
      <div className="text-[16px]">
        Your Items will appear here, get started by crafting them above!
      </div>

      {hasItems && (
        <div className="flex flex-col gap-2 mt-10">
          {items.map((item, index) => (
            <div key={item.id}>
              <ItemCard
                title={item.title}
                version={item.version}
                mcVersion={item.mcVersion}
                language={item.language}
                downloads={item.downloads}
                createdAt={item.createdAt}
                status={mapStatus(item.status)}
                badges={item.badges}
                imageSrc={item.image}
                onRetry={() => handleRetry(item.id)}
                onDownload={() => handleDownload(item.id)}
                onRemix={() => handleRemix(item.id)}
                onEdit={() => handleEdit(item.id)}
                onPlay={() => handlePlay(item.id)}
              />
              <Divider />
            </div>
          ))}
        </div>
      )}

      {hasItems && <Pagination />}
    </div>
  );
}
