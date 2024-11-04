import React, { useState } from 'react';
import doctorImage from '../assets/Doctor image.jpeg'; // Replace with your actual image path

function MediChainIntro() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    setButtonClicked(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={doctorImage}
          alt="Doctor"
          className="w-screen lg:w-[120%]  min-h-full lg:max-h-full "
        />
      </div>

      {/* Content below the image */}
      <div
        className="w-full max-w-md p-10  sm:p-6 lg:p-8 shadow-lg text-center object-cover"
        style={{ backgroundColor: 'rgba(0, 121, 107, 0.7)' }} // Custom background color with 70% opacity
      >
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-montagu">
          Medi-chain
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white mb-6 font-montserrat">
          Own your health, own your data! <br />
          Decentralized healthcare: <br />
          Secure, private, and in your control.
        </p>

        <button
          onClick={handleGetStarted}
          className={`w-full py-2 sm:py-3 text-[#00796B] font-semibold rounded-full transition duration-300
            bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MediChainIntro;