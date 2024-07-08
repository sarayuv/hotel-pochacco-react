import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNewRoom from "./AddNewRoom";
import ShowAllRooms from "./ShowAllRooms";
import EditRoom from "./EditRoom";
import "../../styles/Rooms/RoomManagement.css";

const RoomManagement = ({ rooms, setRooms }) => {
  return (
    <div className="room-management">
      <h2>Room Management</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/hotel-room.jpg`}
        alt="Hotel Room"
        className="room-image"
      />

      <nav>
        <ul>
          <li className="choice-button">
            <Link to="add-new-room">Add New Room</Link>
          </li>
          <li className="choice-button">
            <Link to="show-all-rooms">Show All Rooms</Link>
          </li>
          <li className="choice-button">
            <Link to="edit-room">Edit Room Data</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li className="main-menu-button">
            <Link to="/">Back to Main Menu</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="add-new-room"
          element={<AddNewRoom rooms={rooms} setRooms={setRooms} />}
        />
        <Route path="show-all-rooms" element={<ShowAllRooms rooms={rooms} />} />
        <Route
          path="edit-room"
          element={<EditRoom rooms={rooms} setRooms={setRooms} />}
        />
      </Routes>
    </div>
  );
};

export default RoomManagement;
