import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./Orders.css";



class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  
  componentDidMount () {
    axios.get("/orders.json")
    .then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({loading: false, orders: fetchedOrders});
    })
    .catch(err => {
      this.setState({loading: false});
    })
  }
  
  render() {
    
    let order = (
      this.state.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
      ))
    );
    
    if (order.length === 0) {
      order = (
        <div style={{textAlign: "center", marginTop: "100px"}}>
          <NavLink
            className={classes.OrdersLink}
            to="/">Build a Burger!</NavLink>
        </div>
      );
    }
    
    return (
      <div>
        {order}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);