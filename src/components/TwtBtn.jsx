import React from "react";
import { Button } from "@mui/material";
import { FiTwitter } from "react-icons/fi";

const TwtBtn = () => {
  const twtlink =
    "https://twitter.com/intent/tweet?text=Checkout%20desigerslobby.com%20by%20@thenitinsingh7%0A%0AWorld's%20biggest%20collection%20of%20Best%20design%20resources%20and%20tools%20all%20in%20one%20place,%20with%20amazing%20features.%20This%20is%20something%20you%20don't%20want%20to%20miss!";

  return (
    <Button
      className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
      href={twtlink}
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#1a91da] hover:bg-[#0f84b4] px-3 py-2 capitalize rounded-[8px] font-semibold flex items-center justify-center text-white">
        Share to Twitter
        <FiTwitter className="text-lg ml-1" />
      </div>
    </Button>
  );
};

export default TwtBtn;
