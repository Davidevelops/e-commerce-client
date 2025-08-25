import React from "react";
import Link from "next/link";
import { BaggageClaim, SquareMenu } from "lucide-react";
import Cart from "./Cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="logo-container">
        <h1 className="text-3xl tracking-widest">ANYO</h1>
      </div>
      <div className="nav-container hidden lg:flex items-center gap-6">
        <nav className="border-r border-black flex gap-6 text-md sm:gap-10 md:gap-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/reviews"}>Reviews</Link>
          <Link href={"/contact"} className="me-6">
            Contact
          </Link>
        </nav>
        <div className="flex gap-6 me-6">
          <Link href={"/orders"}>
            <BaggageClaim />
          </Link>
          <Cart />
        </div>
      </div>
      <div className="burgerMenu flex lg:hidden">
        <Popover>
          <PopoverTrigger>
            <SquareMenu size={40} strokeWidth={1} />
          </PopoverTrigger>
          <PopoverContent>
            <nav className="flex flex-col justify-center items-center font-semibold gap-3">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/shop"}>Shop</Link>
              <Link href={"/reviews"}>Reviews</Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>
            <div className="flex flex-col justify-center items-center my-6 gap-3">
              <span className="flex items-center gap-2 font-semibold">
                {" "}
                <Link href={"/orders"}>
                  <BaggageClaim />
                </Link>
                Orders
              </span>
              <span className="flex items-center gap-2 font-semibold">
                <Cart />
                Shopping Bag
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
