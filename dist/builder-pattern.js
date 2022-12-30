"use strict";
// Builder pattern
class Car {
    constructor(CarBuilder) {
        this.seats = CarBuilder.seats;
        this.color = CarBuilder.color;
        this.doors = CarBuilder.doors;
    }
}
class Builder {
    setSeats(seats) {
        this.seats = seats;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setDoor(doors) {
        this.doors = doors;
        return this;
    }
    build() {
        return new Car(this);
    }
}
// Build  a Car
const car1 = new Builder().setSeats(4).setColor("red").setDoor(2).build();
console.log("Car build instance", car1);
//Build a Car with 4 doors and black color
const car2 = new Builder().setSeats(4).setColor("black").setDoor(4).build();
console.log("Car build instance 2", car2);
//# sourceMappingURL=builder-pattern.js.map