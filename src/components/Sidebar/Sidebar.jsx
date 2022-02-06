import "./Sidebar.css";
import { Link  } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
    
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/orders">orders</Link>
          </li>
          <li>
            <Link to="/createOrder">createOrder</Link>
          </li>
          <li>
            <Link to="/createConnection">createConnection</Link>
          </li>
        </nav>
    </div>
  );
};

export default Sidebar;
