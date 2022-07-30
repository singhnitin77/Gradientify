import React from "react";
import { SingleCategory } from ".";
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  return (
    <div className="px-3 pt-1 pb-3 w-full flex items-center justify-center gap-4">
      {/* {categories.map((category, key) => {
        return <SingleCategory key={key} category={category} />;
      })} */}

      <Link to="/category/green">
        <button class="rounded px-5 py-2.5 h-10 w-20 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span class="absolute right-0 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative flex items-center justify-center font-Epilogue text-[16px] font-bold text-white">
            Green
          </span>
        </button>
      </Link>

      <Link to="/category/red">
        <button class="rounded px-5 py-2.5 h-10 w-20 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
          <span class="absolute right-0 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative flex items-center justify-center font-Epilogue text-[16px] font-bold text-white">
            Red
          </span>
        </button>
      </Link>

      <Link to="/category/blue">
        <button class="rounded px-5 py-2.5 h-10 w-20 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
          <span class="absolute right-0 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative flex items-center justify-center font-Epilogue text-[16px] font-bold text-white">
            Blue
          </span>
        </button>
      </Link>

      <Link to="/category/yellow">
        <button class="rounded px-5 py-2.5 h-10 w-20 overflow-hidden group bg-yellow-500 relative hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
          <span class="absolute right-0 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative flex items-center justify-center font-Epilogue text-[16px] font-bold text-white">
            Yellow
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CategoryBanner;
