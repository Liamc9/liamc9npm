// Filter2.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Filter2Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const GroupTitle = styled.h4`
  margin: 0;
`;

const Filter2 = ({ filters, onChange }) => {
  // Initialize state: an object where each key is a filter category and value is an array of selected options for that category
  const initialState = filters.reduce((acc, group) => {
    acc[group.category] = group.options.filter(opt => opt.initial).map(opt => opt.value);
    return acc;
  }, {});

  const [selectedFilters, setSelectedFilters] = useState(initialState);

  const handleToggle = (category, value) => {
    const current = selectedFilters[category] || [];
    const newSelected = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];

    const newState = {
      ...selectedFilters,
      [category]: newSelected,
    };

    setSelectedFilters(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <Filter2Container>
      {filters.map(group => (
        <div key={group.category}>
          <GroupTitle>{group.label || group.category}</GroupTitle>
          <FilterGroup>
            {group.options.map(opt => (
              <FilterLabel key={`${group.category}-${opt.value}`}>
                <input
                  type="checkbox"
                  checked={(selectedFilters[group.category] || []).includes(opt.value)}
                  onChange={() => handleToggle(group.category, opt.value)}
                />
                {opt.label}
              </FilterLabel>
            ))}
          </FilterGroup>
        </div>
      ))}
    </Filter2Container>
  );
};

export default Filter2;
