// /store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export type ShippingAddress = {
  fullname: string;
  street: string;
  baranggay: string;
  city: string;
  province: string;
};

type CartState = {
  items: CartItem[]; // all items in the cart
  cartError: string | null;
  addToCart: (item: CartItem) => void; // add product
  removeFromCart: (id: string) => void; // remove product
  clearCart: () => void; // empty cart
  checkoutOrder: (
    shippingAddress: ShippingAddress,
    paymentMethod: "COD" | "gcash" | "paymaya"
  ) => void;
};

const API_URL = "https://e-commerce-server-rnas.onrender.com";
axios.defaults.withCredentials = true;
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartError: null,
      //Add to cart
      addToCart: (item) =>
        set((state) => {
          const alreadyExists = state.items.find((i) => i.id === item.id);

          if (alreadyExists) {
            return {
              items: state.items.map((i) =>
                i.id === item.id // if the previous item id is equal to the passed id just increment it
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          } else {
            return {
              items: [...state.items, { ...item }],
            };
          }
        }),
      // Remove from cart
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      //Clear all items
      clearCart: () => set({ items: [] }),

      checkoutOrder: async (address, paymentMethod) => {
        try {
          const { items } = get();

          if (items.length === 0) {
            throw new Error("Cart is empty.");
          }

          const products = items.map((item) => ({
            product: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.imageUrl,
          }));

          const orderPayload = {
            products,
            paymentStatus: "pending",
            paymentMethod,
            shippingAddress: address,
            orderStatus: "processing",
          };

          await axios.post(`${API_URL}/create-order`, orderPayload, {
            withCredentials: true,
          });
        } catch (error: any) {
          set({
            cartError: error.response.data.message || "Your cart is empty",
          });
        }
      },
    }),

    { name: "cart-storage" }
  )
);
