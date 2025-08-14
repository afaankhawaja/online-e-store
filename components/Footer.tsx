import React from "react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full p-10 text-[#877563] text-[16px] leading-6">
      <div className="my-5 flex justify-between px-40 w-full ">
        {" "}
        <div className="">Privacy Policy</div>
        <div className="">Terms of Service</div>
      </div>
      <div className="flex-col justify-center items-center w-fit mx-auto">
        <div className="flex justify-center gap-3">
          <Instagram className="hover:text-red-200" />
          <Facebook className="hover:text-blue-200" />
        </div>
        <div className="mt-5">© 2024 Aura & Co. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
