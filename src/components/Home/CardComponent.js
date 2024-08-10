import React from 'react';

const CardComponent = ({ title, count }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md text-center mt-2">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
};

export default CardComponent;
