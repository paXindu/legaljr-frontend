import React, { useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function Document() {
  const [text, setText] = useState("");
  const { key } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/doc/${key}`);

      setText(response.data); // set response data to state variable
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="my-4">
      <div className="flex justify-center">
        <div className="space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            View Original Document
          </button>
          <Link to={`/summary/${key}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              View Summary
            </button>
          </Link>
          <button
            onClick={handleBackClick}
            className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>
      <div class="border-2 border-gray-400 p-4">
        {text && (
          <div class="bg-gray-200 p-2 rounded">
            <p class="text-gray-800">{text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Document;
