import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSolidShoppingBag, BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import './MidHeader.css';  

const MidHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <div className="midheader-container">
      <div className="midheader-content">
        <ul className="midheader-list">
          <li className="midheader-left">
            <Link to={"/"} className="logo">
              <img
                src="./images/obsessions_ecom/model.png"
                alt="place"
              />
            </Link>
            {navbar.slice(1, 4).map((link, key) => (
              <Link
                to={link.path}
                className="midheader-link"
                key={key}
              >
                {link.nav}
              </Link>
            ))}
          </li>
          <li className="midheader-right">
            <input
              type="search"
              className="midheader-search"
              placeholder="Search..."
            />
            <Link
              onClick={toggleSidebar}
              className="midheader-icon"
            >
              <BiSolidShoppingBag />
              <div className="items_count">
                <span>{totalItems}</span>
              </div>
            </Link>
            <Link className="midheader-icon">
              <BiUser />
            </Link>
          </li>
        </ul>
      </div>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setTimeout(toggleSidebar(), 6000)}
      />
    </div>
  );
};

export default MidHeader;
