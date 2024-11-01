import React from 'react';
import DoctorImage from '../assets/Doctor.svg'; // Adjust the path based on your file structure

const LandingPage = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <div
        className="h-[550px] w-screen "
        style={{
          backgroundImage: `url(${DoctorImage})`,
        }}
      ></div>
      <div className="bg-white flex justify-end shadow-lg rounded-lg overflow-hidden w-full max-w-md ">
        <div className="p-6 text-center">
          <h1 className="text-3xl font-semibold text-teal-800 mb-4">Medi-chain</h1>
          <p className="text-lg text-gray-600 mb-6">
            Own your health, own your data! Decentralized healthcare: Secure, private, and in your control.
          </p>
          <button className="bg-teal-500 text-white text-lg font-medium py-2 px-6 rounded-full hover:bg-teal-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
