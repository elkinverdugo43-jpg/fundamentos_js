//fruver

function calcularSubtotal(precio, cantidad){
    return precio * cantidad;
}
function aplicarDescuento(total,descuento){
    return total - descuento;
}
function costoEnvio (total, envio){
    return total + envio;
}
console.log("multiplicar(3.500, 5)");
console.log("restar(3.500, 20%)");
console.log("sumar(45.000, 4.500)");