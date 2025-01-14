// SortRadio.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import BottomDrawer from '../atoms/Drawers/BottomDrawer'; // Adjust import path as needed
import SortLogic from './SortLogic';
import { SortIcon } from '../Branding/icons/Icons';

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
display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .icon {
    margin-right: 0.5rem;
    height: 24px;
    width: 24px;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: center;
font-weight: bold;
font-size: 1.5rem;
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
      <SortButton onClick={() => setDrawerOpen(true)}><SortIcon className="icon"/>Sort by</SortButton>

      <BottomDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerHeader>
          <h4>Sort By</h4>
        </DrawerHeader>
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
