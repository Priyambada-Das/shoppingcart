import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // To delete the indivisual elements from an aitem cart.
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Clear the cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // Increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // Decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // We will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("ho");
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};
export default Cart;
