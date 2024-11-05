import React, { useState } from 'react';
import Report from '../components/record';
import PatientCard from '../components/patientCard';
import Record from "../Record.json";
import { Link } from 'react-router-dom';
import DeleteWarningModal from '../components/Delete'; // Import the modal

const Home = () => {
  const [records, setRecords] = useState(Record);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteRecordId, setDeleteRecordId] = useState(null);

  // Open the delete confirmation modal
  const confirmDelete = (id) => {
    setDeleteRecordId(id);
    setIsModalOpen(true);
  };

  // Perform the delete action
  const onDelete = () => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== deleteRecordId));
    setIsModalOpen(false);
  };

  // Cancel delete action
  const cancelDelete = () => {
    setIsModalOpen(false);
    setDeleteRecordId(null);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 min-h-screen p-4 lg:p-8">
      <div className="flex flex-col items-center w-full lg:w-1/3 lg:max-w-md bg-white p-4 lg:p-6 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
          Welcome <span className="font-bold">Dr. Doe!</span>
        </h1>

        <div className="flex flex-col gap-5 w-full mb-2">
          <PatientCard />
          <Link to={`/addrecord`} className="w-[100%] py-2 flex justify-center items-center bg-teal-600 text-white font-medium hover:bg-teal-700">
            Add Record
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-2/3 bg-white p-4 lg:p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Available Record</h2>
          <Link to="/allrecords" className="text-gray-500 font-medium">
            View all &gt;
          </Link>
        </div>

        {/* Check if records exist, otherwise display 'Not Available Record' */}
        {!records.length ? (
          <p className="font-semibold">Not Available Record</p>
        ) : (
          <div className="grid gap-4">
            {records.slice(0, 3).map((record) => (
              <Report
                key={record.id}
                {...record}
                onDelete={() => confirmDelete(record.id)} // Pass confirmDelete to open the modal
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteWarningModal
        isOpen={isModalOpen}
        onCancel={cancelDelete}
        onDeleteConfirm={onDelete}
      />
    </div>
  );
};

export default Home;
