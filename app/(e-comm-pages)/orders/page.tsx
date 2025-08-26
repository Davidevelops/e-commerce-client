"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "@/lib/authStore";
import { useRouter } from "next/navigation";

export default function Page() {
  const {
    getUserOrders,
    orders,
    isLoading,
    error,
    isAuthenticated,
    isCheckingAuth,
  } = useAuthStore();
  const router = useRouter();

  // Redirect unauthenticated users only after auth state is known
  useEffect(() => {
    if (!isCheckingAuth && !isAuthenticated) {
      router.push("/log-in");
    }
  }, [isAuthenticated, isCheckingAuth, router]);

  // Fetch orders only when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      getUserOrders();
    }
  }, [isAuthenticated, getUserOrders]);

  // Show a neutral screen while checking auth
  if (isCheckingAuth) {
    return <p className="text-center text-2xl">Checking authentication...</p>;
  }

  if (isLoading)
    return <p className="text-center text-2xl">Loading orders...</p>;
  if (!orders || orders.length === 0)
    return <p className="text-center text-2xl">No orders found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.map((order) => (
        <div key={order._id} className="rounded p-8 mb-6 shadow-sm bg-blue-50">
          <h2 className="font-semibold text-lg mb-2">Order ID: {order._id}</h2>
          <p>
            <strong>Status:</strong> {order.orderStatus}
          </p>
          <p>
            <strong>Payment:</strong> {order.paymentMethod} (
            {order.paymentStatus})
          </p>
          <p>
            <strong>Total:</strong> ₱{order.totalAmount}
          </p>

          <h3 className="mt-4 font-medium">Shipping Address</h3>
          <p>{order.shippingAddress.fullname}</p>
          <p>
            {order.shippingAddress.street}, {order.shippingAddress.baranggay},{" "}
            {order.shippingAddress.city} {order.shippingAddress.province}
          </p>

          <h3 className="mt-4 font-medium">Products</h3>
          <div className="space-y-3 mt-2">
            {order.products.map((product, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p>₱{product.price}</p>
                  <p>Qty: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
