import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-8 md:px-36 md:py-10 text-[#877563] text-[15px] leading-6 bg-[#f9f8f6] border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
          <div className="text-[20px] font-bold text-[#171412]">
            Aura & <span className="text-red-400">Co</span>
          </div>
          <div className="flex gap-3">
            <Link href="#" aria-label="Instagram">
              <Instagram className="hover:text-red-400 transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="hover:text-blue-400 transition" />
            </Link>
          </div>
          <div className="text-xs mt-2 md:mt-4">
            © {new Date().getFullYear()} Aura & Co. All rights reserved.
          </div>
        </div>

        <div className="flex justify-between gap-x-4">
          <div className="flex flex-col sm:flex-row justify-center md:items-start gap-8 md:gap-16 flex-1">
            <div>
              <div className="font-semibold mb-2 text-[#171412]">
                Customer Service
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-red-400 transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition">
                    Shipping Info
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-[#171412]">Shop</div>
              <ul className="space-y-1">
                <li>
                  <Link href="/shop" className="hover:text-red-400 transition">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/beauty"
                    className="hover:text-red-400 transition"
                  >
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/fragrance"
                    className="hover:text-red-400 transition"
                  >
                    Fragrance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/groceries"
                    className="hover:text-red-400 transition"
                  >
                    Groceries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-[#171412]">Company</div>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="hover:text-red-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 md:w-1/4 mt-6 md:mt-0">
            <Link
              href="#"
              className="hover:text-red-400 transition mt-[7px] md:mt-[31.5px]"
            >
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
