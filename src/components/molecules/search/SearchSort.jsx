import React from "react";
import { SortIcon } from "../../Branding/icons/Icons";


const SearchSort = ({ attributes, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <SortIcon className="w-5 h-5 text-gray-500" />
      <select
        onChange={handleSortChange}
        className="ml-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">None</option>
        {attributes.map((attr) => (
          <React.Fragment key={attr}>
            <option value={`${attr}:asc`}>
              {`${attr.charAt(0).toUpperCase() + attr.slice(1)} (Asc)`}
            </option>
            <option value={`${attr}:desc`}>
              {`${attr.charAt(0).toUpperCase() + attr.slice(1)} (Desc)`}
            </option>
          </React.Fragment>
        ))}
      </select>
    </div>
  );
};

export default SearchSort;
