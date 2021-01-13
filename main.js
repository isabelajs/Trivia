let button = document.getElementsByClassName("button")[0]

    button.addEventListener("click",guardarNombre);

function guardarNombre(){
    let name = document.getElementsByClassName("name")[0].value;
    let contedor = document.getElementsByClassName("contenedor-bienvenida")[0]
    contedor.style.display = "none" 
}