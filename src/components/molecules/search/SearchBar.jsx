import React, { useState } from 'react';
import { SearchIcon } from '../../Branding/icons/Icons';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="flex items-center mx-auto max-w-md overflow-hidden rounded-lg border border-gray-300 shadow-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 transition-colors"
      >
        <span className="mr-2">Search</span>
        <SearchIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
