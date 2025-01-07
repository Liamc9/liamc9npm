import React, { useState } from "react";
import { FilterIcon } from "../../Branding/icons/Icons";
import Modal from "../../atoms/modals/Modal";

const SearchFilters = ({ attributes, onFilterChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    Object.keys(selectedFilters).forEach((filterName) => {
      onFilterChange(filterName, selectedFilters[filterName]);
    });
    setModalOpen(false);
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md bg-gray-200 font-semibold hover:bg-blue-600 transition"
      >
        <FilterIcon className="w-5 h-5 " />
        <span>Filters</span>
      </button>

      <Modal isModalOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Apply Filters</h2>
        {attributes.map((attr) => (
          <div key={attr.name} className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {`Filter by ${attr.label}:`}
            </label>
            <select
              name={attr.name}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={selectedFilters[attr.name] || ""}
            >
              <option value="">{`All ${attr.label}`}</option>
              {attr.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={() => setModalOpen(false)}
            className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyFilters}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Apply
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SearchFilters;
