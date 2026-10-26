//DOCUMENT OBJET MODEL (DOM)
//    selecionar los elemetos
//selecionar un elemento con su id

let tituloHeader = document.getElementById("tituloHeader");
console.log(tituloHeader);
console.log(typeof tituloHeader);

//seleccionar elementos por su etiqueta

let parrafos = document.getElementsByClassName("p");
console.log(parrafos);
console.log(typeof parrafos);

//seleccionar un elemeto por su clase

let descripcionParrafos = document.getElementsByClassName("descripcion");
console.log(descripcionParrafos);
console,log(typeof parrafos);

//seleccionar un elemento por su selector css
//selector el primer elemento que cumpla con el selector

let parrafoSelector = document.querySelector("descripcion");
let tutuloSENA = document.querySelector("#tituloSENA");

console.log(parrafoSelector);
console.log(tituloSENA);
console.log(typeof parrafoSelector);

// seleccionar un elemento con el queryselectorALL

let allParrafos = document.querySelectorAll("descripcion");
console.log(allParrafos);

//        modificar los atributos de los elementos de dom

// CAMBIAR EL TITULO DEL ELEMENTO

let subtituloSENA = document.getElementById("subtituloSENA");
tituloSENA.textContent ="ADSO";


//CAMBIA EL ESTILO A UN ELEMENTO


tituloHeader.style.color = "red" ;
tituloHeader.style.fontSize ="50";
tituloHeader.style.color = "helvetica";

parrafos[2].style.color = "purple";

// AGREGAR UNA CALSE A CSS A UN HTML MEDIANTE JAVASCRIPT

let contactanos = document.getElementById("contactanos");
contactanos.classList.add("destacados");

// CAMBIAR EL ATRIBUTO SRC DE UNA IMAGEN
let logoSENA = document.getElementById(myimag);
logoSENA = "logosenaVerde.png";

//CAMBIAR LA PROPIEDAD HREF DE UN ENLASE DESDE EL JAVASCRIPT

let mylink = document.getElementById("mylink");
mylink.href ="https://betowa.sena.edu.co/";

//CREAR UN ELEMNTO DE LALISTA Y AGREGARLO EN EL DOM

let lista = document.getElementById("lista"); //capturar el elemento padre

let nuevoElementoLi = document.createElement("li"); // crear elemento hijo
nuevoElementoLi.innerText = "javascript";

lista.appendChild(nuevoElementoLi); //agregregue elemnto hijo al padre

//INSERTAR NUEVAS ETIQUETAS HTMLCON JAVASCRIPT

let nuevoDIV = document.createElement("div");
nuevoDIV.innerHTML = `
    <h1> nuevo titulo desde el javascript</h1>
    <p>nuevo parrafo desde el java script</p>
    <img src="logoSenaNaranja.png"></img>
`;
    


console.log(nuevoDIV);

// eliminar eslemnto del html
let divpadre = document.getElementById("divpadre");
let titulohijo = document.getElementById("titulopadre");

divpadre.removeChild(titulohijo);

//REMPLAZAR ELEMNTO HTML


let nuevoTitulo = document.createElement("h1");
nuevoTitulo.innerHTML = "este es un titulo nuevo que remplaza al viejo";

let tituloHijo2 = document.getElementById("tituloHijo2");
divpadre.removeChild(nuevoTitulo, tituloHijo2);