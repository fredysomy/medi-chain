import React from 'react';
import records from "../Record.json"
import { useParams } from 'react-router-dom';
import RecordDetail from "../components/RecordDetails"
const ViewRecord = () => {
  const { id } = useParams();
  const record = records.find((records) => records.id === parseInt(id));

  // If the record is not found, display an error message
  if (!record) {
    return <p className="text-center text-red-500 font-semibold mt-8">Record not found</p>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
    <div className=" max-w-3xl mx-auto">
        {/* Render only the specific record that matches the id */}
        <RecordDetail
          title={record.title}
          center={record.center}
          date={record.date}
          img={record.img}
          access={record.access}
        />
      </div>
    </div>
  );
  
  };
  
  export default ViewRecord;