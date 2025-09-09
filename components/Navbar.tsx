"use client";
import { cartAtom } from "@/atoms/cart-atom";
import { useAtom } from "jotai";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const Navbar = () => {
  const router = useRouter();
  const [cartItems] = useAtom(cartAtom);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="py-4 px-5 md:px-10 shadow-md max-w-screen">
      <div className="flex justify-between items-center max-w-screen">
        <div className="flex items-center gap-x-12">
          <h1 className="text-[#171412] text-[20px] leading-[23px] font-bold">
            <Link href={"/"}>
              {" "}
              Aura & <span className="text-red-400">Co</span>
            </Link>
          </h1>
          <div className="ml-auto hidden md:flex gap-x-4 text-[14px] text-[#171412] font-medium leading-[21px]">
            <Link href="/" className="hover:text-gray-600 px-2 py-2">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-600 px-2 py-2">
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-600 px-2 py-2">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 px-2 py-2">
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-4 transition-all duration-500">
          <div className="hidden md:block">
            <SearchDropdown />
          </div>
          <div className="flex-col -mt-[25px] cursor-pointer">
            <span className="text-[10px] -mb-2 px-1 text-white ml-3 w-fit h-fit rounded-[50%] text-center bg-red-500">
              {cartItems.length}
            </span>
            <ShoppingBag onClick={() => router.push("/cart")} size={20} />
          </div>
          <button
            className="md:hidden flex items-center justify-center p-2 transition-all duration-300"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 bg-white shadow rounded px-4 py-2 z-50 absolute left-0 right-0">
          <Link
            href="/"
            className="hover:text-gray-600 px-2 py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-gray-600 px-2 py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 px-2 py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 px-2 py-2 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="md:hidden px-2 py-2 block">
            <SearchDropdown />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
