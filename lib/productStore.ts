import { create } from "zustand";
import axios from "axios";

export type Product = {
  _id: string;
  name: string | null;
  description: string | null;
  properties: { key: string; value: string }[];
  category: string;
  price: number | null;
  imageUrl?: string[] | null;
  isPopular: boolean;
  createdAt: Date;
};

type ProductState = {
  products: Product[] | null;
  popularProducts: Product[] | null;
  isLoading: boolean;
  error: boolean | null;
  getProducts: () => Promise<void>;
  getNewProducts: () => Promise<void>;
  getSingleProduct: (productID: string) => Promise<void>;
  getPopularProducts: () => void;
};

const API_URL = "https://e-commerce-server-rnas.onrender.com/";

export const useProductStore = create<ProductState>((set) => ({
  products: null,
  popularProducts: null,
  isLoading: false,
  error: null,
  getProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      let res = await axios.get(`${API_URL}/get-all-products`);
      set({ products: res.data.Products, isLoading: false, error: null });
    } catch (error: any) {
      console.log("An error occured while trying to get the products: ", error);
      set({ isLoading: false, error: error.response.data.message });
    }
  },
  getNewProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      let res = await axios.get(`${API_URL}/get-new-products`);
      set({ products: res.data.Products, isLoading: false, error: null });
    } catch (error: any) {
      console.log("An error occured while trying to get the products: ", error);
      set({ isLoading: false, error: error.response.data.message });
    }
  },
  getSingleProduct: async (productID: string) => {
    set({ isLoading: true, error: null });
    try {
      let res = await axios.get(`${API_URL}/get-product/${productID}`);
      set({ products: res.data.product, isLoading: false, error: null });
    } catch (error: any) {
      console.log("An error occured while trying to get the product: ", error);
      set({ isLoading: false, error: error.response.data.message });
    }
  },
  getPopularProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      let res = await axios.get(`${API_URL}/get-popular-products`);
      set({
        popularProducts: res.data.Products,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.log("An error occured while trying to get the products: ", error);
      set({ isLoading: false, error: error.response.data.message });
    }
  },
}));
