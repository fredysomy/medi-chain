import React, { useState } from 'react';
import Report from '../components/record';
import PatientCard from '../components/patientCard';
import Record from "../Record.json"
import { Link } from 'react-router-dom';

const Home = () => {
  const [records, setRecords] = useState(Record);
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 min-h-screen p-4 lg:p-8">
      <div className="flex flex-col items-center w-full lg:w-1/3 lg:max-w-md bg-white p-4 lg:p-6 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">

        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">Welcome <span className="font-bold">Dr. Doe!</span></h1>

        <div className="w-full mb-6">
          <PatientCard />
        </div>

        
       
      </div>


      <div className="flex flex-col w-full lg:w-2/3 bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Available Record</h2>
          <Link to="/allrecords"  className="text-gray-500 font-medium">View all &gt;</Link>

        </div>
        <div className="grid gap-4">
          {records.map((record) => (
            <Report key={record.id} {...record} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
