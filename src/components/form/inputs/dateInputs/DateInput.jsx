// DateInput.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const DateInputWrapper = styled.div`
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
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

// DateInput Component
const DateInput = ({ label, ...props }) => {
  return (
    <DateInputWrapper gridSpan={props.gridSpan}>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput type="date" {...props} />
    </DateInputWrapper>
  );
};

export default DateInput;
