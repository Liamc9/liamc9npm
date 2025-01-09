// FilterLogic.js
import React, { useState } from 'react';

const FilterLogic = ({ filters, onChange, children }) => {
  // Initialize state with no selections for each filter group
  const initialSelections = filters.reduce((acc, group) => {
    acc[group.category] = [];  // No preselected filters
    return acc;
  }, {});

  const [selectedFilters, setSelectedFilters] = useState(initialSelections);

  // Single-selection logic per category for simplicity
  const setSelection = (category, value) => {
    setSelectedFilters(prev => {
      const newSelections = { ...prev, [category]: [value] };
      if (onChange) onChange(newSelections);
      return newSelections;
    });
  };

  // Provide filter options, current selections, and a setter function to children
  if (typeof children === 'function') {
    return children({
      filters,
      selectedFilters,
      setSelection,
    });
  }

  return null;
};

export default FilterLogic;
