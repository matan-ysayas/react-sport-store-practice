import "./CreateOrder.css";
import React,{useContext} from "react";
import { AgentContext } from "../ContextProvider";




function CreateOrder() {
const {valueContext}=useContext(AgentContext);

function Update(e){
 valueContext.Agent[e.target.name]=e.target.value;
}

function UpdateState(){
  valueContext.setAgent({...valueContext.Agent});
}
function PrintAlert(){
  alert(`number of orders ${valueContext.NumOfOrders}`)
}

  return (
    <div className="create-order">
      <h1>CreateOrder</h1>
      <input onChange={Update} name="AgentName" type="text" />
      <input onChange={Update}  name="NumOfOrders" type="number" />
      <input onChange={Update}  name="Email" type="text" />
      <button onClick={UpdateState,PrintAlert}>click</button>
    </div>
  );
};

export default CreateOrder;
