// Sort2.jsx
import React from 'react';
import SortLogic from './SortLogic'; // Reusable sorting logic
import SelectInput from '../atoms/inputs/SelectInput';    // Custom styled select component

// Project-specific sort options
const sortOptions = [
  { value: 'titleAsc', label: 'Title: A-Z' },
  { value: 'titleDesc', label: 'Title: Z-A' },
  { value: 'dateNewest', label: 'Date: Newest' },
  { value: 'dateOldest', label: 'Date: Oldest' },
];

// Project-specific comparator logic
const getSortComparator = (criteria) => {
  switch (criteria) {
    case 'titleAsc':
      return (a, b) => a.title.localeCompare(b.title);
    case 'titleDesc':
      return (a, b) => b.title.localeCompare(a.title);
    case 'dateNewest':
      return (a, b) => new Date(b.date) - new Date(a.date);
    case 'dateOldest':
      return (a, b) => new Date(a.date) - new Date(b.date);
    default:
      return null;
  }
};

const Sort2 = ({ items, onSortedChange, label = "Sort by", color }) => {
  // Use generic sorting logic
  const { updateSort } = SortLogic({ items, onSortedChange });

  return (
    <SelectInput
      name="sort2"
      label={label}
      color={color}
      options={sortOptions}
      onChange={(e) => {
        const comparator = getSortComparator(e.target.value);
        updateSort(comparator);
      }}
    />
  );
};

export default Sort2;
