import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

function Navbar2() {
  const [show, setShow] = useState(false);

  const menu = [
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>

      <button className="menu-btn" onClick={() => setShow(!show)}>
        {show ? "✕" : "☰"}
      </button>

      <ul className={show ? "nav-links active" : "nav-links"}>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setShow(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar2;
