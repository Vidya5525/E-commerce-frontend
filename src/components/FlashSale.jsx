import React, { useState } from "react";
import { products } from "../data/Data.js";
import { BiCart } from "react-icons/bi";
import Heading from "../common/Heading";
import Modal from "../common/Model.jsx"
import './FlashSale.css'; 

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div>
      <div className="flashsale-container">
        <Heading
          heading={"Flash Sales"}
          description={"Hot Picks: Top Sellers, grab Yours!"}
          btn={"Limited Offer"}
        />
      </div>
      <div className="flashsale-container">
        <div className="flashsale-grid">
          {products.map((val, index) => (
            <div className="flashsale-item" key={index}>
              <div className="image-container">
                <div className="flash-sale-img">
                  <img src={val.img} alt="img" className="flashsale-img" />
                </div>
                <div className="tag">
                  <p>{val.tag}</p>
                </div>
              </div>
              <div className="product-details">
                <p>{val.short_description}</p>
                <p className="price">₹{val.price}</p>
              </div>
              <div className="add-to-cart">
                <div className="cart-btns">
                  <button className="cart-icon">
                    <BiCart />
                  </button>
                  <button onClick={() => handleOpen(val.id)}>
                    {val.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default FlashSale;
