import React from "react";
import ProductDetail from "../components/ProductDetail";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  return <ProductDetail id={id} />;
};

export default page;
