import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Rooms/AddNewRoom.css";

const EditRoom = ({ room, rooms, setRooms, setSection }) => {
  const [roomForm, setRoomForm] = useState({
    id: "",
    floor: "",
    capacity: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    console.log("Room prop in useEffect:", room);
    if (room) {
      setRoomForm({
        id: room?.id || "",
        floor: room?.floor?.toString() || "",
        capacity: room?.capacity?.toString() || "",
        description: room?.description || "",
        price: room?.price?.toString() || "",
      });
    }
  }, [room]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const updateRoom = () => {
    const updatedRoom = {
      id: roomForm.id,
      floor: parseInt(roomForm.floor, 10),
      capacity: parseInt(roomForm.capacity, 10),
      description: roomForm.description,
      price: parseFloat(roomForm.price),
    };

    if (
      isNaN(updatedRoom.floor) ||
      isNaN(updatedRoom.capacity) ||
      isNaN(updatedRoom.price)
    ) {
      console.error("Invalid numeric input. Please enter valid numbers.");
      return;
    }

    const updatedRooms = rooms.map((r) =>
      r.id === updatedRoom.id ? updatedRoom : r
    );
    setRooms(updatedRooms);
    setSection("rooms"); // Navigate back to Room Menu after update
    console.log("Room updated successfully!");
  };

  // Check if room is null or undefined
  if (!room) {
    console.log("Room is null or undefined:", room);
    return <div>Loading...</div>; // Handle case where room data is not yet available
  }

  console.log("Room and RoomForm:", room, roomForm);

  return (
    <div>
      <h3>Edit Room Data</h3>
      <input
        type="number"
        name="floor"
        placeholder="Floor"
        value={roomForm.floor}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        value={roomForm.capacity}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={roomForm.description}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={roomForm.price}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={updateRoom}>Update Room</button>

      <ul>
        <li className="room-menu-button">
          <Link to="../rooms">Back to Room Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditRoom;
