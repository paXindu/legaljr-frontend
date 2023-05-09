import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Document from "../components/viewdoc";

function CompareApp() {
  const { pdfId } = useParams();
  const [recommendation, setRecommendation] = useState({});

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/files/${pdfId}`);

      setRecommendation(response.data); // set response data to state variable
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Legal Judgment Recommender</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        onClick={handleButtonClick}
      >
        View Recommendation
      </button>
      <table className="mt-8 w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Document ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Percentage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              View Document
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200  ">
          {Object.entries(recommendation).map(([key, value]) => (
            <tr className="hover:bg-gray-100" key={key}>
              <td className="px-12 py-4 whitespace-nowrap">{key}</td>
              <td className="px-12 py-4 whitespace-nowrap">{value}%</td>
              <td className="px-12 py-4 whitespace-nowrap">
                <Document documentId={key} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/mainmenu" className="mt-8">
        <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">
          Return to Main Menu
        </button>
      </Link>
    </div>
  );
}

export default CompareApp;
