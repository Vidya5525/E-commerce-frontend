import React from "react";
import { offer } from "../data/Data.js";
import './Offer.css'; 

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-wrapper">
        <div className="offer-grid">
          {offer.map((data, key) => (
            <div className="offer-item" key={key}>
              <img src={data.customer_img} alt="imgs" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
