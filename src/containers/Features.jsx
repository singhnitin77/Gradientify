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
      name: "1300 Resources",
      description:
        "DesignersLobby is world's biggest collection of best design Resources & Tools.",
      icon: <FiDatabase className="text-2xl lg:text-4xl xl:text-4xl" />,
    },

    {
      name: "Category Filter",
      description:
        "By filtering by categories, you can find what you are looking for more easily.",
      icon: <FiFilter className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Search Filter",
      description: "You can filter resources and tools by Search Filter.",
      icon: <FiSearch className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Add new Resource",
      description:
        "You can add a new resource to designers Lobby, in the new resource section.",
      icon: <FiPlusCircle className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Clean User Interface",
      description:
        "Designers Lobby is crafted with a minimal, intuitive, and sleek design.",
      icon: <FiPenTool className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Newsletter feature",
      description:
        "Subscribe to our minimal and beautiful newsletter to get 5 fresh resources",
      icon: <HiOutlineMail className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Contributors Page",
      description:
        "Our contributors are proudly displayed on our contributor's page.",
      icon: <FiUsers className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Trending Resources",
      description:
        "Dedicated section for latest and trending design resources and tools",
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
      <div className="bg-image bg-cover bg-no-repeat bg-center md:py-[80px] py-[48px]">
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
