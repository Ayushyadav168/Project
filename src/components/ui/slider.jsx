import React from 'react';

export const Slider = ({ value, onValueChange, min, max, step }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className="slider w-full"
    />
  );
};
