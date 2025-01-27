// RadioButtons.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 500;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButtons = ({
  label,
  name,
  options,
  value,
  onChange,
  required,
  disabled,
  className,
}) => (
  <RadioWrapper className={className}>
    {label && <span style={{ marginBottom: '8px', fontWeight: '600' }}>{label}</span>}
    {options.map((option) => (
      <RadioOption key={option.value}>
        <RadioInput
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={(e) => onChange(e)}
          required={required}
          disabled={disabled}
        />
        {option.label}
      </RadioOption>
    ))}
  </RadioWrapper>
);

RadioButtons.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

RadioButtons.defaultProps = {
  label: '',
  required: false,
  disabled: false,
  className: '',
};

export default RadioButtons;
