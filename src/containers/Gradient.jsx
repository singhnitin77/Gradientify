import React, { useState, useEffect } from "react";

// material ui
import { Button, Tooltip } from "@mui/material";
import { useGlobalContext } from "../context/Context";

import { Link } from "react-router-dom";

// react hot toast
import toast from "react-hot-toast";

// Icons
import {
  BsBookmarkCheck,
  BsBookmarkPlus,
  BsClipboard,
  BsCode,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

// Link react router
import { Links } from "react-router-dom";

const Gradient = ({ gradient, align, savedGradients, setSavedGradients }) => {
  const [showCopyBg, setShowCopyBg] = useState(false);
  const [showSaveBg, setShowSaveBg] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  //   css code
  const CSS = `background: ${gradient.colors[0]};  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]});  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;

  //   copy css function
  const copyCSS = () => {
    // clipboard api
    navigator.clipboard.writeText(CSS);

    toast.success("Copied to clipboard!");

    setShowCopyBg(true); //ui change
    setTimeout(() => {
      setShowCopyBg(false);
    }, [1000]);
  };

  //   copy single color to clipboard
  const copySingleColor = (color) => {
    navigator.clipboard.writeText(color);

    // toast
    toast.success("Copied to clipboard!");

    setShowCopyBg(true); //ui change
    setTimeout(() => {
      setShowCopyBg(false);
    }, [1000]);
  };

  const saveGradient = () => {
    if (isBookMarked) {
      setSavedGradients(
        savedGradients.filter(
          (savedGradient) => savedGradient.id !== gradient.id
        )
      );
      // toast
      toast.success("Removed Gradient from Saved!");
    } else {
      setSavedGradients([
        ...savedGradients,
        {
          id: gradient.id,
          colors: gradient.colors,
        },
      ]);
      // toast
      toast.success("Saved Gradient!");

      setShowSaveBg(true); //ui change
      setTimeout(() => {
        setShowSaveBg(false);
      }, [1000]);
    }
  };

  //   Fetching saved gradient
  const fetchSavedGradients = () => {
    if (
      savedGradients.some((savedGradients) => savedGradients.id === gradient.id)
    ) {
      setIsBookMarked(true);
    } else {
      setIsBookMarked(false);
    }
  };

  useEffect(() => {
    fetchSavedGradients();
  });

  let background;
  if (gradient.colors.length > 2) {
    background = `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]},${gradient.colors[2]})`;
  } else {
    background = `linear-gradient(to ${align}, ${gradient.colors[0]}, ${gradient.colors[1]})`;
  }

  return (
    <div
      className="gradient-shadow bg-white m-3 shadow-xl rounded-[10px] transition duration-500 overflow-hidden cursor-pointer text-[#222] dark:bg-[#222222]"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <Link to={`/gradient/${gradient.id}`}>
        <div
          className="h-[220px] w-full rounded-t-[10px] flex items-start justify-end p-2 relative overflow-hidden"
          style={{ background: `${background}` }}
        >
          {showCopyBg && (
            <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center">
              <div className="w-[92.5%] h-[92.5%] frosted-nav dark:bg-[#111] rounded-md flex items-center justify-center flex-col">
                <BsClipboard className="text-3xl text-[#111] dark:text-[#fafafa]" />
                <h3 className="text-[#111] dark:text-[#fafafa] mt-2">
                  Copied to Clipboard
                </h3>
              </div>
            </div>
          )}

          {showSaveBg && (
            <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center">
              <div className="w-[92.5%] h-[92.5%] frosted-nav dark:bg-[#111] rounded-md flex items-center justify-center flex-col">
                <BsBookmarkCheck className="text-3xl text-[#111] dark:text-[#fafafa]" />
                <h3 className="text-[#111] dark:text-[#fafafa] mt-2">
                  Saved Gradient
                </h3>
              </div>
            </div>
          )}

          <div
            onClick={() => saveGradient(gradient.id)}
            className="w-10 overflow-hidden flex items-center justify-center rounded-md ml-1 bg-white z-1 dark:border-[#777] dark:bg-[#222] z-[3]"
          >
            <Tooltip title="Save Gradient">
              <Button className="btn">
                <div className="w-full h-9 flex items-center justify-center overflow-hidden">
                  {isBookMarked ? (
                    <BsBookmarkCheck className="text-[1.3rem] text-[#ffdd00]" />
                  ) : (
                    <BsBookmarkPlus className="text-[1.3rem] dark:text-[#fafafa]" />
                  )}
                </div>
              </Button>
            </Tooltip>
          </div>
        </div>
      </Link>

      <div className="w-full flex items-center justify-between p-[18px]">
        <div className="flex items-center uppercase gap-x-2">
          <Tooltip title={`Copy ${gradient.colors[0]}`}>
            <div
              className="text-md font-medium w-[22px] h-[22px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[0])}
              style={{ background: `${gradient.colors[0]}` }}
            ></div>
          </Tooltip>
          <Tooltip title={`Copy ${gradient.colors[1]}`}>
            <div
              className="text-md font-medium w-[22px] h-[22px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[1])}
              style={{ background: `${gradient.colors[1]}` }}
            ></div>
          </Tooltip>
          <Tooltip title={`Copy ${gradient.colors[2]}`}>
            <div
              className="text-md font-medium w-[22px] h-[22px] rounded-[50%]"
              onClick={() => copySingleColor(gradient.colors[2])}
              style={{ background: `${gradient.colors[2]}` }}
            ></div>
          </Tooltip>
        </div>

        <div className="flex items-center">
          <Tooltip title="Copy CSS">
            <div
              onClick={copyCSS}
              className="overflow-hidden flex items-center justify-center transition duration-300 dark:text-white"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <h1 className="font-Epilogue text-[14px] continuous-line font-medium">
                  Copy CSS
                </h1>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Copy Text CSS">
            <div
              onClick={copyCSS}
              className="overflow-hidden ml-3 flex items-center justify-center transition duration-300 dark:text-white"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <h1 className="font-Epilogue text-[14px] continuous-line font-medium">
                  Copy Text CSS
                </h1>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
