import React, { useState, useEffect } from "react";
import { CategoryBanner, Loading } from "../components";
import { useGlobalContext } from "../context/Context";
// import { gradients } from "../utility/gradients";
import { Gradient } from "../containers";
import { useOutletContext } from "react-router-dom";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

// animate.css
import "animate.css";
import { useGradient } from "../context/GradientContext";

const AllGradients = ({ savedGradients, setSavedGradients }) => {
  const { align, rotate } = useGlobalContext();
  const { gradients, loading } = useGradient();

  const [searchTerm] = useOutletContext();

  //   map method to be applied on gradients array while displaying

  return (
    <div className="px-[30px] md:px-[72px] lg:px-[80px] py-[72px] md:py-[80px] lg:py-[92px] w-full bg-[#F5F9FF] dark:bg-[#333333] overflow-x-hidden">
      {/* <CategoryBanner /> */}
      <h1 className="text-[28px] md:text-[36px] w-full font-bold font-Epilogue text-center leading-[1.3] mb-[54px] md:mb-[72px] text-gradient-heading mx-auto md:w-7/12">
        100+ Carefully Crafted Gradients ready to use in your next projects.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gradients &&
          gradients
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.colors[0]
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              } else if (
                val.colors[1]
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((gradient, key) => {
              return (
                <Gradient
                  gradient={gradient}
                  key={key}
                  align={align}
                  savedGradients={savedGradients}
                  setSavedGradients={setSavedGradients}
                />
              );
            })}
      </div>
    </div>
  );
};

export default AllGradients;
