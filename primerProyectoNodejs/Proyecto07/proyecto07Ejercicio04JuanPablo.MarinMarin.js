/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Convierte kilomerotros a millas*/
const prompt = require('prompt-sync')();

const km = parseInt(prompt("Por favor digite cuantos Km/h quiere convertit a mph: "));
console.log(`${km} Km/h equivalen a ${0.621371*km} mph.`); //se hace la conversion y se muestra
