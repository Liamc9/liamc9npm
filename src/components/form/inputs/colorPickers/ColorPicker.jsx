// ColorPicker.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const ColorInput = styled.input`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const ColorPicker = ({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
  className,
}) => (
  <ColorPickerWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <ColorInput
      type="color"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      required={required}
      disabled={disabled}
    />
  </ColorPickerWrapper>
);

ColorPicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Format: #RRGGBB
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ColorPicker.defaultProps = {
  required: false,
  disabled: false,
  className: '',
};

export default ColorPicker;
