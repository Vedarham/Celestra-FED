import React from 'react';
import { Notebook as Robot, Brain, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Empowering Young Minds Through Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the world of robotics, coding, and STEM education with our innovative learning programs.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Explore Courses</button>
              <button className="px-6 py-3 rounded-lg font-semibold border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:bg-opacity-20 transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="card text-white">
              <Robot size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robotics</h3>
              <p className="text-gray-300">Build and program your own robots</p>
            </div>
            <div className="card text-white mt-8">
              <Brain size={48} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
              <p className="text-gray-300">Learn artificial intelligence basics</p>
            </div>
            <div className="card text-white">
              <Code size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coding</h3>
              <p className="text-gray-300">Master programming fundamentals</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Student learning robotics"
              className="rounded-xl shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}