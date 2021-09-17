function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-list">
        <img className="logo" src="/images/logo-small.png" alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li className="login">Log in</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
