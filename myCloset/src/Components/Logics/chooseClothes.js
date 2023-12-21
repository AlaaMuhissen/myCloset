import React from 'react';
import { getAllCategories } from './SaveDataInLocalStorage';

export function chooseClothes() {
  const categories = getAllCategories();
  const currentTemperature = 20; 
  const chanceToRain = 30; 
  const will_it_rain = 1; 

  const logic = [
    { lowTemperature: 0, highTemperature: 14, season: ["Winter"], lowRange: 80, highRange: 100 },
    { lowTemperature: 15, highTemperature: 20, season: ["Winter", "Autumn"], lowRange: 60, highRange: 80 },
    { lowTemperature: 20, highTemperature: 24, season: ["Spring", "Autumn"], lowRange: 50, highRange: 60 },
    { lowTemperature: 24, highTemperature: 27, season: ["Spring"], lowRange: 40, highRange: 50 },
    { lowTemperature: 28, highTemperature: 30, season: ["Summer"], lowRange: 20, highRange: 40 },
    { lowTemperature: 30, highTemperature: 45, season: ["Summer"], lowRange: 0, highRange: 20 },
  ];


  const temperatureRange = logic.find(
    range => currentTemperature >= range.lowTemperature && currentTemperature <= range.highTemperature
  );

  if (temperatureRange) {
   
    const matchingItems = [];
    categories.forEach(category => {
      category.subOptions.forEach(subOption => {
        const matchingSeasons = subOption.data.filter(
          item => temperatureRange.season.includes(item.seasons[0])
        );
        const matchingTemperature = matchingSeasons.filter(
          item => item.temp >= temperatureRange.lowRange && item.temp <= temperatureRange.highRange
        );

        matchingItems.push(...matchingTemperature);
        console.log('Matching items: ', matchingItems);
      });
    });

    if (parseInt(chanceToRain) > 0 || parseInt(will_it_rain) > 0) {
    
      const matchingWaterproofItems = matchingItems.filter(item => item.waterproof === true);
      console.log('Matching waterproof items: ', matchingWaterproofItems);
    } else {
      console.log('Matching items: ', matchingItems);
    }
  }
}
