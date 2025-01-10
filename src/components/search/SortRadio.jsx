// SortRadio.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import BottomDrawer from '../atoms/Drawers/BottomDrawer'; // Adjust import path as needed
import SortLogic from './SortLogic';

const sortingOptions = [
  {
    label: 'Title: A-Z',
    comparator: (a, b) => a.title.localeCompare(b.title),
  },
  {
    label: 'Title: Z-A',
    comparator: (a, b) => b.title.localeCompare(a.title),
  },
  {
    label: 'Date: Newest',
    comparator: (a, b) => new Date(b.date) - new Date(a.date),
  },
  {
    label: 'Date: Oldest',
    comparator: (a, b) => new Date(a.date) - new Date(b.date),
  },
];

const RadioContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SortButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RadioLabel = styled.label`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const SortRadio = ({ items, onSortedChange }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { updateSort } = SortLogic({ items, onSortedChange });

  const handleChange = (e) => {
    const selectedOption = sortingOptions.find(
      (option) => option.label === e.target.value
    );
    updateSort(selectedOption?.comparator || null);
  };

  return (
    <>
      <SortButton onClick={() => setDrawerOpen(true)}>Sort</SortButton>

      <BottomDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        
        <RadioContainer>
          {sortingOptions.map((option) => (
            <RadioOption key={option.label}>
              <input
                type="radio"
                id={option.label}
                name="sort"
                value={option.label}
                onChange={handleChange}
              />
              <RadioLabel htmlFor={option.label}>{option.label}</RadioLabel>
            </RadioOption>
          ))}
        </RadioContainer>
      </BottomDrawer>
    </>
  );
};

export default SortRadio;
