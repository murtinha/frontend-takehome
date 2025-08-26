"use client";

import { useEffect } from "react";
import { useItemsStore } from "../../lib/stores/items-store";
import ItemCard from "../item-card";
import Divider from "../ui/divider";
import Spinner from "../ui/spinner";

export default function ItemListSection() {
  const { items, loading, error, fetchItems } = useItemsStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleRetry = (itemId: string) => {
    console.log("Retry clicked for item:", itemId);
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
      <div className="flex w-full px-10 flex-col">
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
      <div className="flex w-full px-10 flex-col">
        <div className="text-2xl font-bold">Your Items</div>
        <div className="text-[16px] text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex w-full px-10 flex-col">
      <div className="text-2xl font-bold">Your Items</div>
      <div className="text-[16px]">
        {items.length === 0
          ? "Your Items will appear here, get started by crafting them above!"
          : `You have ${items.length} item${items.length === 1 ? "" : "s"}`}
      </div>

      {items.length > 0 && (
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
                pendingPercentage={item.pendingPercentage}
                badges={item.badges}
                imageSrc={item.image}
                onRetry={() => handleRetry(item.id)}
                onDownload={() => handleDownload(item.id)}
                onRemix={() => handleRemix(item.id)}
                onEdit={() => handleEdit(item.id)}
                onPlay={() => handlePlay(item.id)}
              />
              {index < items.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
