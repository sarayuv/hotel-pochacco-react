import React from "react";

const ShowAllRooms = ({ rooms }) => {
  return (
    <div>
      <h3>Show All Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            Room ID: {room.id} - Floor: {room.floor} - Capacity: {room.capacity}{" "}
            - Price: {room.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllRooms;
