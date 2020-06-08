// Constructor functions
function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}

let vehicle = new Car(123);

vehicle.start();

// JSON
let jsonIn = `
[
    {"carId": 123},
    {"carId": 456},
    {"carId": 789}
]`;

let carIds = JSON.parse(jsonIn); // convert to objects
console.log(carIds);
console.log();
console.log(JSON.stringify(carIds)); // convert to JSON format