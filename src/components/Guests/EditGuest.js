import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditGuest = ({ guest, guests, setGuests, setSection }) => {
  const [guestForm, setGuestForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    console.log("Guest prop in useEffect:", guest);
    if (guest) {
      setGuestForm({
        id: guest?.id || "",
        firstName: guest?.firstName || "",
        lastName: guest?.lastName || "",
        email: guest?.email || "",
      });
    }
  }, [guest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const updateGuest = () => {
    const updatedGuest = {
      id: guestForm.id,
      firstName: guestForm.firstName,
      lastName: guestForm.lastName,
      email: guestForm.email,
    };

    const updatedGuests = guests.map((g) =>
      g.id == updateGuest.id ? updatedGuest : g
    );
    setGuests(updatedGuests);
    setSection("guests");
    console.log("Guest updated successfully!");
  };

  if (!guest) {
    console.log("Guest is null or undefined:", guest);
    return <div>Loading...</div>;
  }

  console.log("Guest and GuestForm:", guest, guestForm);

  return (
    <div>
      <h3>Edit Guest Data</h3>
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

      <button onClick={updateGuest}>Update Guest</button>

      <ul>
        <li className="guest-menu-button">
          <Link to={"../guests"}>Back to Guest Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditGuest;
