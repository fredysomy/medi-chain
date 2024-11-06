import React, { useState } from 'react';
import profileIcon from '../assets/form_image.jpeg';
import { useNavigate } from 'react-router-dom'
function CreateAccount() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    email: '',
    dob: '',
    bloodGroup: '',
    password: '',
  });
  const navigate = useNavigate();
  // Handle individual input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile); 
    navigate('/');
    
  };

  return (
    <div className="w-full min-h-screen bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-teal-600 text-white flex items-center justify-start py-4 px-4 rounded-t-lg">
        <img src={profileIcon} alt="Profile Icon" className="w-10 h-10 mr-3" />
        <h2 className="text-lg font-semibold">Create An Account</h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name', type: 'text', name: 'name' },
            { label: 'Age', type: 'number', name: 'age' },
            { label: 'Mail id', type: 'email', name: 'email' },
            { label: 'DOB', type: 'date', name: 'dob' },
            { label: 'Blood Group', type: 'text', name: 'bloodGroup' },
            { label: 'Password', type: 'password', name: 'password' },
          ].map((field) => (
            <div key={field.label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <div className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={profile[field.name]}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 pl-3 pr-10 border border-teal-500 rounded-md focus:outline-none focus:border-teal-700"
                />
                <span className="absolute right-3 top-2.5 text-teal-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-full font-semibold mt-4 transition duration-200 hover:bg-teal-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
