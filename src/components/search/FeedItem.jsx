import React from 'react';
import styled from 'styled-components';

const FeedItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  background: #fff;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  margin: 0;
`;

const FeedItem = ({ data }) => {
  return (
    <FeedItemContainer>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </FeedItemContainer>
  );
};

export default FeedItem;
