import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ children, link, color }) => {
  return (
    <Link
      to={`/en/${link}`}
      className={`max-w-xl flex items-center justify-center mx-auto ${
        color === "red" ? "red-btn" : "white-btn"
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
