import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchIcon2 } from "../../Branding/icons/Icons";
// Styled container for the search button
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 25px;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #eaeaea;
  }

  &:focus {
    outline: none;
  }

  span {
    flex: 1;
    text-align: left;
    color: #aaa;
  }
`;

const SearchIconContainer = styled.div`
  margin-right: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #333;
  }
`;

const SearchButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <SearchIconContainer>
      <SearchIcon2/>
    </SearchIconContainer>
    <span>Search...</span>
  </StyledButton>
);

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
