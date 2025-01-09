// ../../components/search/Feed.jsx
import React from 'react';
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
  ItemComponent = FeedItem // default component for rendering items
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

  return (
    <FeedContainer>
      {sortedItems.map((item, index) => (
        <ItemComponent key={index} data={item} />
      ))}
    </FeedContainer>
  );
};

export default Feed;
