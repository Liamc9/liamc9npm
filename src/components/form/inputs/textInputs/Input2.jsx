// Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

// The Unified Input Component
const Input2 = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  maxLength,
  minLength,
  pattern,
  autoFocus,
  readOnly,
  className,
  ...rest
}) => (
  <InputWrapper className={className}>
    {label && (
      <Label htmlFor={name}>
        {label}
        {required && ' *'}
      </Label>
    )}
    <StyledInput
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      autoFocus={autoFocus}
      readOnly={readOnly}
      {...rest} // Forward any additional props
    />
  </InputWrapper>
);


export default Input2;
