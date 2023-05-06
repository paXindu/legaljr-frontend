import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import PdfUploader from "./pages/upload";
import PdfSummary from "./pages/summary";
import CompareApp from "./pages/compare";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/upload" exact element={<PdfUploader />} />
          <Route path="/summary" exact element={<PdfSummary />} />
          <Route path="/compare" exact element={<CompareApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
