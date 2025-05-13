import lodash from "lodash";
// Destructure all the lodash methods you intend to use

const holidays = [
    { name: "Christmas", date: new Date("2025-12-25") }, // Capital D
    { name: "Easter", date: new Date("2025-04-20") },    // Capital D 
    { name: "New Years", date: new Date("2026-01-01") },  // Capital D
    { name: "Canada Day", date: new Date("2025-07-01") }, // Capital D
];

let today = new Date(); // Capital D and no underscore

// This forEach is the native Array.prototype.forEach, which is perfectly fine here.
// If you wanted to use lodash's forEach, it would be: lodash.forEach(holidays, holiday => { ... });
holidays.forEach(holiday => {
    const difference = holiday.date - today; // date subtraction gives milliseconds
    const days_till = Math.ceil(difference / (1000 * 60 * 60 * 24));
    console.log(`${holiday.name} is in ${days_till} days`);
});

// Use the destructured 'sample' function from Lodash
const randomHoliday = lodash.sample(holidays);
console.log("Random holiday:", randomHoliday); // Added a label for clarity

// Use the destructured 'findIndex' function from Lodash with correct casing
const index_christmas = lodash.findIndex(holidays, { name: "Christmas" });
const index_canada = lodash.findIndex(holidays, { name: "Canada Day" });

console.log(`Index of Christmas: ${index_christmas}`);
console.log(`Index of Canada Day: ${index_canada}`);

// Example of using 'delay' if you need it:
// delay(() => {
//   console.log("This message was delayed by 1 second using lodash.delay");
// }, 1000);