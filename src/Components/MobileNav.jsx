import React from "react";
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, setIsOpen, setOpen, open }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white h-32 flex shadow-inner border-t md:hidden">
      <ul className="flex items-center justify-around w-full">
        <li className="flex flex-col items-center cursor-pointer">
          <ShoppingBagIcon className="w-8 h-8" />
          <Link to="/en/store" className="font-medium">
            Shop
          </Link>
        </li>
        <button className="flex flex-col items-center outline-none  cursor-pointer">
          <ViewGridIcon className="w-8 h-8" />
          <Link to="/en" className="font-medium">
            Home
          </Link>
        </button>
        <li
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <ShoppingCartIcon className="w-8 h-8" />
          <Link to="/en/cart" className="font-medium">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
