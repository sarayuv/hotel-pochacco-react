import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomManagement from "./components/Rooms/RoomManagement";
import AddNewRoom from "./components/Rooms/AddNewRoom";
import ShowAllRooms from "./components/Rooms/ShowAllRooms";
import EditRoom from "./components/Rooms/EditRoom";
import GuestManagement from "./components/Guests/GuestManagement";
import AddNewGuest from "./components/Guests/AddNewGuest";
import ShowAllGuests from "./components/Guests/ShowAllGuests";
import EditGuest from "./components/Guests/EditGuest";
import ReservationManagement from "./components/Reservations/ReservationManagement";
import "./App.css";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const [reservations, setReservations] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Routes for Room Management */}
        <Route path="/" element={<RoomManagement />} />
        <Route
          path="/add-new-room"
          element={<AddNewRoom rooms={rooms} setRooms={setRooms} />}
        />
        <Route
          path="/show-all-rooms"
          element={<ShowAllRooms rooms={rooms} />}
        />
        <Route
          path="/edit-room"
          element={<EditRoom rooms={rooms} setRooms={setRooms} />}
        />

        {/* Routes for Guest Management */}
        <Route path="/" element={<GuestManagement />} />
        <Route
          path="/add-new-guest"
          element={<AddNewGuest guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="/show-all-guests"
          element={<ShowAllGuests guests={guests} />}
        />
        <Route
          path="/edit-guest"
          element={<EditGuest guests={guests} setGuests={setGuests} />}
        />

        {/* Routes for Reservation Management */}
        <Route path="/" element={<ReservationManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
