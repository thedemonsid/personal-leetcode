import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-yellow-900 scroll rounded-sm shadow-md sticky top-0 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 'left-2'">
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2  text-black hover:text-gray-900 hover:animate-pulse"
              >
                <Link to="/">
                  <span className="font-bold text-6xl font-retro">Litcode🔥</span>
                </Link>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/blogs"
                className="py-5 px-3  m-2 text-3xl  text-black hover:text-green-500 font-retro font-light "
              >
                Blogs
              </Link>

              <Link
                to="/problems"
                className="py-5 px-3 text-3xl text-right text-black hover:text-green-500 font-retro font-light"
              >
                Problems
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 bg-orange-300 hover:bg-orange-700 rounded transition duration-300 font-retro font-bold text-2xl mx-2 ">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-black hover:text-yellow-600 rounded transition duration-300 font-retro font-bold text-2xl "
            >
              Signup
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button"></button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
