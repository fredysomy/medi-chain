import React from 'react';
import profileImage from '../assets/profile_image.png'; // Import the profile image

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Profile</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 w-full max-w-2xl">
        <div className="flex items-center justify-center">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
              {/* Camera Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 3h-2.83c-.34-1.6-1.62-2.83-3.26-2.98-.71-.09-1.42-.02-2.04.26L10 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-3 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
          </div>
          {/* User Info */}
          <div className="ml-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Jeslin Kuriakose</h2>
            <p className="text-gray-500">Your account is ready, you can now apply for advice.</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Profile Details</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Static Text Fields in Two-Column Grid */}
          <div>
            <label className="block text-sm font-medium text-gray-600">First Name</label>
            <p className="mt-2 text-gray-700 font-medium">Jeslin</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Surname</label>
            <p className="mt-2 text-gray-700 font-medium">Kuriakose</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
            <p className="mt-2 text-gray-700 font-medium">October 12 2003</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Blood Group</label>
            <p className="mt-2 text-gray-700 font-medium">O+</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="mt-2 text-gray-700 font-medium">jeslin@example.com</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <p className="mt-2 text-gray-700 font-medium">+98 9120000000</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Specialization</label>
            <p className="mt-2 text-gray-700 font-medium">Surgeon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
