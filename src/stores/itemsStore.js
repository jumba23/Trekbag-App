import { create } from "zustand";
import { initialItems } from "../lib/constants";

export const useItemsStore = create((set) => ({
  items: initialItems,
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      packed: false,
      value: newItemText,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteItem: (id) => {
    const newItems = items.filter((item) => item.id !== id);
    return { items: newItems };
  },
  removeAllItems: () => set({ items: [] }),
  toggleItem: (id) =>
    set((state) => {
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
      return { items: newItems };
    }),
  resetToInitialItems: () => set({ items: initialItems }),
  markAllAsComplete: () =>
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: true }));
      return { items: newItems };
    }),
  markAllAsIncomplete: () =>
    set((state) => {
      const newItems = state.items.map((item) => ({ ...item, packed: false }));
      return { items: newItems };
    }),
}));
