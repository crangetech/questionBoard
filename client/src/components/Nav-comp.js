import { Link } from "react-router-dom";
function NavComp(){
  const endpoint =
  process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return (
      
        <nav>
          
      <ul className="nav nav-tabs">
        <li className="dropbtn w3-display-topright">
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown ">
        <li className="dropbtn ">Menu</li>
          <div className="dropdown-content ">
            
            <Link to="/Register">Register</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/support">Support</Link>
            <Link to="/donate">Donate</Link>
            
          </div>
      
        </li>
      </ul>
    </nav>
    )
}
export default NavComp
