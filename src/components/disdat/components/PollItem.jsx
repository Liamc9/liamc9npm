// src/components/PollItem.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Container for the entire component
const Container = styled.div`
position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
`;

// Header containing the question and category badge
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`;

// Category badge styling
const Badge = styled.span`
position: absolute;
    top: 4px;
    right: 4px;
  background-color: #fff;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
`;

// Container for the option buttons
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Option button styling
const OptionButton = styled.button`
  width: 48%;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

// Percentage bar container
const BarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px; /* Increased height to accommodate percentage labels */
  border-radius: 5px;
  overflow: hidden;
  background-color: #f0f0f0;
`;

// Individual bar segment styling
const BarSegment = styled.div`
  position: relative;
  width: ${props => props.percentage}%;
  background-color: ${props => props.color};
  transition: width 2s ease, background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

// Percentage label styling
const PercentageLabel = styled.span`
  position: absolute;
  top: 5px;
  ${props => (props.align === 'left' ? 'left: 10px;' : 'right: 10px;')}
  font-size: 0.8rem;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
`;

// Option name styling within the bar
const OptionName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: visible; /* Allow overflow */
  text-overflow: unset;
  z-index: 1;
`;

const PollItem = ({
  question,
  category,
  opt1,
  opt2,
  percOpt1,
  percOpt2,
  chosenOpt: initialChosenOpt = null,
}) => {
  const [chosenOpt, setChosenOpt] = useState(initialChosenOpt);
  const [showBar, setShowBar] = useState(!!initialChosenOpt);
  const [displayedPercOpt1, setDisplayedPercOpt1] = useState(50);
  const [displayedPercOpt2, setDisplayedPercOpt2] = useState(50);

  useEffect(() => {
    if (showBar) {
      // Initialize to 50-50 split
      setDisplayedPercOpt1(50);
      setDisplayedPercOpt2(50);

      // Trigger transition to actual percentages after a short delay
      const timer = setTimeout(() => {
        setDisplayedPercOpt1(percOpt1);
        setDisplayedPercOpt2(percOpt2);
      }, 100); // 100ms delay for smoother transition

      return () => clearTimeout(timer);
    }
  }, [showBar, percOpt1, percOpt2]);

  const handleOptionClick = (option) => {
    setChosenOpt(option);
    setShowBar(true);
  };

  return (
    <Container>
      <Header>
        <h2 style={{ margin: 0 }}>{question}</h2>
        <Badge>{category}</Badge>
      </Header>
      {!showBar ? (
        <ButtonsContainer>
          <OptionButton
            aria-label={`Select ${opt1}`}
            onClick={() => handleOptionClick(opt1)}
          >
            {opt1}
          </OptionButton>
          <OptionButton
            aria-label={`Select ${opt2}`}
            onClick={() => handleOptionClick(opt2)}
          >
            {opt2}
          </OptionButton>
        </ButtonsContainer>
      ) : (
        <BarContainer>
          <BarSegment
            percentage={displayedPercOpt1}
            color={chosenOpt === opt1 ? '#007bff' : '#000'}
          >
            <PercentageLabel align="left">{`${displayedPercOpt1}%`}</PercentageLabel>
            <OptionName title={opt1}>{opt1}</OptionName>
          </BarSegment>
          <BarSegment
            percentage={displayedPercOpt2}
            color={chosenOpt === opt2 ? '#007bff' : '#000'}
          >
            <PercentageLabel align="right">{`${displayedPercOpt2}%`}</PercentageLabel>
            <OptionName title={opt2}>{opt2}</OptionName>
          </BarSegment>
        </BarContainer>
      )}
    </Container>
  );
};

PollItem.propTypes = {
  question: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  opt1: PropTypes.string.isRequired,
  opt2: PropTypes.string.isRequired,
  percOpt1: PropTypes.number.isRequired,
  percOpt2: PropTypes.number.isRequired,
  chosenOpt: PropTypes.string,
};

export default PollItem;
