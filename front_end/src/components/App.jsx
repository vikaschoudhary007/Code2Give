import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from './pages/DashboardPage';
import ResidentForm from './pages/ResidentForm';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/residentForm" element={<ResidentForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
