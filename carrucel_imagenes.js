//ALMACENA LA RUTA DE LAS IMAGNES
let imagenes =["imagenes/imagen-1.jpg", "imagenes/imagen-2.jpg", "imagenes/imagen-3.png"];

//INDICES ARRAY:   0
// CAPTURA LA RUTA DE LAS IMAGNES DE HTML {SIGUIENTE} Y ANTERIOR
let btnAnterior = document.getElementById("btnAnterior"); // CAPTURA EL BOTON {ANTERIOR} DEL DOM
let btnSiguiente = document.getElementById("btnSiguiente"); // CAPTURA EL BOTON {SIGIENTE} DEL DOM

//CONTADOR QUE RASTREA EL INDICE DE LA IMAGEN "INICIA EN CERO"
let posicion = 0;

// LEE EL EVENTO PARA EL BOTON {SIGUIENTE} AL HACER CLICK
btnSiguiente.addEventListener("click", function(){ // ESCUCHA EL EVENTO CLICK EN EL BOTON SIGUIENTE
    let slider = document.getElementById("slider"); //CAPTURA LA ETIQUETA DEL HTML
    posicion++;  // INCREMENTA DE 1 LA POSICION PARA AVANZAR
    if(posicion >= imagenes.length){ //VALIDA SI LA POSICION EXEDE EN TAMAÑO DEL ARREGLÑO
        posicion = 0; // primera posicion del index del array
    }
    slider.src = imagenes[posicion]; // ASIGNA LA RUTA DE LA IMAGEN COORESPONDIMNETE ALA PROPIEDAD "SRC"
});

// LEE EL EVENTO PARA EL BOTON ANTERIOR AL HACER CLICK
btnAnterior.addEventListener("click", function(){ // ESCUCHA EL EVENTO AL HACER CLICK {ANTERIOR}
    let slider = document.getElementById("slider"); //CAPTURA LA ETIQUEDA DEL AHTML
    posicion--; //-1 //inicia -1 
    if(posicion <0){ //COMPRUEBA SI LA POSICION ES MENOR QUE CERO
    posicion = imagenes.length-1; // ultima posicion de index del array
    }
    slider.src = imagenes[posicion]; // ASIGNA LA RUTA DE LA IMAGEN COORESPONDIMNETE ALA PROPIEDAD "SRC"
});