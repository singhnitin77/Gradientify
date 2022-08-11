import React, { useState, useEffect } from "react";
import rgbToHex from "../utility/helper";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // console.log(hexColor);

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="percent-value text-medium text-[16px] font-Epilogue">
            {weight}
          </p>
          <p className="color-value">{hexValue}</p>
        </div>
        {/* <IoCopyOutline className="text-[24px] text-[#eaeaea]" /> */}
        <IoCopyOutline
          onClick={() => {
            // setAlert(true);
            toast.success(`${hexValue} Copied to clipboard!`);
            navigator.clipboard.writeText(hexValue);
          }}
          className={`text-[22px] hover:scale-125 transition duration-500 text-[#111] ${
            index > 10 && "text-[#eee]"
          }`}
        />
      </div>
    </article>
  );
};

export default SingleColor;
