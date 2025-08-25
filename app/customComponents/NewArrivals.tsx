"use client";
import { useEffect } from "react";
import { useProductStore } from "@/lib/productStore";
import ProductList from "@/app/customComponents/ProductList";
import Link from "next/link";
export default function NewArrivals() {
  const { products, isLoading, error, getNewProducts } = useProductStore();
  useEffect(() => {
    getNewProducts();
  }, [getNewProducts]);
  return (
    <div>
      <div className="max-w-[1500px] mx-auto">
        <p className="ms-5 text-[12px] md:text-sm">RECENTLY RELEASED</p>
        <h1 className="ms-5 text-2xl md:text-3xl mt-2">
          <span className="border-b border-black">Latest</span> Collection
        </h1>
      </div>
      <ProductList props={products!} />
      <div className="max-w-[1500px] flex justify-end items-center mx-auto mt-10">
        <Link
          href={"/shop"}
          className="border border-black rounded-4xl px-6 md:px-10 py-2 md:py-4 hover:bg-black hover:text-white transition-colors duration-500"
        >
          See all products
        </Link>
      </div>
    </div>
  );
}
