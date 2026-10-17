// FUNCIONES 

//FUNCIONES SIMPLES

function saludar(){
    console.log("Hola mundo!")
}

//llamar la funcion

saludar();

//funcion con parametros
function saludopersonalizado (nombre, apellido){
    console.log(' Hola " $ {nombre} $ {apellido}'); 
}
saludopersonalizado("Elkin","Verdugo");
saludopersonalizado("Felipe","Sandoval");
saludopersonalizado("Miguel","Caseres");
saludopersonalizado("Dayanna","Bautista");

//FUNCIONES CON PÑARAMETROS POR DEFECTO

function bienvenidaSENA(){
    console.log('hola Aprendiz ${nombre} del programa ${programa} ')
}
bienvenidaSENA("felipe");
bienvenidaSENA("pepito","mineria");

// FUNCIONES CON PARAMETROS DESORDENADOS

function calcularEdad(nombre,anioNacimiento){
    let edad = 2026 - anioNacimiento;
    console.log('hola ${nombre}, tu edad es ${edad} años')
}

calcularEdad("Felipe",1994);
calcularEdad("Dayanna",2002);

// FUNTION RETURN

function calcularPromedio(nam1,nam2,nam3){
    let resultado = (nam1 + nam2 + nam3) / 3;
    return resultado;
}
let result = calcularPromedio(4,5,3);
console.log('El resultado del promedioes: $ {result}');



// calculadora

function sumar(num1, num2){
    return num1 + num2;
}
function restar(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 / num2;
}
console.log(sumar(2,7));
console.log(restar(4,5));
console.log(multiplicar(2,7));
console.log(dividir(4,5));

function calculadora(num1, num2, opcion){
    switch(opcion){
        case 1:
            return sumar(num1, num2);
        case 2:
            return restar(num1, num2);
        case 3:
            return multiplicar(num1, num2);
        case 4:
            return dividir(num1, num2);
        default:
            return "opcion no valida";
    }
}

console.log(calculadora(5,3,1));
console.log(calculadora(10,3,2));
console.log(calculadora(9,5,3));
console.log(calculadora(20,7,4));

// ACTIVIDAD EN CLASE PARA  FRUVER
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function aplicarDescuento(total, descuento) {
    return total - descuento;
}

function agregarDomicilio(total, costoEnvio) {
    return total + costoEnvio;
}

function calcularCambio(efectivoEntregado, totalCompra) {
    return efectivoEntregado - totalCompra;
}

console.log("Subtotal (Manzanas a $4500 el kilo x 2.5 kg):", calcularSubtotal(4500, 2.5));
console.log("Total con descuento de $2000:", aplicarDescuento(11250, 2000));
console.log("Total con domicilio ($5000):", agregarDomicilio(9250, 5000));
console.log("Cambio a entregar (Pagó con $20000):", calcularCambio(20000, 14250));


function sistemaFruver(valor1, valor2, opcion) {
    switch(opcion) {
        case 1:
            console.log("--- Operación: Calcular Subtotal ---");
            return calcularSubtotal(valor1, valor2);
        
        case 2:
            console.log("--- Operación: Aplicar Descuento ---");
            return aplicarDescuento(valor1, valor2);
        
        case 3:
            console.log("--- Operación: Agregar Domicilio ---");
            return agregarDomicilio(valor1, valor2);
        
        case 4:
            console.log("--- Operación: Calcular Cambio (Vueltas) ---");
            return calcularCambio(valor1, valor2);
        
        default:
            return "Opción de caja no válida. Intente de nuevo.";
    }
}

console.log(sistemaFruver(3000, 4, 1));   
console.log(sistemaFruver(12000, 1500, 2)); 
console.log(sistemaFruver(10500, 4000, 3)); 
console.log(sistemaFruver(50000, 34200, 4));
