// WeatherCard.js

import React from 'react';

const WeatherCard = ({weatherData}) => {

  return (
      <>
    <div className="flex overflow-x-auto p-4 space-x-4 scroll-snap-type-x  overflow-hidden">
    {weatherData.forecast.forecastday.map((day, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-md shadow-md min-w-80 scroll-snap-align-start transform hover:scale-105 transition-transform ease-in-out duration-300 flex justify-between items-center"
        
      >
        <div>
          <div className="text-2xl font-bold mb-2">{day.date}</div>
          <div className="text-gray-600">
            {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
          </div>
          <div className="text-gray-600">Feels like {day.day.feelslike_c}°C</div>
        </div>
        <div className="flex items-center">
          <img
            className="mr-2"
            src={day.day.condition.icon}
            alt={day.day.condition.text}
          />
        </div>
      </div>
      ))}
     </div>
      </>
  );
};

export default WeatherCard;
