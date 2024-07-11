// SOLUCION PROBLEMA 1: Resta
function subAlg(a: number, b: number): number {
    let value = 0;
    while (a > b) {
        b++;
        value++;
    }
    return value;
}

// SOLUCION PROBLEMA 2: Multiplicar
function mulAlg(a: number, b: number): number {
    let value = 0;
    while (a > 0) {
        a--;
        value += b;
    }
    return value;
}

// SOLUCION PROBLEMA 3: Dividir
function divAlg(a: number, b: number): number {
    let value = 0;
    while (a >= b) {
        value++;
        a -= b;
    }
    return value;
}

// SOLUCION PROBLEMA 4: Potencia
function powAlg(a: number, b: number): number {
    let value = 1;
    while (b > 0) {
        value *= a;
        b--;
    }
    return value;
}

// SOLUCION PROBLEMA 5: Factorial
function factAlg(a: number): number {
    let value = 1;
    for (let i = 1; i <= a; i++) {
        value *= i;
    }
    return value;
}

// Verificar si un número es primo
function verifyPrime(number: number): void {
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) prime = false;
    }
    console.log(number, prime ? 'is prime' : 'is not prime');
}

// Verificar si un número es perfecto
function verifyPerfect(number: number): void {
    let value = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) value += i;
    }
    console.log(number, value === number ? 'is perfect' : 'is not perfect');
}

// Verificar si dos números son amigos
function verifyFriends(a: number, b: number): void {
    let sumA = 0;
    for (let i = 1; i <= a/2; i++) {
        if (a % i == 0) sumA += i;
    }
    let sumB = 0;
    for (let i = 1; i <= b/2; i++) {
        if (b % i == 0) sumB += i;
    }
    console.log(a, b, (sumA === b && sumB === a) ? 'are friends' : 'are not friends');
}

// Verificar si un numero es guay
function verifyGuay(number: number): boolean {
    let sum = 0;
    let start = 1;

    while (sum < number) {
        sum += start;
        if (sum === number) {
            return true;
        }
        start++;
    }

    return false;
}

// Ejecucion de pruebas
console.log('5 - 1 =', subAlg(5, 1));
console.log('2 x 3 =', mulAlg(2, 3));
console.log('7 / 3 =', divAlg(7, 3));
console.log('2^3 =', powAlg(2, 3));
console.log('5! =', factAlg(5));
verifyPrime(5);
verifyPrime(4);
verifyPerfect(6)
verifyPerfect(29)
verifyFriends(220,284)
verifyFriends(30, 42)
console.log(verifyGuay(10))
console.log(verifyGuay(7))