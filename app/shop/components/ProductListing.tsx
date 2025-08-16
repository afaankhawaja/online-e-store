"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Funnel, Minus, Plus, ShoppingCart } from "lucide-react";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cart-atom";

interface Cart {
  id: string;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
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
  }, []);

  const handleChnageOption = (e: any) => {
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

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prevProds) =>
      prevProds.map((prod) =>
        prod.id === id
          ? { ...prod, quantity: Math.max(prod.quantity + delta, 1) }
          : prod,
      ),
    );
  };

  const handleAddToCart = (item: any) => {
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
            price: item.price,
            img: item.images[0],
          },
        ];
      }
    });
  };
  if (!products) return <div>loading products ...</div>;
  return (
    <section className="md:px-32 px-2 pt-10 h-full">
      <p className="md:text-3xl text-xl mt-10">All Products </p>
      <div className="flex gap-3 mt-8 items-center">
        <select onChange={(e) => handleChnageOption(e)} name="price" id="price">
          <option value="Sort By Price" disabled selected>
            Sort by Price
          </option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <select onChange={(e) => handleChnageOption(e)} name="title" id="title">
          <option value="Sort By Price" disabled selected>
            Alphabetically
          </option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <Funnel />
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

export default ProductListing;
