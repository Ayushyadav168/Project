import React from 'react';

export const Button = ({ onClick, children, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
