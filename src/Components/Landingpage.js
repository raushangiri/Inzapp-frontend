import image from '../Asset/header.png'
import image2 from '../Asset/logo2.png'
import image3 from '../Asset/sliderimage3.png'
import image4 from '../Asset/sliderimage4.jpg'

import React, { useState } from "react";
import "../App.css"; // Ensure you have styles in a CSS file
import logo2 from '../Asset/logo2.png'
import Navbar from './Navbar';

const Landingpage = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown

  const images = [
    image,
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3"
  ];

  return (
    <>

        <div className="header2">
          <img className="logo-light-png2" src={logo2} alt="Logo"style={{height:"auto"}} />
          <div className="ul-menu-main-menu">
            <div className="about-us2">About Us</div>
            
            {/* Services Dropdown */}
            <div className="span4">
              <div className="our-services" onClick={() => setIsOpen(!isOpen)}>
                Our Services
                <div className="span-after2"></div>
              </div>
              
              
              {/* Dropdown Content */}
              {isOpen && (
                <div className="dropdown">
                  <div className="dropdown-item">Service 1</div>
                  <div className="dropdown-item">Service 2</div>
                  <div className="dropdown-item">Service 3</div>
                </div>
              )}
            </div>
    
            <div className="work-with-us2">Work with Us</div>
            <div className="blog">Login / Sign Up</div>
          </div>
          <div className="button3">
            <div className="button-before3"></div>
            <div className="get-in-touch2">Get In Touch</div>
          </div>
        </div>
    {/* <Navbar /> */}
      <div id="carouselExampleAutoplaying" class="carousel slide mt-5 pt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image} class="d-block w-100" alt="..." />
           
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
        {/* <h2>Looking for a definitive go-to resource for sustainable investing?</h2> */}
        {/* <p>Some subtext here</p> */}
      </div>
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-100" alt="..." />
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h2>InZapp is a Edu TradeTech company specializing in real estate, IT, cryptocurrency trading, Stock Market, Forex and investment.</h2>
        {/* <p>Some subtext here</p> */}
      </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" alt="Slide" style={{ height: "60vh", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}
      <div class="div3 mt-3 mb-5">
        <div class="div4">
          <div class="about-gravity-team">About Gravity Team</div>
          <div
            class="at-gravity" >
            inZapp is a Edu TradeTech company specializing in real estate, IT, cryptocurrency trading, Stock Market, Forex and investment. With a strong commitment to achieving detailed investment goals and maintaining compliance, we provide expert financial and investment advice to help our clients achieve long-term financial stability. We empower our investors to grow their businesses by maximizing profits through strategic investments. Our investment plans are among the best in the industry, and our investors trust us to help them thrive in a competitive and ever-evolving market. What sets us apart is the personal relationships we build with our clients, which is why they continue to enjoy investing with us.
          </div>
        </div>
      </div>
<section className=''>
      <div class="div5 ">
          <div class="div6">
            <div class="div7">
              <div class="_100-billion">~$100 billion</div>
              <div class="cumulative-trading-volume-to-date">
                cumulative trading
                <br />
                volume to date
              </div>
            </div>
            <div class="div8">
              <div class="div-before2"></div>
              <div class="_0-8">0.8%</div>
              <div class="of-the-global-crypto-spot-trading-volume">
                of the global crypto spot trading volume
              </div>
            </div>
            <div class="div9">
              <div class="_30">~30</div>
              <div class="gravity-teammates-growing">
                Gravity Teammates
                <br />
                (&amp; growing)
              </div>
            </div>
            <div class="div10">
              <div class="_25">25+</div>
              <div class="leading-global-and-local-crypto-exchanges">
                leading global and local crypto exchanges
              </div>
            </div>
            <div class="div11">
              <div class="_2017">2017</div>
              <div class="start-crypto-natives">start, crypto-natives</div>
            </div>
            <div class="div12">
              <div class="_1-200">1,200+</div>
              <div class="crypto-asset-pairs">crypto-asset pairs</div>
            </div>
            <div class="div13">
              <div class="_24-7">24/7</div>
              <div class="liquidity">liquidity</div>
            </div>
            <div class="div14">
              <div class="_5-billion">5 billion+</div>
              <div class="trades-done-to-date">trades done to date</div>
            </div>
         
          <div class="div15"></div>
          <div class="div16"></div>
          <div class="div17"></div>
          <div class="div18"></div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Landingpage