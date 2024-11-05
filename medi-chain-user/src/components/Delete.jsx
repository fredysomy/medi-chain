import React from 'react';

const DeleteWarning = ({ isOpen, onCancel, onDeleteConfirm }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800">Delete Record</h2>
        <p className="text-gray-600 mt-2">
          Are you sure you want to delete this record? This action cannot be undone.
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onDeleteConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarning;
