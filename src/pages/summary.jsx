import React, { useState } from "react";
import axios from "axios";

function PdfSummary() {
  const [summary, setSummary] = useState("");

  const getSummaryHandler = () => {
    axios
      .get("http://localhost:5000/pdfs/64484f9a545335eea3db42d9", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={getSummaryHandler}>Get Summary</button>
      <textarea value={summary} readOnly />
    </div>
  );
}

export default PdfSummary;
