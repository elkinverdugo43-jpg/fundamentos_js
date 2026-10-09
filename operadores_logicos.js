//operadores logicos

//operador and &&

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);// false
console.log(false && false);//true

let edad = 60;
let senamaCotizada = 100;

console.log(edad >=62 && senamaCotizada >= 1300);//true

//or (||) devuelve true si almenos uno de los operadores es verdadero

console.log(true && true);//true
console.log(true && false);//true
console.log(false && true);// true
console.log(false && false);//false

let calificacion = 90;
let inasistencias = 5;

console.log(calificacion >= 70 || inacistencias <= 3); //true

//not 

console.log(true);//false
console.log(false);//true