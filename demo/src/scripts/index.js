// Timers
// 1. intervals
let intervalId = setInterval(function() {
    console.log('1 second passed');
}, 1000);

// if need to cancel...
clearInterval(intervalId);

// 2. once Timeout
let timeoutId = setTimeout(function() {
    console.log('just once');
}, 1000);

// if need to cancel...
// clearTimeout(timeoutId);