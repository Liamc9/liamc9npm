import React, { useState } from 'react';

const SelectToTextInput = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      {!isEditing ? (
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          value={selectedValue}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default SelectToTextInput;
