// RangeInput.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const RangeInputWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const StyledInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  transition: background 0.3s ease;

  &:hover {
    background: #ccc;
  }

  &:focus {
    background: #bbb;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }
`;

// RangeInput Component
const RangeInput = ({ label, ...props }) => {
  return (
    <RangeInputWrapper gridSpan={props.gridSpan}>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput type="range" {...props} />
    </RangeInputWrapper>
  );
};

export default RangeInput;
