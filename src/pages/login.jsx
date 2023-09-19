import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
          navigate("/mainmenu");
        } else {
          setError(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <label className="text-black mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </label>
        <label className="text-black mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </label>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Log In
        </button>
        <p className="mt-4">
          Don't have an account? <a href="/signup">Sign up here</a>.
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
