"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string[];
}

export default function FeaturedProducts() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        const filtered = (data.products || [])
          .filter((p: Product) => p.rating > 4.3)
          .sort((a: Product, b: Product) => b.rating - a.rating)
          .slice(0, 7);
        setProducts(filtered);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="px-10 space-y-6">
      <h1 className="text-3xl tracking-wide">Featured Products</h1>
      {loading ? (
        <div className="py-10 text-center text-gray-400">Loading...</div>
      ) : (
        <div className="gap-2 gap-y-10 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3">
          {products.map((item) => (
            <Card
              className="flex-col hover:cursor-pointer"
              key={item.id}
              shadow="sm"
              isPressable
              onPress={() => {
                router.push(`/product-detail/${item.id}`);
              }}
            >
              <CardBody className="overflow-hidden p-0 h-72 w-full bg-amber-600/80 rounded-lg">
                <Image
                  alt={item.title}
                  className="w-full object-cover"
                  radius="lg"
                  shadow="sm"
                  src={item.images[0]}
                  width="100%"
                  height="100%"
                />
              </CardBody>
              <CardFooter className="text-small flex-col gap-y-1 mt-2 items-start text-start max-w-full">
                <b>{item.title}</b>
                <p className="text-default-500">${item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
