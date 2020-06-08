// // Javascript error
// try {
//     // code here...
//     let car = newCar;
// } catch (error) {
//     console.log('error: ', error);
// } finally {
//     console.log('this always executes');
// }

// Custom error
try {
    // code here...
    throw new Error('my custom error');
} catch (error) {
    console.log('error: ', error);
} finally {
    console.log('this always executes');
}