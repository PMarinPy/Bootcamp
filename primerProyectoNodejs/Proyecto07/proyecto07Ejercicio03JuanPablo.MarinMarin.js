/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Calcula el perímetro de un rectángulo.*/
const prompt = require('prompt-sync')()
let lado1 = parseInt(prompt('Ingrese el largo del rectángulo: '))
let lado2 = parseInt(prompt('Ingrese el ancho del rectángulo: '))
console.log(`El perimetro de un rectangulo con largo ${lado1} y ancho ${lado2} es de ${(lado1*2)+(lado2*2)}.`)