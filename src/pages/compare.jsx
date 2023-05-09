import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CompareApp() {
  const { pdfId } = useParams();
  const [recommendation, setRecommendation] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/files/${pdfId}`);

      setRecommendation(response.data); // set response data to state variable
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>View Recommendation</button>
      <p>{recommendation}</p> {/* display response data */}
      <Link to="/mainmenu" className="mt-6">
        <button>Return to Main Menu</button>
      </Link>
    </div>
  );
}

export default CompareApp;
