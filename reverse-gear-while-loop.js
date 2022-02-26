function newFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;

}
const ourFactorial = newFactorial(9);
console.log('ohho this is our factorial', ourFactorial);