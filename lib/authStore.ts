import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ShippingAddress } from "./cartStore";
import axios from "axios";

export type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  isVerified: boolean;
  verificationToken: string;
  verificationTokenExpiresAt: string;
  lastlogin: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type OrderProduct = {
  product: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Order = {
  _id: string;
  user: string;
  products: OrderProduct[];
  totalAmount: number;
  paymentStatus: "pending" | "completed" | "failed";
  paymentMethod: "COD" | "gcash" | "paymaya";
  shippingAddress: ShippingAddress;
  orderStatus: "processing" | "shipped" | "delivered";
  createdAt?: string;
  updatedAt?: string;
};

export type Auth = {
  user: User | null;
  isAuthenticated: boolean;
  orders: Order[] | null;
  error: boolean | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
  signup: (email: string, password: string, name: string) => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotpassword: (email: string) => Promise<void>;
  resetpassword: (token: string, password: string) => Promise<void>;
  getUserOrders: () => void;
};

const API_URL = "https://e-commerce-server-rnas.onrender.com/";

axios.defaults.withCredentials = true;

export const useAuthStore = create<Auth>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      error: null,
      orders: null,
      isLoading: false,
      isCheckingAuth: true,
      message: null,

      signup: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
          let response = await axios.post(`${API_URL}/signUp`, {
            name,
            email,
            password,
            role: "user",
          });
          set({
            user: response.data.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || "Error signing up",
            isLoading: false,
          });
          throw error;
        }
      },

      verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
          let response = await axios.post(`${API_URL}/verify-email`, {
            code: code.toString(),
          });
          set({
            user: response.data.user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return response.data;
        } catch (error: any) {
          set({
            error: error.response?.data?.message || "Error verifying the email",
            isLoading: false,
          });
        }
      },
      //check if the user if authenticated
      checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
          let response = await axios.get(`${API_URL}/check-auth`);
          set({
            user: response.data.user,
            isAuthenticated: true,
            isCheckingAuth: false,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || null,
            isCheckingAuth: false,
            isAuthenticated: false,
          });
        }
      },

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          let response = await axios.post(`${API_URL}/logIn`, {
            email,
            password,
          });
          set({
            isAuthenticated: true,
            isLoading: false,
            user: response.data.user,
            error: null,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || "Error logging in.",
            isLoading: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true, error: null });
        try {
          await axios.post(`${API_URL}/logOut`);
          set({ isAuthenticated: false, user: null, isLoading: false });
        } catch (error: any) {
          set({
            error:
              error.response?.data?.message ||
              "Error occurred while logging out",
            isLoading: false,
          });
          throw error;
        }
      },

      forgotpassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          let response = await axios.post(`${API_URL}/forgot-password`, {
            email,
          });
          set({ isLoading: false, message: response.data.message });
        } catch (error: any) {
          set({
            error:
              error.response?.data?.message ||
              "Error sending the email verification",
            isLoading: false,
          });
        }
      },

      resetpassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
          let response = await axios.post(
            `${API_URL}/reset-password/${token}`,
            {
              password,
            }
          );
          set({ message: response.data.message, isLoading: false });
        } catch (error: any) {
          set({
            isLoading: false,
            error:
              error.response?.data?.message || "Error resetting the password",
          });
          throw error;
        }
      },

      getUserOrders: async () => {
        set({ isLoading: true, error: null });
        try {
          let res = await axios.get(`${API_URL}/user-orders`);
          set({
            orders: res.data.userOrderList,
            isLoading: false,
            error: null,
          });
        } catch (error: any) {
          set({
            isLoading: false,
            error:
              error.response?.data?.message ||
              "An error occurred while getting the list of orders",
          });
        }
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
