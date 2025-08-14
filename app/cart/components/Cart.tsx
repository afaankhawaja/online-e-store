"use client";
import { cartAtom } from "@/atoms/cart-atom";
import { useAtom } from "jotai";
import React, { useMemo } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const Cart = () => {
  const [cartItems] = useAtom(cartAtom);
  const SubTotal = useMemo(() => {
    const sum = cartItems.reduce((acc, curr) => {
      acc = acc + curr.price * curr.quantity;
      return acc;
    }, 0);
    return sum.toFixed(2);
  }, [cartItems]);
  return (
    <section className="px-52 mt-20 min-h-[calc(100vh-370px)]">
      <h1 className="text-3xl">Your Cart</h1>
      <div className="flex-col space-y-5 mt-8">
        {cartItems.map((item, index) => {
          return (
            <div key={item.id} className="flex justify-between w-full">
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
                  <p className="text-[12px]">Quantity : {item.quantity}</p>
                </div>
              </div>
              <div>
                <p>{item.price}</p>{" "}
                <p className="-ml-4">
                  <span className="text-black/70 text-[12px]">
                    x{item.quantity}
                  </span>{" "}
                  {item.price * item.quantity}
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
          className="bg-amber-600 text-white/70 hover:bg-amber-500 px-3 py-2 font-semibold"
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
