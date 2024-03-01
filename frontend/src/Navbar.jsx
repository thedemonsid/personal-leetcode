import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-black hover:text-gray-900">
                <span className="font-bold">Litcode</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
                
              <Link to="/blogs"  className="py-5 px-3 text-black hover:text-gray-900">blogs</Link>
        
               
              <Link to="/problems" className="py-5 px-3 text-black hover:text-gray-900">Problems</Link>
                
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3">Login</a>
            <a href="#" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
      </div>
    </nav>
  );
}

export default Navbar;