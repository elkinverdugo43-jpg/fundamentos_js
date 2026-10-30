// SELECCIONAR ELEMENTOS DEL DOM

const entrada = document.getElementById("entrada");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let total = 0;
let nombres = [];

// AGREGAR APRENDICES A LA LISTA

boton.addEventListener("click", function () {

    const nombre = entrada.value.trim();

    // VALIDAR CAMPO VACIO

    if (nombre === "") {
        alert("Escriba un nombre");
        return;
    }

    // EVITAR NOMBRES REPETIDOS

    if (nombres.includes(nombre.toLowerCase())) {
        alert("Este aprendiz ya está en la lista");
        return;
    }

    nombres.push(nombre.toLowerCase());

    // CREAR ELEMENTO DE LA LISTA

    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = nombre;

    // TACHAR NOMBRE AL HACER CLIC

    texto.addEventListener("click", function () {
        li.classList.toggle("tachado");
    });

    // CREAR BOTON ELIMINAR

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";

    eliminar.addEventListener("click", function () {

        const posicion = nombres.indexOf(nombre.toLowerCase());

        if (posicion !== -1) {
            nombres.splice(posicion, 1);
        }

        li.remove();

        total--;
        contador.textContent = "Aprendices: " + total;
    });

    // AGREGAR ELEMENTOS A LA LISTA

    li.appendChild(texto);
    li.appendChild(eliminar);
    lista.appendChild(li);

    // ACTUALIZAR CONTADOR

    total++;
    contador.textContent = "Aprendices: " + total;

    entrada.value = "";
    entrada.focus();

});

// CONTAR CARACTERES EN TIEMPO REAL

const caracteres = document.getElementById("caracteres");

entrada.addEventListener("input", function () {

    caracteres.textContent = entrada.value.length + " caracteres";

});

// FILTRADO DINAMICO JAVASCRIPT

const filterinput = document.getElementById("filterInput");

filterinput.addEventListener("keyup", function () {

    const term = filterinput.value.toLowerCase();

    const items = lista.querySelectorAll("li");

    items.forEach(function (item) {

        const nombre = item.querySelector("span").textContent.toLowerCase();

        if (nombre.includes(term)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});