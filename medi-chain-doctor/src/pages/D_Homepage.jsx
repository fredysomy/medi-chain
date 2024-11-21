import React, { useState } from 'react';
import DoctorIDCard from '../components/DoctorIDCard'; // Update the path if needed
import Record from '../components/Record'; // Update the path if needed

const App = () => {
  const doctor = {
    id: '11245678945',
    profilePicture: 'https://via.placeholder.com/60', // Replace with actual image URL
    name: 'Dr. Melissa Peters',
    age: 32,
    dob: '12-07-2003',
    specialization: 'Surgeon',
  };

  // State for available records
  const [records, setRecords] = useState([
    { id: 1, title: 'CT - SCAN', center: 'Patient Name', date: 'Monday, 27 March 2023' },
    { id: 2, title: 'MRI - SCAN', center: 'Patient Name', date: 'Tuesday, 28 March 2023' },
    { id: 3, title: 'X-RAY', center: 'Patient Name', date: 'Wednesday, 29 March 2023' },
    { id: 4, title: 'Blood Test', center: 'Patient Name', date: 'Thursday, 30 March 2023' },
    { id: 5, title: 'Blood Test', center: 'Patient Name', date: 'Thursday, 31 March 2023' },

  ]);

  // Function to handle deleting a record
  const handleDeleteRecord = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4"> {/* Main container with padding */}
      {/* Welcome Message */}
      <h1 className="text-2xl mb-6">
        Welcome <span className="font-bold">{doctor.name}</span>!
      </h1>

      {/* Main Vertical Layout (split in half) */}
      <div className="flex w-full gap-8 flex-grow"> {/* Allow this container to grow */}
        {/* Left Column (Doctor Info and Add Record) */}
        <div className="flex flex-col w-1/2 gap-6"> {/* Takes up half of page width */}
          {/* Doctor Info Component */}
          <DoctorIDCard doctor={doctor} />

          {/* Add Record Section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
            <h2 className="text-lg font-semibold mb-2">Add Record</h2>
            <input
              type="text"
              placeholder="Enter Record ID"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>

        {/* Right Column (Available Records) */}
        <div className="flex-grow overflow-y-auto flex flex-col"> {/* Right side with scroll */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-grow"> {/* Full height */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Available Records</h2>
              <a href="#" className="text-teal-600 hover:underline text-sm">
                View all &gt;
              </a>
            </div>
            {/* Available Record Components */}
            <div className="space-y-4 flex-grow"> {/* Allow this section to grow */}
              {records.map(record => (
                <Record
                  key={record.id}
                  title={record.title}
                  center={record.center}
                  date={record.date}
                  onDelete={() => handleDeleteRecord(record.id)} // Pass the delete handler
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
