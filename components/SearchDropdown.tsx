"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  thumbnail?: string;
}

const SearchDropdown = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!value.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    setLoading(true);
    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`,
        );
        const data = await res.json();
        setResults(data.products || []);
        setShowDropdown(true);
      } catch {
        setResults([]);
        setShowDropdown(false);
      } finally {
        setLoading(false);
      }
    }, 350);
  };

  const handleSelect = (id: number) => {
    setShowDropdown(false);
    setQuery("");
    setResults([]);
    router.push(`/product-detail/${id}`);
  };

  return (
    <div className="relative w-56 md:w-64">
      <input
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="border rounded-xl px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300 text-sm"
        onFocus={() => query && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
      />
      {showDropdown && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto">
          {loading ? (
            <div className="p-3 text-center text-gray-400 text-sm">
              Loading...
            </div>
          ) : results.length === 0 ? (
            <div className="p-3 text-center text-gray-400 text-sm">
              No products found
            </div>
          ) : (
            results.map((product) => (
              <button
                key={product.id}
                className="flex items-center w-full px-3 py-2 hover:bg-red-50 transition text-left gap-3"
                onMouseDown={() => handleSelect(product.id)}
              >
                {product.thumbnail && (
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-8 h-8 object-cover rounded"
                  />
                )}
                <span className="truncate text-sm text-[#171412]">
                  {product.title}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
