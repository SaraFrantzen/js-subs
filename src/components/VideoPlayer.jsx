import React from "react";
import { Player } from "video-react";
import dropback from "../media/dropback.mp4";
import sara from "../media/sara3.jpg";

const VideoPlayer = () => {
  return (
    <>
      <Player
        playsInline
        poster={sara}
        src={dropback}
        fluid={false}
        width={500}
      />
    </>
  );
};

export default VideoPlayer;
