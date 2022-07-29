import React from "react";
import { Gradient } from "./";
import { useGlobalContext } from "../context/Context";

const SavedGradients = () => {
  const { align, savedGradients, setSavedGradients } = useGlobalContext();

  return (
    <div className="px-[30px] md:px-[72px] lg:px-[80px] py-[72px] md:py-[80px] lg:py-[92px] w-full bg-[#F5F9FF]">
      <h1 className="text-[28px] md:text-[36px] font-bold font-Epilogue text-center leading-[1.3] mb-[54px] md:mb-[72px] text-gradient-heading mx-auto md:w-7/12">
        Saved Gradients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {savedGradients.map((gradient) => {
          return (
            <Gradient gradient={gradient} id={gradient.id} align={align} />
          );
        })}
      </div>

      {savedGradients.length < 1 && (
        <h1 className="text-[28px] md:text-[36px] font-bold font-Epilogue text-center leading-[1.3] mb-[54px] md:mb-[72px] text-gradient-heading mx-auto md:w-7/12">
          Uh Oh! You have n't saved any gradient!
        </h1>
      )}
    </div>
  );
};

export default SavedGradients;
