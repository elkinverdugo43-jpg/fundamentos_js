//ARREGLOS EN JAVASCRIPT

// DECLARACION DE ARRAYS ANTIGUAS
let programa1 = "ADSO";
let programa2 = "SST";
let programa3 = "TOPOGRAFIA";
let programa4 = "MINERIA"

let programas = new Array ("ADSO","SST","TOPOGRAFIA","MINERIA");
console.log(typeof programas);

//DECLARACION DE ARRAYS NUEVAS

let programaSENA = ["ADSO",22811, true];
console.log(programaSENA);
console.log(typeof programaSENA);

//ARREGLO LENGUAJES DE PROGRAMACION

let lenguajes =["HTML","CSS","JAVASCRIPT","PYTHON"];

// IMPRIMIR ELEMNTOS DE UN ARREGLO
console.log(lenguajes[2]); //JAVASCRIP
console.log(lenguajes[0]); //HTML
console.log(lenguajes[5]); //UNDEFINED

//AGREGAR ELEMENTOS A UN ARREGLO

lenguajes.push ("java");
console.log("lenguajes");

//MODFIFICAR ELEMENTOS DE UN ARREGLO

lenguajes[2] = "js";
console.log(lenguajes);

//ELIMINAR ELEMENTOS DE UN ARREGLO

lenguajes.pop();
console.log(lenguajes);

lenguajes.reverse();//invierte el orden elemntos de arreglo
console.log(lenguajes);



console.log(lenguajes.length);//cantidad de elementos


console.log(lenguajes.includes("PYTHON")); //true
console.log(lenguajes.includes("php"));//FALSE

// RECORRIDO CON CICLO FOR

for(let i=0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}

// RECORER UN ARREGLO CON UN FOR

for (let lenguaje of lenguajes) {
    console.log(lenguaje);
}

//RECORER UN ARREGLO EN FOR BACH

lenguajes.forEach(function(lenguajes){
    console.log(lenguajes);
});

// CONCATENAR DOS ARRAYS

let lenguajesFrontend = ["HTML","CSS","JAVASCRIPT"];
let lenguajesBakend = ["python","PHP","JAVA","C#"];

let lenguajesProgramacion = lenguajesFrontend.concat(lenguajesBakend);
console.log(lenguajesProgramacion);

