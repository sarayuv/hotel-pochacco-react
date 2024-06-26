import React, { useState } from "react";
//import "./GuestManagement.css";

class Guest {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  print() {
    console.log(`Guest ID: ${this.id}`);
    console.log(`Guest First Name: ${this.firstName}`);
    console.log(`Guest Last Name: ${this.lastName}`);
    console.log(`Guest Email: ${this.email}`);
  }
}

const ManageGuests = {
  addNewGuest: (guests, firstName, lastName, email) => {
    const newGuest = new Guest(guests.length + 1, firstName, lastName, email);
    guests.push(newGuest);
    console.log("Guest added successfully!");
  },

  showAllGuests: (guests) => {
    guests.forEach((guest) => guest.print());
  },

  searchGuestByName: (guests, firstName, lastName) => {
    guests.forEach((guest) => {
      if (guest.getName() === `${firstName} ${lastName}`) {
        guest.print();
      }
    });
  },

  editGuest: (guests, id, firstName, lastName, email) => {
    const guest = guests.find((guest) => guest.id === id);
    if (!guest) {
      console.log("Guest not found");
      return;
    }

    guest.firstName = firstName || guest.firstName;
    guest.lastName = lastName || guest.lastName;
    guest.email = email || guest.email;

    console.log("Guest updated successfully!");
  },
};

const GuestManagement = ({ setSection }) => {
  const [guests, setGuests] = useState([]);
  const [guestForm, setGuestForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [editForm, setEditForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const addNewGuest = () => {
    ManageGuests.addNewGuest(
      guests,
      guestForm.firstName,
      guestForm.lastName,
      guestForm.email
    );
    setGuestForm({
      firstName: "",
      lastName: "",
      email: "",
    });
    setSection("main");
  };

  const showAllGuests = () => {
    ManageGuests.showAllGuests(guests);
    setSection("main");
  };

  const searchGuestByName = () => {
    ManageGuests.searchGuestByName(
      guests,
      editForm.firstName,
      editForm.lastName
    );
    setSection("main");
  };

  const editGuestData = () => {
    ManageGuests.editGuest(
      guests,
      parseInt(editForm.id),
      editForm.firstName,
      editForm.lastName,
      editForm.email
    );
    setEditForm({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    });
    setSection("main");
  };

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="guest-management">
      <h2>Guest Management</h2>
      <div>
        <button onClick={() => setSection("addNewGuest")}>Add New Guest</button>
        <button onClick={() => setSection("showAllGuests")}>
          Show All Guests
        </button>
        <button onClick={() => setSection("searchGuestByName")}>
          Search Guest by Name
        </button>
        <button onClick={() => setSection("editGuest")}>Edit Guest Data</button>
      </div>

      {setSection === "addNewGuest" && (
        <div>
          <h3>Add New Guest</h3>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={guestForm.firstName}
            onChange={(e) => handleInputChange(e, setGuestForm)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={guestForm.lastName}
            onChange={(e) => handleInputChange(e, setGuestForm)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={guestForm.email}
            onChange={(e) => handleInputChange(e, setGuestForm)}
          />
          <button onClick={addNewGuest}>Add Guest</button>
        </div>
      )}

      {setSection === "showAllGuests" && (
        <div>
          <h3>Show All Guests</h3>
          <button onClick={showAllGuests}>Show All Guests</button>
          <ul>
            {guests.map((guest) => (
              <li key={guest.id}>
                Guest ID: {guest.id} - Name: {guest.getName()} - Email:{" "}
                {guest.email}
              </li>
            ))}
          </ul>
        </div>
      )}

      {setSection === "searchGuestByName" && (
        <div>
          <h3>Search Guest by Name</h3>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={editForm.firstName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={editForm.lastName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <button onClick={searchGuestByName}>Search Guest</button>
        </div>
      )}

      {setSection === "editGuest" && (
        <div>
          <h3>Edit Guest Data</h3>
          <input
            type="text"
            name="id"
            placeholder="Guest ID"
            value={editForm.id}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="firstName"
            placeholder="New First Name"
            value={editForm.firstName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="New Last Name"
            value={editForm.lastName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="email"
            placeholder="New Email"
            value={editForm.email}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <button onClick={editGuestData}>Edit Guest</button>
        </div>
      )}

      <button onClick={() => setSection("main")}>Back to Main Menu</button>
    </div>
  );
};

export default GuestManagement;
