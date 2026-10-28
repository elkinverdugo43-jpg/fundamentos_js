function validarContrasena(){
    let contra1 = document.getElementById("contra1");
     let contra2 = document.getElementById("contra2");

     if(contra1.value != "" && contra2.value != ""){
        if(contra1.value == contra2.value){
        alert("Registro Exitoso")
        return true;
     }else {
        alert("las Contarseña no Coniciden");
        return false;
     }
    }else {
        alert("Los Campos de Contraseña Estan Vacios");
        return false;
    }
}