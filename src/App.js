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
import EmployeeManagement from "./components/Employees/EmployeeManagement";
import Credits from "./components/Credits";
import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import "./App.css";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainMenu />} />

        {/* Routes for Room Management */}
        <Route
          path="rooms"
          element={<RoomManagement rooms={rooms} setRooms={setRooms} />}
        />
        <Route
          path="rooms/add-new-room"
          element={<AddNewRoom rooms={rooms} setRooms={setRooms} />}
        />
        <Route
          path="rooms/show-all-rooms"
          element={<ShowAllRooms rooms={rooms} />}
        />
        <Route
          path="rooms/edit-room"
          element={<EditRoom rooms={rooms} setRooms={setRooms} />}
        />

        {/* Routes for Guest Management */}
        <Route
          path="guests"
          element={<GuestManagement guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="guests/add-new-guest"
          element={<AddNewGuest guests={guests} setGuests={setGuests} />}
        />
        <Route
          path="guests/show-all-guests"
          element={<ShowAllGuests guests={guests} />}
        />
        <Route
          path="/edit-guest"
          element={<EditGuest guests={guests} setGuests={setGuests} />}
        />

        {/* Routes for Reservation Management */}
        <Route
          path="reservations"
          element={
            <ReservationManagement
              reservations={reservations}
              setReservations={setReservations}
            />
          }
        />

        {/* Routes for Employee Management */}
        <Route
          path="employees"
          element={
            <EmployeeManagement
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        {/* Route for Credits */}
        <Route path="credits" element={<Credits />} />
      </Routes>
    </Router>
  );
};

export default App;
