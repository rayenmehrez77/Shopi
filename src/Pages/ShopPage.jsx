import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

const ShopPage = () => {
  return (
    <div className="border-t-2  text-center bg-gray-100 ">
      <div className="bg-gray-200 py-9">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">Shop</h1>
      </div>
      <main className="min-h-screen ">
        <div className="max-w-6xl mx-auto pt-12">
          <div className="flex justify-between">
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
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
