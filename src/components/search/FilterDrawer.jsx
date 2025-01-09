// src/components/FilterDrawer.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import BottomDrawer from '../atoms/Drawers/BottomDrawer'; // Adjust the import path as necessary
import FilterLogic from './FilterLogic';
import RangeSlider from '../atoms/inputs/RangeSlider';  // Adjust import paths as needed
import SelectInput from '../atoms/inputs/SelectInput';

// Styled components for button and filter layout
const Button = styled.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 1rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5);
  }
`;

const FilterContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupLabel = styled.h5`
  margin-bottom: 0.5rem;
`;

// Define filter configurations explicitly
const filtersConfig = {
  status: {
    category: 'status',
    label: 'Status',
    type: 'dropdown',
    options: [
      { value: 'completed', label: 'Completed', initial: false },
      { value: 'pending', label: 'Pending', initial: false },
      { value: 'inProgress', label: 'In Progress', initial: false },
    ],
  },
  priority: {
    category: 'priority',
    label: 'Priority',
    type: 'range',
    options: [
      { value: 'high', label: 'High', initial: false },
      { value: 'medium', label: 'Medium', initial: false },
      { value: 'low', label: 'Low', initial: false },
    ],
  },
};

const FilterDrawer = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpenDrawer}>Open Filters</Button>
      <BottomDrawer isOpen={isOpen} onClose={handleCloseDrawer}>
        <FilterLogic
          filters={Object.values(filtersConfig)}
          onChange={selectedFilters => {
            if (onChange) {
              onChange(selectedFilters);
            }
          }}
        >
          {({ selectedFilters, setSelection }) => {
            const statusFilter = filtersConfig.status;
            const priorityFilter = filtersConfig.priority;

            return (
              <FilterContainer>
                {/* Status Dropdown */}
                <GroupContainer>
                  <GroupLabel>{statusFilter.label}</GroupLabel>
                  <SelectInput
                    name={statusFilter.category}
                    label={`Select ${statusFilter.label}`}
                    value={
                      selectedFilters[statusFilter.category] &&
                      selectedFilters[statusFilter.category][0]
                        ? selectedFilters[statusFilter.category][0]
                        : ''
                    }
                    onChange={(e) =>
                      setSelection(statusFilter.category, e.target.value)
                    }
                    options={statusFilter.options}
                    color="#000"
                  />
                </GroupContainer>

                {/* Priority Range Slider */}
                <GroupContainer>
                  <GroupLabel>{priorityFilter.label}</GroupLabel>
                  <RangeSlider
                    min={0}
                    max={priorityFilter.options.length - 1}
                    label={priorityFilter.label}
                    onChange={(index) => {
                      const value = priorityFilter.options[index]?.value;
                      if (value) setSelection(priorityFilter.category, value);
                    }}
                  />
                </GroupContainer>
              </FilterContainer>
            );
          }}
        </FilterLogic>
      </BottomDrawer>
    </>
  );
};

export default FilterDrawer;
