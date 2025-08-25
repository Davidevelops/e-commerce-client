import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function FeaturedCategories() {
  return (
    <div>
      <div className="categories-wrapper  flex justify-center gap-10 my-24 flex-wrap">
        <Link href={""}>
          <div className="group w-[400px] h-[300px] overflow-hidden flex items-center justify-between flex-col bg-yellow-100">
            {" "}
            <div className="p-2 h-full">
              {" "}
              <p className="text-[10px] mt-14 text-center">COFFEE TABLE</p>
              <h2 className="font-semibold border-b-2 border-black text-center">
                Driftwood Brew Table
              </h2>
            </div>
            <div className="overflow-hidden  relative w-[300px] h-[600px]">
              <Image
                src={"/assets/coffeeTable.png"}
                alt="product"
                fill
                className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover"
              ></Image>
            </div>
          </div>
        </Link>
        <Link href={""}>
          <div className="group w-[400px] h-[300px] overflow-hidden flex items-center justify-between flex-col bg-blue-200">
            {" "}
            <div className="p-2 h-full">
              {" "}
              <p className="text-[10px] mt-14 text-center">SOFA</p>
              <h2 className="font-semibold border-b-2 border-black text-center">
                CloudRest Sofa
              </h2>
            </div>
            <div className="overflow-hidden relative w-[500px] h-[600px]">
              <Image
                src={"/assets/sofa.png"}
                alt="product"
                fill
                className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover"
              ></Image>
            </div>
          </div>
        </Link>
        <Link href={""}>
          <div className="group w-[400px] h-[300px] overflow-hidden flex items-center flex-col justify-between bg-orange-200">
            {" "}
            <div className="p-2 h-full">
              {" "}
              <p className="text-[10px] mt-14 text-center">DESK</p>
              <h2 className=" font-semibold border-b-2 border-black text-center">
                Timberline Desk
              </h2>
            </div>
            <div className="overflow-hidden relative w-[400px] h-[600px] ">
              <Image
                src={"/assets/table.png"}
                alt="product"
                fill
                className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover"
              ></Image>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
