import { create } from "zustand";
import { ItemWithBadges } from "../../app/actions/get-items";

interface ItemsState {
  items: ItemWithBadges[];
  loading: boolean;
  error: string | null;
  addItem: (item: ItemWithBadges) => void;
  updateItem: (id: string, updates: Partial<ItemWithBadges>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchItems: () => Promise<void>;
}

export const useItemsStore = create<ItemsState>((set, get) => ({
  items: [],
  loading: false,
  error: null,

  addItem: (item) =>
    set((state) => ({
      items: [item, ...state.items],
    })),

  updateItem: (id, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  fetchItems: async () => {
    try {
      set({ loading: true, error: null });
      const { getItems } = await import("../../app/actions/get-items");
      const items = await getItems();
      set({ items, loading: false });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({
        error: "Failed to load items",
        loading: false,
      });
    }
  },
}));
