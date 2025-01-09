// Sort.jsx
import React from 'react';
import styled from 'styled-components';
import SortLogic from './SortLogic';

const SortContainer = styled.div`
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

// Project-specific sort options
const sortOptions = [
  { value: '', label: '' },
  { value: 'titleAsc', label: 'Title: A-Z' },
  { value: 'titleDesc', label: 'Title: Z-A' },
  { value: 'dateNewest', label: 'Date: Newest' },
  { value: 'dateOldest', label: 'Date: Oldest' },
];

// Project-specific comparator function
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

const Sort = ({ items, onSortedChange }) => {
  // Use the enhanced generic hook, passing in items and the callback
  const { updateSort } = SortLogic({ items, onSortedChange });

  return (
    <SortContainer>
      <Select onChange={e => {
          const comparator = getSortComparator(e.target.value);
          updateSort(comparator);
      }}>
        {sortOptions.map(opt => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </SortContainer>
  );
};

export default Sort;
