import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14">
      <div className="w-full mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-2xl font-medium">Proudly Made in India Products</p>
          <span className="text-3xl">🇮🇳</span>
        </div>
        <p className="text-gray-600">Discover authentic Indian products, Support local businesses, Promote Atmanirbhar Bharat</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {products.length > 0 ? (
          products.map((product, index) => <ProductCard key={index} product={product} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">Loading Made in India products...</p>
          </div>
        )}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
