/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Convierte grados centigrados a Fahrenheit*/

const fs = require("fs");
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function convertirGrados() {
    rl.question("Por favor digite los centígrados a convertir a Fahrenheit: ", (respuesta) => {
        let centigrados = parseFloat(respuesta);
        let fahrenheit = parseFloat((centigrados * 9/5) + 32); // se convierten los grados a fahrenheit
        console.log(`${centigrados}°C son ${fahrenheit} grados Fahrenheit`);
        rl.close();
    })}
convertirGrados();

