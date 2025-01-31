import React from 'react';
import styled from 'styled-components';

// Styled Components
const SelectWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4a4a4a;
`;

const StyledSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6200ee;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-color: #6200ee;
    outline: none;
    box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.2);
  }

  &:disabled {
    background-color: #f9f9f9;
    color: #bdbdbd;
    border-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const SelectInput3 = ({ label, options, ...props }) => {
  return (
    <SelectWrapper gridSpan={props.gridSpan}>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledSelect {...props}>
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default SelectInput3;
