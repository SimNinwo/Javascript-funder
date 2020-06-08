// PROMISE
let promise = new Promise(
    function(resolve, reject) {
        setTimeout(resolve, 100, 'someValue');
    }
);

//console.log(promise);
promise.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('rejected: ' + error)
);
// NB: used for asynchronous calls and methods