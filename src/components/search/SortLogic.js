// sortLogic.js
import { useState, useCallback, useMemo, useEffect } from 'react';

export const SortLogic = ({ items, onSortedChange }) => {
  const [sortBy, setSortBy] = useState(null);

  const updateSort = useCallback((comparator) => {
    setSortBy(() => comparator);
  }, []);

  // Compute sorted items based on current comparator and provided items
  const sortedItems = useMemo(() => {
    if (sortBy && items) {
      return [...items].sort(sortBy);
    }
    return items;
  }, [items, sortBy]);

  // Notify parent of sorted items whenever they change
  useEffect(() => {
    if (onSortedChange) {
      onSortedChange(sortedItems);
    }
  }, [sortedItems, onSortedChange]);

  return { sortBy, updateSort, sortedItems };
};

export default SortLogic;
