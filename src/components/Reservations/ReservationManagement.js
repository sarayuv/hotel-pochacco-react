import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const ReservationManagement = ({ reservations, setReservations }) => {
  return (
    <div className="reservation-management">
      <h2>Reservation Management</h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/reservation_pochacco.png`}
        alt="Reservation Pochacco"
        className="reservation_pochacco"
      />

      <nav>
        <ul>
          <li className="main-menu-button">
            <Link to="/">Back to Main Menu</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReservationManagement;
