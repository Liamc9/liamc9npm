// searchLogic.js
import Fuse from 'fuse.js';
import { useMemo, useState, useEffect } from 'react';

/**
 * Default Fuse.js configuration options.
 * These defaults work for many use cases and can be adjusted as needed.
 */
const defaultFuseOptions = {
  keys: ['title'],
  threshold: 0.4,  // Adjusts fuzziness (0 = exact match, 1 = match anything)
  // You can include other default Fuse.js options here
};

/**
 * Creates a Fuse.js instance with provided items and optional options.
 * Falls back to default options if not provided.
 * @param {Array} items - Array of items to search through.
 * @param {Object} [options] - Custom Fuse.js configuration options.
 * @returns {Fuse} - A Fuse.js instance.
 */
export function createFuseInstance(items, options = {}) {
  const fuseOptions = { ...defaultFuseOptions, ...options };
  return new Fuse(items, fuseOptions);
}

/**
 * Performs a fuzzy search using a given Fuse.js instance and query.
 * @param {Fuse} fuseInstance - A configured Fuse.js instance.
 * @param {string} query - The search query.
 * @returns {Array} - Array of matching items.
 */
export function performFuzzySearch(fuseInstance, query) {
  if (!query.trim()) return [];
  const results = fuseInstance.search(query);
  // Extract the original items from Fuse results
  return results.map(result => result.item);
}

/**
 * A reusable React hook for fuzzy searching.
 * This hook abstracts Fuse.js instance creation and searching logic,
 * making it easy to integrate fuzzy search into components without repeating logic.
 *
 * @param {Array} items - The data to search.
 * @param {Object} [options] - Optional Fuse.js configuration overrides.
 * @returns {Object} - { query, setQuery, suggestions }
 */

export function useFuzzySearch(items, options = {}) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Create a memoized Fuse instance so it doesn't get recreated unnecessarily
  const fuseInstance = useMemo(() => createFuseInstance(items, options), [items, options]);

  useEffect(() => {
    const results = performFuzzySearch(fuseInstance, query);
    setSuggestions(results);
  }, [query, fuseInstance]);

  return { query, setQuery, suggestions };
}



export function SearchLogic({ items, onSearch, historyItems = [] }, fuseOptions = {}) {
    const [isOpen, setIsOpen] = useState(false);
    const { query, setQuery, suggestions } = useFuzzySearch(items, fuseOptions);
    const [lastQuery, setLastQuery] = useState('');
  
    const open = () => setIsOpen(true);
    const close = () => {
      setIsOpen(false);
      setQuery('');
    };
  
    const handleInputChange = (e) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      if (onSearch) onSearch(suggestions);
    };
  
    const handleSuggestionClick = (suggestion) => {
      const newQuery = suggestion.title;
      setQuery(newQuery);
      setLastQuery(newQuery);
  
      if (onSearch) {
        const updatedSuggestions = items.filter(item =>
          item.title.toLowerCase().includes(newQuery.toLowerCase())
        );
        onSearch(updatedSuggestions);
      }
      close();
    };
  
    const handleSearchForClick = () => {
      if (onSearch) onSearch(suggestions);
      setLastQuery(query);
      close();
    };
  
    return {
      isOpen,
      open,
      close,
      query,
      setQuery,
      suggestions,
      lastQuery,
      handleInputChange,
      handleSuggestionClick,
      handleSearchForClick,
    };
  }

  export default SearchLogic;