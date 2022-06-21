var aPrimerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var aSegundoArray = [20, 33, 66, 99, 11, 22, 44, 55, 77, 88];

const NumerosPares = (number) => number % 2 === 0;
const NUMEROS_PARES = aPrimerArray.filter( NumerosPares ); // this returns an array with the even numbers
const NUMEROS_PARES_2 = aPrimerArray.filter( function (number) { return number % 2 === 0; } ); // this is the same as the previous line
const NUMEROS_PARES_3 = aSegundoArray.filter( (number) => number % 2 === 0 );

console.log(NUMEROS_PARES, NUMEROS_PARES_3);

const RAICES = aPrimerArray.map( (number) => Math.sqrt(number) ); // this returns an array with the square roots of the numbers
console.log(RAICES)
