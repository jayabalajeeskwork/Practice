import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>

      <button className="menu-btn" onClick={() => setShow(!show)}>
        {show ? "✕" : "☰"}
      </button>

      <ul className={show ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setShow(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setShow(false)}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
