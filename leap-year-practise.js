function isLeapYear(year) {
    if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
        return true;
    }
    return false;
}
const meraLeapYear = isLeapYear(2036);
console.log('tera leapyear is mera leapyear', meraLeapYear);
// 1900-false,2000-true,18000-true,2062-false