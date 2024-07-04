import React, { useState } from "react";
import AddNewRoom from "./AddNewRoom";
import ShowAllRooms from "./ShowAllRooms";
import EditRoom from "./EditRoom";
import MainMenu from "../MainMenu";
import "../../styles/Rooms/RoomManagement.css";

const RoomManagement = () => {
  const [section, setSection] = useState("main");
  const [rooms, setRooms] = useState([]);

  return (
    <div className="room-management">
      {section === "main" && <MainMenu setSection={setSection} />}

      {section === "rooms" && (
        <>
          <h1>Hotel Pochacco Management System</h1>
          <h2>Room Management</h2>

          <img
            src={`${process.env.PUBLIC_URL}/images/hotel-room.jpg`}
            alt="Hotel Room"
            className="room-image"
          />

          <nav>
            <ul>
              <li
                className="choice-button"
                onClick={() => setSection("addNewRoom")}
              >
                Add New Room
              </li>

              <li
                className="choice-button"
                onClick={() => setSection("showAllRooms")}
              >
                Show All Rooms
              </li>

              <li
                className="choice-button"
                onClick={() => setSection("editRoom")}
              >
                Edit Room Data
              </li>
            </ul>
          </nav>

          <ul>
            {section === "rooms" && (
              <li
                className="main-menu-button"
                onClick={() => setSection("main")}
              >
                Back to Main Menu
              </li>
            )}
          </ul>
        </>
      )}

      {section === "addNewRoom" && (
        <AddNewRoom rooms={rooms} setRooms={setRooms} setSection={setSection} />
      )}

      {section === "showAllRooms" && (
        <ShowAllRooms rooms={rooms} setSection={setSection} />
      )}

      {section === "editRoom" && (
        <EditRoom rooms={rooms} setRooms={setRooms} setSection={setSection} />
      )}
    </div>
  );
};

export default RoomManagement;
