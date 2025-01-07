// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CardSocial = ({ id, coverPhoto, profilePic, username, categories, link, status }) => {
  return (
    <div className="flex">
      <div className="w-full aspect-[10/3]">
        <div key={id} className="w-full h-full">
          <Link to={link} className="relative flex w-full h-full overflow-hidden rounded-xl">
            <img
              src={coverPhoto}
              className="absolute h-full w-full object-cover"
              alt="Cover"
            />
            <div className="flex w-[30%] z-10 items-center justify-center">
              <img
                src={profilePic}
                className="aspect-[1/1] w-[80%] rounded-full border-2 border-white"
                alt="Profile"
              />
            </div>
            <div className="flex w-[60%] flex-col">
              <div className="flex h-[50%]"></div>
              <div className="flex flex-col md:text-xl text-sm font-semibold text-white z-20">
                <p>{username}</p>
                <p className="font-normal text-xs md:text-lg">{categories}</p>
              </div>
            </div>
            <div className="absolute bottom-0 h-[50%] w-full bg-gray-500 opacity-50"></div>
            {status && (
              <div className="absolute right-2 top-2 bg-white rounded p-1 text-blue-500 text-xs">
                {status}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSocial;
