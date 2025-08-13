"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function FeaturedProducts() {
  const list = [
    {
      title: "Essence Mascara Lash Princess",
      img: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
      price: "$5.50",
    },
    {
      title: "Eyeshadow Palette with Mirror",
      img: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      price: "$3.00",
    },
    {
      title: "Calvin Klein CK One",
      img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      price: "$10.00",
    },
    {
      title: "Eyeshadow Palette with Mirror",
      img: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      price: "$3.00",
    },
    {
      title: "Calvin Klein CK One",
      img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      price: "$10.00",
    },

    {
      title: "Eyeshadow Palette with Mirror",
      img: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
      price: "$3.00",
    },
    {
      title: "Calvin Klein CK One",
      img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      price: "$10.00",
    },
  ];

  return (
    <div className="px-10 space-y-6">
      <h1 className="text-3xl tracking-wide">Featured Products</h1>
      <div className="gap-2 gap-y-5 grid grid-cols-2 sm:grid-cols-5">
        {list.map((item, index) => (
          /* eslint-disable no-console */
          <Card
            className="flex-col"
            key={index}
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0 h-72 w-60 bg-amber-600/80 rounded-lg">
              <Image
                alt={item.title}
                className="w-full object-cover"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
                height="100%"
              />
            </CardBody>
            <CardFooter className="text-small flex-col items-start text-start max-w-44">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
