"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore";
import { Handbag, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Cart() {
  const { items, removeFromCart } = useCartStore();
  const router = useRouter();

  return (
    <div>
      <Sheet>
        <SheetTrigger className="hover:cursor-pointer relative">
          <Handbag className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {items.length}
            </span>
          )}
        </SheetTrigger>

        <SheetContent className="flex flex-col p-4 gap-4">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">
              Your Shopping Bag
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto space-y-4">
            {items.length > 0 ? (
              items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center border-b pb-4"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-sm font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-8">
                Your cart is empty
              </p>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>
                  $
                  {items
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <button
                className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => router.push("/checkout")}
              >
                Checkout
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
