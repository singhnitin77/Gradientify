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

const NavHeader = ({ searchTerm, setSearchTerm }) => {
  const { darkMode, setDarkMode, toggleDarkMode, align, setAlign, rotate } =
    useGlobalContext();

  return (
    <div className="w-full py-5 px-4 lg:px-8 bg-white dark:bg-[#1f1f1f] rounded-md flex items-center justify-center flex-col-reverse xl:justify-between lg:justify-between lg:flex-row xl:flex-row">
      <div className="flex items-center gap-4 w-full lg:w-5/12 xl:w-5/12 justify-center lg:justify-start mt-2 xl:mt-0 lg:mt-0">
        <Link to="/">
          <div className="border border-[#ddd] hover:border-[#3D5EFF] dark:text-white duration-300 transition px-3 lg:px-3 py-[10px] capitalize rounded-lg dark:border-[#555]">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-sm lg:text-lg text-Epilogue dark:text-white text-[#3D5EFF]">
                All Gradients
              </h1>
            </div>
          </div>
        </Link>

        <button onClick={rotate}>
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <GrRotateRight className="text-[20px] lg:text-[24px] md:mr-2 duration-300" />
            <span className="font-semibold md:flex hidden text-sm lg:text-lg text-Epilogue dark:text-white text-[#3D5EFF]">
              Rotate
            </span>
          </div>
        </button>

        <input
          type="text"
          className="font-Epilogue focus:outline-none h-full rounded-md focus:border-[#3d5eff] p-4 dark:bg-[#24292E] border border-[#ddd] dark:text-[#fafafa] dark:border-[#666] placeholder:font-Epilogue text-[16px] w-40 hidden md:block"
          placeholder="Search Hex"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <Link to="/saved-gradients">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <BsBookmarkCheck className="text-[20px] lg:text-[24px] md:mr-2 duration-300" />
            <span className="font-semibold md:flex hidden text-sm lg:text-lg text-Epilogue dark:text-white text-[#3D5EFF]">
              Saved Gradients
            </span>
          </div>
        </Link>

        <Link to="/add-new-gradient">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <BsPlusSquare className="text-[20px] lg:text-[24px] md:mr-2 duration-300" />
            <span className="font-semibold md:flex hidden text-sm lg:text-lg text-Epilogue dark:text-white text-[#3D5EFF]">
              New Gradient
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
