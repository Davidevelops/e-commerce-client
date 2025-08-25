"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="bg-amber-100 my-30 p-6">
      <div className="flex items-center justify-center md:flex-row gap-12 flex-wrap">
        <div className="justify-center">
          <Image
            src={"/assets/chair.png"}
            alt="product"
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="flex items-center justify-center flex-col">
          <span className="p-6">
            <h1 className="text-4xl">Turn Your Space into a Masterpiece </h1>
            <p className="max-w-3xl mt-3">
              Discover furniture and decor that not only reflect your style but
              also enhance your everyday living, making each corner of your home
              feel intentional and uniquely yours
            </p>
          </span>
          <div className="button mt-10 flex justify-center md:justify-start w-full md:ml-6 ">
            <Link
              href={"/shop"}
              className="border border-black ms-3 rounded-4xl px-6 md:px-8  py-2 md:py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
