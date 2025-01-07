import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { ClockIcon, HeartIcon, ForkAndKnifeIcon, ArrowRightIcon, BookmarkIcon } from '../../Branding/icons/Icons';

export default function RecipeCard({ recipe, onCardClick, chefLink }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const {
    title,
    imageUrl,
    videoUrl,
    chef,
    time,
    cuisine,
    profilePic,
  } = recipe;

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent propagation to parent onClick
    setIsVideoPlaying(true);
    const videoElement = document.querySelector('.video-player video');
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleVideoClick = (e) => {
    e.stopPropagation(); // Prevent propagation to parent onClick
    setIsVideoPlaying(false);
  };

  return (
    <CardContainer onClick={onCardClick}>
      <ImageContainer
        onClick={isVideoPlaying ? handleVideoClick : handleImageClick}
      >
        <MediaWrapper isVideoPlaying={isVideoPlaying}>
          {isVideoPlaying ? (
            <ReactPlayer
              url={videoUrl}
              playing={isVideoPlaying}
              muted
              width="100%"
              height="100%"
              className="video-player"
              config={{
                file: {
                  attributes: {
                    playsInline: true,
                  },
                },
              }}
            />
          ) : (
            <RecipeImage src={imageUrl} alt={title} />
          )}
        </MediaWrapper>
        <ChefInfo>
          <ProfilePic src={profilePic} alt={chef} />
          <ChefNameLink href={chefLink}>{chef}</ChefNameLink>
        </ChefInfo>
        <Likes>
          <BookmarkIcon className="icon-large" />
        </Likes>
        <BottomDetails>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <InfoContainer>
              <LeftInfo>
                <CardInfo>
                  <ClockIcon className="icon-large" />
                  <Text>{time}</Text>
                </CardInfo>
                <CardInfo>
                  <ForkAndKnifeIcon className="icon-large" />
                  <Text>{cuisine}</Text>
                </CardInfo>
              </LeftInfo>
              <ViewRecipeContainer onClick={onCardClick}>
                View Recipe
                <ArrowRightIcon1 className="icon-arrow" />
              </ViewRecipeContainer>
            </InfoContainer>
          </CardContent>
        </BottomDetails>
      </ImageContainer>
    </CardContainer>
  );
}

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ isVideoPlaying }) => (isVideoPlaying ? 'black' : 'transparent')};
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChefInfo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 2px solid #ffffff;
`;

const ChefNameLink = styled.a`
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`;

const Likes = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3rem;
  border-radius: 0.7rem;

  .icon-large {
    width: 30px;
    height: 30px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`;

const BottomDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 1rem 1rem 1rem;
`;

const CardContent = styled.div`
  text-align: left;
  width: 100%;
`;

const CardTitle = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2px 5px;
  .icon-large {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`;
const Text = styled.p`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`;

const ViewRecipeContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: auto 0;
  background-color: #B08B5B;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    background-color: #9a7748;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ArrowRightIcon1 = styled(ArrowRightIcon)`
  width: 35px;
  height: 35px;
  color: #ffffff;
`;
