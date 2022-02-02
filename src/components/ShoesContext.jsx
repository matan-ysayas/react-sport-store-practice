import { createContext,useEffect,useState } from "react";
import { GetData } from "../service/shoes-service";

export const ShoesContext=createContext();


let NameArray=[{},{},{}];

const ContextProvider=({children})=>{
   
    const[array,setArray]=useState(NameArray)

    useEffect(()=>{
        GetData().then((res)=>setArray(res))
    },[])

return(
    <ShoesContext.Provider value={{array,setArray}} >
{children}
    </ShoesContext.Provider>
)
}
export default ContextProvider;