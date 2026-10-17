// CICLOS WHILE

/* let i= 0;
while (true){
    console.log("llenado memoria")
    break;
}*/

//IMPRIMIR NUMEROS CONSECUTIVOS

/*let i = 1
while (1<=10){
    console.log(i);
    i++;
}*/

// VALIDACION DE COTRASEÑA

/*let contraseña_servidor = "admin";
let contarseña_usuario = "sena123";

while(contarseña_usuario!== contraseña_servidor){
    console.log("clave incorrecta. intente de nuevo:");
}
console.log("bienvenido al sistema!");
break;
*/
//APP DE ENTRADA A UN BAR
 let edad = 16;

 while (edad<18){
    console.log("No puedes entrar al bar. Eres menor de edad.");
    edad++;
 }
console.log("¡Bienvenido al bar!");

//APP DE RIEGO DE PLANTAS
let cantidad_agua = 0;
while(cantidad_agua <10){
    console.log("Riego de plantascon" + cantidad_agua + "listros de agua.");
    cantidad_agua++;
}
console.log("¡Todas las plantas han sido regadas!");

//CICLO DO - WHILE

let numero = 11;

do {
    console.log(numero);
    numero++;
}while(numero <= 10); // SE EJECUTA ALMENOS UNA VEZ , AUQUE LA CONDICION SEA FALSA

// SENTENCIA BREAK: PERMITE SALIR DE UN BUCLE ANTES QUE TERMINE

for (let i= 1; i <= 10; i++) {
    if(i == 5){
        console.log("Se a alcasado el numero 5. Saliendo del bucle")
        break; //  SE SALE DEL BUCLE CUANDO I ES IGUAL A 5
    }
    console.log(i);
}

//APP DEL BAR CONM BREAK

let edad_cliente = 20;

for (let i=1; i<= 18; i++){
    if(edad_cliente < 18 ){
    console.log("No pueses entrar al bar. Eres menor de edad.");
    break;
}else{
        console.log("¡Bienvenido al bar!");
}
    }

//SENTENCIA CONTINUA: SALTA

for (let i=1; i<=10; i++){
    if (i === 8){
        continue;
    }
    console.log(i)
}

//ACTIVIDAD PRACTICA
let numero = 9;

console.log('tabla del ${numero}:');
for (let i=1; i<=10; i++){
    console.log('${numero} x ${i} = resultado');
}

let suma = 0;
let cantidad =0;

let nota = Number(prompt("ingrese una nota(escribe 0 para terminar):"));

while (nota !==0){
    suma =suma + nota;
    cantidad = cantidad +1;
    nota = Number(prompt("ingrese otra nota(escribe 0 para terminar):"))
}
console.log('la suma de las notas es ${suma}')

const fichas =["3070001","3070002","3070003","3070004","3070005"];

let contador = 1;
for(const ficha of ficha){
    console.log('${contador}. ficha ${ficha}');
    contador++;
}

console.log("---omitiendo la ficha---");
contador = 1;
for(const ficha of fichas){
    if (fichas ==="3233140"){
        continue;
    }
}
    console.log("")