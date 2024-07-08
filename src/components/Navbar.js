import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          alt="Logo"
          className="logo-image"
        />
        <h1 className="title">Hotel Pochacco Management System</h1>
      </div>

      <nav>
        <ul className="menu-items">
          <li className="menu-item">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="menu-item">
            <Link to="/guests">Guests</Link>
          </li>
          <li className="menu-item">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="menu-item">
            <Link to="/employees">Employees</Link>
          </li>
          <li className="menu-item">
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
