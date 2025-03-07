import React, { useState } from 'react';
import { Menu, User, LogIn, X, Home, FileText, Calendar, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to=''>
            <img src='https://www.alhind.com/assets/img/logo-alhind.webp' className='w-44' alt='img'/> 
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#track" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Track Application</a>
            <a href="#appointments" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Appointments</a>
            <Link to="complaint" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Complaints</Link>
            <Link to='login'>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
              <LogIn size={18} />
              Login
            </button>
            </Link>
            <Link to='/admin'>

            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center gap-2">
              <User size={18} />
              Admin
            </button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Home size={18} />
                Home
              </div>
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                Services
              </div>
            </a>
            <a
              href="#track"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Search size={18} />
                Track Application
              </div>
            </a>
            <a
              href="#appointments"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                Appointments
              </div>
            </a>
            <a
              href="#documents"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                Documents
              </div>
            </a>
            <a
              href="#help"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <HelpCircle size={18} />
                Help
              </div>
            </a>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                <LogIn size={18} />
                Login
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2">
                <User size={18} />
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}