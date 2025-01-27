// Checkbox.jsx
import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-weight: 500;
`;

const Checkbox = ({
  label,
  name,
  checked,
  onChange,
  required,
  disabled,
  className,
}) => (
  <CheckboxWrapper className={className}>
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={(e) => onChange(e)}
      required={required}
      disabled={disabled}
    />
    <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
  </CheckboxWrapper>
);

export default Checkbox;
