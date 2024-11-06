import React from 'react';

const DoctorIDCard = ({ doctor }) => {
  return (
    <div className="flex flex-col w-full bg-gray-200 rounded-lg shadow-md"> {/* Set width to full */}
      {/* Doctor ID Header */}
      <div className="bg-teal-600 text-white py-2 px-4 rounded-t-lg text-start">
        Doctor ID: {doctor.id}
      </div>
      
      {/* Doctor Information */}
      <div className="flex items-center gap-5 mt-4 px-4">
        {/* Profile Picture */}
        <img
          src={doctor.profilePicture}
          alt="Doctor"
          className="w-32 h-32 rounded-full object-cover" // Adjusted size to larger dimensions
        />
        
        {/* Doctor Details */}
        <div className="ml-4 text-lg text-gray-800">
          <p className="text-xl font-semibold mb-2">{doctor.name}</p> {/* Increased text size and added margin */}
          <p className="text-lg mb-2">Age: {doctor.age}</p> {/* Added margin for spacing */}
          <p className="text-lg mb-2">DOB: {doctor.dob}</p> {/* Added margin for spacing */}
          <p className="text-lg">Specialization: {doctor.specialization}</p> {/* Last element without margin */}
        </div>
      </div>
      
      {/* View Button */}
      <div className="flex justify-end mt-4 px-4 pb-2">
        <button className="w-[25%] py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700">
          View
        </button>
      </div>
    </div>
  );
};

export default DoctorIDCard;