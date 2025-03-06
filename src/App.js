import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./Components/Landingpage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Landingpage /><Footer/></>} />
          <Route path="/login" element={<><Navbar/><Login /><Footer/></>} />
          <Route path="/register" element={<><Navbar/><Signup /><Footer/></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

