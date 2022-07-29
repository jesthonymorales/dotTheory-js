const secPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 30;
const secsAlive = secPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearsAlive;
console.log(`I've been alive for more than ${secsAlive} seconds.`);