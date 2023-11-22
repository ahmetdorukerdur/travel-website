import React, { useEffect } from "react";
import "./offers.css";

import { BiSolidBed } from "react-icons/bi";
import { GiStoneStack } from "react-icons/gi";
import { MdOutlineWifi } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { TiArrowRightOutline } from "react-icons/ti";

import FourSeasonIstanbul from "../../Images/four-season.webp";
import ConradMaldives from "../../Images/maldives-underwater-hotel.jpeg";
import ParisPlazaAthene from "../../Images/ParisPlazaAthenee.jpeg";

import Aos from "aos";
import 'aos/dist/aos.css';

const offer = [
  {
    id: 1,
    img: FourSeasonIstanbul,
    title: "Istanbul",
    location: "No:28, Çırağan St., 34349 Beşiktaş/İstanbul",
    price: "$999",
    discountRate: "%40 off",
    bedspace: "2 beds",
  },
  {
    id: 2,
    img: ConradMaldives,
    title: "Rangali Islands",
    location: "Rangali Island Alifu Dhaalu Atoll, 20077, Maldives",
    price: "$2100",
    discountRate: "%20 off",
    bedspace: "4 beds",
  },
  {
    id: 3,
    img: ParisPlazaAthene,
    title: "Paris",
    location: "25 Av. Montaigne, 75008 Paris, France",
    price: "$1800",
    discountRate: "%15 off",
    bedspace: "3 beds",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos='fade-down-right' className="secIntro">
          <h2 className="secTitle">Special Offers</h2>

          <p>
            Save at least 15% on stays worldwide, from relaxing retreats to
            off-grid adventures
          </p>
        </div>

        <div data-aos='fade-up-left' className="mainContent grid">
          {offer.map(
            ({ id, img, title, location, price, discountRate, bedspace }) => {
              return (
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={img} alt={title} />
                    <span className="discount">{discountRate}</span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="facilities flex">
                      <div className="singelFacilities flex">
                        <BiSolidBed className="icon" />
                        <small>{bedspace}</small>
                      </div>

                      <div className="singelFacilities flex">
                        <GiStoneStack className="icon" />
                        <small>Spa/ Wellness</small>
                      </div>

                      <div className="singelFacilities flex">
                        <MdOutlineWifi className="icon" />
                        <small>Wi-Fi</small>
                      </div>

                      <div className="singelFacilities flex">
                        <MdRoomService className="icon" />
                        <small>Room Service</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationPin className="icon" />
                      <small>{location}</small>
                    </div>

                    <button className="btn flex">
                      View Details
                      <TiArrowRightOutline className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Offers;
