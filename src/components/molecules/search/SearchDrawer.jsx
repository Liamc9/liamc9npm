import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchBar2 from "./SearchBar2";

// Styled components...
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
    font-weight: bold;
`;

const Wrapper = styled.div`
  padding: 16px;
`;

const SearchDrawer = ({
  trendingItems,
  query,
  onQueryChange,
  searchResults,
  closeDrawer,
  onSearchSubmit,
  renderSearchResult,
  renderTrendingItem,
  isOpen, // Accept isOpen prop
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]); // Dependency array includes isOpen

  const handleInputChange = (e) => {
    onQueryChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      onSearchSubmit(); // No need to pass the query, it's managed by the parent
    }
  };

  const handleClose = () => {
    onQueryChange(""); // Clear the input when closing
    closeDrawer();
  };

  // Filter searchResults based on query
  const filteredResults = searchResults.filter((result) =>
    result.title.includes(query)
  );

  return (
    <Wrapper>
      <SearchBarContainer>
        <SearchBar2
          value={query}
          onChange={handleInputChange}
          placeholder="Search for..."
          onKeyDown={handleKeyDown}
          inputRef={inputRef} // Pass the ref to SearchBar2
        />
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </SearchBarContainer>
      <div>
        {query === "" ? (
          <div>
            <h3>Trending</h3>
            {trendingItems.map((item, index) => renderTrendingItem(item, index))}
          </div>
        ) : (
          <div>
            <h3>Search Results</h3>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) =>
                renderSearchResult(result, index)
              )
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

SearchDrawer.propTypes = {
  trendingItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ).isRequired,
  closeDrawer: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  renderSearchResult: PropTypes.func.isRequired,
  renderTrendingItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, // Add prop type for isOpen
};

export default SearchDrawer;
