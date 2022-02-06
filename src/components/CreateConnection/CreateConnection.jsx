import React,{ useState } from "react";
import "./CreateConnection.css";
import { GetData } from "../../service/api-service";


function CreateConnection() {
const [moviesArray,setMovieArray]=useState([]);



  return (
    <div className="create-connection">
      <h1>CreateConnection</h1>
      <button onClick={()=>GetData(setMovieArray)} >GET DATAD</button>
     <h1> 
       {moviesArray.map((item)=><li>{item.movieName}
        </li>)}
        </h1>
    </div>
  );
  }

export default CreateConnection;
