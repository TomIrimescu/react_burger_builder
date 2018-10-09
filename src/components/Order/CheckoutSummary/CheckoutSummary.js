import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Doesn't this look good!</h1>
      <Button
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
      <div style={{width: "100%", margin: "auto"}}>
        <Burger ingredients={props.ingredients}/>
      </div>

    </div>
  );
};

export default checkoutSummary;