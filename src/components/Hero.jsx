import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import banner from "../assets/banner.png";
import { BsFillPlayFill, BsLightning } from "react-icons/bs";
import Parallax from "parallax-js";
import { NavHeader, useAnalyticsEventTracker } from "./";
import { AllGradients } from "../containers";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const Hero = () => {
  const gaEventTracker = useAnalyticsEventTracker("Hero Section");

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
      <div className="bg-hero4 bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col md:flex-row px-[25px] md:px-[40px] py-[30px] md:py-[60px] h-auto min-h-[95vh] overflow-hidden transition duration-300">
          <div className="flex flex-1 justify-center items-start flex-col md:mr-[20px]">
            <h1 className="font-Epilogue text-[36px] md:text-[46px] lg:text-[54px] leading-[1.1] md:leading-[1.25] font-extrabold text-black">
              Find the Perfect gradient for your next projects
            </h1>
            <p className="font-Epilogue leading-[1.35] text-[16px] md:text-[18px] lg:text-[20px] text-[#1f1f1f] font-medium mt-[20px] mb-[32px]">
              Gradientify is a web-based all-in-one gradient editor that
              provides 100+ trendy, beautiful, carefully crafted gradients for
              your next projects. Copy CSS Snippet, Download PNGs, generates a
              nice color gradient, and easily makes tints and shades of a single
              color.
            </p>
            <div className="flex md:flex-row flex-col gap-[10px] items-start">
              <a
                href="#try-gradientify"
                onClick={() => gaEventTracker("Try Now Btn")}
                className="bg-[#F5BA31] hover:bg-[#f7c85a] text-[#191925] font-Epilogue text-[18px] shine font-bold outline-none cursor-pointer flex items-cener justify-center px-[20px] py-[12px] rounded-[26px]"
              >
                Try Gradientify
              </a>

              {/* 
              <a
                href="https://www.producthunt.com/posts/gradientify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gradientify"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=355830&theme=neutral"
                  alt="Gradientify - Product Hunt"
                  // className="w-[250px] h-[50px]"
                  style={{ width: "250px", height: "50px" }}
                />
              </a> */}
              <a
                href="https://www.producthunt.com/products/gradientify?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-gradientify"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=355830&theme=dark&period=daily"
                  alt="Gradientify - Product Hunt"
                  // className="w-[250px] h-[50px]"
                  style={{ width: "250px", height: "50px" }}
                />
              </a>
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

              <button onClick={openModal} className="">
                <div
                  onClick={() => gaEventTracker("Teaser Button")}
                  className="hero-container4 bg-cover rounded-[50%] bg-center p-4 absolute left-1/2 mx-auto top-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500 hover:scale-125 cursor-pointer border border-[#f5ba32]"
                >
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
                            width="956"
                            height="538"
                            src="https://www.youtube.com/embed/R0v9AS3gARc?autoplay=1"
                            title="Gradientify"
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
