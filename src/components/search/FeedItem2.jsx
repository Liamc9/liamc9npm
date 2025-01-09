// ../../components/search/FeedItem2.jsx
import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FeedItem2 = ({ data }) => {
  return (
    <ItemContainer>
      <h3>{data.title} (FeedItem2)</h3>
      <p>{data.description}</p>
      <p>Status: {data.status}</p>
      <p>Priority: {data.priority}</p>
      <p>Date: {data.date}</p>
    </ItemContainer>
  );
};

export default FeedItem2;
