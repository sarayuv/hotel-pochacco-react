import React, { useState } from "react";
import Guest from "./Guest";
import "../../styles/Guests/AddNewGuest.css";

const AddNewGuest = ({ guests, setGuests, setSection }) => {
  const [guestForm, setGuestForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const addNewGuest = () => {
    const newGuest = new Guest(
      guests.length + 1,
      guestForm.firstName,
      guestForm.lastName,
      guestForm.email
    );
    setGuests([...guests, newGuest]);
    setGuestForm({
      firstName: "",
      lastName: "",
      email: "",
    });

    console.log("Guest added successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="add-new-guest-container">
      <h1>Hotel Pochacco Management System</h1>
      <h3>Add New Guest</h3>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={guestForm.firstName}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={guestForm.lastName}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={guestForm.email}
        onChange={handleInputChange}
      />

      <br />

      <button onClick={addNewGuest}>AddNewGuest</button>

      <ul>
        <li
          className="guest-menu-button"
          onClick={() => SVGComponentTransferFunctionElement("guests")}
        >
          Back to Guest Menu
        </li>
      </ul>
    </div>
  );
};

export default AddNewGuest;
