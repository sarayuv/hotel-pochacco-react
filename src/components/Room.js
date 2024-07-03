class Room {
  constructor(id, floor, capacity, description, price) {
    this.id = id;
    this.floor = floor;
    this.capacity = capacity;
    this.description = description;
    this.price = price;
  }

  print() {
    console.log(`Room ID: ${this.id}`);
    console.log(`Floor: ${this.floor}`);
    console.log(`Capacity: ${this.capacity}`);
    console.log(`Description: ${this.description}`);
    console.log(`Price: ${this.price}`);
  }
}

export default Room;
