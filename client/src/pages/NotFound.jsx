import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const NotFound = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 animate__animated animate__fadeIn">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
