import React from 'react';
import doctorImage from './assets/d_login.jpeg'; // Ensure this path is correct

const LandingPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side with Image */}
      <div className="w-1/2 bg-teal-600 relative">
        <img
          src={doctorImage}
          alt="Doctor Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Right Side with Centered Heading, Description, and Button */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 text-center space-y-6">
        {/* Heading */}
        <h1 className="text-teal-600 text-5xl font-bold">Medi-chain</h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-md">
          Medi-chain is a revolutionary healthcare platform that enables secure, decentralized management of patient records. Connect with healthcare providers, access your medical history, and control your data—all on a single platform.
        </p>

        {/* Button */}
        <button className="bg-teal-600 text-white py-2 px-8 rounded-lg hover:bg-teal-700 focus:outline-none">
          Login with Open ID
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
