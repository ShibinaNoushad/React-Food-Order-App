import React, { useContext } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/CartContext";
const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);
  console.log("meal item form initializd 1", cartcntx);

  const addItemToCart = (e) => {
    e.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;
    cartcntx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartcntx.items)}
      <Input
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
