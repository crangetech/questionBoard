function Nav(){

    return (
        <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Me</a></li>
        <li className="dropdown">
          <a href="/" className="dropbtn">Projects </a>
          <div className="dropdown-content">
            <a href="#">Project 1</a>
            <a href="#">Project 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li style={{float: 'right'}}><a href="/">Contact</a></li>
      </ul>
    </nav>
    )
}
export default Nav