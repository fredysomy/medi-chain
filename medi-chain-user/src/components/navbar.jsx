import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" top-0 left-0 w-full bg-teal-600 text-white shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <h1 className="text-xl font-bold">My Application</h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
        <Link to="/"  className="my-2 hover:text-teal-400">Home</Link>
          <Link to="/allrecords"  className="my-2 hover:text-teal-400">My Records</Link>
          <Link to="/team"  className="my-2 hover:text-teal-400">Add Records</Link>
          <Link to="/viewprofile"  className="my-2 hover:text-teal-400">Profile</Link>
          <button className="bg-white text-teal-600 px-4 py-1 rounded-md font-medium hover:bg-gray-100">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-teal-600 text-lg z-40">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>
          <Link to="/" onClick={toggleMobileMenu} className="my-2 hover:text-teal-400">Home</Link>
          <Link to="/allrecords" onClick={toggleMobileMenu} className="my-2 hover:text-teal-400">My Records</Link>
          <Link to="/team" onClick={toggleMobileMenu} className="my-2 hover:text-teal-400">Add Records</Link>
          <Link to="/viewprofile" onClick={toggleMobileMenu} className="my-2 hover:text-teal-400">Profile</Link>
          <button
            onClick={toggleMobileMenu}
            className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium mt-4 hover:bg-teal-700"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

