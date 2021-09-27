import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <li
            className="login"
            onClick={() => {
              setIsModalOpen(true);
              document.body.style.overflowY = "hidden";
            }}
          >
            Log in
          </li>
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
