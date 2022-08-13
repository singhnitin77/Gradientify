import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsSearch, BsX } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";
import logo from "../assets/logo.png";
import { TwtBtn } from ".";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const twtlink =
    "https://twitter.com/intent/tweet?text=Checkout%20gradientify.com%20by%20@thenitinsingh7%0A%0AGradientify%20is%20a%20web-based%20all-in-one%20gradient%20editor%20that%20provides%20100+%20trendy,%20beautiful,%20carefully%20crafted%20gradients%20for%20your%20next%20projects.%20Copy%20CSS%20Snippet,%20Download%20PNGs,%20generates%20a%20nice%20color%20gradient,%20and%20much%20more";

  return (
    <div className="card navbar-container transition duration-300">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex justify-start items-center">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              {/* <p className="font-Epilogue text-[28px] font-extrabold">g</p> */}
              <img src={logo} className="w-[34px] h-[34px]" />
              <span className="text-[20px] font-Epilogue font-bold text-white">
                Gradientify
              </span>
            </div>
          </Link>
        </div>
        <div className="lg:flex xl:flex flex-auto items-center justify-center md:space-x-6 hidden">
          {/* <Link to="/">
          <p className="text-[18px] font-medium font-Epilogue">Home</p>
        </Link> */}

          <Link to="/tints-shades">
            <p className="text-[16px] text-white font-medium font-Epilogue">
              Tints & Shades
            </p>
          </Link>

          <Link to="/gradient-generator">
            <p className="text-[16px] font-medium font-Epilogue text-white">
              Gradient Generator
            </p>
          </Link>

          <Link to="/features">
            <p className="text-[16px] font-medium font-Epilogue text-white">
              Features
            </p>
          </Link>

          <Link to="/about">
            <p className="text-[16px] font-medium font-Epilogue text-white">
              About
            </p>
          </Link>
        </div>

        <div className="md:flex items-center hidden justify-center space-x-[12px]">
          <a
            href={twtlink}
            target="_blank"
            rel="noreferrer"
            className="text-[17px] font-medium lg:flex hidden font-Epilogue text-white"
          >
            Share to Twitter
          </a>
          {/* <TwtBtn /> */}
        </div>

        <button className="rounded-md block lg:hidden xl:hidden">
          <div
            className={`dark:text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-toggle ${
              showNav && "menu-toggle-active"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
          </div>
        </button>
      </div>

      {showNav && (
        <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3 p-[16px]">
          <Link to="/tints-shades" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="text-[16px] font-medium text-center text-white dark:text-[#82828a]">
                Tints & Shades
              </h3>
            </p>
          </Link>

          <Link to="/gradient-generator" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="text-[16px] font-medium text-center text-white dark:text-[#82828a]">
                Gradient Generator
              </h3>
            </p>
          </Link>

          <Link to="/features" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="text-[16px] font-medium text-center text-white dark:text-[#82828a]">
                Features
              </h3>
            </p>
          </Link>

          <Link to="/about" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="text-[16px] font-medium text-center text-white dark:text-[#82828a]">
                About
              </h3>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
