import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-8 md:px-36 md:py-10 text-[#877563] text-[15px] leading-6 bg-[#f9f8f6] border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
          <div className="text-[20px] font-bold text-[#171412]">
            Aura & <span className="text-red-400">Co</span>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram">
              <Instagram className="hover:text-red-400 transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="hover:text-blue-400 transition" />
            </a>
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
                  <a href="/contact" className="hover:text-red-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-[#171412]">Shop</div>
              <ul className="space-y-1">
                <li>
                  <a href="/shop" className="hover:text-red-400 transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="/category/beauty"
                    className="hover:text-red-400 transition"
                  >
                    Beauty
                  </a>
                </li>
                <li>
                  <a
                    href="/category/fragrance"
                    className="hover:text-red-400 transition"
                  >
                    Fragrance
                  </a>
                </li>
                <li>
                  <a
                    href="/category/groceries"
                    className="hover:text-red-400 transition"
                  >
                    Groceries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 text-[#171412]">Company</div>
              <ul className="space-y-1">
                <li>
                  <a href="/about" className="hover:text-red-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 md:w-1/4 mt-6 md:mt-0">
            <a
              href="#"
              className="hover:text-red-400 transition mt-[7px] md:mt-[31.5px]"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
