import React, { useState, useEffect } from 'react';

export default function RadioInput({ option1, option2, onRadioValChange }) {
  const [value, setValue] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  useEffect(() => {
    const id = Math.random().toString(36).substring(7); // Generate a unique ID
    setUniqueId(id);
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onRadioValChange(selectedValue);
  };

  return (
     <>
      <div id="firstOption">

      <input
        type="radio"
        id={`option1_${uniqueId}`}
        name={`radioOptions_${uniqueId}`} 
        value={option1}
        onChange={handleChange}
        checked={value === option1}
        />
      <label htmlFor={`option1_${uniqueId}`} className='text-xs'>{option1}</label>
        </div>

      <div id="secOption">
        
      <input
        type="radio"
        id={`option2_${uniqueId}`}
        name={`radioOptions_${uniqueId}`} 
        value={option2}
        onChange={handleChange}
        checked={value === option2}
        />
      <label htmlFor={`option2_${uniqueId}`} className='text-xs'>{option2}</label>
        </div>
        </>
  );
}
