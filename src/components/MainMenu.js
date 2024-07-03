import React from "react";
import "../styles/MainMenu.css";

const MainMenu = ({ setSection }) => {
  return (
    <div className="main-menu">
      <h1>Hotel Pochacco Management System</h1>

      <img
        src={`${process.env.PUBLIC_URL}/images/pochacco.png`}
        alt="Pochacco Picture"
        className="main-menu-image"
      />

      <text>Select an area to manage:</text>

      <nav>
        <ul>
          <li className="menu-button" onClick={() => setSection("rooms")}>
            Rooms
          </li>
          <li className="menu-button" onClick={() => setSection("guests")}>
            Guests
          </li>
          <li
            className="menu-button"
            onClick={() => setSection("reservations")}
          >
            Reservations
          </li>
          <li className="menu-button" onClick={() => setSection("employees")}>
            Employees
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
