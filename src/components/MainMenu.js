import React from "react";
import Navbar from "./Navbar";
import "../styles/MainMenu.css";

const MainMenu = ({ setSection }) => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/pochacco.png`}
        alt="Pochacco"
        className="main-menu-image"
      />

      <ul className="main-page-buttons">
        <li className="menu-button" onClick={() => setSection("rooms")}>
          Rooms
        </li>
        <li className="menu-button" onClick={() => setSection("guests")}>
          Guests
        </li>
        <li className="menu-button" onClick={() => setSection("reservations")}>
          Reservations
        </li>
        <li className="menu-button" onClick={() => setSection("employees")}>
          Employees
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
