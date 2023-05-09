import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function PdfSummary() {
  const [summary, setSummary] = useState("");
  const { pdfId } = useParams();

  useEffect(() => {
    const getSummary = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/pdfs/summary/${pdfId}`
        );
        setSummary(response.data.summary);
      } catch (error) {
        console.log(error);
      }
    };
    getSummary();
  }, [pdfId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-6">Summary</h1>
        <p className="text-gray-700">{summary}</p>
        <Link to="/mainmenu" className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Return to Main Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PdfSummary;
