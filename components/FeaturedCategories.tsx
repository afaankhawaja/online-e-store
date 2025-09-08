"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function FeaturedCategories() {
  const [imageIndex, SetImageIndex] = useState({
    beauty: 0,
    grocery: 0,
    frangrance: 0,
  });
  const router = useRouter();
  const list = [
    {
      id: "beauty",
      title: "Beauty",
      img: `images/category-beauty-${imageIndex.beauty}.jpg`,
    },
    {
      id: "frangrance",
      title: "Fragrances",
      img: `images/category-fragrance-${imageIndex.frangrance}.jpg`,
    },
    {
      id: "grocery",
      title: "Groceries",
      img: `images/category-grocery-${imageIndex.grocery}.jpg`,
    },
  ];

  const handleHover = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    if (target.id === "frangrance") {
      SetImageIndex({
        ...imageIndex,
        frangrance: (imageIndex.frangrance + 1) % 3,
      });
    } else if (target.id === "beauty") {
      SetImageIndex({
        ...imageIndex,
        beauty: (imageIndex.beauty + 1) % 3,
      });
    } else {
      SetImageIndex({
        ...imageIndex,
        grocery: (imageIndex.grocery + 1) % 3,
      });
    }
  };

  return (
    <div className="px-10 space-y-6">
      <h1 className="text-3xl tracking-wide">Featured Categories</h1>
      <div className="gap-2 grid gap-y-8 md:grid-cols-3 place-content-center">
        {list.map((item, index) => (
          <Card
            className="flex-col"
            key={index}
            isPressable
            shadow="sm"
            onPress={() => router.push(`category/${item.title}`)}
          >
            <CardBody className="overflow-visible p-0 rounded-xl">
              <Image
                id={item.id}
                onMouseEnter={handleHover}
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
