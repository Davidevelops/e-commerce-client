"use client";

import type { Product } from "@/lib/productStore";
import { useCartStore } from "@/lib/cartStore";
import { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import toast from "react-hot-toast";
export default function ProductDetails({ product }: { product: Product }) {
  const [prodQuantity, setQuantity] = useState<number>(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name!,
      price: product.price!,
      imageUrl: product.imageUrl![0],
      quantity: prodQuantity!,
    });

    toast.success(`${product.name} has been added to your cart.`);
  };
  return (
    <div>
      <div className="banner bg-blue-100 p-30">
        {" "}
        <h1 className="text-center text-3xl md:text-5xl">{product.name}</h1>
      </div>
      <div className="product-container flex items-center justify-center flex-wrap max-w-[1500px]  mx-auto gap-10 my-30">
        <div className="product-image relative w-[300px] h-[400px] md:w-[500px] md:h-[500px]">
          <Image
            src={product.imageUrl![0]}
            alt="product"
            fill
            className="object-contain"
          />
        </div>
        <div className="product-details">
          <h1 className="text-3xl md:text-5xl">{product.name}</h1>
          <p className="text-sm mt-3 max-w-[400px] line-clamp-4 leading-6 text-gray-700">
            {product.description}
          </p>
          <h1 className="ms-2 mt-10 text-2xl">
            ${product.price?.toLocaleString()} USD
          </h1>
          <div className="actions flex gap-2 flax-wrap mt-4 ms-2">
            <input
              type="number"
              className="border h-[40px] w-[60px] border-black focus:border-black focus:outline-none p-2"
              value={prodQuantity!}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              className="border border-black h-[40px] p-2 hover:bg-black hover:text-white transition-colors duration-300"
              type="button"
              onClick={() => handleAddToCart()}
            >
              Add to cart
            </button>
          </div>
          <ul className="mt-6">
            {product.properties
              ? product.properties.map((prop, index) => (
                  <li key={index} className="flex gap-1 ms-2">
                    <p className="font-semibold">{prop.key}</p>:
                    <p> {prop.value}</p>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
