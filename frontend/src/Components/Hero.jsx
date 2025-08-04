import React from "react";
import bovideo from "../assets/video/bovideo.mp4";

const Hero = () => {
  return (
    <div className="-mx-[calc(50vw-50%)] w-screen h-[80vw]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted="muted"
        src={bovideo}
      />
    </div>
  );
};

export default Hero;
