import React from 'react';

export function Button({ children, variant = 'solid', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium text-sm';
  const variants = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
