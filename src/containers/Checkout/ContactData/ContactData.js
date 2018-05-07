import React, { Component } from "react";
import axios from "../../../axios-orders";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

import classes from "./ContactData.css";

class ContactData extends Component {
  state ={
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
      country: ""
    },
    loading: false
  };
  
  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Tom Irimescu",
        address: {
          street: "264 Phillips",
          city: "Clawson",
          zipCode: "48017"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
  
    axios.post("/orders.json", order)
    .then(response => {
      this.setState({ loading: false });
      this.props.history.push("/");
    })
    .catch(error => {
      this.setState({ loading: false });
    });
  };
  
  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" name="street" placeholder="Your Street Address" />
        <Input inputtype="input" type="text" name="city" placeholder="Your City" />
        <Input inputtype="input" type="text" name="zipcode" placeholder="Your Zip Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;