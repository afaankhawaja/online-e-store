import React from "react";
import Hero from "./Hero";
import ProductListing from "./ProductListing";

const Shop = () => {
  return (
    <section className="max-w-screen" >
      <Hero />
      <div className="mt-4 px-5 max-w-screen">
        <ProductListing />
      </div>
    </section>
  );
};

export default Shop;
