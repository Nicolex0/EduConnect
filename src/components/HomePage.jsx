import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EduConnect</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
            <a href="#account" className="text-gray-700 hover:text-blue-600 font-medium">Account</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 flex-grow flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Learn Anytime, Anywhere with <span className="text-blue-600">EduConnect</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover a world of educational courses to upgrade your skills. Whether you're prepping for exams or learning for fun, EduConnect is your go-to platform.
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Explore Courses
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTau2NCOopg1xcZ4ifNT1S_cbqO0tjVBBVlyA&s"
              alt="Learning Illustration"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
