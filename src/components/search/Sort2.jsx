// Sort2.jsx
import React from 'react';
import SortLogic from './SortLogic'; // Reusable sorting logic
import SelectInput from '../atoms/inputs/SelectInput'; // Custom styled select component

// Simplified sorting options with labels as values
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

const Sort2 = ({ items, onSortedChange, label = 'Sort by', color }) => {
  // Use generic sorting logic
  const { updateSort } = SortLogic({ items, onSortedChange });

  return (
    <SelectInput
      name="sort2"
      label={label}
      color={color}
      options={sortingOptions.map(({ label }) => ({ value: label, label }))}
      onChange={(e) => {
        const selectedOption = sortingOptions.find(
          (option) => option.label === e.target.value
        );
        updateSort(selectedOption?.comparator || null);
      }}
    />
  );
};

export default Sort2;
