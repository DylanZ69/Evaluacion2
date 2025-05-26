//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let usuarios = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value 
    let errorNombre = document.getElementById("errorNombre")

    let edad = document.getElementById("edad")
    let vEdad = edad.value
    let errorEdad = document.getElementById("errorEdad")

    let validarNombre = validarSoloLetras(eNombre, vNombre, errorNombre)
    let validarEdad = validarEdad(edad,vEdad,errorEdad)
}

function validarSoloLetras(){

}

function validarEdad(elemento, valor, eError){
    if(valor <= 18 || valor > 100){
        alert("la edad ingresada debe ser mayor o igual a 18 y menor a 100")
        
        return "falla"
    }else{
        return "exito"
    }
}

function eliminar(indice){
    
}

function actualizar(){

}

function cargarDatos(){

}

function actualizarFormulario(){

}