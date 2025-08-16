"use client";

import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { cartAtom } from "@/atoms/cart-atom";

interface Props {
  id: number;
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
}

const ProductDetail = ({ id }: Props) => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useAtom(cartAtom);
  // Add to Cart logic (from CategoryProducts)
  const handleAddToCart = () => {
    if (!productDetails) return;
    setCartItems((prevItems) => {
      const alreadyExist = prevItems.find(
        (prod) => prod.id === productDetails.id,
      );
      if (alreadyExist) {
        return prevItems.map((prod) =>
          prod.id === productDetails.id
            ? {
                ...prod,
                quantity: prod.quantity + quantity,
              }
            : prod,
        );
      } else {
        return [
          ...prevItems,
          {
            id: productDetails.id,
            title: productDetails.title,
            quantity: quantity,
            price: productDetails.price ?? 0,
            img: Array.isArray(productDetails.images)
              ? productDetails.images[0]
              : "",
          },
        ];
      }
    });
  };

  useEffect(() => {
    async function fetchProductDetail() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const product = await response.json();
        setProductDetails(product);
        setSelectedImage(
          product.images && product.images.length > 0
            ? product.images[0]
            : product.thumbnail || null,
        );
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }
  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }
  if (!productDetails) {
    return <div className="text-center py-8">No product found.</div>;
  }

  const {
    title,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    description,
    category,
    images,
  } = productDetails;

  const discountedPrice = discountPercentage
    ? (price - price * (discountPercentage / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md p-4 md:p-8">
        {/* Image Gallery */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={title}
                className="object-contain w-full h-full max-h-[400px] transition-all duration-300"
              />
            ) : (
              <div className="text-gray-400">No Image</div>
            )}
          </div>
          {/* Thumbnails */}
          {Array.isArray(images) && images.length > 1 && (
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`w-14 h-14 rounded border-2 ${selectedImage === img ? "border-red-400" : "border-gray-200"} overflow-hidden focus:outline-none`}
                  onClick={() => setSelectedImage(img)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#171412]">
              {title}
            </h2>
            {brand && <span className="text-sm text-gray-500">by {brand}</span>}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xl font-bold text-red-500">
              ${discountedPrice}
            </span>
            {discountPercentage && (
              <span className="text-sm line-through text-gray-400">
                ${price.toFixed(2)}
              </span>
            )}
            {discountPercentage && (
              <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-500 font-semibold">
              ★ {rating ?? "N/A"}
            </span>
            <span className="text-sm text-gray-500">
              {stock && stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
            </span>
          </div>
          <p className="text-gray-700 mt-2">{description}</p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Quantity:</span>
              <button
                className="px-2 py-1 border rounded text-lg font-bold hover:bg-gray-100"
                onClick={() => setQuantity((q: number) => (q > 1 ? q - 1 : 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                min={1}
                max={stock || 99}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setQuantity(val > 0 ? val : 1);
                }}
                className="w-12 text-center border rounded px-1 py-1"
              />
              <button
                className="px-2 py-1 border rounded text-lg font-bold hover:bg-gray-100"
                onClick={() =>
                  setQuantity((q: number) => (stock && q < stock ? q + 1 : q))
                }
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded shadow transition disabled:opacity-50"
              disabled={stock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
