import { motion } from "framer-motion";
import React from "react";
import {
  ArrowCircleRightIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const RightSidebar = ({ open, setOpen }) => {
  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: "-100",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 50,
      },
    },
  };

  return (
    <motion.div className="h-6/5 flex fixed inset-0 shadow lg-hidden">
      <div
        className="flex-1 bg-black opacity-50"
        onClick={() => setOpen(!open)}
      >
        <div className="bg-gray-50 border rounded-full w-8 h-8 mt-8 cursor-pointer absolute top-8 right-72">
          <ArrowCircleRightIcon
            className="h-full w-full text-gray-900 cursor-pointer"
            onClick={() => setOpen(!open)}
          />{" "}
        </div>
      </div>
      <div className="bg-white w-96  p-4 relative">
        <div className="flex items-center space-x-3 border-b pb-4">
          <ShoppingBagIcon className="w-8 h-8 text-gray-800" />
          <h1 className="text-xl font-medium">Shopping</h1>
        </div>
        <div className="border-t absolute bottom-56 left-0 right-0 px-4 pt-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">Subtotal</h2>
            <span className="font-bold text-xl text-red-500">TND 0.00</span>
          </div>
          <div className="mt-6 space-y-6 flex flex-col">
            <Link
              onClick={() => setOpen(!open)}
              to="/en/checkout"
              className="bg-red-500 hover:shadow text-center flex items-center justify-center py-2 text-white font-medium rounded"
            >
              Checkout
              <ChevronRightIcon className="h-5 w-6 text-white" />
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              to="/en/cart"
              className="bg-white border border-red-500 text-red-500 text-center py-2 font-medium rounded hover:shadow"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightSidebar;
