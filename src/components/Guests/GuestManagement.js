import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNewGuest from "./AddNewGuest";
import ShowAllGuests from "./ShowAllGuests";
import SearchGuestByName from "./SearchGuestByName";
import EditGuest from "./EditGuest";
import "../../styles/Guests/GuestManagement.css";

const GuestManagement = ({ guests, setGuests }) => {
  return (
    <div className="guest-management">
      <h2>Guest Management</h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/guest_pochaco.jpg`}
        alt="Guest Pochacco"
        className="guest-pochacco"
      />

      <nav>
        <ul>
          <li className="choice-button">
            <Link to="add-new-guest">Add New Guest</Link>
          </li>

          <li className="choice-button">
            <Link to="show-all-guests">Show All Guests</Link>
          </li>

          <li className="choice-button">
            <Link to="search-guest-by-name">Search Guest By Name</Link>
          </li>

          <li className="choice-button">
            <Link to="edit-guest">Edit Guest Data</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li className="main-menu-button">
            <Link to="/">Back to Main Menu</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="add-new-guest"
          element={<AddNewGuest guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="show-all-guests"
          element={<ShowAllGuests guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="search-guest-by-name"
          element={<SearchGuestByName guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="edit-guest"
          element={<EditGuest guests={guests} setGuests={setGuests} />}
        />
      </Routes>
    </div>
  );
};

export default GuestManagement;

/* const ManageGuests = {
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
      <h1>Hotel Pochacco Management System</h1>
      <h2>Guest Management</h2>
      <nav>
        <ul>
          <li
            className="choice-button"
            onClick={() => setSection("addNewGuest")}
          >
            Add New Guest
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("showAllGuests")}
          >
            Show All Guests
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("searchGuestByName")}
          >
            Search Guest by Name
          </li>
          <li className="choice-button" onClick={() => setSection("editGuest")}>
            Edit Guest Data
          </li>
        </ul>
      </nav>
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
      <ul>
        <li className="main-menu-button" onClick={() => setSection("main")}>
          Back to Main Menu
        </li>
      </ul>
    </div>
  );
};

export default GuestManagement;
 */
