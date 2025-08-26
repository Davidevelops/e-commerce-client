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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: CART TABLE */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Order Summary
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-4 px-4 text-left font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="py-4 px-4 text-left font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-700">
                      Qty
                    </th>
                    <th className="py-4 px-4 text-center font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="py-4 px-4 text-right font-semibold text-gray-700">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">
                        <div className="flex justify-center">
                          <Image
                            src={item.imageUrl || "/placeholder-product.jpg"}
                            width={60}
                            height={60}
                            alt="product"
                            className="object-cover rounded"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-gray-800">
                        {item.name}
                      </td>
                      <td className="py-4 px-4 text-center">{item.quantity}</td>
                      <td className="py-4 px-4 text-center text-gray-600">
                        ${item.price.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right font-medium text-gray-800">
                        ${(item.price * item.quantity).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td
                      colSpan={4}
                      className="py-4 px-6 text-right font-semibold text-gray-700"
                    >
                      Grand Total:
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-lg text-purple-600">
                      ${totalAmount.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* RIGHT: SHIPPING FORM */}
          <div className="w-full lg:w-96 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 pb-2 border-b border-gray-200">
              Shipping Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name"
                  value={shippingAddress.fullname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  placeholder="Street name and number"
                  value={shippingAddress.street}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Baranggay
                </label>
                <input
                  type="text"
                  name="baranggay"
                  placeholder="Enter your baranggay"
                  value={shippingAddress.baranggay}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={shippingAddress.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <input
                  type="text"
                  name="province"
                  placeholder="Enter your province"
                  value={shippingAddress.province}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mode of Payment
                </label>
                <Select value={mop} onValueChange={(value) => setMop(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="COD">Cash on Delivery (COD)</SelectItem>
                    <SelectItem value="gcash">GCash</SelectItem>
                    <SelectItem value="paymaya">PayMaya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <button
              className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
              onClick={handlePlaceOrder}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
