import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { YtVideo } from "./";
import svgicon from "../assets/icon.svg";
import banner from "../assets/banner.png";
import { BsFillPlayFill, BsLightning } from "react-icons/bs";
import Parallax from "parallax-js";
import { NavHeader } from "./";
import { AllGradients } from "../containers";
import AnimatedLetters from "./AnimatedLetters/AnimatedLetters";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const Hero = () => {
  const [showYt, setShowYt] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });

  return (
    <>
      {/* <div className="bg-image2 bg-cover bg-no-repeat bg-center"> */}
      <div className="hero-container4">
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
              <div id="scene">
                <img
                  src={banner}
                  alt="Banner"
                  data-depth="0.3"
                  className="h-[195px] w-[344px] lg:h-[340px] lg:w-[604px] rounded-md border border-[#B84F90]"
                />
              </div>
              {/* <div
                classname="bg-image z-999 bg-cover bg-center bg-no-repeat p-4 absolute absolute-center transform duration-500 hover:scale-125 cursor-pointer border border-[#f5ba32]"
                onClick={() => setShowYt(true)}
              >
                <BsFillPlayFill className="text-white text-3xl" />
              </div> */}
              <button onClick={openModal} className="">
                <div classname="bg-image z-999 bg-cover bg-center bg-no-repeat p-4 absolute absolute-center transform duration-500 hover:scale-125 cursor-pointer border border-[#f5ba32]">
                  <BsFillPlayFill className="text-white text-3xl" />
                </div>
                {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        {/* <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        /> */}
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style w-10/12 h-5/12 lg:w-[896px] lg:h-[504px] xl:w-[896px] xl:h-[504px]"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/4UZrsTqkcW4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Outlet context={[searchTerm]} />
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
          // <div className="absolute h-full w-full flex items-center justify-center">
          //   // <img
          //   //   src="/assets/icon.svg"
          //   //   className="w-[320px] lg:w-[450px] xl:w-[450px] opacity-50 lg:opacity-100 xl:opacity-100"
          //   // />
          // </div>
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

/* 

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["l", "o", "b", "o", "d", "a", "n"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>

            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>


          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;

*/
