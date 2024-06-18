let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nombre = rl.question("Cúal es tu nombre? ", (nombre) => {
  console.log("¡Hola " + nombre + "!");
  rl.close(); 
  process.exit(); 
});