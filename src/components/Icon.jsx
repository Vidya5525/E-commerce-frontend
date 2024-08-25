import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Icon.css'; // Import the CSS file

const Icon = () => {
  return (
    <div>
      <div className="icon-container">
        <Link className="icon-link">
          <FaFacebook />
        </Link>
        <Link className="icon-link">
          <FaLinkedin />
        </Link>
        <Link className="icon-link">
          <FaYoutube />
        </Link>

        <Link className="icon-link">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Icon;
