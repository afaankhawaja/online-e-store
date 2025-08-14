"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@heroui/react";
import SelectOptions from "@/components/ui/Select";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface CategoryProductsProps {
  category: string;
}

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const categoryName =
    category.charAt(0).toLocaleLowerCase() + category.slice(1);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryName}`,
      );
      const data = await response.json();
      const products = data.products;
      const productsWithQuantity = products.map((prod: any) => {
        return {
          ...prod,
          quantity: 1,
        };
      });
      setProducts(productsWithQuantity);
    };
    fetchProducts();
  }, [categoryName]);

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prevProds) =>
        prevProds.map((prod) =>
            prod.id === id
          ? { ...prod, quantity: Math.max(prod.quantity + delta, 1) }
          : prod,
      ),
    );
  };
  if (!products) return <div>loading products ...</div>;
  return (
    <section className="px-32 pt-10 h-full">
      <Breadcrumbs isDisabled>
        <BreadcrumbItem className="text-[#877563]">Category</BreadcrumbItem>
        <BreadcrumbItem className="text-[#171412]">{category}</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="text-3xl mt-10">{category} </h1>
      <div className="flex gap-3 mt-8">
        <SelectOptions options={[]} placeholder="Sort By" />
        <SelectOptions options={[]} placeholder="Price" />
        <SelectOptions options={[]} placeholder="Material" />
      </div>

      <div className="gap-2 gap-y-10 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mt-8">
        {products &&
          products.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              className="flex-col hover:cursor-pointer"
              key={index}
              shadow="sm"
              onPress={() => console.log("item pressed")}
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
                <b>{item?.title}</b>
                <p className="text-default-500 text-[13px]">
                  {item.description}
                </p>
                <div className="flex justify-between w-full pr-10">
                  <p className="text-default-500">{item.price}</p>{" "}
                  <div className="flex gap-x-3 text-[12px] items-center">
                    <ShoppingCart size={16} />{" "}
                    <span className="flex items-center ">
                      <Plus
                        size={16}
                        id="add"
                        onClick={(e) => updateQuantity(item.id, 1)}
                      />{" "}
                      <span className="border px-2 bg-gray -100">
                        {item.quantity}
                      </span>{" "}
                      <Minus
                        size={16}
                        className=""
                        id="subtract"
                        onClick={() => updateQuantity(item.id, -1)}
                      />
                    </span>
                  </div>{" "}
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
