// ResetButton.jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #c6c8ca;
    cursor: not-allowed;
  }
`;

const ResetButton = ({ children, ...props }) => (
  <Button type="reset" {...props}>
    {children}
  </Button>
);

export default ResetButton;
