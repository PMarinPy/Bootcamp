/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide millas por hora y retorna metros por segundo m/s*/
const prompt = require('prompt-sync')()
let velocidad = prompt('Por favor digite la cantidad de mph que desea convertir a metros por m/s: ')
let conversion = velocidad * 1609.344 / 3600 //se convierten las horas a segundos y las millas a metros.
console.log(`{velocidad} equivalen a ${conversion} m/s`)
// vgr Salvedad. No se devuelven los datos estimados a la imagen de referencia