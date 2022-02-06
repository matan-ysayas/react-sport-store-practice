import React from "react";
import { createContext,useState } from "react";

export const AgentContext=React.createContext();
const ContextProvider =({Children})=>{

    const [Agent,setAgent]=useState({AgentName:"",NumOfOrders:0,Email:""})


    return(

<AgentContext.Provider value={Agent,setAgent}>
{Children}
</AgentContext.Provider>

    )
}
export default ContextProvider;