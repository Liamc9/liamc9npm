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

  // New clearAll function to reset all filters
  const clearAll = () => {
    setSelectedFilters(initialSelections);
    if(onChange) onChange(initialSelections);
  };

  // Provide filter options, current selections, and setter functions to children
  if (typeof children === 'function') {
    return children({
      filters,
      selectedFilters,
      setSelection,
      clearAll, // Pass clearAll to children
    });
  }

  return null;
};

export default FilterLogic;
