import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate(); 

  const handleAddBook = () => {
    navigate('/add-book'); 
  };

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
        Welcome to the Bookstore
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Explore our wide range of books or add your own to the list.
      </p>

      {/* Add Book Button */}
      <button
        onClick={handleAddBook}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Add a New Book
      </button>
    </div>
  );
};

export default Home;
