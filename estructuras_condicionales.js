// Estructuras Condicionales

// if

if(true){
    // bloque de codigo
}

//ejemplo if

let evidencia = 3.6;

if (evidencia >=3.5){
    console.log("el resultado es APROVADO")
}
else {
    console.log("el resultado NO fue APROVADO")
}

// IF - ELSE IF 

let edad = 26;

if (edad<=13){
    console.log("Eres un niño");
} else if(edad<=18){
    console.log("Eres un Adolecente");
} else if(edad<=60){
    console.log("Eres un Adulto");
}else{
    console.log("Eres un Adulto Mayor");
}
 // IF ANIDADO

let edadActual = 32;
let semanas_cotizadas = 500;
let genero = "Masculino";

if (genero == "Femenino") {
    if (edadActual >= 57) {
        if (semanas_cotizadas >= 1250) {
            console.log("Felicitaciones te Pencionaste");
        } else {
            console.log("lo siento no tienes las semnas suficientes para pensionarte");
        }
    } else {
        console.log("lo siento pero no tienes la edad suficiente para pensionarte ");
    }

} else if (genero == "Masculino"){
    if (edadActual >= 62) {
        if (semanas_cotizadas >= 1300) {
            console.log("Felicitaciones te Pencionaste");
        } else {
            console.log("lo siento no tienes las semnas suficientes para pensionarte");
        }
    } else {
        console.log("lo siento pero no tienes la edad suficiente para pensionarte ");
    }

} else {
    console.log("Lo siento no puedo calcular la pension para este parametro");
}

//condicional con operadores

// inicio de sesion - login

let correo = "sena@gmail.com";
let contraseña = "12345";

if (correo == "sena@gmail.com" && contraseña == "12345"){
    console.log("bienvenido al sitema");
}else{
    console.log("correo o contraseña incorrectas");
}

// condicional con operadores logicos OR

// ´proeceso de certificacion SENA

let etapa_electiva = true;
let etapa_practica = true;

if (etapa_electiva || etapa_practica){
    console.log("felicitaciones te certificamos")
}else {
    console.log("lo siento, no cumples con lkos requisitos de certificacion")
}

//OPERADOR TERNARIO 

let nota = 2.6;
let resultado = (nota >= 3.5)? "APROVO": "NO APROVO";
console.log(resultado);

// SWICH

switch (dia){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("dia no valido")
}

// reto de calculadora con menu manejado con swich

let numero_1 = Number (prompt("digita el numnero 1:"));
let numero_2 = Number (prompt("digita el numnero 2:"));
let opcion = Number (prompt("digita el numero de la opcion que corresponda 1. sumar 2. restar 3. multiplicar 4. dividir:"));

switch (opcion){

    case 1: // suma
    console.log('la suma entre $(numero_1) y $(numero_2) es igual a: $((numero_1 + numero_2))');
    break;

    case 2: //resta
    console.log('la resta entre $(numero_1) y $(numero_2) es igual a: $((numero_1 - numero_2))');
    break;

    case 3: // multiplicacion
    console.log('la multiplicacion entre $(numero_1) y $(numero_2) es igual a: $((numero_1 * numero_2))');
    break;

    case 4: //division
    console.log('la division entre $(numero_1) y $(numero_2) es igual a: $((numero_1 / numero_2))');
    break;

    }else{
        console.log

}

// actividad #4

const nota = Number (prompt("ingresa una nota ")){

}
// paso 3

if (nota >= 0 && 5){
    console.log("exelente");

if (nota<=4.5){
    console.log("bueno");

} else if(nota<=3.5){
    console.log("aceptable");
} else {
    console.log("debe reforzar");
}
}else{
    console.log("nota no valida")
}

const opcion = prompt ("menu n1/ ver horarn/2io"){
    
} 