const { NavLink } = ReactRouterDOM

export default function NavBar() {
  return <nav>
    <ul className="NavBar">
      <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/email">Email</NavLink></li>
      <li><NavLink activeClassName="active" to="/notes">Notes</NavLink></li>
      {/* <li><NavLink activeClassName="active" to="/books">Books</NavLink></li> */}
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    </ul>
  </nav>
}

