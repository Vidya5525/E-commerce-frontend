import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import { BiCart } from "react-icons/bi";
import { products } from "../data/Data.js";
import Modal from "../common/Model.jsx"
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './Shop.css'; // Import the CSS file

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000], // Initial price range
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;
    const price = parseFloat(product.price);
    if (
      price < filters.priceRange[0] || // Check if price is below minimum
      price > filters.priceRange[1] // Check if price is above maximum
    )
      return false;
    return true;
  });

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    if (index === -1) {
      updatedFilters.push(value);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilters({ ...filters, [filterType]: updatedFilters });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  return (
    <div className="shop-container">
      <PageHeading home={"Home"} pagename={"Shop"} />

      <div className="shop-content">
        <div className="filter-section">
          <h1 className="filter-heading">Filter</h1>

          <div className="filter-price">
            <h2 className="filter-subheading">Price Range</h2>
            <Slider
              min={0}
              max={1500}
              range
              defaultValue={filters.priceRange}
              onChange={handlePriceChange}
            />
          </div>

          <div className="filter-categories">
            <h2 className="filter-subheading">Categories</h2>
            {categoryList.map((category, index) => (
              <div key={index} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() =>
                    handleCheckboxChange("categories", category)
                  }
                />
                <label>{category}</label>
              </div>
            ))}
          </div>

          <div className="filter-brands">
            <h2 className="filter-subheading">Brands</h2>
            {brandList.map((brand, index) => (
              <div key={index} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleCheckboxChange("brands", brand)}
                />
                <label>{brand}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="products-section">
          <div className="products-grid">
            {filteredProducts.map((val, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img src={val.img} alt="Product" />
                  <div className="product-tag">
                    <p>{val.tag}</p>
                  </div>
                </div>

                <div className="product-details">
                  <p>{val.short_description}</p>
                  <p className="product-price">₹{val.price}</p>
                </div>

                <div className="product-actions">
                  <button className="cart-button">
                    <BiCart />
                  </button>
                  <button className="details-button" onClick={() => handleOpen(val.id)}>
                    {val.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;
