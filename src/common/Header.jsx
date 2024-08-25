import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { navbar } from "../data/Data.js";

const Header = () => {


  return (
    <div className="header-container">
      <div className="header-content">
        <ul className="nav-list">
          {navbar.slice(4, 10).map((nav, index) => (
            <li key={index} className="nav-item">
              <Link className="nav-link" to={nav.path}>
                {nav.nav}
              </Link>
            </li>
          ))}
        </ul>

        <div className="coupon-code">
          <h1>
            Coupon Code: <span>VIDYANAND@</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
