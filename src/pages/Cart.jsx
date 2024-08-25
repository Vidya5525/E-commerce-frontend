import React, { useEffect } from "react";
import PageHeading from "../common/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiMinus, PiPlus } from "react-icons/pi";
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  const cartSelector = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartSelector]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
      dispatch(getCartTotal());
    }
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };

  return (
    <div className="cart-container">
      <PageHeading home={"Home"} pagename={"Cart"} />
      <div className="cart-heading">
        Your Products
      </div>

      <div className="cart-content">
        {cartProducts.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-cart-message">Your Cart Has No Items</p>
            <div className="return-to-shopping">
              <Link to={"/"}>Return To Shopping</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-table-container">
              <table className="cart-table">
                <thead className="cart-table-header">
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item, key) => (
                    <tr key={key}>
                      <td className="remove-item">
                        <button
                          onClick={() => removeItemFromCart(item.id)}
                          className="remove-button"
                        >
                          <FaTimes />
                        </button>
                      </td>
                      <td className="product-details">
                        <div className="product-image-container">
                          <img
                            src={item.img}
                            className="product-image"
                            alt="Product"
                          />
                          <p className="product-title">{item.title}</p>
                        </div>
                      </td>
                      <td className="product-price">₹{item.price}</td>
                      <td className="product-quantity">
                        <div className="quantity-controls">
                          <button
                            className="quantity-button"
                            onClick={() =>
                              decreaseQuantity(item.id, item.quantity)
                            }
                          >
                            <PiMinus />
                          </button>

                          <span className="quantity-display">
                            {item.quantity}
                          </span>

                          <button
                            className="quantity-button"
                            onClick={() =>
                              increaseQuantity(item.id, item.quantity)
                            }
                          >
                            <PiPlus />
                          </button>
                        </div>
                      </td>
                      <td className="product-subtotal">
                      ₹{item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-summary">
              <h1 className="summary-heading">Cart Total</h1>
              <div className="summary-item">
                <span>Sub Total :</span>
                <span>₹ {totalAmount}</span>
              </div>
              <div className="summary-item">
                <span>Shipping Charge :</span>
                <span>₹ 10</span>
              </div>
              <div className="summary-item">
                <span>Grand Total :</span>
                <span>₹{totalAmount + 10}</span>
              </div>
              <div className="checkout-buttons">
                <div className="checkout-button">
                  <Link>Proceed To Checkout</Link>
                </div>
                <div className="continue-shopping-button">
                  <Link to={"/shop"}>Continue Shopping</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
