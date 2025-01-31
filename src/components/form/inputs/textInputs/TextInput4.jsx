// TextInput.jsx
import React from 'react';
import styled from 'styled-components';
import { ArrowRightIcon } from '../../../Branding/icons/Icons'

// Styled Components
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7f8;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 1rem;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #222;
  }
`;

const ArrowIcon = styled(ArrowRightIcon)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

// TextInput Component
const TextInput4 = ({ onSubmit, ...props }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <InputWrapper>
      <StyledInput {...props} onKeyDown={handleKeyDown} />
      <SubmitButton onClick={onSubmit}>
        <ArrowIcon />
      </SubmitButton>
    </InputWrapper>
  );
};

export default TextInput4;
