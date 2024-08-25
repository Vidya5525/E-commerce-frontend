import React from "react";
import './Heading.css'; 

const Heading = ({ heading, description, btn }) => {
  return (
    <div className="heading-container">
      <div className="heading-content">
        <div>
          <h4 className="heading-title">{heading}</h4>
          <h4 className="heading-description">{description}</h4>
        </div>
        <div className="heading-button-wrapper">
          <button className="heading-button">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
