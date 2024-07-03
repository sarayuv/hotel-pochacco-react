import React, { useState } from "react";
import Room from "./Room";
import "../styles/AddNewRoom.css";

const AddNewRoom = ({ rooms, setRooms, setSection }) => {
  const [roomForm, setRoomForm] = useState({
    floor: "",
    capacity: "",
    description: "",
    price: "",
  });

  const addNewRoom = () => {
    const newRoom = new Room(
      rooms.length + 1,
      parseInt(roomForm.floor),
      parseInt(roomForm.capacity),
      roomForm.description,
      parseFloat(roomForm.price)
    );
    setRooms([...rooms, newRoom]);
    setRoomForm({
      floor: "",
      capacity: "",
      description: "",
      price: "",
    });
    console.log("Room added successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div>
      <h1>Hotel Pochacco Management System</h1>
      <h2>Room Management</h2>
      <h3>Add New Room</h3>
      <input
        type="text"
        name="floor"
        placeholder="Floor"
        value={roomForm.floor}
        onChange={handleInputChange}
      />
      <input
        type="text"
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
        type="text"
        name="price"
        placeholder="Price"
        value={roomForm.price}
        onChange={handleInputChange}
      />
      <button onClick={addNewRoom}>Add Room</button>
      <button onClick={() => setSection("main")} className="back-button">
        Back to Main Menu
      </button>
    </div>
  );
};

export default AddNewRoom;
