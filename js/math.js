const secondsPerMin = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weekPerYear = 52;

const secondsPerDay = secondsPerMin * minutesPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const secondsPerMonth = secondsPerDay * daysPerWeek * 4;
console.log(`There are ${secondsPerMonth} seconds per month.`);