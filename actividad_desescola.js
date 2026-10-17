

let nota1 = Number(prompt("ingresa la nota 1"));
let nota2 = Number(prompt("ingresa la nota 2"));
let nota3 = Number(prompt("ingresa la nota 3"));

let promedio = ((nota1 + nota2 + nota3) /3).toFixed(1);

let aprobo = promedio >=3.0;

console.log('el aprendiz obtuvo un promedio de $(promedio). ¿aprobo? $(aprobo)');
