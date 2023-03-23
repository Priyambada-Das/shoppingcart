import React, { useContext } from "react";
import Items from "./Items";
// import { products } from "./products";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-item">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem}</span> items in
            shopping cart
          </p>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {item.map((curItem) => {
                  return <Items key={curItem.id} {...curItem} />;
                })}
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart total: <span>2200rs</span>
            </h3>
            <button>checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-item">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart total: <span>{totalAmount} rs</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
        </div>
      </section>
    </>
  );
};
export default ContextCart;
