import React from "react";
import { Button } from "@mui/material";
import { FiTwitter } from "react-icons/fi";

const TwtBtn = () => {
  const twtlink =
    "https://twitter.com/intent/tweet?text=Checkout%20gradientify.com%20by%20@thenitinsingh7%0A%0AGradientify%20is%20a%20web-based%20all-in-one%20gradient%20editor%20that%20provides%20100+%20trendy,%20beautiful,%20carefully%20crafted%20gradients%20for%20your%20next%20projects.%20Copy%20CSS%20Snippet,%20Download%20PNGs,%20generates%20a%20nice%20color%20gradient,%20and%20much%20more";

  return (
    <Button
      className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
      href={twtlink}
      target="_blank"
    >
      <div className="bg-[#1a91da] hover:bg-[#0f84b4] px-3 py-2 capitalize rounded-[8px] font-semibold flex items-center justify-center text-white">
        Share to Twitter
        <FiTwitter className="text-lg ml-1" />
      </div>
    </Button>
  );
};

export default TwtBtn;
