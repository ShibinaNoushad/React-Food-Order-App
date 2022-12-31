import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntxt = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* {cartCntxt.items.map((item) => (
        <li key={item.id}>
          Name:{item.name} price:{item.price} Quantity:{item.quantity}
        </li>
      ))} */}
      {cartCntxt.items.map((item)=>(
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.quantity} id={item.id}></CartItem>

      ))}
    </ul>
  );
  let total = 0;
  cartCntxt.items.forEach((item) => {
    total = total + Number(item.quantity) * Number(item.price);
    console.log(total);
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={()=>{console.log("Ordering");}}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
