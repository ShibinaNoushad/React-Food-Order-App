import React, { useContext, useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/CartContext";
const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("meal item form initializd 1", cartcntx);
  const amountInputRef = useRef();

  const addItemToCart = (e) => {
    e.preventDefault();

    // const quantity = document.getElementById("amount_" + props.id).value;
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    cartcntx.addItem({ ...props.item, quantity: enteredAmountNumber });
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartcntx.items)}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",

          min: 1,
          max: 3,
          // step: 3,
          defaultValue: 1,
        }}
      ></Input>
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
