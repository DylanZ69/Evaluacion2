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

    let valiNombre = validarSoloLetras(eNombre, vNombre, errorNombre)
    let valiEdad = validarEdad(edad,vEdad,errorEdad)

    if (valiNombre == "exito" && valiEdad == "exito"){
        
    }
}

function validarSoloLetras(){
    if(eNombre = "1,2,3,4,5,6,7,8,9,0"){
        alert("el nombre solo debe contener letras")
        

    }


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
    usuarios = usuarios.filter((p,index)=>{
        if(index != indice)
        return p
    })
    cargarDatos()
}

function actualizar(){

}

function cargarDatos(){

}

function actualizarFormulario(){

}