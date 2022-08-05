import React from "react";

const FeatureCard = ({ name, description, icon }) => {
  return (
    <div className="mx-4 my-4 lg:my-6 xl:my-6 relative flex items-center justify-start flex-col w-full lg:w-[17%] xl:w-[17%] text-center overflow-hidden">
      <div className="p-3 lg:p-5 xl:p-5 icons-bg text-white">{icon}</div>
      <h3 className="font-semibold  mt-[16px] mb-[8px] text-[20px] font-Epilogue text-black">
        {name}
      </h3>
      <p className="text-[#1f1f1f] font-Epilogue font-medium text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
