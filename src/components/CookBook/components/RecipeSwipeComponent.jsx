// RecipeSwipeComponent.jsx
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';

// If you intend to use VolumeIcon and MuteIcon, ensure they're correctly imported
// import { VolumeIcon, MuteIcon } from 'liamc9npm';

// Styled Components

const RecipeSwipeContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  height: 100svh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
`;

const RecipeInfoCards = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeCard = styled.div`
  margin: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RecipeCardHeader = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const RecipeCardContent = styled.div`
  font-size: 1em;
  color: #555;
`;

const Drawer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
  z-index: 10;
  overflow-y: auto;

  transform: translateY(80%);

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0);
    `}
`;

const DrawerHandle = styled.div`
  text-align: center;
  color: #000000;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const DrawerContent = styled.div`
  padding: 20px;
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const StepIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1em;
  z-index: 15;
`;

const MuteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// React Component

const RecipeSwipeComponent = ({ recipe }) => {
  const {
    name,
    cuisine,
    time,
    servings,
    calories,
    steps,
    overviewVideoUrl,
    overviewDescription,
  } = recipe;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentStepDescription, setCurrentStepDescription] = useState(overviewDescription);
  const [isMuted, setIsMuted] = useState(false);

  const toggleDrawer = (description) => {
    setCurrentStepDescription(description);
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = (e) => {
    // Since DrawerOverlay is a separate styled component, we don't need to check class
    setIsDrawerOpen(false);
  };

  const goToOverview = () => {
    const swiperInstance = document.querySelector('.swiper').swiper;
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
    setCurrentStepDescription(overviewDescription);
  };

  const handleSlideChange = (swiper) => {
    document.querySelectorAll('video').forEach((video) => video.pause());
    const activeSlide = swiper.slides[swiper.activeIndex];
    const video = activeSlide.querySelector('video');
    if (video) {
      video.play();
    }
    setCurrentStepDescription(
      swiper.activeIndex === 0
        ? overviewDescription
        : steps[swiper.activeIndex - 1].description
    );
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    document.querySelectorAll('video').forEach((video) => (video.muted = !isMuted));
  };

  return (
    <RecipeSwipeContainer>
      {isDrawerOpen && <DrawerOverlay onClick={closeDrawer} />}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={!isDrawerOpen}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <SlideContainer className="recipe-overview">
            <Video
              src={overviewVideoUrl}
              className="overview-video"
              playsInline
              muted={isMuted}
              onClick={(e) =>
                e.target.paused ? e.target.play() : e.target.pause()
              }
            />
            <Title>{name}</Title>
            <RecipeInfoCards>
              <RecipeCard>
                <RecipeCardHeader>Cuisine</RecipeCardHeader>
                <RecipeCardContent>{cuisine}</RecipeCardContent>
              </RecipeCard>
              <RecipeCard>
                <RecipeCardHeader>Time</RecipeCardHeader>
                <RecipeCardContent>{time}</RecipeCardContent>
              </RecipeCard>
              <RecipeCard>
                <RecipeCardHeader>Servings</RecipeCardHeader>
                <RecipeCardContent>{servings}</RecipeCardContent>
              </RecipeCard>
              <RecipeCard>
                <RecipeCardHeader>Calories</RecipeCardHeader>
                <RecipeCardContent>{calories} kcal</RecipeCardContent>
              </RecipeCard>
            </RecipeInfoCards>
          </SlideContainer>
        </SwiperSlide>

        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <SlideContainer className="recipe-step">
              <BackButton onClick={goToOverview}>Back</BackButton>
              <StepIndicator>Step {index + 1}</StepIndicator>
              <MuteButton onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
                {/* If using icons, replace text with icons */}
                {/* {isMuted ? <VolumeIcon /> : <MuteIcon />} */}
              </MuteButton>
              <Video
                src={step.videoUrl}
                className="step-video"
                playsInline
                muted={isMuted}
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              />
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>

      <Drawer open={isDrawerOpen} onClick={(e) => {
        if (e.target.closest('.drawer-handle')) {
          toggleDrawer(currentStepDescription);
        }
      }}>
        <DrawerHandle className="drawer-handle">Swipe up for step details</DrawerHandle>
        {isDrawerOpen && (
          <DrawerContent>
            <p>{currentStepDescription}</p>
          </DrawerContent>
        )}
      </Drawer>
    </RecipeSwipeContainer>
  );
};


export default RecipeSwipeComponent;
