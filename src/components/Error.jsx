// Showing Error Page

import React from "react";
import { useNavigate } from "react-router-dom";



const NotFound = () => {
  
  // The `useNavigate` hook provides access to the router's `navigate` method.
  const navigate = useNavigate();

  // The `goToHome` function navigates to the home page.
  const goToHome = () => {
    return navigate("/");
  };

  // Displaying the error message
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <h2 className="text-9xl font-bold text-gray-800">404</h2>
      <h3 className="text-5xl  text-gray-700">Page Not Found</h3>
      <div>
        <p className="text-gray-500 mb-7 border-b-2 pb-2">
          Sorry, the page you are looking for could not be found.
        </p>
        <button
          onClick={goToHome}
          className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
