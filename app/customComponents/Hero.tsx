import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="hero-container bg-[url('/assets/hero.jpeg')] bg-cover bg-center bg-no-repeat w-screen h-[80vh] p-4">
        <div className="heading-container  h-full flex flex-col items-start justify-center md:ml-50">
          <h1 className="text-white text-2xl md:text-6xl w-[700px]">
            Style Meets Comfort
          </h1>
          <h1 className="text-white text-2xl md:text-6xl w-[700px]">
            with Anyo Furniture
          </h1>
          <p className="text-white text-[14px] md:text-lg w-[350px] mt-3">
            Create a home that reflects your taste — cozy, elegant, and uniquely
            you.
          </p>
          <span className="mt-10">
            {" "}
            <Link
              href={""}
              className=" rounded-4xl py-2 md:py-3 px-4 md:px-6 bg-white hover:bg-black hover:text-white transition-colors duration-300 "
            >
              View Collection
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
