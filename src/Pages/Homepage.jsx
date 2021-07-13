import React from "react";
import CustomButton from "../Components/CustomButton.jsx";
import Product from "../Components/Product.jsx";
import { products } from "../data.js";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Homepage = () => {
  return (
    <div className="border-t-2 py-16 text-center bg-gray-100 ">
      <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
      <div className=" mt-16 min-w-xl flex lg:justify-center flex-wrap mb-8  justify-center">
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
      <CustomButton link="shop" color="red">
        <span>All products</span>
        <ChevronRightIcon className="h-4 w-4 text-white" />
      </CustomButton>
    </div>
  );
};

export default Homepage;
