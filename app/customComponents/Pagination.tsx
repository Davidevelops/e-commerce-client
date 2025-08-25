import React from "react";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}: {
  productsPerPage: number;
  totalProducts: number;
  paginate: (index: number) => void;
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav className="my-6  flex justify-center gap-2">
        {pageNumbers.map((num) => (
          <button
            className="pageLink border text-lg px-2 border-black hover:bg-black hover:text-white transition-colors duration 200"
            onClick={() => paginate(num)}
            key={num}
          >
            {num}
          </button>
        ))}
      </nav>
    </div>
  );
}
