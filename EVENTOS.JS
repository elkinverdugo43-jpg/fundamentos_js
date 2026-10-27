//EVENTOS DE MOUSE
function saludar(){
    alert("holi");
}

boton3.onclick = function (){
    alert("hello !!")
}

boton3.onclick = function(event){
    console.log(event); //
    console.log(event.currentTarget); // HTML
    console.log(event.clientX); // CORDENADAS EJE X
    console.log(event.clientY); // CORDENADAS EJE Y
    console.log(event.type); //   TIPO: CLICK
}

//SELECCIONAR EL ELEMENTO BOTON DEL HTML

let boton4 = document.getElementById("boton4");

//USAR EL EVENHATDLER
boton4.addEventListener("dbclick", function(){
    alert("SENA");
});

boton4.addEventListener("click", function(){
    alert("ADSO");
});

//FECHA ACTUAL-----

let botonfecha = document.getElementById("botonfecha");
let fecha = document.getElementById("fecha");

botonfecha.addEventListener("click", function(){
    fecha.innerText = date();
});

// MOUSEOVER Y MOUSEOUT
let box = document.getElementById("box");
box.addEventListener("mouseover", function(){
    box.innerText = 'mouse encima';
    box.style.background = "red";
});

box.addEventListener("mouseout", function(){
    box.innerText = 'mouse encima';
    box.style.background = "blue";
});

//MOUSEMOVE

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(event){
    cursor.innerText = "cordenada X: " + event.clientX + "cordenada Y:" + event, clientY;
})

//EVENTOS DEL TECLADO

let tecla = document.getElementById("tecla");
let mostrarTecla = document.getElementById("mostrarTecla");

tecla.addEventListener("keydown", function(event){
    mostrarTecla.innerText = "TU precionaste la tecla: " + event.key;
});


//

function cargarPagina(){
    alert("se ha cargado la pagina completa !!");
}