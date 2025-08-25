"use client";
import { useProductStore } from "@/lib/productStore";
import { useState } from "react";
import { useEffect } from "react";
import ProductList from "./ProductList";
export default function Trending() {
  const { popularProducts, isLoading, error, getPopularProducts } =
    useProductStore();
  useEffect(() => {
    getPopularProducts();
  }, [getPopularProducts]);
  return (
    <div className="my-30">
      <div className="max-w-[1500px] mx-auto">
        <p className="ms-5 text-sm">TRENDING COLLECTION</p>
        <h1 className="ms-5 text-3xl mt-2">
          <span className="border-b border-black">Popular</span> Products
        </h1>
      </div>
      <ProductList props={popularProducts!} />
    </div>
  );
}
