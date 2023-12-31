import React, { useEffect } from "react";
import "./popular.css";

import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";

import ParisImg from "../../Images/paris.jpg";
import MaldivesImg from "../../Images/maldives.jpeg";
import IstanbulImg from "../../Images/istanbul.jpeg";
import CairoImg from "../../Images/cairo.jpeg";

import Aos from "aos";
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    img: ParisImg,
    title: "Paris",
    country: "France",
  },
  {
    id: 2,
    img: MaldivesImg,
    title: "Banana Reef",
    country: "Maldives",
  },
  {
    id: 3,
    img: IstanbulImg,
    title: "Istanbul",
    country: "Turkiye",
  },
  {
    id: 4,
    img: CairoImg,
    title: "Cairo",
    country: "Egypt",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos='fade-down-right' className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Discover the historical location and your dream destination with
              us!!!
            </p>
          </div>

          <div data-aos='fade-down-left' className="iconsDiv flex">
            <TiArrowLeftOutline className="icon leftIcon" />
            <TiArrowRightOutline className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, img, title, country }) => {
            return (
              <div data-aos='fade-up' data-aos-duration='2500' className="singleDestination">
                <div className="destImage">
                  <img src={img} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{title}</h3>
                    <p>{country}</p>
                    <TiArrowRightOutline className="icon" />
                  </div>
                </div>

                <div data-aos='fade-right' className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{country}</h6>
                    <span className="flex">
                      <span className="dot">
                        <GoDotFill className="dotIcon" />
                      </span>
                      Adertur
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
