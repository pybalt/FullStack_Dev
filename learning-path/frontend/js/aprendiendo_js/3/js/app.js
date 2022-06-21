/* Veremos OPERADORES */

/////////////// OPERADORES ARITMETICOS //////////////////
// Existen los operadores de suma, resta, multiplicacion, division, modulo, exponenciacion, decremento y incremento.
var numero1 = undefined;
var numero2 = undefined;
var resultado = undefined;
/* Suma */ 
function sumar(numero1, numero2){
    resultado = numero1 + numero2;
    return resultado;
}
/* Resta */
function restar(numero1, numero2){
    resultado = numero1 - numero2;
    return resultado;
}
/* Multiplicacion */
function multiplicar(numero1, numero2){
    resultado = numero1 * numero2;
    return resultado;
}
/* Division */
function dividir(numero1, numero2){
    resultado = numero1 / numero2;
    return resultado;
}
/* Modulo */
function modulo(numero1, numero2){
    resultado = numero1 % numero2;
    return resultado;
}
/* Exponenciacion */
function exponenciar(numero1, numero2){
    resultado = numero1 ** numero2;
    return resultado;
}
/* Decremento */
function decrementar(numero1){
    numero1--;
    return numero1;
}
/* Incremento */
function incrementar(numero1){
    numero1++;
    return numero1;
}

///////////////////////////////// OPERADORES RELACIONALES ///////////////////////////////////
// Crearemos funciones booleanas a partir de los operadores relacionales. //
/* Igualdad */
function igual(numero1, numero2){
    resultado = numero1 == numero2;
    return resultado;
}
/* Desigualdad */
function desigual(numero1, numero2){
    resultado = numero1 != numero2;
    return resultado;
}
/* Mayor que */
function mayorQue(numero1, numero2){
    resultado = numero1 > numero2;
    return resultado;
}
/* Menor o igual que */
function menorOIgualQue(numero1, numero2){
    resultado = numero1 <= numero2;
    return resultado;
}
/* Mayor o igual que */
function mayorOIgualQue(numero1, numero2){
    resultado = numero1 >= numero2;
    return resultado;
}
 /* No es igual / Es diferente */
 function esDiferente(numero1, numero2){
     resultado = numero1 != numero2;
     return resultado;
 }

///////////////////////////////// OPERADORES LOGICOS ///////////////////////////////////
/* Operador logicos AND */
function logicosAnd(numero1, numero2){
    resultado = numero1 && numero2; // Puede reemplazarce por numero1 and numero2;
    return resultado;
}
/* Operador logicos OR */
function logicosOr(numero1, numero2){
    resultado = numero1 || numero2; // Puede reemplazarce por numero1 or numero2;
    return resultado;
}
/* Operador logicos NOT */
function logicosNot(numero1){
    resultado = !numero1; // Puede reemplazarce por not numero1;
    return resultado; // El operador not se usa para negar un valor.
}

///////////////////////////////// OPERADORES TERNARIOS ///////////////////////////////////
/* Operador ternario */
function ternario(numero1, numero2){
    // Si numero1 es mayor que numero2, entonces el resultado sera true, de lo contrario sera false.
    resultado = numero1 > numero2 ? true : false;
    return resultado;
}
///////////////////////////////// OPERADORES DE ASIGNACION //////////////////////////////////
/* Asignacion simple */
function asignacionSimple(numero1, numero2){
    resultado = numero1 = numero2;
    return resultado;
}
/* Asignacion con incremento */
function asignacionIncremento(numero1, numero2){
    resultado = numero1 += numero2;
    return resultado;
}
/* Asignacion con decremento */
function asignacionDecremento(numero1, numero2){
    resultado = numero1 -= numero2;
    return resultado;
}
/* Asignacion con multiplicacion */
function asignacionMultiplicacion(numero1, numero2){
    resultado = numero1 *= numero2;
    return resultado;
}
/* Asignacion con division */
function asignacionDivision(numero1, numero2){
    resultado = numero1 /= numero2;
    return resultado;
}
/* Asignacion con modulo */
function asignacionModulo(numero1, numero2){
    resultado = numero1 %= numero2;
    return resultado;
}
/* Asignacion con exponenciacion */
function asignacionExponenciacion(numero1, numero2){
    resultado = numero1 **= numero2;
    return resultado;
}
