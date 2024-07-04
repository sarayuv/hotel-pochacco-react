import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomManagement from "./components/Rooms/RoomManagement";
import AddNewRoom from "./components/Rooms/AddNewRoom";
import ShowAllRooms from "./components/Rooms/ShowAllRooms";
import EditRoom from "./components/Rooms/EditRoom";
import GuestManagement from "./components/Guests/GuestManagement"; // Import GuestManagement component
import AddNewGuest from "./components/Guests/AddNewGuest"; // Import AddNewGuest component
import ShowAllGuests from "./components/Guests/ShowAllGuests"; // Import ShowAllGuests component
import EditGuest from "./components/Guests/EditGuest"; // Import EditGuest component
import "./App.css";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]); // Initialize guests state

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
        <Route
          path="/guests"
          element={<GuestManagement guests={guests} setGuests={setGuests} />}
        />
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
      </Routes>
    </Router>
  );
};

export default App;
