//selecionar elementos del dom


const entrada = document.getElementById("entrada");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
let total =0;

boton.addEventListener("click",  function(){
    const nombre = entrada.value.trim();
})

if(nombre === ""){
    alert("Escriba un nombre");
    return;
}

const li = document.createElement("li");
li.textContent = nombre;
lista.appendChild(li);


total++;
contador.textContent = "Aprendices: " + total;
entrada.value = "";
entrada.focus();

//FILTRADO DINAMICO JAVASCRIPT

let filterinput = document.getElementById("filterinput");
let listafiltrada = document.getElementById("lista");

filterinput.addEventListener("keyup"), function(){
    let term = filterinput.value.tolowerCase(); //convertit el texto en minusculas

    let items = listafiltrada.getAttributeNames("li"); // capture todos lo <li>

    Array.from(items).forEach(function(item){
        if(item.textContent.tolowerCase().indexOF(term) !== -1){
            item.style.display = "block";
        }else {
            item.style.display = "none";
        }
    }) 
});