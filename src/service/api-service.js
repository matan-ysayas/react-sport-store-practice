



export const GetData=(setMovieArray)=>{
    return fetch("https://moviesmern.herokuapp.com/movies/all")
     .then((res)=>res.json())
     .then((data)=>setMovieArray(data.data))
     .catch(error=>console.error("error",error))}