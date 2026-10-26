//OBJETOS EN JAVASCRIPT - JSON

//DECLARAR UN OBJETO

let aprendiz=  {
    nombre: "Elkin",
    apellido: "Verdugo",
    correo: "elkinverdugo43@gmail.com",
    programa : {
        nombrePrograma: "ADSO",
        duracionPrograma: 21,
        codigoPrograma: 32331,
        ficha: "3233140"
    },
    saludar: function(){
        console.log("hola mundo!!");
}
};
console.log(aprendiz);
console.log(aprendiz.nombre);
console.log(aprendiz.programa.ficha);

//aceder alos metodos del objeto

aprendiz.saludar();

// modificar las propiedades de un objeto

aprendiz.correo = "andres.sandoval@gmail.com";

console.log(aprendiz.correo);

//agregar una nueva propiedad al objeto

aprendiz.telefono = "3114629956";
console.log(aprendiz);

aprendiz.dirreccion = "carrera 10 a #44-28";
aprendiz.activo = true;
console.log(aprendiz);

//eliminar una propiedad del objeto

delete aprendiz.telefono;
console.log(aprendiz);

// imprimir solo un valor
console.log("este es el nombre: " + aprendiz["nombre"]);

// ineraccion o rrecorrer  cada propiedad del elemento -for in
for (let propiedad in aprendiz){
    console.log(propiedad);
    console.log(aprendiz[propiedad]);
}


//CONSTRUCTORES DE FUNCIONES CON OBJETOS
 
//modelo de objetos costructor

function aprendiz(nombre, apellido, correo, programa){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.programa = programa;
    this.saludar = function (nombre){
        return console.log
    }
}

// INSTANCIAR EL MODELO
let aprendiz1 = new aprendiz ("Felipe", "sandoval", "afsandoval@sena.edu.com", "ADSO");
console.log("aprendiz1");
console.log(typeof aprendiz);

let aprendiz2 = new aprendiz ("Pepito", "Higera", "afsandoval@sena.com", "SST");
console.log("aprendiz2");
console.log(typeof aprendiz);
console.log(aprendiz2)