import React from 'react';
import { Link } from 'react-router-dom';
const PatientCard = () => {
  return (
    <div className="flex flex-col max-w-md rounded-lg shadow-md bg-gray-200">
      <div className="bg-teal-600 text-white py-2 px-4 rounded-t-lg text-start">
        Patient ID: 11245678945
      </div>
      <div className="flex items-center gap-5 mt-4 px-4">
        <img
          src="https://via.placeholder.com/60" 
          alt="Patient"
          className="w-[25%] h-[40%] rounded-full"
        />
        <div className="ml-4 text-lg text-gray-800">
          <p className="text-lg font-semibold">Irine Ann</p>
          <p>Age : 32</p>
          <p>DOB : 12-07-2003</p>
          <p>Blood Group - O+ve</p>
        </div>
      </div>
      <div className="flex justify-end mt-4 px-4 pb-2">
      <Link to={`/viewprofile`} className="w-[25%] py-2 flex justify-center items-center rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700">
  View
</Link>

       
      </div>
    </div>
  );
};

export default PatientCard;
