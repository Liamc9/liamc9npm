// TextareaInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

const TextareaInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  rows,
  maxLength,
  autoFocus,
  readOnly,
  className,
}) => (
  <TextareaWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      rows={rows}
      maxLength={maxLength}
      autoFocus={autoFocus}
      readOnly={readOnly}
    />
  </TextareaWrapper>
);

TextareaInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};

TextareaInput.defaultProps = {
  placeholder: '',
  required: false,
  disabled: false,
  rows: 4,
  maxLength: undefined,
  autoFocus: false,
  readOnly: false,
  className: '',
};

export default TextareaInput;
