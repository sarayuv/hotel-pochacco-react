import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <img
        src={`${process.env.PUBLIC_URL}/images/pochacco.png`}
        alt="Pochacco"
        className="main-menu-image"
      />

      <ul>
        <li className="menu-button">
          <Link to="rooms">Rooms</Link>
        </li>
        <li className="menu-button">
          <Link to="guests">Guests</Link>
        </li>
        <li className="menu-button">
          <Link to="reservations">Reservations</Link>
        </li>
        <li className="menu-button">
          <Link to="employees">Employees</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
