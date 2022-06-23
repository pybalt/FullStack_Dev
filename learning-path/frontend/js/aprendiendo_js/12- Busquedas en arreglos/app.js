/* Este codigo consiste en busquedas en arreglos
* for in => for (element in Array){}
* for each => Array.forEach( (element, index) => console.log(index, element) )
* Array.find( callback )
* Array.findIndex( callback )
* Array.filter()
* Array.map()
* Array.some()
* Array.every()
*/
aArray1 = [1,2,1,3,4,0]
aArray2 = [
    {
        id:00,
        estado: "Titulo",
        nombre:"Titulo del Array",
    },
    {
        id:01,
        estado: "Elemento",
        nombre:"Elemento 1"
    },
    {
        id:02,
        estado: "Elemento",
        nombre:"Elemento 2"
    }
]

// ! for in es un bucle simplificado for.
for (const element in aArray1) {
    console.log(element)
}
for (const key in aArray2) {
    console.log(aArray2[key].nombre)
}
// ! for each es un bucle for que recibe un callback.
aArray1.forEach(element => {element+=1, console.log(element)})
aArray2.forEach(element => {
    console.log(element.nombre)
});
// ! Array.find es un metodo que debe recibir un callback. 
// ! Se encarga de traer el elemento con coincidencias.
var busquedaFind = aArray1.find( element => element === 1)
console.log(busquedaFind)
var busquedaFind = aArray2.find(element => element.nombre === "Elemento 1")
console.log(busquedaFind)
// ! Array.findIndex tambien recibe un callback.
// ! Se encarga de traernos el indice del elemento que matchee la busqueda.
var busquedaFind = aArray1.findIndex(element => element == "2") // i=1
console.log(busquedaFind)
var busquedaFind = aArray2.findIndex(element => element.nombre == "Elemento 2") // i=2
console.log(busquedaFind)
// ! Array.filter crea un nuevo array a partir de un filtro realizado a uno preexistente. 
var busquedaFiltro = aArray2.filter(element => element.estado == "Elemento")
console.log(busquedaFiltro)
// ! Array.map crea un nuevo array a partir de realizarle un callback 
// ! a cada elemento de un array preexistente.
var mapElementos = aArray1.map(element => Math.sqrt(element))
console.log(mapElementos)
// * Podemos usar map para reformatear un objeto.
// ! Array.some() es un metodo que responde con un booleano, si es que existe AL MENOS UN elemento
// ! que matchea con el callback.
var existeUnElementoTrue = aArray1.some(element => element ==1) //*True
var existeUnElementoFalse = aArray1.some(element => element == -2 ) //* False
console.log(existeUnElementoTrue, existeUnElementoFalse) //* True, false
// ! Array.every() es un metodo que responde con un booleano, si TODOS los elementos
// ! Matchean con el callback.
var todosLosElementoTrue = aArray1.every(element => element >= -1) //*True
var todosLosElementoFalse = aArray1.every(element => element >= 2 ) //* False
console.log(todosLosElementoTrue, existeUnElementoFalse)