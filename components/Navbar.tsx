"use client";
import { cartAtom } from "@/atoms/cart-atom";
import { useAtom } from "jotai";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const [cartItems] = useAtom(cartAtom);
  return (
    <nav className="py-4 px-10 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-12">
          <h1 className="text-[#171412] text-[20px] leading-[23px] font-bold">
            <Link href={"/"}>
              {" "}
              Aura & <span className="text-red-400">Co</span>
            </Link>
          </h1>
          <div className="ml-auto flex gap-x-4 text-[14px] text-[#171412] font-medium leading-[21px]">
            <a href="/shop" className="hover:text-gray-600 px-2 py-2">
              Shop
            </a>
            <a href="/about" className="hover:text-gray-600 px-2 py-2">
              About
            </a>
            <a href="/contact" className="hover:text-gray-600 px-2 py-2">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search size={20} />

          <div className="flex-col -mt-[25px]">
            <span className="text-[10px] -mb-2 px-1 text-white ml-3 w-fit h-fit rounded-[50%] text-center bg-red-500">
              {cartItems.length}
            </span>
            <ShoppingBag onClick={() => router.push("/cart")} size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
