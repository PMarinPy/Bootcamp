/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide horas y minutos como datos de entrada e imprime el total en minutos.*/
const prompt = require('prompt-sync')()

let horas = parseInt(prompt('Por favor digite la cantidad de horas: ')) //pide las horas
let minutos = parseInt(prompt('Por favor digite la cantidad de minutos: '))  //pide los minutos
let totalMinutos = (horas * 60) + minutos //suma los minutos con las horas converitdas a minutos
console.log(`${horas} y ${minutos} equivalen a ${totalMinutos} minutos.`)

