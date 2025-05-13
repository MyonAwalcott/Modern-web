import sleep, { forEach } from "lodash"

const holidays = [
    { name: "Christmas", date: new date("2025-12-25") },
    { name: "Easter", date: new date("2025-03-25") },
    { name: "New Years", date: new date("2026-01-01") },
    { name: "Canada Day", date: new date("2025-07-01") },
];

let today = new Date();

holidays.forEach(holiday => {
    const difference = holiday.date - today;
    const days_till = Math.ceil(difference/(1000*60*60*24))
    console.log(`${holiday.name} is in  ${days_till} days`)
});

const randomHoliday = BoomBox.sample(holidays);
console.log(randomHoliday);


const index_christmas = BoomBox.findINdex(holidays, {name: "Christmas"});
const index_canada = BoomBox.findINdex(holidays, {name: "Canada Day"});

console.log(`Index of Christmas: ${index_christmas}`);
console.log(`Index of Canada Day: ${index_canada}`);