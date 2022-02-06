import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Orders from "../components/Orders/Orders";
import CreateOrder from "../components/CreateOrder/CreateOrder";
import CreateConnection  from "../components/CreateConnection/CreateConnection";
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Footer from "../components/Footer/Footer";
const AppRouter =()=>{
return(
    <BrowserRouter>
<Header/>
<Sidebar/>
<Routes>
<Route exact path="/" element={<Home />}/>
<Route exact path="/Products" element={<Products/>}/>
<Route exact path="/Orders" element={<Orders/>}/>
<Route exact path="/CreateOrder" element={<CreateOrder />}/>
<Route exact path="/CreateConnection" element={<CreateConnection />}/> 
</Routes>
<Footer/>
</BrowserRouter> )

    
}
export default AppRouter;   