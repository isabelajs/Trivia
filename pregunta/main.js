//obtengo las opciones de respuesta en un html colletion
let opciones = document.getElementsByClassName("opcion")

// recorro cada una de las opciones
for (const opcion of opciones) { 
    //al clickear una opcion se va a evaluar si es cierto
    opcion.addEventListener("click", function(){evaluar(opcion)});

}

function evaluar(opcion){
    //si el la opcion tiene la clase correcta se pinta de verde,sino de rojo
    if(opcion.classList.contains("correcta")) {
        opcion.style.background = "lightgreen";
    }
    else{
        opcion.style.background = "lightsalmon"
    }
}





