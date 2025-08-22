"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cart-atom";
import { useRouter } from "next/navigation";

interface CategoryProductsProps {
  category: string;
}

interface Cart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[] | "";
  quantity: number;
}

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const router = useRouter();
  const categoryName =
    category.charAt(0).toLocaleLowerCase() + category.slice(1);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryName}`,
      );
      const data = await response.json();
      const products = data.products;
      const productsWithQuantity = products.map((prod: Product) => {
        return {
          ...prod,
          quantity: 1,
        };
      });
      setProducts(productsWithQuantity);
    };
    fetchProducts();
  }, [categoryName]);

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prevProds) =>
      prevProds.map((prod) =>
        prod.id === id
          ? { ...prod, quantity: Math.max(prod.quantity + delta, 1) }
          : prod,
      ),
    );
  };

  const handleAddToCart = (item: Product) => {
    setCartItems((prevItems: Cart[]) => {
      const alreadyExist = prevItems.find((prod) => prod.id === item.id);
      if (alreadyExist) {
        return prevItems.map((prod) =>
          prod.id === item.id
            ? {
                ...prod,
                quantity: prod.quantity + item.quantity,
              }
            : prod,
        );
      } else {
        return [
          ...prevItems,
          {
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price ?? 0,
            img: item.images[0],
          },
        ];
      }
    });
  };
  const handleChnageOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const orderBy = e.target.value;
    const orderOf = e.target.name;
    const sortedProducts = products.slice().sort((a, b) => {
      let comparison = 0;
      if (orderOf === "title") comparison = a.title.localeCompare(b.title);
      else if (orderOf === "price") comparison = a.price - b.price;
      if (orderBy === "desc") comparison = -comparison;
      return comparison;
    });
    setProducts(sortedProducts);
  };
  if (!products) return <div>loading products ...</div>;
  return (
    <section className="md:px-32 px-5 pt-10 h-full">
      <Breadcrumbs isDisabled>
        <BreadcrumbItem className="text-[#877563]">Category</BreadcrumbItem>
        <BreadcrumbItem className="text-[#171412]">{category}</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="text-3xl mt-10">{category} </h1>
      <div className="flex gap-3 mt-8 items-center">
        <select
          defaultChecked
          defaultValue="Sort By Price"
          onChange={(e) => handleChnageOption(e)}
          name="price"
          id="price"
        >
          <option value="Sort By Price" disabled>
            Sort by Price
          </option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <select
          defaultValue="Sort By Alphabets"
          onChange={(e) => handleChnageOption(e)}
          name="title"
          id="title"
        >
          <option value="Sort By Alphabets" disabled>
            Alphabetically
          </option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>

      <div className="gap-2 gap-y-10 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mt-8">
        {products &&
          products.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              className="flex-col hover:cursor-pointer"
              key={index}
              shadow="sm"
              isPressable
              onPress={() => {
                router.push(`/product-detail/${item.id}`);
              }}
            >
              <CardBody className="overflow-hidden justify-center p-0 h-72 w-full bg-amber-600/80 rounded-lg">
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
                    <ShoppingCart
                      onClick={() => handleAddToCart(item)}
                      size={16}
                    />{" "}
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
