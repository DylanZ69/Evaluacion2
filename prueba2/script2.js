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
        let p = {
            nombre:vNombre,
            edad:vEdad
        }
        usuarios.push(p)
        console.log(usuarios)
        eNombre.value = ""
        edad.value = ""
        cargarDatos()
    }
}

function validarSoloLetras(elemento, valor, eError){
    const soloLetras = /^[a-zA-Z]+$/
    if(valor === "") {
        console.log("cuidado hay fallas")
        alert("El nombre no puede estar vacío")
        eError.innerText = "El nombre no puede estar vacío"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }
    if(soloLetras.test(valor)) {
        console.log("todo correcto")
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "black"
        return "exito"
    } else {
        console.log("cuidado hay fallas")
        alert("Solo se permite ingresar letras")
        eError.innerText = "Debes ingresar solo letras"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }
}

function validarEdad(elemento, valor, eError){
    if(valor <= 18 || valor > 100){
        alert("la edad ingresada debe ser mayor o igual a 18 y menor a 100")
        eError.innerText = "debes ingresar una edad mayor o igual a 18 y menor que 100 porfavor"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }else{
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        return "exito"
    }
}

function eliminar(indice){
    if(confirm("estas seguro de eliminar este usuario?")){
        usuarios = usuarios.filter((p,index)=>{
            if(index != indice){
                return p
            }
        })
        cargarDatos()
        console.log(usuarios)
    }
}

function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value

    let edad = document.getElementById("edad1")
    let vEdad = edad.value

    let botonActualizar = document.getElementById("botonActualizar")
    let indice = botonActualizar.value

    usuarios = usuarios.map((p,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                edad:vEdad
            }

        }else{
            return p
        }
    
    })
    cargarDatos()
    eNombre.value = ""
    edad.value = ""
    document.getElementById("formActualizar").hidden = true
}

function cargarDatos(){
    let mapUsuarios = usuarios.map((p,index)=>{
        return "<tr><td>"+p.nombre+
                "</td><td>"+p.edad+
                "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick= 'actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let tablaUsuarios = document.getElementById("cuerpoTabla")
    tablaUsuarios.innerHTML = mapUsuarios.join("")
    console.log(mapUsuarios)
    
}

function actualizarFormulario(indice){
    let formActulizar = document.getElementById("formActualizar")
    formActulizar.hidden = false
    let eNombre = document.getElementById("nombre1")
    let edad = document.getElementById("edad1")
    let usuario = usuarios.filter((p,index)=>{
        if(index == indice){
            return p
        }
    })
    console.log(usuario)
    eNombre.value = usuario[0].nombre
    edad.value = usuario[0].edad
    let botonActualizar = document.getElementById("botonActualizar")
    botonActualizar.value = indice
}