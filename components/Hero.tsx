"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
const Hero = () => {
  const [imageIndex, SetImageIndex] = useState(0);

  setTimeout(() => {
    SetImageIndex((imageIndex + 1) % 7);
  }, 1800);
  
  return (
    <header>
      <div className="relative w-[calc(100%-40px)] mx-auto m-10 rounded-2xl h-[70vh]">
        <Image
          src={`/images/hero-img-${imageIndex}.jpg`}
          alt="Background Image"
          fill
          className=" object-cover rounded-xl"
        />
        <div className="text-white/70 absolute top-20 left-5 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-[500px] lg:max-w-[650px] leading-[125%] tracking-wide">
            {" "}
            Discover Quality Products Across Beauty, Fashion, Electronics & More
          </h1>
          <p className="mt-5 font-mono text-white/90">
            Shop the Latest Trends in Beauty, Fashion, Tech & Home
          </p>
          <Button
            className="bg-amber-600 text-white/70 hover:bg-amber-500 px-3 py-2 mt-5 font-semibold"
            size="lg"
            color="secondary"
            variant="shadow"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
