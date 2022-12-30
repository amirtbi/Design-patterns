// Builder pattern

interface IBuilder {
  setSeats(seats: number): this;
  setColor(color: string): this;
  setDoor(doors: number): this;
}

class Car {
  public seats: number;
  public color: string;
  public doors: number;

  constructor(CarBuilder: Builder) {
    this.seats = CarBuilder.seats;
    this.color = CarBuilder.color;
    this.doors = CarBuilder.doors;
  }
}

class Builder implements IBuilder {
  // Fields
  public doors: number;
  public seats: number;
  public color: string;

  setSeats(seats: number): this {
    this.seats = seats;
    return this;
  }

  setColor(color: string): this {
    this.color = color;
    return this;
  }

  setDoor(doors: number): this {
    this.doors = doors;
    return this;
  }

  build(): Car {
    return new Car(this);
  }
}

// Build  a Car

const car1 = new Builder().setSeats(4).setColor("red").setDoor(2).build();

console.log("Car build instance", car1);

//Build a Car with 4 doors and black color

const car2 = new Builder().setSeats(4).setColor("black").setDoor(4).build();

console.log("Car build instance 2", car2);
