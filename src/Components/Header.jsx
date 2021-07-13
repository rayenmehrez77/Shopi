import React from "react";
import {
  GlobeIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto pt-12">
      <div className="flex items-center justify-between pb-12">
        <div className="flex items-center space-x-6 ">
          <Link to="/en">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
          </Link>
          <div className="flex items-center border px-4 py-2 w-96 justify-between rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none flex-1 text-gray-800 font-inter "
            />
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-3 items-center border-r-2 pr-2">
            <ShoppingCartIcon className="h-8 w-8 text-gray-600" />
            <span className="font-inter font-extrabold text-red-500">
              TND 0.00
            </span>
          </div>
          <div className="flex items-center space-x-2 ml-3">
            <span className="cursor-pointer font-medium hover:text-red-500">
              عربي
            </span>
            <GlobeIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
      <div className="border-t py-4 flex items-center justify-between">
        <nav>
          <ul className="flex space-x-5 font-inter font-medium text-gray-600">
            <li>
              <Link to="/en">Home</Link>
            </li>
            <li>
              <Link to="/en/store">Store</Link>
            </li>
            <li>
              <Link to="/en/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/vector-1.svg`}
            alt="logo"
            className="h-6 w-6"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/vector-2.svg`}
            alt="logo"
            className="h-5 w-5"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/vector-3.svg`}
            alt="logo"
            className="h-5 w-5"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/vector.svg`}
            alt="logo"
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
