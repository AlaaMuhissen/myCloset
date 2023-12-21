import React, { useState } from 'react';

const WeatherBasedSuggestions = ({ temperature, isRainy, windSpeed, chanceOfRain, tempFeel }) => {
  const [suggestions, setSuggestions] = useState([]);

  const suggestClothing = () => {
    const newSuggestions = [];

    // Define your suggestion logic based on the form details
    if (temperature > 25) {
      newSuggestions.push('T-shirts', 'Shorts', 'Sunglasses');
    } else if (temperature < 10) {
      newSuggestions.push('Jackets', 'Sweaters', 'Warm Layers');
    } else {
      newSuggestions.push('Casual Wear', 'Comfortable Clothing');
    }

    if (isRainy) {
      newSuggestions.push('Umbrella', 'Waterproof Jacket', 'Rain Boots');
    }

    if (windSpeed > 20) {
      newSuggestions.push('Windbreaker', 'Wind-Resistant Clothing');
    }

    if (chanceOfRain > 50) {
      newSuggestions.push('Raincoat', 'Waterproof Shoes');
    }

    if (tempFeel < temperature) {
      newSuggestions.push('Extra Layer', 'Scarf', 'Gloves');
    }

    setSuggestions(newSuggestions);
  };

  return (
    <div>
      <h2>Weather-Based Clothing Suggestions</h2>
      <button onClick={suggestClothing}>Get Suggestions</button>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherBasedSuggestions;
