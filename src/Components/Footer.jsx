import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white h-96 flex flex-col justify-center items-center">
      <img src="/images/logo.svg" alt="logo" />
      <nav>
        <ul className="flex my-8 space-x-8 justify-center  flex-wrap">
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en">HOME</Link>
          </li>
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en/store">SHOP</Link>
          </li>
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en/contact-us">CONTACT</Link>
          </li>
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en">سياسة الخصوصية</Link>
          </li>
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en">الشروط و الأحكام</Link>
          </li>
          <li className="font-medium text-gray-800 text-sm lg:text-md mx-4 lg:max-0">
            <Link to="/en">سياسة الاسترجاع والاسترداد</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4 border-b pb-16">
        <a
          href="/"
          className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
        >
          <img src="/images/vector-1.svg" alt="logo" className="h-6 w-6" />
        </a>
        <a
          href="/"
          className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
        >
          <img src="/images/vector-2.svg" alt="logo" className="h-5 w-5" />
        </a>
        <a
          href="/"
          className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
        >
          <img src="/images/vector-3.svg" alt="logo" className="h-5 w-5" />
        </a>
        <a
          href="/"
          className="border rounded-full p-3 hover:bg-red-400 transition-all delay-75"
        >
          <img src="/images/vector.svg" alt="logo" className="h-5 w-5" />
        </a>
      </div>
      <p className="text-center py-4 text-sm lg:text-md font-medium text-gray-600">
        © 2021 All rights reserved — Develop by{" "}
        <a
          rel="noreferrer"
          className="text-red-500 font-bold"
          target="_blank"
          href="https://rayenmehrez.me/"
        >
          Rayen Mehrez
        </a>
      </p>
    </div>
  );
};

export default Footer;
