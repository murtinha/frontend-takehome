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
  setItems: (items: ItemWithBadges[]) => void;
  setTotalCount: (totalCount: number) => void;
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
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
  },
  addItem: (item) =>
    set((state) => ({
      items: [item, ...state.items],
      totalCount: state.totalCount + 1,
    })),

  updateItem: (id, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  setItems: (items) => set({ items }),

  setTotalCount: (totalCount) => set({ totalCount }),
}));
