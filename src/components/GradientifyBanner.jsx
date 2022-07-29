import React from "react";
import { Link } from "react-router-dom";
import { CoffeeButton, TwtBtn } from ".";
import { FiBookOpen } from "react-icons/fi";

const GradientifyBanner = () => {
  return (
    // <div className="bg-cover bg-no-repeat bg-center bg-image">
    <div className="hero-container4">
      <div className="w-full text-center flex items-center md:items-center lg:items-center xl:items-center justify-center flex-col py-12 pl-5 lg:pl-0 xl:pl-0">
        <Link to="/">
          <h2 className="text-[38px] md:text-[40px] lg:text-[44px] text-white text-center font-Epilogue font-bold mb-[24px]">
            Gradientify
          </h2>
        </Link>
        <p className="md:text-[18px] text-[15px] font-Epilogue font-medium text-[#B5C0CC] px-[20px] w-full lg:w-7/12 text-center mb-[32px]">
          Introducing Designers Lobby, a growing collection of 1200+ design
          resources and tools with over 60 categories. Updated weekly for the
          community with fresh resources. We aim to help high-performance design
          teams, developers, content creators, and freelancers. Add new
          resources, filter by categories, filter by search, dark mode, and
          newsletter feature.
        </p>
        <div className="flex flex-wrap flex-col items-center justify-center md:flex-row animate__animated animate__fadeInUp">
          <a href="https://hashnode.com/@nitinsingh" target="_blank">
            <button className="shine bg-[#f5ba31] px-3 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center text-[#201c4e]]">
              <FiBookOpen className="text-lg mr-1" />
              <span>Read Blog</span>
            </button>
          </a>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <CoffeeButton />
          </div>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <TwtBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientifyBanner;
