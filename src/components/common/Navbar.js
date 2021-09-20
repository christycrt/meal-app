import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-list">
        <Link to="/">
          <img className="logo" src="/images/logo-small.png" alt="logo" />
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link>
            <li className="login">Log in</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
