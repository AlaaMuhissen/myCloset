import React from 'react';

const OutfitCard = ({ outfit }) => {
  return (
    <div className="outfit-card">
      <h3>Main Category: {outfit.mainCategory}</h3>
      <h4>Sub Category: {outfit.subCategory}</h4>
      <div>
        Images:
        <ul>
          {outfit.images.map((imageUrl, index) => (
            <li key={index}>
              <img src={imageUrl} alt={`Outfit ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutfitCard;
