"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";
export default function FeaturedCategories() {
  const router = useRouter();
  const list = [
    {
      title: "Beauty",
      img: "images/beauty.jpg",
    },
    {
      title: "Fragrances",
      img: "images/fragrance.jpg",
    },
    {
      title: "Groceries",
      img: "images/groceries.jpg",
    },
  ];

  return (
    <div className="px-10 space-y-6">
      <h1 className="text-3xl tracking-wide">Featured Categories</h1>
      <div className="gap-2 grid grid-cols-3 place-content-center">
        {list.map((item, index) => (
          /* eslint-disable no-console */
          <Card
            className="flex-col"
            key={index}
            isPressable
            shadow="sm"
            onPress={() => router.push(`category/${item.title}`)}
          >
            <CardBody className="overflow-visible p-0 rounded-xl">
              <Image
                alt={item.title}
                className="w-full object-cover h-[340px] rounded-xl"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between mt-2">
              <b className="text-xl">{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
