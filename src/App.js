import React from "react";
import AppRouter from "./components/AppRouter";
import ContextProvider from "./components/ContextProvider";
import CreateConnection from "./components/CreateConnection/CreateConnection";

function App() {
  return (
    <div className="App">
   {/* <ContextProvider>
     <AppRouter/>
   </ContextProvider> */}
   <CreateConnection/>
    </div>
  );
}

export default App;


