import React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const SortButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const Sort2 = ({ options, onChange }) => {
  const handleButtonClick = (comparator) => {
    onChange(comparator);
  };

  return (
    <ButtonGroup>
      {options.map((option, idx) => (
        <SortButton key={idx} onClick={() => handleButtonClick(option.comparator)}>
          {option.label}
        </SortButton>
      ))}
    </ButtonGroup>
  );
};

export default Sort2;
