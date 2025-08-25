"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/lib/authStore";
import { useCartStore } from "@/lib/cartStore";
import Image from "next/image";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const { items, clearCart, checkoutOrder, cartError } = useCartStore();
  const [mop, setMop] = useState<string>("COD");
  if (!isAuthenticated) redirect("/log-in");

  const [shippingAddress, setShippingAddress] = useState({
    fullname: "",
    street: "",
    baranggay: "",
    city: "",
    province: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    try {
      if (
        shippingAddress.fullname === "" ||
        shippingAddress.street === "" ||
        shippingAddress.baranggay === "" ||
        shippingAddress.city === "" ||
        shippingAddress.province === ""
      ) {
        throw new Error("Please provide all fields.");
      } else {
        await checkoutOrder(shippingAddress, "COD");
        clearCart();
        setShippingAddress({
          fullname: "",
          street: "",
          baranggay: "",
          city: "",
          province: "",
        });
        console.log(shippingAddress, mop);
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="flex justify-center gap-3">
        {/* LEFT: CART TABLE */}
        <div className="min-w-[1300px] max-w-[1200px]">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Image</th>
                <th className="py-4 px-6 text-left font-semibold">Name</th>
                <th className="py-4 px-6 text-center font-semibold">
                  Quantity
                </th>
                <th className="py-4 px-6 text-center font-semibold">Price</th>
                <th className="py-4 px-6 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <Image
                        src={item.imageUrl}
                        width={80}
                        height={80}
                        alt="product"
                        className="object-cover rounded"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6 text-center">{item.quantity}</td>
                  <td className="py-4 px-6 text-center">
                    ${item.price.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    ${(item.price * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan={4} className="py-4 px-6 text-right font-semibold">
                  Grand Total:
                </td>
                <td className="py-4 px-6 text-right font-bold text-lg">
                  ${totalAmount.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* RIGHT: SHIPPING FORM */}
        <div className="w-[400px]">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="fullname"
              placeholder="fullname"
              value={shippingAddress.fullname}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="street"
              placeholder="street"
              value={shippingAddress.street}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="baranggay"
              placeholder="baranggay"
              value={shippingAddress.baranggay}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingAddress.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="province"
              placeholder="province"
              value={shippingAddress.province}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <div>
              <label htmlFor="MOP">Mode of Payment</label>
              <Select value={mop} onValueChange={(value) => setMop(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Mode of payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="COD">COD</SelectItem>
                  <SelectItem value="gcash">Gcash</SelectItem>
                  <SelectItem value="paymaya">PayMaya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            onClick={handlePlaceOrder}
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
