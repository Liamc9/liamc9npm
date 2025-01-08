import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1rem;
`;

const Sort = ({ options, onChange }) => {
  const handleSelectChange = (e) => {
    const selectedComparator = options.find(
      (option) => option.label === e.target.value
    )?.comparator;
    // Pass the selected comparator to the parent callback
    onChange(selectedComparator || null);
  };

  return (
    <Select onChange={handleSelectChange}>
      <option value="">-- Select sorting option --</option>
      {options.map((option, index) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default Sort;
