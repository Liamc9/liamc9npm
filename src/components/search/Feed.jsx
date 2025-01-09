// ../../components/search/Feed.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Feed = ({ 
  items = [], 
  sortBy, 
  selectedFilters = {}, 
  ItemComponent = FeedItem, // default component for rendering items
  infiniteScroll // number of items to load per batch
}) => {
  // Filtering
  const filteredItems = items.filter(item =>
    Object.entries(selectedFilters).every(([category, values]) => {
      if (!values || values.length === 0) return true;
      return values.includes(item[category]);
    })
  );

  // Sorting
  const sortedItems = sortBy ? [...filteredItems].sort(sortBy) : filteredItems;

  // Infinite scroll state
  const [visibleCount, setVisibleCount] = useState(
    infiniteScroll ? infiniteScroll : sortedItems.length
  );

  // Reference to the loader element
  const loaderRef = useRef(null);

  // Callback for intersection observer
  const handleObserver = useCallback(
    entries => {
      const target = entries[0];
      if (target.isIntersecting) {
        setVisibleCount((prev) => {
          const newCount = prev + infiniteScroll;
          return newCount > sortedItems.length ? sortedItems.length : newCount;
        });
      }
    },
    [infiniteScroll, sortedItems.length]
  );

  useEffect(() => {
    // Reset visibleCount when the sortedItems list changes
    if (infiniteScroll) {
      setVisibleCount(infiniteScroll);
    }
  }, [sortedItems, infiniteScroll]);

  useEffect(() => {
    // Only set up IntersectionObserver if infiniteScroll prop exists
    if (!infiniteScroll) return;

    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver, infiniteScroll]);

  // Determine which items to display based on infiniteScroll logic
  const itemsToRender = infiniteScroll
    ? sortedItems.slice(0, visibleCount)
    : sortedItems;

  return (
    <FeedContainer>
      {itemsToRender.map((item, index) => (
        <ItemComponent key={index} data={item} />
      ))}
      {/* Loader element observed for infinite scroll */}
      {infiniteScroll && visibleCount < sortedItems.length && (
        <div ref={loaderRef} style={{ height: '20px' }} />
      )}
    </FeedContainer>
  );
};

export default Feed;
