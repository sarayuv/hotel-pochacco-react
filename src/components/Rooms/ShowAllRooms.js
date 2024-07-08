import React from "react";
import Room from "./Room";
import { Link } from "react-router-dom";
import "../../styles/Rooms/ShowAllRooms.css";

const ShowAllRooms = ({ rooms, setSection }) => {
  return (
    <div>
      <h3>Show All Rooms</h3>
      {/* Display rooms list */}

      <ul>
        <li className="room-menu-button">
          <Link to="../rooms">Back to Room Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShowAllRooms;
