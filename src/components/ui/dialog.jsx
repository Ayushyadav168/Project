import React from 'react';

export const Dialog = ({ children }) => {
  return (
    <div className="dialog-overlay fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96">
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const DialogHeader = ({ children }) => {
  return <div className="border-b pb-2">{children}</div>;
};

export const DialogTitle = ({ children }) => {
  return <h3 className="text-lg font-bold">{children}</h3>;
};

export const DialogTrigger = ({ children, asChild }) => {
  return <>{children}</>;
};
