import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setSection }) => {
  const handleButtonClick = (section) => {
    setSection(section);
  };

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
          <li className="menu-item" onClick={() => handleButtonClick("rooms")}>
            Rooms
          </li>

          <li className="menu-item" onClick={() => handleButtonClick("guests")}>
            Guests
          </li>

          <li
            className="menu-item"
            onClick={() => handleButtonClick("reservations")}
          >
            Reservations
          </li>

          <li
            className="menu-item"
            onClick={() => handleButtonClick("employees")}
          >
            Employees
          </li>

          <li
            className="menu-item"
            onClick={() => handleButtonClick("credits")}
          >
            Credits
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
