import React, { useState, useEffect, useRef } from "react";
import TopNavBar2 from "../../navigation/TopNavBar2";
import HeroContent from "../../molecules/other/HeroContent";
import { ButtonArrowIcon } from "../../Branding/icons/Icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card3 from "../../atoms/cards/Card3";

// Dummy components for additional content
const AdditionalContent1 = () => (
  <div>
    <h2>Additional Content for Slide 1</h2>
    <Card3 />
  </div>
);

const AdditionalContent2 = () => (
  <div>
    <h2>Additional Content for Slide 2</h2>
    <Card3 />
  </div>
);

// Sample slides data
const slidesData = [
  {
    id: "beach",
    header: "Closca Bottle",
    title: "Beach",
    subtitle: "€39.90",
    contentTitle:
      "In 20 years, there could be more plastic in our oceans than fish.",
    contentSubtitle:
      "Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.",
    shopNowLink: "#",
    bottleBgImage:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop",
    bottleImage:
      "https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png",
    backgroundColor: "#e7dfcf",
    additionalContentComponent: AdditionalContent1,
  },
  {
    id: "savanna",
    header: "Closca Bottle",
    title: "Savanna",
    subtitle: "€39.90",
    contentTitle:
      "The Earth's area affected by desertification is approximately 11 times India's size.",
    contentSubtitle:
      "The Savannas act as a carbon sink, absorbing CO₂ from the atmosphere and helping to maintain the balance of global temperatures.",
    shopNowLink: "#",
    bottleBgImage:
      "https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&auto=format&fit=crop",
    bottleImage:
      "https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png",
    backgroundColor: "#e9bf8b",
    additionalContentComponent: AdditionalContent2,
  },
  // More slides...
];

const PortfolioMainSlider = ({ slides = slidesData }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0.7); // Initial shadow opacity
  const totalSlides = slides.length;
  const slideDuration = 5000; // 5 seconds
  const sliderRef = useRef(null);
  const progressBarRef = useRef(null);
  const additionalContentRef = useRef(null);
  const isPlayingRef = useRef(isPlaying);

  // Keep isPlayingRef updated with the latest isPlaying state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    let autoSlideInterval;
    let progressInterval;

    if (isPlaying) {
      // Start the progress bar animation
      setProgress(0);

      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            handleNextSlide();
            return 0;
          }
          return prevProgress + (100 / (slideDuration / 100));
        });
      }, 100);

      // Automatically change slides after duration
      autoSlideInterval = setInterval(() => {
        handleNextSlide();
      }, slideDuration);
    }

    return () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPlaying, currentSlideIndex]);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (additionalContentRef.current) {
        const contentTop = additionalContentRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let opacity = 1 - contentTop / (windowHeight / 2);
        if (opacity < 0) opacity = 0;
        if (opacity > 0.7) opacity = 0.7;
        setShadowOpacity(0.7 - opacity);
      }

      // Start playing slides when scrolled to top
      if (window.scrollY === 0 && !isPlayingRef.current) {
        setIsPlaying(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure this runs once

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleTabClick = (tabTitle) => {
    const tabIndex = slides.findIndex((slide) => slide.title === tabTitle);
    if (tabIndex !== -1) {
      setCurrentSlideIndex(tabIndex);
      setProgress(0); // Reset progress on manual navigation
    }
  };

  const handleViewClick = () => {
    // Pause the slider and scroll down to the content below the slider
    setIsPlaying(false);
    additionalContentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const currentSlide = slides[currentSlideIndex];
  const AdditionalContentComponent =
    currentSlide.additionalContentComponent || Card3;

  return (
    <>
      {/* Inline CSS for transitions */}
      <style>{`
        .fade-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;
        }
        .progress-bar {
          height: 4px;
          background-color: black;
          transition: width 100ms linear;
        }
      `}</style>

      {/* Main Container */}
      <div className="h-screen">
        <div
          ref={sliderRef}
          className="container overflow-hidden relative h-[650px] w-full flex flex-col p-8"
          style={{ backgroundColor: currentSlide.backgroundColor }}
        >
          {/* Top Navigation Bar */}
          <TopNavBar2
            menuItems={slides.map((slide) => slide.title)}
            activeTab={currentSlide.title}
            onTabClick={handleTabClick}
          />

          {/* Hero Content with Transition */}
          <div className="relative flex-grow mt-16">
            <TransitionGroup className="h-full">
              <CSSTransition
                key={currentSlide.id}
                timeout={500}
                classNames="fade"
              >
                <HeroContent
                  header={currentSlide.header}
                  title={currentSlide.title}
                  subtitle={currentSlide.subtitle}
                  contentTitle={currentSlide.contentTitle}
                  contentSubtitle={currentSlide.contentSubtitle}
                  shopNowLink={currentSlide.shopNowLink}
                  bottleBgImage={currentSlide.bottleBgImage}
                  bottleImage={currentSlide.bottleImage}
                />
              </CSSTransition>
            </TransitionGroup>

            {/* Navigation Buttons */}
            <div className="absolute bottom-5 right-5 z-10 flex space-x-4">
              <button
                onClick={handlePrevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"
              >
                <ButtonArrowIcon className="transform rotate-180" />
              </button>
              <button
                onClick={handleNextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"
              >
                <ButtonArrowIcon />
              </button>
            </div>

            {/* Pagination */}
            <div className="absolute right-5 top-10 text-base font-medium">
              {currentSlideIndex + 1} / {totalSlides}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full">
              <div
                ref={progressBarRef}
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* View Button and Additional Content */}
        <div className="relative">
          {/* Shadow Overlay */}
          <div
            className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, ${shadowOpacity}), transparent)`,
            }}
          ></div>

          {/* View Button */}
          <div className="absolute text-white inset-x-0 top-0 flex justify-center py-5 z-20">
            <button
              onClick={handleViewClick}
              className="flex flex-col items-center cursor-pointer"
            >
              <span className="animate-bounce">
                <ButtonArrowIcon
                  className="h-6 w-6 transform rotate-90"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-2 text-lg font-medium">
                View {currentSlide.title}
              </span>
            </button>
          </div>

          {/* Additional Content Component */}
          <div
            ref={additionalContentRef}
            className="w-full bg-gray-100 p-8"
            style={{ minHeight: "400px" }}
          >
            <AdditionalContentComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioMainSlider;
