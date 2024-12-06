import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-lg py-4 px-6 md:px-8 transition duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition duration-300">
          <Link to="/">BookStore</Link>
        </h1>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none hover:text-blue-600 transition duration-300"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-gray-100 dark:bg-gray-800 md:flex md:items-center gap-6 md:gap-4 transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block px-4 py-2 md:px-0 md:py-0 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/add-book"
            className="block px-4 py-2 md:px-0 md:py-0 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to="/book-list"
            className="block px-4 py-2 md:px-0 md:py-0 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Book List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
