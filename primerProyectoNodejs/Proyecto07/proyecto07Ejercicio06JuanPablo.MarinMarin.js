/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide número de minutos como datos de entrada e imprime en pantalla el total de horas y minutos..*/
const prompt = require('prompt-sync')()

let minutos = parseInt(prompt('Por favor digite la cantidad de minutos: ')) 
let horas = Math.floor(minutos / 60) //Las horas son el entero menor de minutos / 60
let minutosRestantes = minutos % 60 //Los restantes son el módulo entre minutos y 60
console.log(`${minutos} minutos equivalen a ${horas} horas y ${minutosRestantes} minutos`)


