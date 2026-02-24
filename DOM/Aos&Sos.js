// Synchronous 
// Excite oune at a time
console.log('Open BMS');
console.log('Search movies');
console.log('select time');
console.log('select seat');
console.log('Book ticket');

setTimeout ( () => {
    console.log('open Bms'); }, 1000);
setTimeout ( () => {
    console.log('Search movies'); }, 5000);

setTimeout ( () => {
    console.log('select Time'); }, 3000);

    setTimeout ( () => {
    console.log('select seat'); }, 8000);
setTimeout ( () => {
    console.log('BookTicket'); }, 2000);