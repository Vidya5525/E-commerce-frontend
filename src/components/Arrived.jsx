import React, { useRef } from "react";
import { arriveItems } from "../data/Data"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import './Arrived.css'


const Arrived = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="arrived-container">
        <div className="arrived-wrapper">
          <div className="arrived-header">
            <div className="arrived-header-content">
              <h1 className="arrived-title">Just Arrived</h1>
              <div className="arrived-arrows">
                <BiChevronLeft className="arrow-icon" onClick={goToPrevSlide} />
                <BiChevronRight className="arrow-icon" onClick={goToNextSlide} />
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings} ref={sliderRef}>
              {arriveItems.map((item, key) => (
                <div key={key}>
                  <div className="slide-item">
                    <img src={item.img} alt="img" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="banner-wrapper">
        <div>
          <img
            src="../images/obsessions_ecom/4.webp"
            className="banner-image"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Arrived;
