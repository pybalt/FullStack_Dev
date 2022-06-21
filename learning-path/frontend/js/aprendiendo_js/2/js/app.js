"use strict"
/* Un JSON es un objeto de JavaScript. Su funcionalidad es muy parecida a un diccionario, pero en lugar de ser un diccionario, es un objeto.
Para crear un JSON, podemos utilizar la funcion JSON.parse(). Un JSON debe de estar en una cadena de texto. */
var persona = { nombre: "Juan", edad: 30 };
var personaString = JSON.stringify(persona);
console.log(personaString);
/* JSON.parse() toma una cadena de texto y la convierte en un objeto. */


var personaJSON = JSON.parse(personaString); /* Asi es como llega al servidor*/
console.log(personaJSON);


/* Podemos guardar varios objetos dentro de un JSON, deben de hacerse en el siguiente formato>>>*/
var personas = [ 
{ nombre: "Juan", edad: 30 }, 
{ nombre: "Pedro", edad: 25 },
{ nombre: "Ana", edad: 20 } ]; 
var personasString = JSON.stringify(personas);
var personasJSON = JSON.parse(personasString);
console.log(personasJSON);

/* Tambien podemos acceder a un objeto dentro de JSON*/
console.log(personasJSON[0]);
console.log(personasJSON[1]);
console.log(personasJSON[2]);
/* Podemos acceder a un atributo dentro de un objeto, dentro de JSON*/
console.log(personasJSON[0].nombre);
console.log(personasJSON[1].edad);
/* Siempre que necesitemos guardar datos, JSON es la manera ideal para intercambiar datos, ya sea en nuestra aplicacion
o servicios externos.*/