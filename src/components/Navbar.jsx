import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsSearch, BsX } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { useGlobalContext } from "../context/Context";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const { darkMode, setDarkMode, toggleDarkMode } = useGlobalContext();

  return (
    <div className="bg-[#F5F9FF] dark:bg-[#0D1117] transition duration-300">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex justify-start items-center">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              {/* <p className="font-Epilogue text-[28px] font-extrabold">g</p> */}
              <img src={logo} className="w-[34px] h-[34px]" />
              <span className="text-[20px] font-Epilogue font-bold dark:text-white">
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
            <p className="text-[16px] dark:text-[#A3B3BC] text-[#5B6478] font-medium font-Epilogue">
              Tints & Shades
            </p>
          </Link>

          <Link to="/gradient-generator">
            <p className="text-[16px] font-medium font-Epilogue text-[#5B6478]  dark:text-[#A3B3BC]">
              Gradient Generator
            </p>
          </Link>

          <Link to="/features">
            <p className="text-[16px] font-medium font-Epilogue text-[#5B6478]  dark:text-[#A3B3BC]">
              Features
            </p>
          </Link>

          <Link to="/about">
            <p className="text-[16px] font-medium font-Epilogue text-[#5B6478]  dark:text-[#A3B3BC]">
              About
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-[12px]">
          <a
            href=""
            className="text-[17px] font-medium lg:flex hidden font-Epilogue text-[#5B6478] dark:text-[#A3B3BC]"
          >
            Share to Twitter
          </a>

          {/* <button className="rounded-md">
            <div
              onClick={toggleDarkMode}
              className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center dark:border-[#555] dark:text-white"
            >
              {darkMode ? (
                <FiMoon className="text-[16px] lg:text-[20px] duration-300" />
              ) : (
                <FiSun className="text-[16px] lg:text-[20px] duration-300" />
              )}
            </div>
          </button> */}
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
