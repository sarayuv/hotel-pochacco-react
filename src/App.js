import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomManagement from "./components/RoomManagement";
import AddNewRoom from "./components/AddNewRoom";
import ShowAllRooms from "./components/ShowAllRooms";
import EditRoom from "./components/EditRoom";
import "./App.css";

const App = () => {
  const [rooms, setRooms] = useState([]);

  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
};

export default App;
