import React, { useState } from 'react';

export  function Select({ options, label }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log('Selected:', event.target.value);
  };

  return (
    <div className="max-w-xs">
      {label && (
        <label htmlFor="select" className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        id="select"
        value={selectedOption}
        onChange={handleChange}
        className="px-1 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="" disabled >
          Select... 
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function CheckboxSelect({ options, label }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleCheckboxChange = (value) => {
      setSelectedOptions((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    };
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="max-w-xs">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        )}
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Select Categories
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <div className="max-h-56 overflow-auto p-2">
                {options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`checkbox-${option.value}`}
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={`checkbox-${option.value}`} className="text-sm text-gray-700">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
