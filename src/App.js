import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import Home from "./components/Home";
import Events from "./components/Events";
import EmployeeInfo from "./components/EmployeeInfo";
import "./App.css"; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/employee-info" element={<EmployeeInfo />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
