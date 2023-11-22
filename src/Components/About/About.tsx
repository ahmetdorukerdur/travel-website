import React, { useEffect } from "react";
import "./about.css";

import DestinationImg from "../../Images/destination.avif";
import HotelImg from "../../Images/hotel.avif";
import CustomerImg from "../../Images/customer.avif";
import SunsetVideo from "../../Images/SunsetVideo.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos='fade-down-right' className="title">Why Adertur?</h2>

        <div data-aos='fade-down-right' className="mainContent container grid">
          <div className="singleItem">
            <img src={DestinationImg} alt="Image Name" />

            <h3>200+ Destination</h3>

            <p>
              In Adertur, with about 200+ destinations you can make your dream
              vacation.
            </p>
          </div>
          <div className="singleItem">
            <img src={HotelImg} alt="Image Name" />

            <h3>1000+ Hotels</h3>

            <p>
              Safe and cheap layover in the places you go with more than 1000
              hotels at Adertur.
            </p>
          </div>
          <div className="singleItem">
            <img src={CustomerImg} alt="Image Name" />

            <h3>4000+ Customer</h3>

            <p>
              Aderdur is recommended by 99.9% of more than 4000 users who use it
              and whose numbers are increasing every day.
            </p>
          </div>
        </div>

        <div data-aos='fade-down-right' data-aos-duration='2000' className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Holiday experience beyond the world with Adertur!</h2>
              <p>
                Have unforgettable experiences with your family or friends in
                the most beautiful places in the world.
              </p>
            </div>

            <div className="cardVideo">
              <video src={SunsetVideo} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
