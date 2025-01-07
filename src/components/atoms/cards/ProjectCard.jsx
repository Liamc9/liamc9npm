import React from "react";

export default function ProjectCard({ image, name, description, tier, category }) {
  return (
    <div 
  
      className="flex w-full aspect-[3/1] transition-all duration-300 rounded-xl shadow-lg border-1 border-gray-200  border-l-8 border-l-green-500 overflow-hidden transform bg-white hover:shadow-xl hover:scale-101"
    >
      <div className="w-1/3 h-full">
        <img src={image} alt={name} className="w-full h-full object-cover " />
      </div>
      <div className="relative w-2/3 p-4 flex flex-col justify-center">
      <div className="absolute top-2 right-2"><div className="flex flex-row gap-1"><div className="bg-green-500 px-1 text-white rounded">{category}</div> <div className="bg-yellow-500 text-white px-1 rounded">{tier}</div> </div></div>
        <p className="text-sm md:text-lg font-bold text-gray-800">{name}</p>
        <p className="text-xs md:text-sm text-gray-600 md:mt-2">{description}</p>
      </div>
    </div>
  );
}
