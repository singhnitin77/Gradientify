import React from "react";
import { GradientifyBanner } from "../components";
import { Newsletter } from ".";

const About = () => {
  return (
    <>
      <GradientifyBanner />
      <div className="py-[92px] bg-[#ECF2F5]">
        <div className="lg:w-[50%] mx-auto w-full">
          <p className="text-left text-[18px] font-Epilogue font-medium">
            Hi, This is Shahadat Rahman, a Bangladeshi product designer, graphic
            designer, speaker & passive happiness earner.
          </p>

          <p className="text-left text-[18px] font-Epilogue font-medium mt-[42px]">
            Gradienta is one of my side project that I made for both designers
            and developers to use ultra lightweight, colorful, responsive
            backgrounds for their personal and commercial projects. It is free
            to use, open source and requires no credit or attribution at all.
          </p>

          <p className="text-left text-[18px] font-Epilogue font-medium mt-[42px]">
            All of these gradients are available as CSS codes, SVG and JPG
            images. If you are a designer, you can use SVG or JPG image in your
            projects. Therefore, a developer can use all CSS/SVG/JPG (even SVG
            codes) version in a website or app.
          </p>

          <p className="text-left text-[18px] font-Epilogue font-medium mt-[42px]">
            Some SVG file or CSS code render differently in different browsers
            and OS. In my opinion, this is beautiful. Why a webpage or app
            interface should look the same in different device? And otherwise,
            you have the option to use JPG image for accuracy.
          </p>

          <p className="text-left text-[18px] font-Epilogue font-medium mt-[42px] mb-[92px]">
            Feel free to knock any of us to send bugs, ideas, suggestions or
            just connect with us.
          </p>
        </div>
        <Newsletter />
      </div>
    </>
  );
};

export default About;
