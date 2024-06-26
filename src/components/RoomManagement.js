import React, { useState } from "react";
//import "./RoomManagement.css";

class Room {
  constructor(id, floor, capacity, description, price) {
    this.id = id;
    this.floor = floor;
    this.capacity = capacity;
    this.description = description;
    this.price = price;
  }

  print() {
    console.log(`Room ID: ${this.id}`);
    console.log(`Floor: ${this.floor}`);
    console.log(`Capacity: ${this.capacity}`);
    console.log(`Description: ${this.description}`);
    console.log(`Price: ${this.price}`);
  }
}

const RoomManagement = ({ setSection }) => {
  const [rooms, setRooms] = useState([]);
  const [roomForm, setRoomForm] = useState({
    floor: "",
    capacity: "",
    description: "",
    price: "",
  });

  const [editForm, setEditForm] = useState({
    id: "",
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

  const showAllRooms = () => {
    rooms.forEach((room) => room.print());
  };

  const editRoom = () => {
    const id = parseInt(editForm.id);
    if (isNaN(id) || id < 1 || id > rooms.length) {
      alert("Invalid room ID");
      return;
    }

    const roomToUpdate = rooms.find((room) => room.id === id);
    if (!roomToUpdate) {
      alert("Room not found");
      return;
    }

    const updatedRoom = new Room(
      id,
      parseInt(editForm.floor) || roomToUpdate.floor,
      parseInt(editForm.capacity) || roomToUpdate.capacity,
      editForm.description || roomToUpdate.description,
      parseFloat(editForm.price) || roomToUpdate.price
    );

    const updatedRooms = [...rooms];
    const indexToUpdate = rooms.findIndex((room) => room.id === id);
    updatedRooms[indexToUpdate] = updatedRoom;

    setRooms(updatedRooms);
    setEditForm({
      id: "",
      floor: "",
      capacity: "",
      description: "",
      price: "",
    });
    console.log("Room updated successfully!");
  };

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="room-management">
      <h2>Room Management</h2>
      <div>
        <button onClick={() => setSection("addNewRoom")}>Add New Room</button>
        <button onClick={() => setSection("showAllRooms")}>
          Show All Rooms
        </button>
        <button onClick={() => setSection("editRoom")}>Edit Room Data</button>
      </div>

      {setSection === "addNewRoom" && (
        <div>
          <h3>Add New Room</h3>
          <input
            type="text"
            name="floor"
            placeholder="Floor"
            value={roomForm.floor}
            onChange={(e) => handleInputChange(e, setRoomForm)}
          />
          <input
            type="text"
            name="capacity"
            placeholder="Capacity"
            value={roomForm.capacity}
            onChange={(e) => handleInputChange(e, setRoomForm)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={roomForm.description}
            onChange={(e) => handleInputChange(e, setRoomForm)}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={roomForm.price}
            onChange={(e) => handleInputChange(e, setRoomForm)}
          />
          <button onClick={addNewRoom}>Add Room</button>
        </div>
      )}

      {setSection === "showAllRooms" && (
        <div>
          <h3>Show All Rooms</h3>
          <button onClick={showAllRooms}>Show All Rooms</button>
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                Room ID: {room.id} - Floor: {room.floor} - Capacity:{" "}
                {room.capacity} - Price: {room.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      {setSection === "editRoom" && (
        <div>
          <h3>Edit Room</h3>
          <input
            type="text"
            name="id"
            placeholder="Room ID"
            value={editForm.id}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="floor"
            placeholder="New Floor"
            value={editForm.floor}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="capacity"
            placeholder="New Capacity"
            value={editForm.capacity}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="description"
            placeholder="New Description"
            value={editForm.description}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="price"
            placeholder="New Price"
            value={editForm.price}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <button onClick={editRoom}>Edit Room</button>
        </div>
      )}

      <button onClick={() => setSection("main")}>Back to Main Menu</button>
    </div>
  );
};

export default RoomManagement;
