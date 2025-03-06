import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Register</h2>
        <form>
          <div className="mb-3">
            <label className="form-label"style={{ display: "block", textAlign: "left" }}>Name</label>
            <input type="text" className="form-control" name="name" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label"style={{ display: "block", textAlign: "left" }}>Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label"style={{ display: "block", textAlign: "left" }}>Phone Number</label>
            <input type="tel" className="form-control" name="phone" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label"style={{ display: "block", textAlign: "left" }}>Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" name="agree" onChange={handleChange} />
            <label className="form-check-label"style={{ display: "block", textAlign: "left" }}>I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={!formData.agree}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
