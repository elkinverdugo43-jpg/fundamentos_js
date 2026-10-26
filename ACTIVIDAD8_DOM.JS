// paso2 cambiar el titulo por nombre de la ficha

let titulo =document.getElementById("titulo");
titulo.textContent = "Ficha 3233140";

//paso3 cambiar el color del parrafo y su tamaño de fuete en style
let mensaje = document.getElementById("mensaje");
mensaje.style.color = "#432bb0";
mensaje.style.fontSize = "20px";
mensaje.style.fontWeight = "bold";

// paso4 crear una calse. destacado en un archivo css y aplicar 

titulo.classList.add("destacado");

// paso 5 Con un arreglo de cinco competencias, genera en la lista un <li> por cada una usando

let competencias = [
    "INGLES",
    "MATEMATICAS",
    "CASTELLANO",
    "ETICA",
    "INVESTIGACION"
];

let lista = document.getElementById("lista");

competencias.forEach(function(competencia) {
    let nuevoElementoLi = document.createElement("li");
    nuevoElementoLi.textContent = competencia;
    lista.appendChild(nuevoElementoLi);
});

