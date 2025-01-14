import React from 'react';
import styled from 'styled-components';
import FilterLogic from './FilterLogic';

// Styled components for horizontal layout
const HorizontalFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
`;

const FilterButton = styled.button`
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => (props.active ? '#007bff' : '#ccc')};
  background-color: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
`;

const filtersConfig = {
  status: {
    category: 'status',
    label: 'Status',
    type: 'buttons', 
    options: [
      { value: 'completed', label: 'Completed', initial: false },
      { value: 'pending', label: 'Pending', initial: false },
      { value: 'inProgress', label: 'In Progress', initial: false },
    ],
  },
  priority: {
    category: 'priority',
    label: 'Priority',
    type: 'buttons', 
    options: [
      { value: 'high', label: 'High', initial: false },
      { value: 'medium', label: 'Medium', initial: false },
      { value: 'low', label: 'Low', initial: false },
    ],
  },
};

const FilterHorizontal = ({ onChange }) => (
  <FilterLogic
    filters={Object.values(filtersConfig)}
    onChange={selectedFilters => {
      if (onChange) {
        onChange(selectedFilters);
      }
    }}
  >
    {({ selectedFilters, setSelection }) => {
      // Render horizontal rows for each filter category
      return (
        <div>
          {Object.values(filtersConfig).map(filterConfig => {
            // Get current active selection for this category
            const currentSelection = selectedFilters[filterConfig.category] || [];
            // Sort options: active ones first
            const sortedOptions = [...filterConfig.options].sort((a, b) => {
              const aActive = currentSelection.includes(a.value);
              const bActive = currentSelection.includes(b.value);
              return aActive === bActive ? 0 : aActive ? -1 : 1;
            });

            return (
              <div key={filterConfig.category}>
                <h5>{filterConfig.label}</h5>
                <HorizontalFilterContainer>
                  {sortedOptions.map(option => {
                    const isActive = currentSelection.includes(option.value);
                    return (
                      <FilterButton
                        key={option.value}
                        active={isActive}
                        onClick={() => {
                          // Toggle selection on click
                          if (isActive) {
                            // Deactivate by setting selection to empty array
                            setSelection(filterConfig.category, '');
                          } else {
                            // Activate selection with this value
                            setSelection(filterConfig.category, option.value);
                          }
                        }}
                      >
                        {option.label}
                      </FilterButton>
                    );
                  })}
                </HorizontalFilterContainer>
              </div>
            );
          })}
        </div>
      );
    }}
  </FilterLogic>
);

export default FilterHorizontal;
