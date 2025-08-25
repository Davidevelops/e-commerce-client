import { create } from "zustand";
import axios from "axios";

type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

type ShippingAddress = {
  street: string;
  barangay: string;
  city: string;
  province: string;
};
