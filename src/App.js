import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./Components/Landingpage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Landingpage /></>} />
          <Route path="/login" element={<><Navbar/><Login /></>} />
          <Route path="/register" element={<><Navbar/><Signup /></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

