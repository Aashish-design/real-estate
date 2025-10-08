import React from "react";

const Hero = ({ name }) => {
  return (
    <div>
      <div
        id="main"
        className="w-[100%] h-[38vh] sm:h-[70vh] bg-black flex justify-center items-center relative"
      >
        <div className="w-[100%] h-[100%] bg-[url(src/assets/images/about-page.avif)] bg-cover bg-center opacity-55 "></div>
        <h1 className="text-[8vw] sm:text-[4.5vw] font-[Cabinet] font-[600] absolute bottom-[12.5vh] sm:bottom-[20vh] text-white text-shadow-[0 2px 8px rgba(0, 0, 0, 0.6)]">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
