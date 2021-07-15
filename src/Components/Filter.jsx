import React from "react";
import { FilterIcon } from "@heroicons/react/outline";
import { ReactComponent as SortIcon } from "../sort.svg";

const Filter = () => {
  return (
    <div className="flex items-center justify-center space-x-16 border-b-2 pb-6 lg:hidden">
      <button className="flex items-center space-x-2 border-r-4 px-16 py-4">
        <FilterIcon className="h-7 w-7 text-gray-700" />
        <h1 className="font-bold text-gray-700">Filter</h1>
      </button>
      <button className="flex items-center space-x-2 py-4">
        <SortIcon className="h-10 w-10 text-gray-700" />
        <h1 className="font-bold text-gray-700">Sort</h1>
      </button>
    </div>
  );
};

export default Filter;
