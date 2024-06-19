/**
 * La función hipotecaSalvaje devuelve la cantidad de dinero que pide el banco de entrada para pedir una hipoteca.
 * 
 * Si la persona es mayor de 40 años pide 50000 de entrada, si es menor pide 30000
 * 
 * Modifica el cuerpo de la función para utilizar el operador ternario y conseguir el mismo resultado
 */

function hipotecaSalvaje(edad) {
    return edad > 40 ? 50000 : 30000
}

// Caso de prueba 1: Edad mayor a 40
// Entrada: 45
// Salida esperada: 50000
let resultado1 = hipotecaSalvaje(45);
console.log(`Resultado para edad 45: ${resultado1}`); // Resultado para edad 45: 50000
// El valor esperado es 50000 porque la edad es mayor a 40.

// Caso de prueba 2: Edad igual o menor a 40
// Entrada: 30
// Salida esperada: 30000
let resultado2 = hipotecaSalvaje(30);
console.log(`Resultado para edad 30: ${resultado2}`); // Resultado para edad 30: 30000
// El valor esperado es 30000 porque la edad es igual o menor a 40.
