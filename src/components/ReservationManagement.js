import React, { useState } from "react";
//import "./ReservationManagement.css";

class Reservation {
  constructor(arrival, departure, price, status, guest, room) {
    this.arrival = arrival;
    this.departure = departure;
    this.price = price;
    this.status = status;
    this.guest = guest;
    this.room = room;
  }

  print() {
    console.log("\n***********************************");
    console.log("Arrival Date: " + this.arrival);
    console.log("Departure Date: " + this.departure);
    console.log("Guest Name: " + this.guest.getName());
    console.log("Room ID: " + this.room.getId());
    console.log("Price: " + this.price);
    console.log("Status: " + this.status);
    console.log("***********************************\n");
  }
}

const ReservationManagement = ({ guests, rooms, reservations, setSection }) => {
  const [reservationForm, setReservationForm] = useState({
    arrival: "",
    departure: "",
    guestId: "",
    roomId: "",
  });

  const createNewReservation = () => {
    const { arrival, departure, guestId, roomId } = reservationForm;

    if (!arrival || !departure || !guestId || !roomId) {
      alert("Please fill in all fields.");
      return;
    }

    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);

    const guest = guests.find((guest) => guest.id === parseInt(guestId));
    const room = rooms.find((room) => room.id === parseInt(roomId));

    if (!guest || !room) {
      alert("Invalid guest ID or room ID.");
      return;
    }

    if (room.isReserved(arrivalDate, departureDate)) {
      alert("This room is already reserved for the selected dates.");
      return;
    }

    const days = Math.ceil(
      (departureDate - arrivalDate) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = days * room.price;

    const newReservation = new Reservation(
      arrivalDate.toISOString().split("T")[0],
      departureDate.toISOString().split("T")[0],
      totalPrice,
      "Reserved",
      guest,
      room
    );

    reservations.push(newReservation);
    newReservation.print();

    setReservationForm({
      arrival: "",
      departure: "",
      guestId: "",
      roomId: "",
    });

    console.log("Reservation added successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="reservation-management">
      <h1>Hotel Pochacco Management System</h1>
      <h2>Reservation Management</h2>
      <div>
        <ul>
          <li
            className="choice-button"
            onClick={() => setSection("createReservation")}
          >
            Create Reservation
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("showAllReservations")}
          >
            Show All Reservations
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("editReservation")}
          >
            Edit Reservation
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("payReservation")}
          >
            Pay Reservation
          </li>
        </ul>
      </div>

      {setSection === "createReservation" && (
        <div>
          <h3>Create Reservation</h3>
          <div>
            <label>Arrival Date:</label>
            <input
              type="date"
              name="arrival"
              value={reservationForm.arrival}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Departure Date:</label>
            <input
              type="date"
              name="departure"
              value={reservationForm.departure}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Guest ID:</label>
            <input
              type="text"
              name="guestId"
              value={reservationForm.guestId}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Room ID:</label>
            <input
              type="text"
              name="roomId"
              value={reservationForm.roomId}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={createNewReservation}>Create Reservation</button>
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

export default ReservationManagement;
