import React, { useState } from "react";
import axios from "axios";

function PdfUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfId, setPdfId] = useState(null);
  const [pdfText, setPdfText] = useState("");

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
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
      {pdfId && (
        <textarea
          style={{ width: "100%", height: "300px", overflow: "auto" }}
          value={pdfText}
          readOnly
        />
      )}
    </div>
  );
}

export default PdfUploader;
