import React, { useEffect, useState } from 'react';

const Alert = ({ type, text, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="fixed top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out opacity-100"
    >
      <div
        className={`flex items-center px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${
          type === 'danger' ? 'bg-red-800 text-red-100' : 'bg-blue-800 text-blue-100'
        }`}
      >
        <span className="uppercase font-semibold text-xs mr-3">
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Alert;
