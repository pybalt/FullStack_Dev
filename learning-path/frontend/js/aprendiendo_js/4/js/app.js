// Las IF Statements se escriben con la siguiente sintaxis:
// if (condicion) {
//     // codigo a ejecutar si la condicion es verdadera
// }
// else if (condicion 2) {
//     // codigo a ejecutar si la condicion es falsa
// }
// else {
//     // codigo a ejecutar si ninguna de las condiciones anteriores es verdadera
// }

function termometro(temperatura){
    if(temperatura>=19){
        var respuesta= 'Sera un lindo dia';

    }   else if(temperatura<=19 && temperatura>0){
        var respuesta= 'Sera un dia frio';
    }   else{ // else NO puede contener una condicion.
        var respuesta= 'Estara congelado'
    }
    return respuesta;
}
// Podemos anidar condiciones, pero no es recomendable.
// Crearemos una funcion con una condicion anidada.
function termometro(temperatura){
    if(temperatura>=19){
        var respuesta= 'Sera un lindo dia';
        if(temperatura>=30){
            respuesta= 'Sera demasiado caluroso';
        }
    }
    else if(temperatura<=19 && temperatura>0){
        var respuesta= 'Sera un dia frio';
    }
    else{
        var respuesta= 'Estara congelado'
    }
    return respuesta;
}
/////////////// Tambien existe algo llamado Switch ///////////////
// Switch es una forma de evaluar una condicion.
// switch (condicion) {
//     case valor1:
//         // codigo a ejecutar si la condicion es verdadera
//         break;
//     case valor2:
//         // codigo a ejecutar si la condicion es verdadera
//         break;
//     default:
//         // codigo a ejecutar si ninguna de las condiciones anteriores es verdadera
//         break;
// }
function llamadaSwitch(){
    var dia= prompt('Ingrese el dia de la semana');
    switch (dia) {
        case 'lunes':
            alert('Es lunes');
            break;
        case 'martes':
            alert('Es martes');
            break;
        case 'miercoles':
            alert('Es miercoles');
            break;
        case 'jueves':
            alert('Es jueves');
            break;
        case 'viernes':
            alert('Es viernes');
            break;
        case 'sabado':
            alert('Es sabado');
            break;
        case 'domingo':
            alert('Es domingo');
            break;
        default:
            alert('No es un dia de la semana');
            break;
    }
}