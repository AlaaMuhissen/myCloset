import React, { useState } from 'react';
import { GiClothes } from "react-icons/gi";
import { BiCloset,BiHomeAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

 function CreateDropdown({title,item1, item2}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className=""
        >
         {title}
        </button>
  
        {isOpen && (
          <div className="absolute bottom-full left-0 bg-white border rounded-md shadow-md mt-2">
            <ul>
            <Link to="/addClothe"><li className="py-2 px-4 max-sm: hover:bg-gray-200">
              <BiCloset/>{item1}</li></Link>
            <Link to="/addAnOutfit"><li className="py-2 px-4 hover:bg-gray-200"><GiClothes/>{item2}</li></Link>
            </ul>
          </div>
        )}
      </div>
    );
}

export default CreateDropdown;

