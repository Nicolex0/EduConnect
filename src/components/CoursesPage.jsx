import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import {
  Book,
  FlaskConical,
  PenLine,
  Globe,
  Paintbrush,
} from 'lucide-react';

const subjects = [
  {
    title: 'Mathematics',
    level: 'Primary',
    description: 'Fun lessons in numbers, shapes, and problem-solving.',
    icon: <Book className="w-8 h-8 text-yellow-600" />,
    color: 'bg-yellow-100',
  },
  {
    title: 'Science',
    level: 'High School',
    description: 'Discover the wonders of nature, space, and experiments!',
    icon: <FlaskConical className="w-8 h-8 text-green-600" />,
    color: 'bg-green-100',
  },
  {
    title: 'English',
    level: 'Primary',
    description: 'Improve your reading, writing, and grammar skills.',
    icon: <PenLine className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-100',
  },
  {
    title: 'History & Geography',
    level: 'High School',
    description: 'Learn about amazing people, places, and past events.',
    icon: <Globe className="w-8 h-8 text-red-600" />,
    color: 'bg-red-100',
  },
  {
    title: 'Creative Arts',
    level: 'Primary',
    description: 'Explore creativity through drawing, music, and crafts.',
    icon: <Paintbrush className="w-8 h-8 text-pink-600" />,
    color: 'bg-pink-100',
  },
];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || subject.level === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      {/* Navbar */}
      <Navbar />

      {/* Courses Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Courses</h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          Discover a fun learning experience for primary and high school learners.
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for a course..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-3">
            {['All', 'Primary', 'High School'].map(level => (
              <button
                key={level}
                onClick={() => setActiveFilter(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  activeFilter === level
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg ${subject.color}`}
              >
                <div className="flex items-center justify-center mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{subject.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{subject.level} Level</p>
                <p className="text-gray-700 mb-4">{subject.description}</p>
                <button className="mt-auto px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                  Learn More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No courses match your search 😥</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
