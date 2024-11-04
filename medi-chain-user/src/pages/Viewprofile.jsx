import React, { useState } from 'react';

function EditProfile() {
  const [profile, setProfile] = useState({
    name: 'Melissa Peters',
    email: 'melpeters@gmail.com',
    bloodGroup: 'O+ve',
    dob: '1995-05-23',
    country: 'Nigeria',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-2xl p-6 bg-white rounded-lg shadow-md min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-24 h-24 rounded-full border-4 border-teal-500 mb-4"
            src="https://via.placeholder.com/100" // Replace with actual profile picture URL
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold text-center">Edit Your Profile</h2>
        </div>

        <form className="space-y-4 flex flex-col">
          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1 font-semibold">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Your blood group (e.g., O+ve)"
              value={profile.bloodGroup}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1 font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700 mb-1 font-semibold">Country/Region</label>
            <p className="w-full px-4 py-2 border rounded-md ">
              {profile.country}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;