"use client";

import { getItems } from "../../app/actions/get-items";
import { useItemsStore } from "../stores/items-store";

export function useItemsFetch() {
  const { setItems, setLoading, setError, setTotalCount } = useItemsStore();

  const fetchItems = async (take = 5, skip = 0) => {
    try {
      setLoading(true);
      setError(null);

      const { items, totalCount } = await getItems({
        take,
        skip,
      });

      setItems(items);
      setTotalCount(totalCount);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setError("Failed to load items");
      setLoading(false);
    }
  };

  return {
    fetchItems,
  };
}
