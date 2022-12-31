import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [item, setUpdateItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    const existingCartItemIndex = cartContext.items.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = cartContext.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + newItem.quantity,
      };
      setUpdateItem((prev) => {
        updatedItems = [...prev];
        updatedItems[existingCartItemIndex] = updatedItem;
        return updatedItems;
      });
    } else {
      setUpdateItem((prev) => {
        // return prev.concat(newItem);
        return [...prev, newItem];
      });
    }
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
