import { create } from "zustand";
import { getItems, ItemWithBadges } from "../../app/actions/get-items";

interface ItemsState {
  items: ItemWithBadges[];
  loading: boolean;
  error: string | null;
  addItem: (item: ItemWithBadges) => void;
  updateItem: (id: string, updates: Partial<ItemWithBadges>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  fetchItems: (take?: number, skip?: number) => Promise<void>;
}

const PAGE_SIZE = 5;
export const useItemsStore = create<ItemsState>((set, get) => ({
  items: [],
  totalCount: 0,
  loading: false,
  error: null,
  page: 1,
  setPage: (page) => {
    set({ page });
    const skip = (page - 1) * PAGE_SIZE;
    get().fetchItems(PAGE_SIZE, skip);
  },
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

  fetchItems: async (take = 5, skip = 0) => {
    try {
      set({ loading: true, error: null });
      const { items, totalCount } = await getItems({
        take,
        skip,
      });
      set({ items, loading: false, totalCount });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({
        error: "Failed to load items",
        loading: false,
      });
    }
  },
}));
