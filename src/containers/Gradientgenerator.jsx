import React, { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";
import { Tooltip } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";
import { MdArrowUpward, MdOutlineReplay } from "react-icons/md";

const Gradientgenerator = () => {
  const [color1, setColor1] = useState("#051937");

  const [color2, setColor2] = useState("#A8EB12");
  const [direction, setDirection] = useState("linear-gradient");
  const [generated1, setGenerated1] = useState("");
  const [generated2, setGenerated2] = useState("");
  const [generated3, setGenerated3] = useState("");
  const [orientation, setOrientation] = useState("to right bottom");
  const [error, setError] = useState("");
  const [invertedcolor1, setinvertedColor1] = useState("");
  const [invertedcolor2, setinvertedColor2] = useState("");
  const hex = useRef(color1);
  const hex2 = useRef(color2);

  const ulStyle = {
    backgroundImage:
      direction +
      "(" +
      orientation +
      "," +
      color1 +
      "," +
      generated1 +
      "," +
      generated2 +
      "," +
      generated3 +
      "," +
      color2 +
      ")",
  };

  const cssCode =
    direction +
    "(" +
    orientation +
    "," +
    color1 +
    "," +
    generated1 +
    "," +
    generated2 +
    "," +
    generated3 +
    "," +
    color2 +
    ");";

  //   css code
  const CSS = `background: ${color1}; background: 
  -webkit-${direction}( ${orientation}, ${color1}, ${generated1}, ${generated2}, ${generated3},${color2});  
  \nbackground: ${direction}(to ${orientation}, ${color1}, ${generated1}, ${generated2}, ${generated3},${color2});`;

  useEffect(() => {
    generateColors();
  });

  const changeOrientation = (orientation) => {
    console.log(orientation);
    if (orientation === "circle") {
      setDirection("radial-gradient");
    } else {
      setDirection("linear-gradient");
      setOrientation(orientation);
    }
  };

  const generateColors = () => {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      let word = chroma.scale([color1, color2]).mode("lch").colors(5);
      setGenerated1(word[1]);
      setGenerated2(word[2]);
      setGenerated3(word[3]);

      setinvertedColor1(checkContrast(color1));
      setinvertedColor2(checkContrast(color2));

      setError("");
    } else {
      setError("Color are not valid");
    }
  };

  const checkContrast = (color) => {
    const contrast = chroma(color).luminance();
    if (contrast > 0.6) {
      return "#000";
    } else {
      return "#fff";
    }
  };

  const doJob = (e) => {
    e.preventDefault();
    setColor1(hex.current.value);
    setColor2(hex2.current.value);
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-900 h-screen inset-0 px-10"
      style={ulStyle}
    >
      <div className="px-4 py-6">
        <h1 className="md:text-5xl text-white font-extrabold font-Epilogue text-center text-2xl">
          Generate a CSS Color Gradient
        </h1>
        <h2 className="text-xl text-white font-Epilogue text-center py-3 mt-2">
          Choose orientation
        </h2>

        <div className="flex items-center justify-center p-2 gap-2 flex-wrap md:gap-5">
          <Tooltip title="to top">
            <button onClick={() => changeOrientation("to top")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white" />
            </button>
          </Tooltip>

          <Tooltip title="to right top">
            <button onClick={() => changeOrientation("to right top")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform rotate-45" />
            </button>
          </Tooltip>

          <Tooltip title="to right">
            <button onClick={() => changeOrientation("to right")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform rotate-90" />
            </button>
          </Tooltip>

          <Tooltip title="to right bottom">
            <button onClick={() => changeOrientation("to right bottom")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform rotate-135" />
            </button>
          </Tooltip>

          <Tooltip title="to bottom">
            <button onClick={() => changeOrientation("to bottom")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform rotate-180" />
            </button>
          </Tooltip>

          <Tooltip title="to bottom left">
            <button onClick={() => changeOrientation("to bottom left")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform rotate-225" />
            </button>
          </Tooltip>

          <Tooltip title="to left">
            <button onClick={() => changeOrientation("to left")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform -rotate-90" />
            </button>
          </Tooltip>

          <Tooltip title="to left top">
            <button onClick={() => changeOrientation("to left top")}>
              <MdArrowUpward className="text-2xl md:text-3xl text-white transform -rotate-45" />
            </button>
          </Tooltip>

          <Tooltip title="to radial">
            <button onClick={() => changeOrientation("circle")}>
              <MdOutlineReplay className="text-2xl md:text-3xl text-white" />
            </button>
          </Tooltip>
        </div>

        <h2 className="text-xl text-white text-center py-3 mt-5 font-Epilogue font-semibold">
          Enter Colors & press Enter
        </h2>
        <div className="text-white text-center py-2 rounded mb-3 w-40 mx-auto">
          <h2 className="bg-amber-700">{error}</h2>
        </div>

        <div className="flex items-center justify-center flex-wrap">
          <form
            action=""
            className="flex gap-5 justify-center items-center flex-wrap mb-[24px]"
          >
            <input
              type="text"
              ref={hex}
              defaultValue={color1}
              name="hex"
              style={{ background: `${color1}`, color: `${invertedcolor1}` }}
              className="focus:outline-none border-none appearance-none rounded px-2 py-3 text-center shadow-2xl font-bold font-Epilogue bg-red-900"
            />

            <input
              type="text"
              ref={hex2}
              defaultValue={color2}
              name="hex2"
              style={{ background: `${color2}`, color: `${invertedcolor2}` }}
              className="focus:outline-none border-none appearance-none rounded px-2 py-3 text-center shadow-2xl font-bold font-Epilogue bg-red-700"
            />

            <input type="submit" className="hidden" onClick={(e) => doJob(e)} />
          </form>
        </div>

        <div className="box md:w-[640px] w-[350px] h-auto mx-auto break-all mt-4 p-2">
          <p className="p-3 text-gray-200 font-Epilogue text-base md:text-[16px] text-center font-regular">
            {CSS}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gradientgenerator;
