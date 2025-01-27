// SelectInput2.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const Select = styled.select`
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

const SelectInput2 = ({
  label,
  name,
  value,
  onChange,
  options,
  required,
  disabled,
  multiple,
  autoFocus,
  className,
}) => (
  <SelectWrapper className={className}>
    <Label htmlFor={name}>{label}</Label>
    <Select
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      required={required}
      disabled={disabled}
      multiple={multiple}
      autoFocus={autoFocus}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  </SelectWrapper>
);

SelectInput2.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};

SelectInput2.defaultProps = {
  required: false,
  disabled: false,
  multiple: false,
  autoFocus: false,
  className: '',
};

export default SelectInput2;
