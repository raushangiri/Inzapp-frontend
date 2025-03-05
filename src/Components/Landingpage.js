import React from 'react'
import image from '../Asset/header.png'
import image2 from '../Asset/logo2.png'

import "../App.css"; // Ensure you have styles in a CSS file
import Navbar from './Navbar';

const Landingpage = () => {

  const images = [
    image,
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3"
  ];

  return (
    <>
    <Navbar />
      <div id="carouselExampleAutoplaying" class="carousel slide mt-5 pt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
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
      <div class="div3">
        <div class="div4">
          <div class="about-gravity-team">About Gravity Team</div>
          <div
            class="at-gravity-team-we-are-on-the-mission-to-balance-the-supply-and-demand-across-crypto-markets-worldwide-we-are-a-crypto-native-market-maker-founded-by-traders-developers-and-innovators-who-are-strong-believers-and-supporters-of-the-future-of-decentralization-and-digital-assets"
          >
            At Gravity Team, we are on the mission to balance the supply and
            demand across crypto markets worldwide. We are a crypto native market
            maker founded by traders, developers, and innovators who are strong
            believers and supporters of the future of decentralization and digital
            assets.
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage