import React,{useState} from 'react'
import ButtonSelect from '../Questionnaire/inputs/ButtonSelect'
import { getAllCategories } from '../Logics/SaveDataInLocalStorage';
export default function ShowButtons() {
    const categories = getAllCategories();
    const [selectedMainOption, setSelectedMainOption] = useState(null);
    const [selectedSubOption, setSelectedSubOption] = useState(null);

    const handleMainOptionSelect = (mainOption) => {
        setSelectedMainOption(mainOption);
        setSubOptions(mainOption.subOptions || []);
      };
    
      const handleSubOptionSelect = (subOption) => {
        console.log('Selected sub-option:', subOption);
        setSelectedSubOption(subOption);
      };

  return (
    <div id="firthSec">

    <ButtonSelect options={categories} onSelect={handleMainOptionSelect} />

    {selectedMainOption && (
        <>
          <div>
            {subOptions.map((sub) => (
              <img
                key={sub.label} // Provide a unique key for each image
                src={`${sub.img}`} // Assuming there is an "img" property in your subOptions
                style={{ cursor: 'grab', marginBottom: '10px', height: '100px', width: '100px' }}
                alt={sub.label} // Provide alt text for accessibility
              />
            ))}
          </div>

          {/* <ButtonSelect options={subOptions} onSelect={handleSubOptionSelect} /> */}
        </>
      )}

  </div>

  )
}
