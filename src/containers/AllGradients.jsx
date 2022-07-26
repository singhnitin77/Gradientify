import React, { useState, useEffect } from "react";
import { Loading } from "../components";
import { useGlobalContext } from "../context/Context";
import { gradients } from "../utility/gradients";
import { Gradient } from "../containers";

const AllGradients = () => {
  const { align, savedGradients, setSavedGradients } = useGlobalContext();
  // const [gradients, setGradients] = useState([]);
  const [loading, setLoading] = useState(true);

  //   map method to be applied on gradients array while displaying

  return (
    <div className="px-[80px] py-[92px] w-full bg-[#F5F9FF] dark:bg-[#333333]">
      <h1 className="text-[36px] font-bold font-Epilogue text-center leading-[1.3] mb-[72px] text-gradient-heading mx-auto md:w-7/12">
        100+ Carefully Crafted Gradients ready to use in your next projects.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gradients.map((gradient) => {
          return (
            <Gradient
              gradient={gradient}
              id={gradient.id}
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
