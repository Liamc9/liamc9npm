import React from "react";

// The Hero component definition
const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative w-full shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-200 drop-shadow-md">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-800 drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

 export default Hero;



