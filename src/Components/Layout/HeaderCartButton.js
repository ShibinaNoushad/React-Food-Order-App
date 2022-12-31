import React, { useContext,useState,useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  // console.log("header button");
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCntxt = useContext(CartContext);
  const { items  } = cartCntxt;

  let quantity = 0;
  // const numberOfCartItems = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  cartCntxt.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
    // console.log("check quan", quantity);
  });
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
   }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span>{cartCntxt.message}</span> */}
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
