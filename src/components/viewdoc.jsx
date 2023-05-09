import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Document({ documentId }) {
  const [text, setText] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/doc/${documentId}`
      );

      setText(response.data); // set response data to state variable
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={handleButtonClick}
      >
        View Document
      </button>
      <Link to={`/summary/${documentId}`}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Summary
        </button>
      </Link>
      <div className="my-4">{text ? <p>{text}</p> : null}</div>
    </div>
  );
}

export default Document;
