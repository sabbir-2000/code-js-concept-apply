// const number = 4;
// const remainder = number % 2;
// // console.log(4 % 2);
// console.log(remainder == 0);
// ...eivabe kora jay...//
// console.log(number % 2 == 0);
const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        console.log('yah mama!!!')
        return true;
    }
    return false;

}
const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('this is right number', isMyNumberEven
// );
const herNumber = 1820;
// const isHerNumberEven = isEven(herNumber);
// console.log('wow wow wow!!', isHerNumberEven);

// sorto again odd number.
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const hisNumber = 254;
const isHisNumberOdd = isOdd(hisNumber);
console.log('his number is not even', isHisNumberOdd);