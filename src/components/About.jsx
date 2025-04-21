import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EduConnect</h1>
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
            <a href="#account" className="text-gray-700 hover:text-blue-600 font-medium">Account</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-50 flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About EduConnect</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            EduConnect is a student-centered platform created to bridge the gap between learners and high-quality courses.
            Our mission is to make education accessible, engaging, and effective for everyone — regardless of location or background.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">10K+ Students</h3>
            <p className="text-gray-600 mt-2">Learning and growing with EduConnect</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">50+ Courses</h3>
            <p className="text-gray-600 mt-2">Across tech, sciences, maths, and more</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600">Global Reach</h3>
            <p className="text-gray-600 mt-2">Students from all over the world</p>
          </div>
        </div>
      </section>

      {/* Why Choose EduConnect */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose EduConnect?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Expert Instructors</h4>
              <p className="text-gray-600">Learn from industry professionals and certified educators who bring real-world experience to your screen.</p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Flexible Learning</h4>
              <p className="text-gray-600">Access your courses anytime, anywhere. Our platform works seamlessly across all your devices.</p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Certificates & Growth</h4>
              <p className="text-gray-600">Earn certifications and unlock new opportunities with every course you complete.</p>
            </div>
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

export default About;
