// TextInput.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
    grid-column: ${(props) => props.gridSpan || 'auto'};
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

// TextInput Component
const TextInput = ({ ...props }) => {
  return (
    <InputWrapper gridSpan={props.gridSpan}>
      {props.label && <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>}
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default TextInput;
