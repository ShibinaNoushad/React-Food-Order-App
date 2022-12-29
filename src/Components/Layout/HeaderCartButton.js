import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  console.log("header button");
  // const [quantity,updateQuantity]=
  const cartCntxt = useContext(CartContext);
  let quantity = 0;

  cartCntxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
    console.log("check quan", quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCntxt.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
