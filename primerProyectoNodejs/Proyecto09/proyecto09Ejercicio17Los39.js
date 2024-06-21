/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide imprime las tablas del 1 al 10 completas.*/
const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    let j = i + 1;
    // El segundo ciclo for se ejecuta para los valores k desde i * 2 hasta (i * 2) + 2,
    // pero solo si k es menor que 10. k < (i * 2) + 2 ejecute solo dos veces para cada valor de i
    for (let k = i * 2; k < (i * 2) + 2 && k < 10; k++) {
        console.log(k, j);
    }
}