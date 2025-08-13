import React from "react";
import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-10">
        <FeaturedCategories />
      </div>
      <div className="mt-10">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
