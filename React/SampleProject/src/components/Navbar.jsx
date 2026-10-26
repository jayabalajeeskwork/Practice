import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        JAYABALAJEE<span> . </span>S <span>. </span>K
      </a>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`/${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              {link}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#get-started"
            className="nav-cta"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
