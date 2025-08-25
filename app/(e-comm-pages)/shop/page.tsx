"use client";

import { useEffect } from "react";
import { useState } from "react";
import { useProductStore } from "@/lib/productStore";
import ProductList from "@/app/customComponents/ProductList";
import Pagination from "@/app/customComponents/Pagination";
export default function page() {
  const { products, isLoading, error, getProducts } = useProductStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, sePproductPerPage] = useState(8);
  useEffect(() => {
    getProducts();
  }, [getProducts, products]);

  //current product
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  //current products to be displayed
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="banner bg-blue-100 p-26 mb-10">
        <h1 className="text-center text-5xl">Explore our collections</h1>
        <p className="text-center text-lg mt-3">
          Discover stylish, high-quality furniture at prices that fit your
          budget. Browse our newest arrivals and find the perfect pieces to
          elevate your space.
        </p>
      </div>
      <ProductList props={currentProducts!} />
      {products && (
        <Pagination
          productsPerPage={productPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      )}
    </div>
  );
}
