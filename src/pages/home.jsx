import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Legal Judgment Recommender
      </h1>
      <p className="text-center max-w-lg mb-6">
        Your go-to destination for finding similar legal judgments quickly and
        easily! Our website is designed to help you find relevant cases that
        match your search criteria, so you can save time and effort in your
        legal research.
      </p>
      <Link
        to="/mainmenu"
        className="inline-flex items-center justify-center px-6 py-3 mt-6 text-lg font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;
