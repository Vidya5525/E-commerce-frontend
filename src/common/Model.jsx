import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal, updateQuantity } from "../Redux/cartSlice.js";
import { Link } from "react-router-dom";
import './Modal.css';

const Modal = ({ isModalOpen, data, handleClose }) => {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedToCart(true);
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      setQty(1);
      setAddedToCart(false);
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span
              className="modal-close"
              onClick={() => handleClose()}
            >
              <FaTimes />
            </span>

            <div className="modal-body">
              <div className="modal-image-container">
                <div className="modal-poster">
                  <img src={data.img} alt="" className="modal-image" />
                </div>
                <div className="tag">
                  <p>{data.tag}</p>
                </div>
              </div>

              <div className="modal-info">
                <p className="modal-title">{data.short_description}</p>
                <p className="modal-price">₹{data.price}</p>
                <p className="modal-description">{data.description}</p>

                <div className="modal-shades">
                  <p className="modal-shades-label">Shades: </p>
                  <select
                    name="shades"
                    id="shades"
                    className="modal-select"
                  >
                    <option value="options">Choose an Option</option>
                    <option value="waterproof-very-black-802">
                      Waterproof Very Black 802
                    </option>
                    <option value="washable-blackset-black-800">
                      Washable Blackset Black 800
                    </option>
                    <option value="washable-801">Washable 801</option>
                    <option value="cosmic-black">Cosmic Black</option>
                  </select>
                </div>
                <p className="modal-stock">In Stock 300 Items</p>

                <div className="modal-actions">
                  <div className="modal-quantity">
                    <button
                      className="modal-quantity-btn"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="modal-quantity-display">{qty || 1}</span>
                    <button
                      className="modal-quantity-btn"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <div className="modal-addtocart">
                    {addedToCart ? (
                      <button
                        className="modal-btn"
                        onClick={() => {
                          handleClose();
                          document.body.classList.remove("modal-open");
                        }}
                      >
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        className="modal-btn"
                        onClick={() => addItemToCart(data)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>

                <div className="modal-category-brand">
                  <h1>
                    Category: <span>{data.category}</span>
                  </h1>
                  <h1>
                    Brand: <span>{data.brand}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
