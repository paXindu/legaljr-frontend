import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PdfSummary from "./summary";

function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfId, setPdfId] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [textFile, setTextFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("pdf", selectedFile);

    axios
      .post("http://127.0.0.1:5000/pdfs", formData)
      .then((response) => {
        console.log(response);
        setPdfId(response.data._id);
        axios
          .get(`http://127.0.0.1:5000/pdfs/${response.data._id}`)
          .then((response) => {
            setPdfText(response.data);
            setTextFile(new Blob([response.data], { type: "text/plain" }));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <label className="block font-medium mb-2" htmlFor="pdf-upload">
          Select PDF file to upload:
        </label>
        <input
          className="border border-gray-400 py-2 px-4 w-64 rounded-md"
          type="file"
          id="pdf-upload"
          onChange={fileSelectedHandler}
        />
      </div>
      <button
        className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fileUploadHandler}
        disabled={!selectedFile}
      >
        Upload
      </button>

      {pdfId && (
        <div className="mt-8">
          <h1 className="text-xl font-medium mb-4">
            Uploaded document preview
          </h1>
          <textarea
            className="border border-gray-400 py-2 px-4 w-full h-48 rounded-md resize-none"
            value={pdfText}
            readOnly
          />
          <div className="mt-4">
            <Link to={`/summary/${pdfId}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                View Summary
              </button>
            </Link>
            <Link to={`/compare/${encodeURIComponent(pdfId)}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                View Recommendation
              </button>
            </Link>
            {textFile && (
              <a
                href={URL.createObjectURL(textFile)}
                download="converted_text.txt"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download Text File
                </button>
              </a>
            )}
          </div>
        </div>
      )}

      <Link to="/mainmenu" className="mt-8">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Return to Main Menu
        </button>
      </Link>
    </div>
  );
}

export default PdfUploader;
