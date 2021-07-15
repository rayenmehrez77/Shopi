import React from "react";
import {
  AdjustmentsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { products } from "../data.js";
import Product from "../Components/Product.jsx";
import Filter from "../Components/Filter.jsx";

const ShopPage = () => {
  return (
    <div className="border-t-2  text-center bg-gray-100 pb-16">
      <div className="bg-gray-200 py-9">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">Shop</h1>
      </div>
      <main className="min-h-screen ">
        <div className="w-6xl mx-auto lg:px-32 px-8 pt-8">
          <Filter />
          <div className="lg:flex justify-between hidden">
            <button className="flex items-center space-x-2 bg-red-600 py-2 px-4 hover:bg-red-700 text-white cursor-pointer rounded shadow">
              <AdjustmentsIcon className="h-5 w-5" />
              <span className="font-medium">Filter</span>
            </button>
            <select className="px-4 outline-none bg-white border font-medium text-gray-700 rounded ">
              <option
                value="Default Sorting"
                className="font-medium  text-gray-700"
              >
                Default Sorting
              </option>
              <option
                value="Price: low to high"
                className="font-medium text-gray-700"
              >
                Price: low to high
              </option>
              <option
                value="Price: hight to low"
                className="font-medium text-gray-700"
              >
                Price: hight to low
              </option>
            </select>
          </div>
          <div className=" mt-16 w-6xl mx-auto flex lg:justify-between flex-wrap mb-8  justify-center ">
            {products.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
          <div className="flex mb-12 justify-center space-x-8">
            <button
              disabled
              className="bg-red-400 w-8 h-8 flex justify-center items-center rounded"
            >
              <ChevronLeftIcon className="text-white w-6" />
            </button>
            <span className="font-inter font-extrabold text-red-500">1</span>
            <button
              disabled
              className="bg-red-400  w-8 h-8 flex justify-center items-center rounded"
            >
              <ChevronRightIcon className="text-white w-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
