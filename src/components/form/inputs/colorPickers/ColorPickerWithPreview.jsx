// ColorPickerWithPreview.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const PickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorInput = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

const ColorPreview = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || '#fff'};
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
`;

const ColorPickerWithPreview = ({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
  className,
}) => (
  <PickerWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <PickerContainer>
      <ColorInput
        type="color"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
        disabled={disabled}
      />
      <ColorPreview color={value} />
    </PickerContainer>
  </PickerWrapper>
);

ColorPickerWithPreview.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Format: #RRGGBB
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ColorPickerWithPreview.defaultProps = {
  required: false,
  disabled: false,
  className: '',
};

export default ColorPickerWithPreview;
