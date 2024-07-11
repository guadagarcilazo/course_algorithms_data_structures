"use strict";
// SOLUCION PROBLEMA 1: Resta
function subAlg(a, b) {
    let value = 0;
    while (a > b) {
        b++;
        value++;
    }
    return value;
}
// SOLUCION PROBLEMA 2: Multiplicar
function mulAlg(a, b) {
    let value = 0;
    while (a > 0) {
        a--;
        value += b;
    }
    return value;
}
// SOLUCION PROBLEMA 3: Dividir
function divAlg(a, b) {
    let value = 0;
    while (a >= b) {
        value++;
        a -= b;
    }
    return value;
}
// SOLUCION PROBLEMA 4: Potencia
function powAlg(a, b) {
    let value = 1;
    while (b > 0) {
        value *= a;
        b--;
    }
    return value;
}
// SOLUCION PROBLEMA 5: Factorial
function factAlg(a) {
    let value = 1;
    for (let i = 1; i <= a; i++) {
        value *= i;
    }
    return value;
}
// Verificar si un número es primo
function verifyPrime(number) {
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            prime = false;
    }
    console.log(number, prime ? 'is prime' : 'is not prime');
}
// Ejecucion de pruebas
console.log('5 - 1 =', subAlg(5, 1));
console.log('2 x 3 =', mulAlg(2, 3));
console.log('7 / 3 =', divAlg(7, 3));
console.log('2^3 =', powAlg(2, 3));
console.log('5! =', factAlg(5));
verifyPrime(5);
verifyPrime(4);
