import React, { useState } from 'react';
import { MdOutlineSevereCold } from 'react-icons/md';
import { GiThermometerHot } from 'react-icons/gi';
import { FaFan } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';
const emojis = [ <MdOutlineSevereCold />, <FaFan />,<GoSun />];

const marks = [
  { value: 0, label: emojis[0] },
  { value: 50, label: emojis[1] },
  { value: 100, label: emojis[2] },
];

const valuetext = (value) => {
  return `${value}`;
};

const getColor = (value) => {
  // Define the hues for blue, green, and red
  const blueHue = 240; // Blue hue
  const greenHue = 120; // Green hue
  const redHue = 0; // Red hue

  // Determine the hue based on the slider value
  const hue = value <= 50 ? blueHue + (greenHue - blueHue) * (value / 50) : greenHue + (redHue - greenHue) * ((value - 50) / 50);

  return `hsl(${hue}, 100%, 50%)`;
};

const PrettoSlider = styled(Slider)(({ value }) => ({
  color: getColor(value),
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: `2px solid ${getColor(value)}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: getColor(value),
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

export default function RangeInput({ onFinalValueChange }) {
  const [finalValue, setFinalValue] = useState(50);

  const handleChange = (event, newValue) => {
    setFinalValue(newValue);
    onFinalValueChange(newValue);
  };

  return (
    <>
       <Box sx={{ width: 300 }}>
        <PrettoSlider
          value={finalValue}
          onChange={handleChange}
          aria-label="Always visible"
          marks ={marks}
          valueLabelDisplay="auto"
          defaultValue={50}
        />
      </Box>
    </>
  );
}
