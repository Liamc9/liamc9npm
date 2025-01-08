import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feed = ({ items, sortBy }) => {
  // If a sortBy function is provided, sort the items accordingly.
  const sortedItems = sortBy ? [...items].sort(sortBy) : items;

  return (
    <FeedContainer>
      {sortedItems.map((item, index) => (
        <FeedItem key={index} data={item} />
      ))}
    </FeedContainer>
  );
};

export default Feed;

