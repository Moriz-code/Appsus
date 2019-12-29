const { NavLink } = ReactRouterDOM

export default function NavBar() {
  return <nav>
    <ul className="main-nav-bar flex align-center clean-list">
      <li className="home-navbar"><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/emails">Email</NavLink></li>
      <li><NavLink activeClassName="active" to="/notes">Notes</NavLink></li>
      {/* <li><NavLink activeClassName="active" to="/books">Books</NavLink></li> */}
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    </ul>
  </nav>
}

