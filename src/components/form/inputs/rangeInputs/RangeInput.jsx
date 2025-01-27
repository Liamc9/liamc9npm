// RangeInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const RangeSlider = styled.input`
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  border-radius: 5px;
  appearance: none;
  margin: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const RangeInput = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step,
  required,
  disabled,
  className,
}) => (
  <RangeWrapper className={className}>
    <Label htmlFor={name}>{label}: {value}</Label>
    <RangeSlider
      type="range"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      min={min}
      max={max}
      step={step}
      required={required}
      disabled={disabled}
    />
  </RangeWrapper>
);

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

RangeInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  required: false,
  disabled: false,
  className: '',
};

export default RangeInput;
