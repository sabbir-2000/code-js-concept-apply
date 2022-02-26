function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(9);
console.log('omama!!! dekho dekho factorial of 7 is...', firstFactorial);
var secondFactorial = getFactorial(8);
console.log('yahoo!! factorial 8 is..', secondFactorial);