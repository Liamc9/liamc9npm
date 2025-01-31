// DateTimeLocalInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateTimeWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
`;

const DateTimeInput = styled.input`
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

const DateTimeLocalInput = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  required,
  disabled,
  className,
  ...props
}) => (
  <DateTimeWrapper gridSpan={props.gridSpan} className={className}>
    <Label htmlFor={name}>{label}</Label>
    <DateTimeInput
      type="datetime-local"
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      min={min}
      max={max}
      required={required}
      disabled={disabled}
    />
  </DateTimeWrapper>
);

DateTimeLocalInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // Format: YYYY-MM-DDThh:mm
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

DateTimeLocalInput.defaultProps = {
  min: undefined,
  max: undefined,
  required: false,
  disabled: false,
  className: '',
};

export default DateTimeLocalInput;
