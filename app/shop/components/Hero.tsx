import React from "react";
import Image from "next/image";
import Bg from "@/assets/other/hero-bg-1.jpg";
const Hero = () => {
  return (
    <header>
      <div className="relative w-[calc(100%-40px)] mx-auto m-10 rounded-2xl h-[50vh]">
        <Image
          src={Bg}
          alt="Background Image"
          fill
          className=" object-cover rounded-xl"
        />
        <div className="text-white/70 absolute bottom-10 left-5 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-[500px] lg:max-w-[650px] leading-[125%] tracking-wide">
            {" "}
            Shop All
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
