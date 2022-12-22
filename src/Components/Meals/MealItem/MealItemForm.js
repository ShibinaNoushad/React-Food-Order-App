import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: Number,
          min: 1,
          max: 3,
          step: 3,
          defaultValue: 1,
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
