import { Link } from "react-router-dom";
function NavComp(){
  const endpoint =
  process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    return (
        <nav>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li className="dropdown">
          <a href="/" className="dropbtn">Menu </a>
          <div className="dropdown-content">
            
            <Link to="/Register">Register</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/support">Support</Link>
            <Link to="/donate">Donate</Link>
            
          </div>
        </li>
        <li style={{float: 'right'}}><a href="/">Contact</a></li>
      </ul>
    </nav>
    )
}
export default NavComp
