// Dropdown.jsx
import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="dropdown">   
    <select className="dropdown-select" value={selectedOption} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option} className="dropdown-option">
          {option}
        </option>
      ))}
    </select>
    </div>
  );
};

export default Dropdown;
