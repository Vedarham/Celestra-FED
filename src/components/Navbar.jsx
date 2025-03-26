import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="backdrop-blur-md bg-opacity-10 bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">Celestra</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
            <a href="#courses" className="text-gray-300 hover:text-blue-400">Courses</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-400">About</a>
            <a href="#courses" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Courses</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Contact</a>
            <button className="w-full btn-primary mt-4">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}