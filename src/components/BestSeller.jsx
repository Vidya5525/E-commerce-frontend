import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/Data.js";
import { BiCart, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import Modal from "../common/Model.jsx";
import './BestSeller.css';

const BestSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BiChevronRight className="arrow-icon" />,
    prevArrow: <BiChevronLeft className="arrow-icon" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  

  return (
    <div>
      <div className="products">
        <div>
          <Heading
            heading={"New Products"}
            description={"An online store where customers can find products"}
            btn={<Link to={"/"}>View All</Link>}
          />
        </div>

        <Slider {...settings}>
          {products.map((val, index) => (
            <div className="product-slide" key={index}>
              <div className="product-item">
                <div className="image-container">
                  <div className="flash-sale-img">
                    <img src={val.img} alt="img" className="product-image" />
                  </div>

                  <div className="tag">
                    <p>{val.tag}</p>
                  </div>
                </div>

                <div className="product-details">
                  <p className="short-description">{val.short_description}</p>
                  <p className="price">₹{val.price}</p>
                </div>

                <div className="add-to-cart">
                  <div className="cart-btns">
                    <button className="cart-icon">
                      <BiCart />
                    </button>
                    <button className="product-btn" onClick={() => handleOpen(val.id)}>
                      {val.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Component */}
      <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default BestSeller;
