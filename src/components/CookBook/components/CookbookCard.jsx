// CookbookCard.jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 800px;
  align-items: stretch;
  aspect-ratio: 3 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 40%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 4 / 3;

  &::before {
    content: "";
    display: block;
    padding-top: 75%; /* Maintain 4:3 aspect ratio */
    background-color: #e2e8f0; /* Placeholder background color */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #2d3748;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardSubtitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
`;

const CardDetails = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  flex-wrap: wrap;
`;

const CardDetail = styled.span`
  background-color: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

// React Component

const CookbookCard = ({ cookbook, onCardClick }) => {
  const { chef, cuisine, title, imageUrl, numberOfRecipes } = cookbook;

  return (
    <CardContainer onClick={onCardClick}>
      <ImageContainer>
        <RecipeImage src={imageUrl} alt={title} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>By {chef}</CardSubtitle>
        <CardDetails>
          <CardDetail>Cuisine: {cuisine}</CardDetail>
          <CardDetail>Recipes: {numberOfRecipes}</CardDetail>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
};

export default CookbookCard;
