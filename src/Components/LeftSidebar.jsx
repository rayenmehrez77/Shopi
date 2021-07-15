import { GlobeIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import React from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
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
    <motion.div className="h-screen flex fixed inset-0 shadow lg-hidden">
      <motion.div
        className="bg-white flex-1"
        variants={fadeLeft}
        animate={isOpen ? "visible" : "hidden"}
      >
        <div
          className="flex items-center space-x-2 py-4 bg-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GlobeIcon className="h-6 w-6 text-gray-600 ml-4" />
          <span className="cursor-pointer font-medium hover:text-red-500 -mt-1">
            عربي
          </span>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col space-y-5 font-inter font-medium text-gray-600">
            <li
              className="border-b pb-4 mt-4 pl-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link to="/en">Home</Link>
            </li>
            <li
              className="border-b pb-4 pl-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link to="/en/store">Store</Link>
            </li>
            <li
              className="border-b pb-4 pl-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link to="/en/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <h1 className="pl-4 py-4 text-lg font-medium">Follow us on </h1>
        <div className="flex items-center space-x-4 pl-4 flex-start  w-full flex-wrap">
          <a
            href="/"
            className="border rounded-full p-2 md:p-3 hover:bg-red-400 transition-all delay-75"
          >
            <img
              src="/images/vector-1.svg"
              alt="logo"
              className="md:h-6 md:w-6 w-4 h-4 "
            />
          </a>
          <a
            href="/"
            className="border rounded-full p-2 md:p-3 hover:bg-red-400 transition-all delay-75"
          >
            <img
              src="/images/vector-2.svg"
              alt="logo"
              className="md:h-5 md:w-5 w-4 h-4"
            />
          </a>
          <a
            href="/"
            className="border rounded-full p-2 md:p-3 hover:bg-red-400 transition-all delay-75"
          >
            <img
              src="/images/vector-3.svg"
              alt="logo"
              className="md:h-5 md:w-5 w-4 h-4"
            />
          </a>
          <a
            href="/"
            className="border rounded-full p-2 md:p-3 hover:bg-red-400 transition-all delay-75"
          >
            <img
              src="/images/vector.svg"
              alt="logo"
              className="md:h-5 md:w-5 w-4 h-4"
            />
          </a>
        </div>
      </motion.div>
      <div
        className="flex-1 bg-black opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="bg-gray-50 border rounded-full w-8 h-8 -ml-4 mt-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowCircleLeftIcon className="h-full w-full text-gray-900" />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
