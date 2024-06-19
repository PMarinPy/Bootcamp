/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: pide horas, minutos y segundos como datos de entrada y muestra en
pantalla el número de milisegundos.*/
const prompt = require('prompt-sync')()

let horas = parseInt(prompt('Por favor digite el numero de horas,minutos y segundos que\ndesea convertir a milisegundos\n\nDigite las horas: '))
let minutos = parseInt(prompt('Digite los minutos: '))
let segundos = parseInt(prompt('Digite los segundos: '))
let resultado = (horas * 3600 * 1000) + (minutos * 60 * 1000) + (segundos * 1000) 
// se multiplica la hora por 3600 segundos y 1000 milsec, los minutos por 60 sec 1000 milisec y se suma esto a los segundos *1000 milisec
console.log(`La cantidad de milisegundos por ${horas} hora , ${minutos} y ${segundos} es de ${resultado}`)
// vrg Salvedad. El dato no se imprime separado por puntos como en la imagen de referencia.