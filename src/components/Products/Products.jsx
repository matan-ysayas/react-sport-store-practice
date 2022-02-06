import "./Products.css";
import React from "react";
import ContextProvider from "../ContextProvider";
import { useEffect ,useContext} from "react";

function Products() {

const valueContext =useContext(ContextProvider);
useEffect(()=>{
  alert(`${valueContext.NumOfOrders}`);
},[])
  return (
    <div className="products">
      <h1>Products</h1>
    </div>
  );
};

export default Products;
