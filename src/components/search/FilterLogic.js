import React, { useState } from 'react';

const FilterLogic = ({ filters, onChange, children }) => {
  // Initialize state with no selections for each filter group
  const initialSelections = filters.reduce((acc, group) => {
    acc[group.category] = [];
    return acc;
  }, {});

  const [selectedFilters, setSelectedFilters] = useState(initialSelections);

  const setSelection = (category, value, remove = false) => {
    setSelectedFilters(prev => {
      const newSelections = { ...prev };

      // Handle the case for arrays (e.g., range slider or explicitly passing an entire array)
      if (Array.isArray(value)) {
        /**
         * For a range slider, `value` will be something like [200, 800].
         * Just store that array directly in newSelections.
         */
        newSelections[category] = value;
      } else {
        // For single or multiple (checkbox) selections
        const currentValues = newSelections[category] || [];

        if (remove) {
          // Remove the value if it's currently in the array
          newSelections[category] = currentValues.filter(item => item !== value);
        } else {
          newSelections[category] = [value]; // Single-select approach
        }
      }

      // Fire the onChange callback with the new filter state
      if (onChange) {
        onChange(newSelections);
      }
      return newSelections;
    });
  };

  // New clearAll function to reset all filters
  const clearAll = () => {
    setSelectedFilters(initialSelections);
    if (onChange) onChange(initialSelections);
  };

  // Provide filter options, current selections, and setter functions to children
  if (typeof children === 'function') {
    return children({
      filters,
      selectedFilters,
      setSelection,
      clearAll,
    });
  }

  return null;
};

export default FilterLogic;
