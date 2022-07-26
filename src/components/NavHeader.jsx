import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  BsArrowsFullscreen,
  BsBookmarkCheck,
  BsBrightnessHigh,
  BsFullscreenExit,
  BsLightning,
  BsPlusSquare,
} from "react-icons/bs";
import { GrRotateRight } from "react-icons/gr";
import { IoMooonOutline } from "react-icons/io5";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

const NavHeader = () => {
  const { darkMode, setDarkMode, toggleDarkMode, align, setAlign, rotate } =
    useGlobalContext();

  return (
    <div className="px-[40px] py-[30px] block lg:flex space-y-4 sm:space-y-0 items-center justify-between w-full bg-[#ECF2F5] dark:border-[#777] dark:bg-[#1f1f1f] duration-300 transition">
      <div className="border border-[#ddd] hover:border-[#3D5EFF] duration-300 transition px-3 lg:px-5 py-[10px] capitalize rounded-lg dark:border-[#555]">
        <Link to="/all-gradients">
          <div className="flex items-center justify-center">
            <h1 className="text-[16px] font-bold text-Epilogue dark:text-white text-[#3D5EFF]">
              Show All Gradients
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button onClick={rotate}>
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 lg:px-4 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <GrRotateRight className="text-[20px] lg:text-[24px] mr-2 duration-300" />
            <span className="text-[16px] font-bold text-Epilogue dark:text-white text-[#3D5EFF]">
              Rotate Gradients
            </span>
          </div>
        </button>

        <Link to="/saved-gradients">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 lg:px-4 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <BsBookmarkCheck className="text-[20px] lg:text-[24px] mr-2 duration-300" />
            <span className="text-[16px] font-bold text-Epilogue dark:text-white text-[#3D5EFF]">
              Saved Gradients
            </span>
          </div>
        </Link>

        <Link to="/add-new-gradient">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 lg:px-4 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <BsPlusSquare className="text-[20px] lg:text-[24px] mr-2 duration-300" />
            <span className="text-[16px] font-bold text-Epilogue dark:text-white text-[#3D5EFF]">
              Add a new Gradient
            </span>
          </div>
        </Link>

        <button className="rounded-md">
          <div
            className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center dark:border-[#555] dark:text-white menu-animation-hover"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FiMoon className="text-[16px] lg:text-[20px] duration-500" />
            ) : (
              <FiSun className="text-[16px] lg:text-[20px] duration-500" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
