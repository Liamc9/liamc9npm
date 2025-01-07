import React from 'react';
import { Link } from 'react-router-dom';

const CookbookProfile = ({
  isProfileOwner,
  userData,
  setIsSubscriptionModalOpen,
  openDrawer,
}) => {
  return (
    <div className="relative mt-12 mb-20 flex min-h-screen w-full flex-col items-center">
      {/* Profile and cover image */}
      <div className="aspect-[10/4] w-full relative">
        <img
          src={userData.coverPhoto}
          className="absolute h-full w-full object-cover"
          alt="Cover"
        />


        {/* Profile Image and User Info */}
        <div className="relative flex h-full w-full">
          <div className="z-10 flex w-[30%] items-center justify-center">
            <img
              src={userData.profilePic}
              className="aspect-[1/1] w-[80%] rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>

          <div className="flex w-[40%] flex-col">
            <div className="flex h-[50%]"></div>
            <div className="z-20 flex flex-col text-lg font-semibold text-white md:text-xl">
             

              {/* Social Icons */}
              <div className="absolute bottom-2 right-2 flex flex-row gap-2">
                <div className="px-1 bg-blue-500 rounded">x
                </div>
                <div className="px-1 bg-blue-300 rounded">x
                </div>
                <div className="px-1 bg-red-500 rounded">x
                </div>
                <div className="px-1 bg-black rounded">x
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 flex flex-col text-lg font-semibold text-white md:text-xl">
          <p>
                {userData.firstName} {userData.lastName}
              </p>
              <p className="text-sm font-normal md:text-lg mb-2">
                {userData.categories}
              </p>
          </div>

          {/* Dark Overlay */}
          <div className="absolute right-0 h-[100%] w-[30%] bg-gray-500 opacity-50"></div>
        </div>

        {/* Non-profile owner actions */}
        {!isProfileOwner && (
          <>
            <button
              onClick={() => setIsSubscriptionModalOpen(true)}
              className="absolute top-2 right-2 flex items-center justify-center rounded bg-white p-1 text-custom-brown shadow-md font-semibold"
            >
              + Subscribe
            </button>

            <button
              onClick={openDrawer}
              className="absolute top-20 right-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Open Drawer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CookbookProfile;
