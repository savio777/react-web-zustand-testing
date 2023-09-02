import { create } from "zustand";
import { initialItems } from "./mock";

export type ItemCartStore = {
  id: string;
  name: string;
  price: number;
};

export type ICartStore = {
  cart: ItemCartStore[];
  avaiblebleItems: ItemCartStore[];
  addToCart: (item: ItemCartStore) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<ICartStore>((set) => ({
  // pode ser: {state:cart:[]} o objeto pode ser montado do jeito que o dev quiser
  cart: [],
  avaiblebleItems: initialItems,
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
