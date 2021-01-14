//Obtener el puntaje y guardarlo en la variable finalScore
let finalScore = localStorage.getItem("puntajeFinal");

//Obtener el espacio y agregar el puntaje

document.getElementById("final_score").innerHTML= "&nbsp" + finalScore + "&nbsp";

//Función para mostrar el respectivo mensaje 

if(finalScore>=600){
    //Si el resultado cumple la condición se muestra el mensaje 
    document.getElementById("positivo").classList.remove("hidden");
}
else{
    document.getElementById("regular").classList.remove("hidden");
}