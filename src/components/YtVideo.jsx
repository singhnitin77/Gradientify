import React from "react";

// modal popup for material ui
import { Modal, Backdrop, Fade } from "@mui/material";

const YtVideo = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className="flex items-center justify-center"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <iframe
          className="w-10/12 h-5/12 lg:w-[896px] lg:h-[504px] xl:w-[896px] xl:h-[504px]"
          src="https://www.youtube.com/embed/pqaWrDdzAFc"
          title="Build powerful web apps and client portals from Airtable, in minutes."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Fade>
    </Modal>
  );
};

export default YtVideo;
