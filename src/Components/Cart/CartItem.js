import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartcntx = useContext(CartContext);
  const removeItemFromCart = (e) => {
    e.preventDefault();

    cartcntx.removeItem(props.id);
  };
  const addByOne = (e) => {
    e.preventDefault();
    // cartcntx.addItemByOne(props.id)
    cartcntx.addItem({id:props.id,quantity:1})
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>

          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemFromCart}>−</button>
        <button onClick={addByOne}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
