import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { YtVideo } from "./";
import svgicon from "../assets/icon.svg";
import banner from "../assets/banner.png";
import { BsFillPlayFill, BsLightning } from "react-icons/bs";
import Parallax from "parallax-js";
import { NavHeader } from "./";
import { AllGradients } from "../containers";

const Hero = () => {
  const [showYt, setShowYt] = useState(false);

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });

  return (
    <>
      {/* <div className="bg-image2 bg-cover bg-no-repeat bg-center"> */}
      <div className="hero-container3">
        <div className="flex flex-col md:flex-row px-[25px] md:px-[40px] py-[30px] md:py-[60px] h-auto min-h-[95vh] overflow-hidden transition duration-300">
          <YtVideo open={showYt} setOpen={setShowYt} />
          <div className="flex flex-1 justify-center items-start flex-col md:mr-[20px]">
            <h1 className="font-Epilogue text-[36px] md:text-[46px] lg:text-[54px] leading-[1.1] md:leading-[1.25] font-extrabold text-[#ECF2F5]">
              Find the Perfect gradient for your next projects
            </h1>
            <p className="font-Epilogue leading-[1.35] text-[16px] md:text-[18px] lg:text-[20px] text-[#B5C0CC] font-medium mt-[20px] mb-[32px]">
              Gradientify is an all-in-one tool that gives you access to 100+
              carefully crafted gradients, generates gradients from an image,
              creates your own gradient, and easily makes tints and shades of a
              single color.
            </p>
            <div>
              <button className="bg-[#F5BA31] hover:bg-[#f7c85a] text-[#191925] font-Epilogue text-[18px] shine font-bold outline-none cursor-pointer flex items-cener justify-center px-[20px] py-[12px] rounded-[28px]">
                Try Gradientify
              </button>
            </div>
          </div>

          {/* Video */}

          <div className="flex flex-1 items-center justify-center relative">
            <div className="flex items-center justify-center relative">
              <div className="flex">
                <div id="scene">
                  <img
                    src={banner}
                    alt="Banner"
                    data-depth="0.3"
                    className="h-[195px] w-[344px] lg:h-[340px] lg:w-[604px] rounded-md border border-[#B84F90]"
                  />
                </div>
                <div
                  classname="bg-image bg-cover bg-center p-4 absolute absolute-center transform duration-500 hover:scale-125 cursor-pointer border border-[#f5ba32]"
                  onClick={() => setShowYt(true)}
                >
                  <BsFillPlayFill className="text-white text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavHeader />
      <Outlet />
    </>
  );
};

export default Hero;

/* import React, { useEffect, useState } from "react";


import axios from "axios"; // axios

const Hero = ({ setOpen, user, setUser }) => {
  const [starCount, setStarCount] = useState(1);
  const [showYt, setShowYt] = useState(false);


  return (
    <div className="min-h-screen bg-image w-full text-[#ECF2F5] overflow-visible z-10">
      <Header setOpen={setOpen} user={user} setUser={setUser} />
      <YTModal open={showYt} setOpen={setShowYt} />
      <div className="flex items-center justify-center h-auto min-h-[90vh] lg:h-[90vh] xl:h-[90vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden">
        
        <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-center justify-center flex-col relative bg-pattern-hero pb-10 lg:pb-0 xl:pb-0 animate__animated animate__fadeInRight">
          <div className="absolute h-full w-full flex items-center justify-center">
            <img
              src="/assets/icon.svg"
              className="w-[320px] lg:w-[450px] xl:w-[450px] opacity-50 lg:opacity-100 xl:opacity-100"
            />
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex">
              <div id="scene">
                <img
                  data-depth="0.3"
                  src="/assets/codehouse-banner.png"
                  className="h-[189px] lg:h-[315px] w-[336px] lg:w-[560px] rounded-md border border-[#B84F90]"
                />
              </div>
              <div
                className="bg-image rounded-full p-4 absolute absolute-center transform duration-500 hover:scale-125 cursor-pointer border border-[#F5BA32]"
                onClick={() => setShowYt(true)}
              >
                <BsFillPlayFill className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Hero; */
