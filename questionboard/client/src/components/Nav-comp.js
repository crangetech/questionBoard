function Nav(){

    return (
        <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="/" className="dropbtn">Menu </a>
          <div className="dropdown-content">
            <a href="#">Sign Up</a>
            <a href="#">Log In</a>
            <a href="#">Support</a>
            <a href="#">Donate</a>
          </div>
        </li>
        <li style={{float: 'right'}}><a href="/">Contact</a></li>
      </ul>
    </nav>
    )
}
export default Nav
