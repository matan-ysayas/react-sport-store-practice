import react,{useContext,useState} from "react";
import { ShoesContext } from "../ShoesContext";




const Shoes=()=>{
    const{array,setArray}=useContext(ShoesContext);
    return(<div>
        <h1>Shoes</h1>
<h1>{array.map((item)=>
    <li>{item.Id}</li>
)}</h1>
    </div>)
}
export default Shoes;