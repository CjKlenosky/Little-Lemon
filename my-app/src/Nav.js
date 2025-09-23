import React, { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src="\images\little-lemon-logo.svg" alt="logo" /></div>

      <button className="burger"
      onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "X" : "☰"}
</button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
