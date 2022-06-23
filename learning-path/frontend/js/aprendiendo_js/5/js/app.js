/* Este codigo trata sobre arreglos multidimensionales.
* Un arreglo multidimensional no es mas que un arreglo que contiene tantos
* arreglos como dimensiones.
* Por ejemplo => array2Dimensiones = [ Dimension1[], Dimension2[] ] 
*/
var aPrimeraDimension = [0, 1, 2, 3]
var aSegundaDimension = [0, 1, 2, 3]

var aArregloDosDimensiones = [aPrimeraDimension, aSegundaDimension]
/* Para acceder al contenido de un arreglo multimensional, 
* debemos indicar el index de la dimension
* y luego debemos indicar el index del elemento
* dentro de la dimension seleccionada
*/
console.log(aArregloDosDimensiones)
console.log(aArregloDosDimensiones[0][1])
console.log(aArregloDosDimensiones[0][3])
console.log(aArregloDosDimensiones[1][3])
