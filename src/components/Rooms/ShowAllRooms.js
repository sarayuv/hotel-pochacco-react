import React from "react";
import Room from "./Room";
import "../../styles/Rooms/ShowAllRooms.css";

const ShowAllRooms = ({ rooms, setSection }) => {
  return (
    <div>
      <h3>Show All Rooms</h3>
      {/* Display rooms list */}

      <ul>
        <li className="room-menu-button" onClick={() => setSection("rooms")}>
          Back to Room Menu
        </li>
      </ul>
    </div>
  );
};

export default ShowAllRooms;
