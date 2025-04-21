import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">EduConnect</h1>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</Link>
          <Link to="/account" className="text-gray-700 hover:text-blue-600 font-medium">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
