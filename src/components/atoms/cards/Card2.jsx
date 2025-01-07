import React from "react";

export default function Card2() {
  return (
    <div className="relative w-80 h-48 p-6 rounded-lg shadow-lg bg-gradient-to-tr from-blue-500 to-blue-300 hover:scale-105 cursor-pointer duration-300 hover:-translate-y-2 hover:translate-x-2 group">
      <div className="absolute top-3 right-3 w-24 text-white">
        <svg
          className="w-24 h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z" />
        </svg>
      </div>
      <div className="absolute bottom-3 left-3">
        <h2 className="text-white text-4xl font-bold">Chatgpt</h2>
      </div>
      <div className="absolute bottom-3 right-3 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce"
        >
          <path d="M13 5l7 7-7 7M5 5h14M5 5v14" />
        </svg>
      </div>
    </div>
  );
}
