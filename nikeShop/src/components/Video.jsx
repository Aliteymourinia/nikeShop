import React from "react";
import NikeRunningVid from "../assets/NikeRunningClub.mp4"
const VideoComponent = () => {
  return (
    <div className=" video-container my-20 flex justify-center items-center">
      <video
        src={NikeRunningVid}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};
export default VideoComponent;
