import React from "react";
import NikeRunningVid from "../assets/NikeRunningVid.mp4";
const VideoComponent = () => {
  return (
    <div className=" video-container my-20 flex justify-center">
      <video
        className="object-cover"
        src={NikeRunningVid}
        autoPlay
        muted
        loop
        playsInline
        controls
      ></video>
    </div>
  );
};
export default VideoComponent;
