import React, { useState } from 'react';

function AddMedicalRecord() {
  const [formData, setFormData] = useState({
    recordName: '',
    medicalCenter: '',
    dateOfRecord: '',
    doctorName: '',
    description: '',
    file: null,
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Set the buttonClicked state to true to change color
    setButtonClicked(true);

    // Reset the form fields after submission
    setFormData({
      recordName: '',
      medicalCenter: '',
      dateOfRecord: '',
      doctorName: '',
      description: '',
      file: null,
    });

    // Reset file input manually as its value cannot be controlled by React
    document.getElementById('file').value = '';

    // Reset the button color back to the original after 2 seconds
    setTimeout(() => setButtonClicked(false), 2000); // Resets after 2 seconds
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col h-full w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-4 text-black">Add Medical Record</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          {[
            { label: 'Record Name', name: 'recordName', placeholder: 'e.g., Blood Test Results', type: 'text' },
            { label: 'Medical Center', name: 'medicalCenter', placeholder: 'e.g., City Hospital', type: 'text' },
            { label: 'Date of Record', name: 'dateOfRecord', type: 'date' },
            { label: 'Doctor\'s Name', name: 'doctorName', placeholder: 'e.g., Dr. Jane Smith', type: 'text' },
          ].map((field, index) => (
            <div className="flex flex-col" key={index}>
              <label className="text-gray-700 font-medium mb-1" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder || ''}
                value={formData[field.name] || ''}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black-500 text-black"
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add any additional notes or description"
              value={formData.description || ''}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black-500 text-black"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1" htmlFor="file">
              Upload Record
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black-500 text-black"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`py-2 mt-3 font-medium rounded-md focus:outline-none 
                        ${buttonClicked ? 'bg-teal-800' : 'bg-teal-600 hover:bg-teal-700'} 
                        text-white`}
          >
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMedicalRecord;
