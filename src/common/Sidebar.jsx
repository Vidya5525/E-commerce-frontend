import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../Redux/cartSlice.js";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const cartSelector = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <div
        style={{
          zIndex: "100",
          transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
        }}
        className="sidebar"
      >
        <div className="sidebar-header">
          <h1 className="sidebar-title">Your Cart</h1>
        </div>

        <div className="sidebar-content">
          <span className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </span>

          {cartProducts.length === 0 ? (
            <p className="empty-cart-message">
              Your Cart Has No Items
            </p>
          ) : (
            <>
              {cartProducts.map((item, key) => (
                <div className="cart-item" key={key}>
                  <div className="item-details">
                    <div className="item-image-wrapper">
                      <img
                        src={item.img}
                        height={84}
                        width={84}
                        alt="addedimg"
                        className="item-image"
                      />

                      <span
                        className="remove-item-btn"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <FaTimes />
                      </span>
                    </div>

                    <div className="item-title">
                      <p>{item.title}</p>
                    </div>
                  </div>

                  <div className="item-price-quantity">
                    <p>${item.price}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}

              <div className="sidebar-footer">
                <h2>
                  Sub Total : $<span>{totalAmount}</span>
                </h2>
                <div className="view-cart-btn">
                  <Link to={"/cart"}>View Cart</Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
