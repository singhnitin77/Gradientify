import React from "react";
import { Button } from "@mui/material";

const CoffeeButton = () => {
  return (
    <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
      <a href="https://www.buymeacoffee.com/nitinsingh" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy me a Coffee"
          className="h-10"
        />
      </a>
    </Button>
  );
};

export default CoffeeButton;
