import React from "react";
import PropTypes from "prop-types";
import { ButtonArrowIcon } from "../../Branding/icons/Icons";

const HeroContent = ({
  header,
  title,
  subtitle,
  contentTitle,
  contentSubtitle,
  shopNowLink,
  bottleBgImage,
  bottleImage,
}) => {
  return (
    <div className="flex md:flex-row flex-col md:space-x-20 items-center py-12 px-4 transition-all duration-500 ease-in-out">
      {/* Left Side Content */}
      <div className="flex flex-col justify-between max-w-[320px] md:text-left text-center space-y-6 md:space-y-8">
        <div>
          <h3 className="uppercase text-sm tracking-widest font-semibold">
            {header}
          </h3>
          <h1 className="font-garamond text-7xl font-light mt-2">
            {title}
          </h1>
          <h2 className="font-garamond text-3xl font-light mt-4 mb-10">
            {subtitle}
          </h2>
        </div>
        <div>
          <div className="font-garamond text-xl italic mb-4">
            {contentTitle}
          </div>
          <div className="text-base leading-relaxed mb-6 tracking-tight">
            {contentSubtitle}
          </div>
          <div className="flex items-center space-x-3 font-medium text-sm hover:text-blue-500 cursor-pointer">
            <a href={shopNowLink} className="hover:underline">
              Shop Now
            </a>
            <ButtonArrowIcon className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Right Side Images */}
      <div className="flex justify-center items-center relative md:mt-0 mt-10">
        <div className="relative">
          <img
            className="rounded-full object-cover transition-transform duration-500 ease-in-out"
            src={bottleBgImage}
            alt={`${title} background`}
            style={{ width: "320px", height: "450px" }}
          />
          <img
            className="absolute top-[25%] left-0 transform scale-150 transition-transform duration-500 ease-in-out"
            src={bottleImage}
            alt={`${title} bottle`}
          />
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  contentSubtitle: PropTypes.string.isRequired,
  shopNowLink: PropTypes.string.isRequired,
  bottleBgImage: PropTypes.string.isRequired,
  bottleImage: PropTypes.string.isRequired,
};

export default HeroContent;
