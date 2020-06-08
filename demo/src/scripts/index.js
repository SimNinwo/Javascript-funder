// ARRAYS
let carIds = [
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' }
];

// ForEach method
carIds.forEach(
    car => console.log(car));

carIds.forEach(
    (car, index) => console.log(car, index));

// Array filtering
let convertibles = carIds.filter(
    car => car.style === 'convertible'
);
console.log(convertibles);

// checks if all element in the array 
// fulfills the conditon (true or false)
let result = carIds.every(
    car => car.carId > 0
);
console.log(result);

// returns the first result that matches the condition
let car = carIds.find(
    car => car.carId > 500
);
console.log(car);