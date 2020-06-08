// CLASSES IN JAVASCRIPT
class Car {
    constructor(id) {
        this.id = id;
    }
    identify() { // METHOD
        return `Car Id: ${this.id}`;
    }
}

let car = new Car(123);
console.log(car.id);

car.id = 456;
console.log(car.identify());