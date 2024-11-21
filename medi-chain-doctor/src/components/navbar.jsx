import React from 'react';
import { HomeIcon, UserIcon, BellIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center h-screen w-20 bg-gradient-to-b from-teal-600 to-white text-gray-700 shadow-lg">
      {/* Top Icons */}
      <div className="flex flex-col items-center mt-6 space-y-8">
        {/* Home Icon */}
        <button className="hover:text-teal-600">
          <HomeIcon className="w-6 h-6" />
        </button>
        
        {/* Profile Icon */}
        <button className="hover:text-teal-600">
          <UserIcon className="w-6 h-6" />
        </button>
        
        {/* Notifications Icon */}
        <button className="hover:text-teal-600">
          <BellIcon className="w-6 h-6" />
        </button>
        
        {/* Settings Icon */}
        <button className="hover:text-teal-600">
          <CogIcon className="w-6 h-6" />
        </button>
      </div>
      
      {/* Spacer */}
      <div className="flex-grow"></div>
      
      {/* Sign Out Icon at the Bottom */}
      <button className="mb-6 hover:text-teal-600">
        <LogoutIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Sidebar;
