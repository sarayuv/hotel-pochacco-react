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
