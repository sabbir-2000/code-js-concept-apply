function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
const myYear = 2251;
const myLeapyear = isLeapYear(myYear);
console.log('yah my leaper', myLeapyear);

const herYear = 2024;
const herLeapYear = isLeapYear(herYear);
console.log('her leapYear will be wow!!', herLeapYear);