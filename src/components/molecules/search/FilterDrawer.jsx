import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SelectField from "../../atoms/menuitem/SelectField"
import ToggleField from "../../atoms/menuitem/ToggleField";

// Styled components
const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height for proper scrolling */
`;

const FiltersContainer = styled.div`
  flex: 1; /* Allow this to take up the remaining space */
  overflow-y: auto; /* Enable scrolling if the content overflows */
  padding-bottom: 80px; /* Space to avoid overlapping with the floating button */
`;

const FloatingButtonContainer = styled.div`
  position: sticky; /* Stick to the bottom of the drawer */
  bottom: 0;
  background-color: white; /* Ensure it stands out over content */
  padding: 16px 0 0;
  border-top: 1px solid #e0e0e0; /* Add a separator line */
  z-index: 10; /* Ensure it stays above scrolling content */
`;

const ApplyButton = styled.button`
  width: 100%; /* Full width for better visibility */
  padding: 12px 16px;
  background-color: #000000; /* Bootstrap primary color */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

`;

const FilterDrawer = ({
  filters,
  selectedFilters,
  onFilterChange,
  closeDrawer,
  sortOptions,
  selectedSortOption,
  onSortChange,
}) => {
  const [localSelectedFilters, setLocalSelectedFilters] = useState(selectedFilters);
  const [localSelectedSortOption, setLocalSelectedSortOption] = useState(selectedSortOption);

  // Update local state when selectedFilters prop changes
  useEffect(() => {
    setLocalSelectedFilters(selectedFilters);
  }, [selectedFilters]);

  // Update local state when selectedSortOption prop changes
  useEffect(() => {
    setLocalSelectedSortOption(selectedSortOption);
  }, [selectedSortOption]);

  const handleFilterChange = (key, value) => {
    setLocalSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleSortOptionChange = (value) => {
    setLocalSelectedSortOption(value);
  };

  const handleApplyFilters = () => {
    onFilterChange(localSelectedFilters);
    onSortChange(localSelectedSortOption);
    closeDrawer();
  };

  return (
    <Wrapper>
      <FiltersContainer>
        {/* Sort Field */}
        {sortOptions && sortOptions.length > 0 && (
          <SelectField
            name="Sort By"
            value={localSelectedSortOption}
            options={sortOptions}
            onChange={handleSortOptionChange}
            placeholder="Select sort order"
          />
        )}
        {/* Filters */}
        {filters.map((filter) => {
          switch (filter.type) {
            case "select":
              return (
                <SelectField
                  key={filter.key}
                  name={filter.name}
                  value={localSelectedFilters[filter.key] || ""}
                  options={filter.options}
                  onChange={(value) => handleFilterChange(filter.key, value)}
                  placeholder={`Select ${filter.name}`}
                />
              );
            case "toggle":
              return (
                <ToggleField
                  key={filter.key}
                  name={filter.name}
                  value={localSelectedFilters[filter.key] || false}
                  onChange={(value) => handleFilterChange(filter.key, value)}
                />
              );
            // Add cases for other filter types if needed
            default:
              return null;
          }
        })}
      </FiltersContainer>
      <FloatingButtonContainer>
        <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
      </FloatingButtonContainer>
    </Wrapper>
  );
};

FilterDrawer.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      ),
    })
  ).isRequired,
  selectedFilters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  selectedSortOption: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

FilterDrawer.defaultProps = {
  sortOptions: [],
  selectedSortOption: "",
};

export default FilterDrawer;
