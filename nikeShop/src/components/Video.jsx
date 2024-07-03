import React from "react";

const VideoComponent = () => {
  return (
    <div className=" video-container my-40 flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uXlWYZ022zU?si=HC2stLr79FmRjFRW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default VideoComponent;
