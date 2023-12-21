import React from 'react';
import { getIconComponent } from '../Logics/createIconComponent';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ icon, title }) {
  const IconComponent = getIconComponent(icon, 50, "#704F38");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/${title}`);
  };

  return (
    <div
      className="max-w-48 mx-auto bg-white rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 p-10 h-full max-h-40 mb-5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">{IconComponent}</div>
      
      <div className="px-4 py-2 flex items-center justify-center ">
        <div className="font-bold text-xl mb-2 text-[#704F38] mx-auto text-center">
          {title}
        </div>
      </div>
    </div>
  );
}
