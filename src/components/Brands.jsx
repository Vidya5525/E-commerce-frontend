import React from "react";
import { brands } from "../data/Data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import './Brands.css'; 

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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

  return (
    <div className="brands-container">
      <div className="content-wrapper">
        <Heading 
          heading={"Best Deals On The Brands"}
          btn={"Offers"} 
        />
        <Slider {...settings}>
          {brands.map((val, index) => (
            <div className="slide-item" key={index}>
              <div className="brand-card">
                <div className="image-container">
                  <img
                    src={val.img}
                    alt="brand"
                    className="brand-image"
                  />
                </div>
                <div className="product-details">
                  <p className="brand-title">{val.title}</p>
                  <p className="brand-description">{val.short_description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
