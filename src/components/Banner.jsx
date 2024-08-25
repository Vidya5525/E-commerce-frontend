import React from "react";
import { banners } from "../data/Data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import './Banner.css';

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BiChevronRight className="arrow-icon" />,
    prevArrow: <BiChevronLeft className="arrow-icon" />,
  };
  return (
    <div>
      <div className="banner-container">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div key={key}>
              <img src={data.banner} alt="bannerimg" className="banner-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
