import React, { useState, useEffect } from "react";
import rgbToHex from "../utility/helper";

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
      <p className="percent-value text-medium text-[16px] font-Epilogue">
        {weight}
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
