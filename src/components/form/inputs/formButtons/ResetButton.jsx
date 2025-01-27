// ResetButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
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

const ResetButton = ({ label, type, onClick, disabled, className }) => (
  <Button type={type} onClick={onClick} disabled={disabled} className={className}>
    {label}
  </Button>
);

ResetButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['reset', 'button']).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ResetButton.defaultProps = {
  onClick: undefined,
  disabled: false,
  className: '',
};

export default ResetButton;
