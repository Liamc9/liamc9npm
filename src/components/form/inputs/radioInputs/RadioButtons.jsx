// RadioButtons.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const RadioWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

// RadioButtons Component
const RadioButtons = ({ label, name, ...props }) => {
  return (
    <RadioWrapper gridSpan={props.gridSpan}>
      <StyledInput type="radio" name={name} {...props} />
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
    </RadioWrapper>
  );
};

export default RadioButtons;
