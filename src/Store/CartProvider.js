import React, { useEffect, useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [item, setUpdateItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    setUpdateItem((prev) => {
      return [...prev, newItem];
    });
    console.log("inside additem handler", cartContext);
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: item,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside cart provider", cartContext)}

      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
