import React, { useState } from "react";

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

const EditRoom = ({ rooms, setRooms }) => {
  const [editForm, setEditForm] = useState({
    id: "",
    floor: "",
    capacity: "",
    description: "",
    price: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div>
      <h3>Edit Room</h3>
      <input
        type="text"
        name="id"
        placeholder="Room ID"
        value={editForm.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="floor"
        placeholder="New Floor"
        value={editForm.floor}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="capacity"
        placeholder="New Capacity"
        value={editForm.capacity}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="New Description"
        value={editForm.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="price"
        placeholder="New Price"
        value={editForm.price}
        onChange={handleInputChange}
      />
      <button onClick={editRoom}>Edit Room</button>
    </div>
  );
};

export default EditRoom;
