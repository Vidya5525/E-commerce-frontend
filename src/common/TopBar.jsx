import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <ul className="topbar-list">
          <li className="topbar-item">
            <Icon />
            <Link className="topbar-link topbar-promo" to="#">
              Get Express Delivery All Over India
            </Link>
          </li>
          <li className="topbar-item topbar-links">
            <Link className="topbar-link" to="#">
              Our Stores
            </Link>
            <Link className="topbar-link" to="#">
              Privacy Policy
            </Link>
            <Link className="topbar-link" to="#">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
