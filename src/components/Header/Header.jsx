import "./Header.css";
import React from "react";
import { useContext } from "react";
import { AgentContext } from "../ContextProvider";

function Header() {
  const {valueContext}=useContext(AgentContext);
  return (
    <div className="header">
      <h1>Header</h1>
      <h2>{valueContext.AgentName}</h2>
    </div>
  );
};

export default Header;
