"use client";
import { cartAtom } from "@/atoms/cart-atom";
import { useAtom } from "jotai";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Minus, Plus, Trash } from "lucide-react";

interface CartItems {
  id: string;
  title: string;
  price: number;
  quantity: number;
  img: string;
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);
const Cart = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const SubTotal = useMemo(() => {
    const sum = cartItems.reduce((acc, curr) => {
      acc = acc + curr.price * curr.quantity;
      return acc;
    }, 0);
    return sum.toFixed(2);
  }, [cartItems]);

  const stripeItems = cartItems.map((item) => ({
    name: item.title,
    price: item.price,
    quantity: item.quantity,
    image: item.img,
  }));

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: stripeItems }),
    });
    const { id: sessionId } = await res.json();
    const stripe = await stripePromise;
    if (stripe) stripe.redirectToCheckout({ sessionId });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prevItems: CartItems[]) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + delta, 1),
            }
          : item,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setCartItems((prevItems: CartItems[]) =>
      prevItems.filter((item) => item.id !== id),
    );
  };

  return (
    <section className="lg:px-52 px-5 mt-20 min-h-[calc(100vh-370px)] max-w-screen">
      <h1 className="text-3xl">Your Cart</h1>
      <div className="flex-col space-y-5 mt-8">
        {cartItems.map((item, index) => {
          return (
            <div key={item.id} className=" md:flex justify-between w-full">
              <div className="flex items-center gap-x-3">
                <div className="flex bg-amber-500">
                  <Image
                    width={50}
                    height={50}
                    src={`${item.img}`}
                    alt={item.title}
                  />
                </div>
                <div className="flex-col">
                  <p className="text-[14px] font-semibold">{item.title}</p>
                  <div className="flex gap-x-1 text-[12px] items-center">
                    <span className="flex items-center gap-x-4 ">
                      <span className="">Quantity : {item.quantity}</span>{" "}
                      <span className="flex gap-x-1">
                        <Plus
                          size={14}
                          id="add"
                          onClick={(e) => updateQuantity(item.id, 1)}
                        />{" "}
                        <Minus
                          size={14}
                          className=""
                          id="subtract"
                          onClick={() => updateQuantity(item.id, -1)}
                        />
                        <Trash
                          color="red"
                          size={14}
                          className=""
                          id="delete"
                          onClick={() => handleDelete(item.id)}
                        />
                      </span>
                    </span>
                  </div>{" "}
                </div>
              </div>
              <div className="max-md:text-right">
                <p>{item.price.toFixed(2)}</p>{" "}
                <p className="-ml-4">
                  <span className="text-black/70 text-[12px]">
                    x{item.quantity}
                  </span>{" "}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="mt-5 text-xl font-bold text-end tracking-wide">
        Sub Total: ${SubTotal}
      </h1>
      <div className="flex justify-end mt-5 ">
        <Button
          onClick={handleCheckout}
          className="bg-amber-600 text-white/70 hover:text-white hover:bg-amber-500 px-3 py-2 font-semibold"
          size="lg"
          color="secondary"
          variant="shadow"
        >
          Check Out
        </Button>
      </div>
    </section>
  );
};

export default Cart;
