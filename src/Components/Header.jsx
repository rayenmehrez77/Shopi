import React from "react";
import {
  GlobeIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";

const Header = ({ isOpen, setIsOpen, open, setOpen }) => {
  return (
    <div className="w-6xl lg:px-32 pt-4 sm:px-8 sm:pt-8 px-4 ">
      <div className="flex items-center justify-between pb-12">
        <MenuIcon
          className=" w-8 h-8 text-gray-600 cursor-pointer outline-none md:hidden inline-block"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link to="/en">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="md:flex items-center hidden">
          <div className="md:flex items-center border px-4 py-2 w-96 justify-between rounded hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none flex-1 text-gray-800 font-inter "
            />
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <ShoppingCartIcon
          className="h-8 w-8 text-gray-600 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <div className="md:flex items-center hidden">
          <div className="flex space-x-3 items-center border-r-2 pr-2">
            <ShoppingCartIcon
              className="h-8 w-8 text-gray-600 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
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
      <div className="border-t py-4 flex items-center justify-between ">
        <div className="flex items-center border px-4 py-2 justify-between rounded md:hidden w-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none flex-1 text-gray-800 font-inter "
          />
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <nav className="md:inline-block hidden">
          <ul className="flex space-x-5 font-inter font-medium text-gray-600">
            <li className="hover:bg-gray-200 py-2 px-4 rounded">
              <Link to="/en">Home</Link>
            </li>
            <li className="hover:bg-gray-200 py-2 px-4 rounded">
              <Link to="/en/store">Store</Link>
            </li>
            <li className="hover:bg-gray-200 py-2 px-4 rounded">
              <Link to="/en/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="items-center space-x-4 md:flex hidden">
          <img
            src="/images/vector-1.svg"
            alt="logo"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/images/vector-2.svg"
            alt="logo"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="/images/vector-3.svg"
            alt="logo"
            className="h-5 w-5 cursor-pointer"
          />
          <img
            src="/images/vector.svg"
            alt="logo"
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
