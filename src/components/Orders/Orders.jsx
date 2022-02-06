import "./Orders.css";
import React from "react";
import { useContext } from "react";
import ContextProvider from "../ContextProvider";


function Orders() {
  const valueContext=useContext(ContextProvider);
  return (
    <div className="orders">
      <h1>Orders</h1>

    </div>
  );
};

export default Orders;
