import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/solid";

const Product = ({ title, image, size, price, oldPrice, state }) => {
  return (
    <div className="my-6 bg-white rounded-lg overflow-hidden shadow text-left  relative">
      <img src={image} alt={title} className="rounded-md w-80" />
      <div className="px-4 pt-4">
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="flex space-x-3 py-3">
          {size.map((item) => (
            <div className="border px-2 py-1 font-medium text-red-500 rounded">
              {item}
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <span className="text-red-500 font-bold text-xl">{price} TND</span>
          <span className="line-through font-medium text-gray-700 text-md">
            {oldPrice} TND
          </span>
        </div>
        <button className="border py-2 my-6 flex justify-center items-center focus:ring-2  rounded space-x-2 px-auto hover:shadow-lg group transition-all delay-30  w-full text-center outline-none hover:bg-red-600 ">
          <span className="text-red-500 font-medium group-hover:text-white">
            Add to cart
          </span>
          <ShoppingBagIcon className="h-5 w-5 text-red-500 group-hover:text-white" />
        </button>
      </div>
      <div className="absolute left-3 top-3 bg-red-500 px-2 text-white font-medium rounded uppercase">
        {state}
      </div>
    </div>
  );
};

export default Product;
