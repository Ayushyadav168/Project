import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="border-b pb-2">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};
