// src/components/MainMenu.js
import React from "react";

const MainMenu = ({ setSection }) => {
  return (
    <div className="main-menu">
      <h1>Hotel Pochacco Management System</h1>
      <nav>
        <ul>
          <li onClick={() => setSection("rooms")}>Rooms</li>
          <li onClick={() => setSection("guests")}>Guests</li>
          <li onClick={() => setSection("reservations")}>Reservations</li>
          <li onClick={() => setSection("employees")}>Employees</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
