import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FilterIcon } from "../../Branding/icons/Icons"; // Replace with your actual icon

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 12px;
  padding: 0 12px;

  &:hover {
    background-color: #f5f5f5;
    border-color: #dcdcdc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #007bff; /* Highlight color */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); /* Accessibility focus ring */
  }
`;

const IconWrapper = styled.div`
  color: #333;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FilterButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} aria-label="Open filter drawer">
      <IconWrapper>
        <FilterIcon /> {/* Replace with your actual icon */}
      </IconWrapper>
    </Button>
  );
};

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;
