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

export default Reservation;
