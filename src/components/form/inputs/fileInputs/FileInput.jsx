// FileInput.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const FileInputWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px dashed #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fafafa;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #6200ee;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

// FileInput Component
const FileInput = ({ label, ...props }) => {
  return (
    <FileInputWrapper gridSpan={props.gridSpan}>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput type="file" {...props} />
    </FileInputWrapper>
  );
};

export default FileInput;
