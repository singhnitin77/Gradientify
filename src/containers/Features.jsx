import React from "react";
import { FeatureCard } from "../components";
import Newsletter from "./Newsletter";

import {
  FiDatabase,
  FiMoon,
  FiUsers,
  FiPlusCircle,
  FiTrendingUp,
  FiFilter,
  FiUser,
  FiCode,
  FiSave,
  FiSearch,
  FiPenTool,
  FiDownload,
} from "react-icons/fi";
import { FaDownload, FaHighlighter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdExitToApp } from "react-icons/md";
import { BsRainbow } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      name: "100+ Gradients",
      description:
        "100+ trendy and beautifull, carefully crafted gradients for your next projects.",
      icon: <FiDatabase className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },

    {
      name: "Save Gradients",
      description:
        "You can bookmark your favorite gradients so that you don't have to search every time.",
      icon: <FiSave className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Copy CSS",
      description:
        "Copy CSS, CSS text Code Snippets directly into your projects.",
      icon: <FiCode className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Add new Gradient",
      description:
        "You can add a new gradient to gradientify, by making a pull request",
      icon: <FiPlusCircle className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Install PWA",
      description:
        "Install PWA version of gradientify to have a fast app-like experience",
      icon: <MdExitToApp className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Generate Gradient",
      description:
        "Generate a nice color gradient using the gradient generator and copy CSS.",
      icon: <BsRainbow className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Make tints & Shades",
      description:
        "Generate lighter and darker variations of any color right in the browser.",
      icon: <FaHighlighter className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Download PNGs",
      description:
        "Export gradients to a PNG file ready to use in your projects",
      icon: <FiDownload className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Dark Mode",
      description: "You can choose between Light or Dark Mode.",
      icon: <FiMoon className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Search by Hex",
      description: "Search your favorite gradients using the hex code",
      icon: <FiSearch className="text-2xl zoom lg:text-4xl xl:text-4xl" />,
    },
  ];

  return (
    <>
      <div className="bg-hero4 bg-cover bg-no-repeat bg-center">
        <div className="md:py-[80px] py-[48px]">
          <div className="h-auto w-full flex items-center justify-center p-7">
            <div className="h-auto min-h-[80vh] w-full rounded-md flex items-center justify-center flex-wrap overflow-x-hidden">
              <div className="flex items-center justify-between">
                <h1 className="text-[30px] zoom lg:text-[48px] text-black font-bold font-Epilogue text-center mb-[24px]">
                  Features
                </h1>
              </div>
              <div className="flex flex-wrap w-full justify-center mt-10">
                {features.map((feature, i) => {
                  return (
                    <FeatureCard
                      name={feature.name}
                      description={feature.description}
                      icon={feature.icon}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
