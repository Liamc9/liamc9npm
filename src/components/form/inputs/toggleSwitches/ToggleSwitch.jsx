// ToggleSwitch.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ToggleLabel = styled.label`
  margin-left: 8px;
  font-weight: 500;
`;

const ToggleInput = styled.input`
  width: 50px;
  height: 25px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: #007bff;
  }

  &:before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: transform 0.3s;
  }

  &:checked:before {
    transform: translateX(25px);
  }

  &:disabled {
    background: #e9ecef;
    cursor: not-allowed;

    &:before {
      background: #ced4da;
    }
  }
`;

const ToggleSwitch = ({
  label,
  name,
  checked,
  onChange,
  required,
  disabled,
  className,
}) => (
  <ToggleWrapper className={className}>
    <ToggleInput
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={(e) => onChange(e)}
      required={required}
      disabled={disabled}
    />
    <ToggleLabel htmlFor={name}>{label}</ToggleLabel>
  </ToggleWrapper>
);

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  required: false,
  disabled: false,
  className: '',
};

export default ToggleSwitch;
