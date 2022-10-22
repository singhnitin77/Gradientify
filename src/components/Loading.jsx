import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Loading from "../assets/loading.json"

const Loader = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={Loading}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default Loader;
