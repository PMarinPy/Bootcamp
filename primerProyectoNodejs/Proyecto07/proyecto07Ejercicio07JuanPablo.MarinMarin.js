/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide el nombre, apellido y año de nacimiento y luego los imprima juntos.*/
const prompt = require('prompt-sync')()

let nombre = prompt("Por favor digite su nombre: ")
let apellido = prompt("Por favor digite su apellido: ")
let añoNacimiento = prompt("Por favor digite su año de nacimiento: ")
console.log(`${nombre} ${apellido} ${añoNacimiento}`) //concatena los elementos pedidos.
