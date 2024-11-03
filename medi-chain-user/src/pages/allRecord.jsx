import React, { useState } from 'react';
import Report from '../components/record';
import Nav from "../components/navbar";
import Record from "../Record.json"
const AllRecords = () => {
  // State to hold the list of records
  const [records, setRecords] = useState(Record);

  return (
    <div className="flex flex-col items-center  min-h-screen p-4">
      <div className="w-full max-w-md mt-4 px-4">
        <div className="flex items-center bg-white rounded-full shadow-md py-2 px-4">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none text-gray-700"
          />
          <button className="text-gray-500">🔍</button>
        </div>
      </div>

     
      <div className="w-full max-w-md bg-white rounded-t-xl shadow-lg p-4 mt-4 flex flex-col gap-4">
        
        {records.map((record) => (
          <Report key={record.id} {...record} />
        ))}
      </div>
    </div>
  );
};

export default AllRecords;
