"use strict"; /* Este modo de escritura es más estricto y obliga a que todo el código sea escrito de tipado fuerte.
El modo estricto te impide utilizar código que no está definido en el código. Por ejemplo, si intentas utilizar una variable que no está definida, el código no funcionará.
Ademas, el modo estricto te impide utilizar palabras reservadas como var, let, const, public, etc. */

alert('Hola desde un archivo externo');

console.log("Hola consola")
// Esto es un comentario
// Las variables pueden ser de alcance regional o global, y ademas pueden reescribirse.
var nombre = "Juan";
console.log(nombre);
function saludar() {
    var nombre = "Pedro";
    console.log("Hola, ", nombre);
}
saludar();
console.log(nombre);
var nombre = "Pedro";
console.log(nombre);

//////////////////////////////////////////////
/* Podemos utilizar el operador LET con la misma funcion que declarar una var dentro de un bloque.
El operador LET creara una variable con alcance regional. Ademas, es mas correcto sintaxicamente, de manera que podria ser 
una buena practica. */ 
var nombre = "Juan";
function saludar() {
    let nombre = "Pedro";
    console.log("Hola, ", nombre);
    let edad = 30;
    console.log("Tu edad es ", edad, " años");
}
saludar();
console.log(nombre); /* Deberia de ser Juan, ya que la variable global nombre no esta definida dentro de la funcion saludar.
>>> console.log(edad);  Esto no funcionaría, ya que la variable edad no esta definida dentro de la funcion saludar. */

//////////////////////////////////////////////
/* Podemos utilizar el operador CONST para declarar una variable que no puede ser reescrita. */
const PI = 3.1416;
console.log(PI); /*
>>> PI = 3.14; // Esto no funcionaría, ya que la variable PI es de tipo constante.
>>> console.log(PI); */
/////////////////////////////////////////////////
/* Existen variables de distintos tipos, string, float, integer... */
var nombre = "Juan"; /* String */
var edad = 30; /* Integer */
var sueldo = 12.5; /* Float */
var casado = false; /* Boolean */
var hijos = null; /* Null */
var mascotas = undefined; /* Undefined */
var fechaNacimiento = new Date(); /* Date */
var direccion = { calle: "Calle falsa", numero: 123 }; /* Object */
var mascotas = ["Perro", "Gato", "Conejo"]; /* Array */
/* Los diccionarios no son iguales a PYTHON. */
// Dentro de los numeros, tenemos distintos tipos de datos. Podemos convertirlos con diferentes funciones.
var numero = "12";
console.log(numero+12); /* Se imprimira la var numero, que sera un string, por lo tanto no podremos
hacer operaciones con ella*/
console.log(parseInt(numero)+1); /* Convertimos el string a integer */ 
console.log(parseFloat(numero)+0.5); /* Convertimos el string a float */
/////////////////////////////////////////////////////////////////////////////////////////////
