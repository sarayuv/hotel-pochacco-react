import "./App.css";
import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import RoomManagement from "./components/RoomManagement";
import GuestManagement from "./components/GuestManagement";
import ReservationManagement from "./components/ReservationManagement";
import EmployeeManagement from "./components/EmployeeManagement";

function App() {
  const [section, setSection] = useState("main");

  let content;
  switch (section) {
    case "rooms":
      content = <RoomManagement setSection={setSection} />;
      break;
    case "guests":
      content = <GuestManagement setSection={setSection} />;
      break;
    case "reservations":
      content = <ReservationManagement setSection={setSection} />;
      break;
    case "employees":
      content = <EmployeeManagement setSection={setSection} />;
      break;
    default:
      content = <MainMenu setSection={setSection} />;
  }

  return <div className="App">{content}</div>;
}

export default App;
