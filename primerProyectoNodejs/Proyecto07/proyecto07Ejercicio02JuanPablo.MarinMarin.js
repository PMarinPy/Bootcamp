/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Juan Pablo Marín Marín.
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Calcula el volumen de una esfera*/

const fs = require("fs");
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function calcularEsfera() {
    rl.question("Por favor digite el radio de la esfera: ", (radio) => {
        let radioEsfera = parseFloat(radio);
        let volumenEsfera = (4 / 3) * 3.1415926 * radioEsfera**3 //se multiplica pi por el radio al cubo Y 4/3
        console.log(`El volumen de la esfera es: ${volumenEsfera}`)
        rl.close();
    })}
calcularEsfera();
