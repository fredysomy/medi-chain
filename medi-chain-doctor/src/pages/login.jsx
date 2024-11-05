import React from 'react';
import doctorImage from '../assets/d_login.jpeg'; 

const LandingPage = () => {
  return (
    <div className="flex h-screen">
     
      <div className="w-1/2 bg-teal-600 flex items-center justify-center relative">
        <img
          src={doctorImage}
          alt="Doctor Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h1 className="text-white text-4xl font-bold relative z-10">Medi-chain</h1>
      </div>

     
      <div className="w-1/2 flex items-center justify-center">
        <button className="bg-teal-600 text-white py-2 px-8 rounded-lg hover:bg-teal-700 focus:outline-none">
          Login with Open ID
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
