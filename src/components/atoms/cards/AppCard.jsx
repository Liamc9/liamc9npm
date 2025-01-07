import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AppCard({ image, name, id, githubUrl, url }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`w-full aspect-square transition-all duration-300 rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden transform bg-white ${
        hovered ? "scale-105 shadow-xl" : "scale-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-[75%] relative">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } flex justify-center items-center`}
        >
          <img src={image} alt="profile" className="w-full h-full object-cover rounded-t-xl" />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-300 transform ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } flex flex-col justify-center items-center bg-white bg-opacity-90 p-4 rounded-t-xl`}
        >
          <div className="grid w-full gap-2 grid-cols-2">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors">
              <img src="https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Finternet-svgrepo-com.svg?alt=media&token=e42ec486-bc63-422e-a172-5e505156fe93" className="w-6 h-6 mb-1" />
              <p className="text-sm">App</p>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors">
              <img src="https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fgithub-142-svgrepo-com.svg?alt=media&token=e2051d67-b0a4-440a-877e-c153fa692f07" className="w-6 h-6 mb-1" />
              <p className="text-sm">Code</p>
            </a>
            <Link to={`/stacklist/${id}`} className="flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors">
              <img src="https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fstack2-svgrepo-com.svg?alt=media&token=c4331c1b-d147-4435-bbfe-4e75ed418b3c" className="w-6 h-6 mb-1" />
              <p className="text-sm">Stack</p>
            </Link>
            <Link to={`/notes/${id}`} className="flex flex-col items-center p-2 border rounded-lg hover:bg-blue-100 transition-colors">
              <img src="https://firebasestorage.googleapis.com/v0/b/stackgallery-fa1bb.appspot.com/o/svg%2Fms-onenote-svgrepo-com.svg?alt=media&token=eecb9f71-21a6-43b5-b798-7446f7bee4f7" className="w-6 h-6 mb-1" />
              <p className="text-sm">Notes</p>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-bold text-gray-800 mt-2">{name}</p>
    </div>
  );
}
