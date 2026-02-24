// Promise
p = new Promise((resolve, reject) => {
    app = "BMS"
    if(app === "BMS")
        resolve("1. open BMS");
    else
        reject("Please Consider BMs not found");
})
p.then(() => {
    console.log("2. search movies");
})
.then(() => {
    console.log('3. select seat');
    
})
.then(() => {
    console.log('4. Ticket booked');
})
.catch((e) => {
    console.log(e.message);
    
})
.finally(() => {
    console.log("close BMS App");
});
