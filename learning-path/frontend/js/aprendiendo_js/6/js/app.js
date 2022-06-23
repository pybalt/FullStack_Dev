"use strict"
/* En este codigo vamos a generar arreglos con las siguientes funciones:
* split()
* from()
* of()
*/

//? * El metodo Array.from() crea un array a partir de elementos.
var aPElementosHTML = Array.from(document.querySelectorAll(".list p")); // ! Crea un ARRAY a partir del querySelector.
var aContenidoPHTML = aPElementosHTML.map(callback => callback.textContent); //! Vamos a buscar el contenido de los elementos <p>
console.log(aContenidoPHTML)

// *====================================================*

//? * Tambien podemos crear un array a partir de un string.
var aFromString = "Este string va a ser un array".split(' ') //! => El metodo split contiene el separador como argumento. 
// aFromString = [ "Este", "string", "va", "a", "ser", "un", "array" ]
console.log(aFromString)

// *====================================================*

//? * Este metodo crea un array a partir de los elementos proporcionados como argumento.
var aFromOfMethod = Array.of("Este string tambien sera un array, pero con otro metodo", "Elemento 1") 
// aFromOfMethod = ["Este string tambien sera un array, pero con otro metodo", "Elemento 1"]
console.log(aFromOfMethod)