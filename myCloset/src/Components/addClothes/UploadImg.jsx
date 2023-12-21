import React, { useState } from 'react';
import { IoCloudUpload } from "react-icons/io5";
const UploadImg = ({ setImageUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setImageUpload(imageDataUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <div className="mt-1 flex items-center space-x-4">
        <label className="relative cursor-pointer bg-[#704F38] text-[#fff] rounded-md border p-4 flex items-center justify-center">
          <span className="text-sm text-center"> <IoCloudUpload color='#fff'/>Upload img</span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
      
      </div>
    </div>
  );
};

export default UploadImg;
