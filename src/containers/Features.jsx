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
  FiSearch,
  FiPenTool,
} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      name: "100+ Gradients",
      description:
        "100+ trendy and beautifull, carefully crafted gradients for your next projects.",
      icon: <FiDatabase className="text-2xl lg:text-4xl xl:text-4xl" />,
    },

    {
      name: "Save Gradients",
      description:
        "You can bookmark your favorite gradients so that you don't have to search every time.",
      icon: <FiFilter className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Copy CSS",
      description:
        "Copy CSS, CSS text Code Snippets directly into your projects.",
      icon: <FiSearch className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Add new Gradient",
      description:
        "You can add a new gradient to gradientify, by making a pull request",
      icon: <FiPlusCircle className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Install PWA",
      description:
        "Install PWA version of gradientify to have a fast app-like experience",
      icon: <FiPenTool className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Generate Gradient",
      description:
        "Generate a nice color gradient using the gradient generator and copy CSS.",
      icon: <HiOutlineMail className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Make tints & Shades",
      description:
        "Generate lighter and darker variations of any color right in the browser.",
      icon: <FiUsers className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Download PNGs",
      description:
        "Export gradients to a PNG file ready to use in your projects",
      icon: <FiTrendingUp className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Dark Mode",
      description: "You can choose between Light or Dark Mode.",
      icon: <FiMoon className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Built for Everyone",
      description:
        "Our aim is to help design teams, developers, content creators, & freelancers",
      icon: <FiUser className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
  ];

  return (
    <>
      <div className="hero-container4 md:py-[80px] py-[48px]">
        <div className="h-auto w-full flex items-center justify-center p-7">
          <div className="h-auto min-h-[80vh] w-full rounded-md flex items-center justify-center flex-wrap overflow-x-hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-[30px] lg:text-[40px] xl:text-[36x] text-white font-bold font-Epilogue text-center mb-[24px]">
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
    </>
  );
};

export default Features;
