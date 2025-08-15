import React from "react";
import Hero from "./Hero";
import ProductListing from "./ProductListing";

const Shop = () => {
  return (
    <div>
      <Hero />
      <div className="mt-4 px-5">
        <ProductListing />
      </div>
    </div>
  );
};

export default Shop;
