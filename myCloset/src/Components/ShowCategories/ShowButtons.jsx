import React, { useState } from 'react';
import ButtonSelect from '../Questionnaire/inputs/ButtonSelect';
import { getAllCategories } from '../Logics/SaveDataInLocalStorage';

export default function ShowButtons() {
  const categories = getAllCategories();
  const [selectedMainOption, setSelectedMainOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const handleMainOptionSelect = (mainOption) => {
    setSelectedMainOption(mainOption);
    // Assuming you have a setSubOptions function
    // setSubOptions(mainOption.subOptions || []);
  };

  const handleSubOptionSelect = (subOption) => {
    console.log('Selected sub-option:', subOption);
    setSelectedSubOption(subOption);
  };

  return (
    <div id="firthSec" className="flex flex-col items-center">

      <ButtonSelect options={categories} onSelect={handleMainOptionSelect} />

      {selectedMainOption && (
        <div className="flex flex-wrap justify-center mt-4">
          {selectedMainOption.subOptions.map((sub) => (
            <img
              key={sub.label}
              src={`${sub.img}`}
              className="cursor-pointer mb-4 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10"
              style={{ height: '100px', width: '100px', objectFit: 'cover' }}
              alt={sub.label}
            />
          ))}
        </div>
      )}

    </div>
  );
}
