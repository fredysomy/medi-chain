import React from 'react';
import profileIcon from '../assets/form_image.jpeg'; 

function CreateAccount() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
        
        
        <div className="bg-teal-600 text-white flex items-center justify-start py-4 px-4 rounded-t-lg">
          <img src={profileIcon} alt="Profile Icon" className="w-10 h-10 mr-3" />
          <h2 className="text-lg font-semibold">Create An Account</h2>
        </div>
        
        
        <div className="p-6">
          {[
            { label: 'Name', type: 'text' },
            { label: 'Age', type: 'number' },  
            { label: 'Mail id', type: 'email' },
            { label: 'DOB', type: 'date' },
            { label: 'Blood Group', type: 'text' },
            { label: 'Password', type: 'password' },
          ].map((field) => (
            <div key={field.label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <div className="relative">
                <input
                  type={field.type}
                  placeholder={field.label}
                  className="w-full py-2 pl-3 pr-10 border border-teal-500 rounded-md focus:outline-none focus:border-teal-700"
                />
                <span className="absolute right-3 top-2.5 text-teal-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>
            </div>
          ))}
          <button className="w-full bg-teal-600 text-white py-2 rounded-full font-semibold mt-4 transition duration-200 hover:bg-teal-700">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
