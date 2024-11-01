import React, { useState } from 'react';
import Report from '../components/record';
import PatientCard from '../components/patientCard';

const Home = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      title: 'CT - SCAN',
      center: 'Healthy Family Centre',
      date: 'Monday, 27 March 2023',
    },
    {
      id: 2,
      title: 'Cancer - SCAN',
      center: 'Healthy Family Centre',
      date: 'Monday, 27 March 2023',
    },
    {
      id: 3,
      title: 'MRI-scan',
      center: 'Healthy Family Centre',
      date: 'Monday, 27 March 2023',
    },
    {
      id: 4,
      title: 'Blood-check',
      center: 'Healthy Family Centre',
      date: 'Monday, 27 March 2023',
    },
  ]);
  return (
    <div className="flex flex-col items-center bg-[#00796B] min-h-screen">
      {/* Header */}
      <div className="flex items-center w-full max-w-md  text-white py-3 px-4 rounded-t-lg">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
          <span className=" font-semibold text-lg">👤</span>
        </div>
        <h1 className="flex-grow text-lg font-semibold">Hi Irine, Welcome Back!</h1>
        <button className="text-white text-2xl">☰</button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md min-h-screen bg-white rounded-t-xl shadow-lg p-4 mt-4">
        
        <h2 className="text-lg font-semibold mb-2">My Health Card</h2>
        <div className="mb-6">
          <PatientCard />
        </div>

        
        <div className="flex justify-between  items-center mb-4">
          <div className='flex'><h2 className="text-lg font-semibold pr-2">Records</h2>
          <button className="flex items-center px-1 rounded bg-teal-600 text-white font-medium">
            + Add
          </button></div>
          
            {/* View All Link */}
        <div className="text-right">
          <a href="#" className="text-gray-500 font-medium">View all &gt;</a>
        </div>
        </div>
        
        {/* Report Cards */}
        
        <div className="flex flex-col  gap-4 ">
        {records.map((record) => (
          <Report key={record.id} {...record} />
        ))}
          
        </div>

      
      </div>
    </div>
  );
};

export default Home;
