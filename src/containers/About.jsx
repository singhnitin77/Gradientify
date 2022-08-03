import React from "react";
import { GradientifyBanner } from "../components";
import { Newsletter } from ".";
import { Link } from "react-router-dom";
import { FaInstagram, FaDribbble } from "react-icons/fa";
import { FiGithub, FiLink, FiTwitter } from "react-icons/fi";

const About = () => {
  return (
    <>
      <GradientifyBanner />
      <div className="px-[30px] md:px-[72px] lg:px-[80px] py-[72px] md:py-[80px] lg:py-[92px] w-full bg-[#ECF2F5]">
        <div className="lg:w-[50%] mx-auto w-full">
          <p className="text-left text-[16px] md:text-[18px] text-[#5B6478] font-Epilogue font-medium">
            Hi, this is Nitin Singh, a full stack developer, UI/UX Designer, and
            an Illustrator bootstrapping useful products for the community. His
            works got featured in Product Hunt, Hash node, Gumroad, and Android
            Study Jam by Google Devs India.
          </p>

          <p className="text-left text-[16px] md:text-[18px] text-[#5B6478] font-Epilogue font-medium mt-[42px]">
            Gradientify is one of my side products I build with my{" "}
            <Link to="/contributors">
              <a className="font-bold continuous-line text-[#d73e87]">
                Friends
              </a>
            </Link>{" "}
            for both designers and developers. It is free to use, and open
            source. Gradientify offers a huge collection of elegant gradients.
            you can use it for free without attribution.
          </p>

          <p className="text-left text-[16px] md:text-[18px] font-Epilogue text-[#5B6478] font-medium mt-[42px]">
            All of these gradients are carefully crafted and ready to use in
            your next projects, apps, UI design or to be used as content
            backgrounds. Copy CSS, Copy Text CSS, Download PNGs, Save Gradients,
            and many features make the app interesting.
          </p>

          <p className="text-left text-[16px] md:text-[18px] font-Epilogue text-[#5B6478] font-medium mt-[42px]">
            Also make tints and shades of a single color to get lighter and
            darker variations of any color right in the browser. Also, generate
            a nice color gradient using a gradient generator
          </p>

          <p className="text-left text-[16px] md:text-[18px] font-Epilogue text-[#5B6478] font-medium mt-[42px] mb-[92px]">
            Feel free to contribute in the project or just come up with bugs,
            ideas, suggestions.
          </p>

          <div className="flex items-center gap-5 justify-center">
            <a
              href="https://twitter.com/thenitinsingh7"
              target="_blank"
              className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
            >
              <FiTwitter className="text-2xl md:3xl transition duration-500 hover:scale-125" />
            </a>
            <a
              href="https://www.thenitinsingh.com/"
              target="_blank"
              className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
            >
              <FiLink className="text-2xl md:3xl transition duration-500 hover:scale-125" />
            </a>

            <a
              href="https://github.com/singhnitin77"
              target="_blank"
              className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
            >
              <FiGithub className="text-2xl md:3xl transition duration-500 hover:scale-125" />
            </a>

            <a
              href="https://www.instagram.com/thenitinsingh7/"
              target="_blank"
              className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
            >
              <FaInstagram className="text-2xl md:3xl transition duration-500 hover:scale-125" />
            </a>

            <a
              href="https://dribbble.com/sing_nitin7"
              target="_blank"
              className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
            >
              <FaDribbble className="text-2xl md:3xl transition duration-500 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default About;
