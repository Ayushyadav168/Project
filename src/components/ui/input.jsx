import React from 'react';

export const Input = ({ id, type, value, onChange, className }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 ${className}`}
    />
  );
};
