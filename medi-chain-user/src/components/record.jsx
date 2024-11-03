import React from 'react';

const Record = ({ title, center, date, onDelete }) => {
  return (
    <div className="flex flex-row  p-4 border rounded-lg shadow-md  justify-between max-w-full bg-white">
      <div className="flex flex-col justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{center}</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Last Updated</p>
          <p className="sm:text-lg text-sm font-medium">{date}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col justify-between items-end">
        <button 
          className="text-red-500 min-w-[105%] text-sm"
          onClick={onDelete}
        >
          Delete Record
        </button>
        <button className="px-6 py-1 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700">
          View
        </button>
      </div>
    </div>
  );
};

export default Record;
