import React, { useState } from 'react';

const ButtonSelect = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="flex flex-wrap mb-4 gap-2 "> 
    {options.map((option) => (
      <button
        key={option.label}
        className={`bg-[#704F38] hover:bg-[#704F38] px-4 py-2 rounded-md border-1 border-[#704F38] text-[#fff] mb-1 ${
          selectedOption === option ? ' bg-[#704F38] text-white' : 'bg-white text-gray-800'
        }`} 
        onClick={(e) => {
          e.preventDefault();
          handleOptionClick(option);
        }}
      >
        {option.label}
      </button>
    ))}
  </div>
  );
};

export default ButtonSelect;
