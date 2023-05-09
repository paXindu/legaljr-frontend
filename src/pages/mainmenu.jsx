import React from "react";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Link to="/upload">
          <button className="bg-red-600 text-white py-3 px-8 rounded-lg mb-4">
            Document Recommendation
          </button>
        </Link>
        <Link to="/summary">
          <button className="bg-gray-800 text-white py-3 px-8 rounded-lg">
            Summarization
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;
