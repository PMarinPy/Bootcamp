/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide 2 números y realice las operaciones de suma, resta, multiplicación y 
división y muestra los resultados de forma ordenada en pantalla.*/
const prompt = require('prompt-sync')()

let num1 = parseFloat(prompt('Ingrese el primer número: '));
let num2 = parseFloat(prompt('Ingrese el segundo número: '));

console.log(`Suma: ${num1 + num2}\nResta: ${num1 - num2}\nMultiplicación: ${num1 * num2}\nDivisión: ${num1 / num2}\n`)
//impotime los resultados respectivos insertando en el string las operaciones.