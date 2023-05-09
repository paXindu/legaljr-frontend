import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-full px-6 py-8 mx-auto bg-white rounded-lg shadow-md lg:w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Legal Judgment Recommender
          </h2>
          <p className="mt-1 mb-4 text-center">Log in to your account.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mt-4">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
                required
              />
            </label>
            <label htmlFor="password" className="block mt-4">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="block w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-8 text-sm font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Log in
            </button>
          </form>
          <hr className="my-8" />
          <p className="mt-1 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Sign up here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
