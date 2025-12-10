'use client'
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useAppContext();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const searchLower = searchQuery.toLowerCase();
    const results = products.filter(product => 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category?.toLowerCase().includes(searchLower)
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search happens automatically via useEffect
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16 min-h-screen">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Products</h1>
          <form onSubmit={handleSearch} className="relative max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Made in India products..."
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-orange-500 transition pr-12"
              autoFocus
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Search Results */}
        {searchQuery.trim() === '' ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Start Searching</h2>
            <p className="text-gray-600">Enter a product name, category, or keyword to find Made in India products</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div>
            <p className="text-gray-700 mb-6">
              Found <span className="font-bold text-orange-600">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Results Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find any products matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
