// ../../components/search/FeedLogic.jsx
import { useState, useEffect } from 'react';

export default function FeedLogic({
  items = [],
  sortBy,
  selectedFilters = {},
  pagination,         // number of items per page for pagination
  loadMore,           // number of items to load per click
  infiniteScroll,     // number of items to load each time we reach the bottom
  scrollContainerRef, // container ref for infinite scrolling
}) {
  // -------------- Normalize `items` to ensure it's always an array --------------
  if (!Array.isArray(items)) {
    if (items && typeof items === 'object') {
      // If items is an object, attempt to convert its values to an array
      items = Object.values(items);
      console.warn('Converted non-array items object to array:', items);
    } else {
      // For other types (e.g., null, undefined, string), default to empty array
      console.warn('Expected items to be an array but got a different type. Defaulting to empty array.');
      items = [];
    }
  }

  // ---------------------- Filter & Sort ----------------------
  const filteredItems = items.filter((item) =>
    Object.entries(selectedFilters).every(([category, values]) => {
      // If no filter values for this category, accept the item
      if (!values || values.length === 0) return true;
      return values.includes(item[category]);
    })
  );

  const sortedItems = sortBy ? [...filteredItems].sort(sortBy) : filteredItems;

  // ---------------------- State ----------------------
  // Current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Decide initial visibleCount (for load-more or infinite-scroll)
  const [visibleCount, setVisibleCount] = useState(() => {
    if (infiniteScroll) return infiniteScroll;
    if (loadMore) return loadMore;
    return sortedItems.length; // default: show all
  });

  // Items per page if using pagination
  const itemsPerPage = pagination || sortedItems.length;
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  // ---------------------- Pagination Reset ----------------------
  useEffect(() => {
    if (pagination && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [pagination, totalPages, currentPage]);

  // ---------------------- Infinite Scroll ----------------------
  useEffect(() => {
    if (!infiniteScroll) return;

    const handleScroll = () => {
      const threshold = 50; // how close to bottom before triggering load
      let distanceFromBottom = 0;

      if (scrollContainerRef?.current) {
        // Container-based scrolling
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      } else {
        // Page-level scrolling
        const { scrollY, innerHeight } = window;
        const { offsetHeight } = document.body;
        distanceFromBottom = offsetHeight - (scrollY + innerHeight);
      }

      // If near bottom, load more items
      if (distanceFromBottom < threshold) {
        setVisibleCount((prev) => Math.min(prev + infiniteScroll, sortedItems.length));
      }
    };

    // Attach scroll listener
    const scrollTarget = scrollContainerRef?.current || window;
    scrollTarget.addEventListener('scroll', handleScroll);

    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll);
    };
  }, [infiniteScroll, sortedItems.length, scrollContainerRef]);

  // ---------------------- Determine Items to Render ----------------------
  let itemsToRender = sortedItems;
  let pages = null;         // array of page numbers (for pagination)
  let hasMoreItems = false; // for Load More logic

  // (1) Pagination
  if (pagination) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    itemsToRender = sortedItems.slice(startIndex, endIndex);

    if (totalPages > 1) {
      // e.g. [1,2,3,...n]
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  }
  // (2) Infinite Scroll
  else if (infiniteScroll) {
    itemsToRender = sortedItems.slice(0, visibleCount);
  }
  // (3) Load More
  else if (loadMore) {
    itemsToRender = sortedItems.slice(0, visibleCount);
    hasMoreItems = visibleCount < sortedItems.length;
  }

  // Handler for "Load More" button
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMore, sortedItems.length));
  };

  // Return all data/states that the Feed component needs for rendering
  return {
    itemsToRender,
    pages,
    currentPage,
    setCurrentPage,
    hasMoreItems,
    handleLoadMore,
  };
}
