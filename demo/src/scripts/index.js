// using Rest Parameters
function sendCars(day, ...carIds) {
    carIds.forEach(id => console.log(id));
}

sendCars('Monday', 1, 2, 3);

// Destructuring Arrays
let carId1s = [100, 200, 300, 400, 500];
let car1, car2, remainigCars;

[car1, car2, ...remainigCars] = carId1s;

console.log(car1, car2, remainigCars);

// Destructuring objects
let car = {
    id: 5000,
    style: 'convertible'
};

({ id, style } = car);

console.log(id, style);

// Spread Syntax
function startCars(car1, car2, car3, ...remainingCars) {
    console.log(rest);
}

let cars = [1, 2, 3, 4, 5, 6];

startCars(...cars);