import "./index.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import PdfUploader from "./pages/upload";
import PdfSummary from "./pages/summary";
import CompareApp from "./pages/compare";
import MainMenu from "./pages/mainmenu";
import LoginPage from "./pages/login";
import Document from "./components/viewdoc";
import SignUpForm from "./pages/signup";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/still-life-with-scales-justice_23-2149776027.jpg?w=740&t=st=1683669980~exp=1683670580~hmac=7b3340d95ae9b4fdc29dcf0a396cf1a5c618d4953306a9d3ae6a58cb8e1402b4')",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/mainmenu" exact element={<MainMenu />} />
            <Route path="/upload" exact element={<PdfUploader />} />
            <Route path="/summary" exact element={<PdfSummary />} />
            <Route path="/summary/:pdfId" element={<PdfSummary />} />
            <Route path="/compare/:pdfId" element={<CompareApp />} />
            <Route path="/compare" exact element={<CompareApp />} />
            <Route path="/documents/:pdfId" exact element={<Document />} />
            <Route path="/document/:key" exact element={<Document />} />
            <Route path="/signup" exact element={<SignUpForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
