import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Menu Section */}
          <div className="col-md-3">
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-6">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Get the latest updates and offers.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
