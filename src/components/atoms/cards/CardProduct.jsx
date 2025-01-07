// Card.jsx
import React from 'react';

const CardProduct = ({ image, title, id, price, onButtonClick }) => {
  return (
    <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <div className="h-48 bg-gray-700 rounded-xl">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{title}</span>
            <p className="text-xs text-gray-700">ID: {id}</p>
          </div>
          <span className="font-bold text-red-600">${price}</span>
        </div>
        <button 
          onClick={onButtonClick}
          className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
