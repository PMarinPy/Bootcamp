/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide 2 ángulos y calcula el tercero sabiendo que A1 + A2 + A3 = 180°*/
const prompt = require('prompt-sync')()
let angulo1 = parseFloat(prompt('Por favor digite el valor del primer ángulo: '))
let angulo2 = parseFloat(prompt('Por favor digite el valor del segundo ángulo: '))
let angulo3 = 180 - (angulo1 + angulo2) //resta a 180 la suma de los dos ángulos dando cómo resultado el tercero
console.log(`El valor del tercer ángulo con ángulos de ${angulo1} y ${angulo2} es: ${angulo3} grados`)
// vgr. Salvedad: Retorna valores lógicos si la suma del primer y segundo ángulo es menor a 180.
