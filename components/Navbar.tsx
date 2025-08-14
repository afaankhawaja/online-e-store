"use client";
import { Search, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="py-4 px-10 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-12">
          <h1 className="text-[#171412] text-[20px] leading-[23px] font-bold">
            Aura & <span className="text-red-400">Co</span>
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
          <ShoppingBag onClick={() => router.push("/cart")} size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
