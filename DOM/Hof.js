function order(callprepare)
{
    console.log("cofferOrders");
    callprepare();
    callprepare();
}
function prepare()
{
    console.log("start prepareation");
    
}
order(prepare);

// arr = [1, 2, 3];
// map(arr, (num) => num * num);
// arr = [1, 9];
// Filter(arr, (n) => n % 2!==0);
// reduce(arr, (num) => num + num);

const numbers = [1, 2, 3, 4, 5, 6];
// Step1:- Double each number
const doubled = numbers.map(num => num * 2);

// step2:- keep only numbers grater than 5
const filtered = doubled.filter(num => num > 5);

// step 3:- find the sum of remaining numbers
const total = filtered.reduce((sum, num) => sum + num, 0);

console.log("Doubled:", doubled); // [2, 4, 6, 8, 10, 12]
console.log("Filtered:", filtered); // [6, 8, 10,12]
console.log("Total:", total);   //36


